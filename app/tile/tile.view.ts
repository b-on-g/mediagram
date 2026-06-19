namespace $.$$ {

	export class $bog_mediagram_app_tile extends $.$bog_mediagram_app_tile {

		/** Entry pawn for this tile. Do NOT @$mol_mem. */
		entry() {
			const link = this.entry_link()
			if( !link ) return null
			return this.$.$giper_baza_glob.Pawn(
				new $giper_baza_link( link ),
				$bog_mediagram_entry,
			)
		}

		/** Media pawn referenced from entry. Do NOT @$mol_mem. */
		media() {
			const entry = this.entry()
			const media_link = entry?.Media()?.val()
			if( !media_link ) return null
			return this.$.$giper_baza_glob.Pawn(
				media_link,
				$bog_mediagram_media,
			)
		}

		@ $mol_mem
		tile_title(): string {
			return this.media()?.Title()?.val() ?? ''
		}

		@ $mol_mem
		tile_year(): string {
			const y = this.media()?.Year()?.val()
			return y == null ? '' : String( y )
		}

		@ $mol_mem
		tile_kind(): string {
			return this.media()?.Kind()?.val() ?? ''
		}

		@ $mol_mem
		tile_kind_label(): string {
			return ( this.kind_dict() as Record< string, string > )[ this.tile_kind() ] ?? ''
		}

		@ $mol_mem
		tile_status_label(): string {
			const s = this.entry()?.Status()?.val() ?? ''
			return ( this.status_dict() as Record< string, string > )[ s ] ?? ''
		}

		@ $mol_mem
		tile_status_class(): string {
			return this.entry()?.Status()?.val() ?? ''
		}

		@ $mol_mem
		tile_favorite(): boolean {
			return this.entry()?.Favorite()?.val() ?? false
		}

		@ $mol_mem
		tile_fav_label(): string {
			return this.tile_favorite() ? '★' : ''
		}

		@ $mol_mem
		tile_rating(): number | null {
			const r = this.entry()?.Rating()?.val()
			return r == null ? null : Number( r )
		}

		@ $mol_mem
		tile_rate_text(): string {
			const r = this.tile_rating()
			return r == null ? '' : String( r )
		}

		@ $mol_mem
		tile_initials(): string {
			const t = this.tile_title()
			return t ? t.slice( 0, 2 ).toUpperCase() : ''
		}

		@ $mol_mem
		tile_color(): string {
			return ''
		}

		@ $mol_mem
		tile_poster_bg(): string {
			return ''
		}

	}

}
