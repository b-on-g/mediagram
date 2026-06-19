namespace $.$$ {

	export class $bog_mediagram_app extends $.$bog_mediagram_app {

		@ $mol_mem
		override tab( next?: string ): string {
			return this.$.$mol_state_arg.value( 'tab', next ) ?? 'library'
		}

		@ $mol_mem
		override query( next?: string ): string {
			return this.$.$mol_state_arg.value( 'q', next ) ?? ''
		}

		@ $mol_mem
		override filter_kind( next?: string ): string {
			return this.$.$mol_state_arg.value( 'kind', next ) ?? 'all'
		}

		@ $mol_mem
		override filter_status( next?: string ): string {
			return this.$.$mol_state_arg.value( 'status', next ) ?? 'all'
		}

		/**
		 * Личная library в отдельной encrypted-land.
		 * Home-land (lord-auth) хранит только ссылку. Library-land grab'ится при первом запуске
		 * с preset `[[ null, rank_deny ]]` → encrypted=true, owner=rank_rule, мир=deny.
		 * Do NOT @$mol_mem (returns baza obj — потенциальный Circular subscription).
		 */
		library_data() {
			const home = this.$.$giper_baza_glob.home()
			if( !home ) return null
			const home_data = home.land().Data( $bog_mediagram_home )
			const link_field = home_data.Library( 'auto' )
			if( !link_field ) return null
			return link_field.ensure( [[ null, this.$.$giper_baza_rank_deny ]] )
		}

		/** Entry pawn by link. Do NOT @$mol_mem. */
		entry_at( link: string ) {
			return this.$.$giper_baza_glob.Pawn(
				new $giper_baza_link( link ),
				$bog_mediagram_entry,
			)
		}

		/** Media pawn for a given entry link. Do NOT @$mol_mem. */
		media_for_entry( link: string ) {
			const entry = this.entry_at( link )
			const media_link = entry.Media()?.val()
			if( !media_link ) return null
			return this.$.$giper_baza_glob.Pawn(
				media_link,
				$bog_mediagram_media,
			)
		}

		@ $mol_mem
		entry_links(): readonly string[] {
			const lib = this.library_data()
			if( !lib ) return []
			const list = lib.Entries()
			if( !list ) return []
			const items = list.items_vary() ?? []
			const result: string[] = []
			for( const v of items ) {
				if( v instanceof $giper_baza_link ) result.push( v.str )
			}
			return result
		}

		@ $mol_mem
		filtered_links(): readonly string[] {
			const q = this.query().toLowerCase().trim()
			const k = this.filter_kind()
			const s = this.filter_status()
			return this.entry_links().filter( link => {
				if( s !== 'all' ) {
					const status = this.entry_at( link ).Status()?.val()
					if( status !== s ) return false
				}
				const media = this.media_for_entry( link )
				if( k !== 'all' ) {
					const kind = media?.Kind()?.val()
					if( kind !== k ) return false
				}
				if( q ) {
					const title = ( media?.Title()?.val() ?? '' ).toLowerCase()
					if( !title.includes( q ) ) return false
				}
				return true
			} )
		}

		@ $mol_mem
		override library_rows() {
			return this.filtered_links().map( ( _, i ) => this.Tile( i ) )
		}

		@ $mol_mem_key
		override entry_link( i: number ): string {
			return this.filtered_links()[ i ] ?? ''
		}

		search_click() {
			return null
		}

	}

}
