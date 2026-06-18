namespace $.$$ {

	type Kind = 'movie' | 'series' | 'book' | 'anime'
	type Status = 'want_to' | 'doing' | 'done' | 'dropped'

	type Entry = {
		id: string
		title: string
		year: string
		kind: Kind
		status: Status
		rating: number | null
		favorite: boolean
	}

	const KIND_LABEL: Record<Kind, string> = {
		movie: 'фильм',
		series: 'сериал',
		book: 'книга',
		anime: 'аниме',
	}

	const KIND_COLOR: Record<Kind, string> = {
		movie: '#6f8ed4',
		series: '#57b0a6',
		book: '#cba65f',
		anime: '#c189bd',
	}

	const STATUS_VERB: Record<Status, (k: Kind) => string> = {
		want_to: () => 'хочу',
		doing: k => k === 'book' ? 'читаю' : 'смотрю',
		done: k => k === 'book' ? 'прочитал' : 'готово',
		dropped: () => 'бросил',
	}

	const KIND_ORDER: ( Kind | 'all' )[] = [ 'all', 'movie', 'series', 'book', 'anime' ]

	function source_key( host: string ) {
		return host.replace( /^www\./, '' ).split( '.' )[ 0 ]
	}

	function initials_of( title: string ) {
		return title.replace( /[«»"']/g, '' )
			.split( /\s+/ )
			.slice( 0, 2 )
			.map( w => w[ 0 ] || '' )
			.join( '' )
			.toUpperCase()
	}

	export class $bog_mediagram_app extends $.$bog_mediagram_app {

		static {
			const c = ( globalThis as any ).chrome
			if( c?.runtime?.onMessage ) {
				c.runtime.onMessage.addListener( ( msg: any ) => {
					if( msg?.type === 'mediagram_snapshot_changed' ) {
						try {
							const root = $bog_mediagram_app.Root( 0 )
							root.snapshot_tick( root.snapshot_tick() + 1 )
						} catch( e ) { /* root not mounted yet */ }
					}
					return false
				} )
			}
		}

		@ $mol_mem
		query( next?: string ) {
			return $mol_state_arg.value( 'q', next ) ?? ''
		}

		@ $mol_mem
		status( next?: string ) {
			return $mol_state_arg.value( 'status', next ) ?? 'all'
		}

		@ $mol_mem
		kind_filter( next?: string ) {
			return $mol_state_arg.value( 'kind', next ) ?? 'all'
		}

		status_options() {
			return {
				all: 'всё',
				want_to: 'хочу',
				doing: 'смотрю',
				done: 'готово',
				dropped: 'бросил',
			}
		}

		lights() {
			const mode = this.Theme().mode()
			if( mode === 'light' ) return 'light'
			if( mode === 'dark' ) return 'dark'
			return this.$.$mol_lights() ? 'light' : 'dark'
		}

		/** Home land библиотеки текущего юзера. Не мемоизируем — возвращает Pawn. */
		library_node() {
			return this.$.$giper_baza_glob.home().land().Data( this.$.$bog_mediagram_library )
		}

		/** Сырые entry-Pawn'ы из библиотеки. Не мемоизируем — возвращает Pawn[]. */
		entries_baza() {
			const list = this.library_node().Entries()
			if( !list ) return []
			return list.remote_list() as $bog_mediagram_entry[]
		}

		@ $mol_mem
		entries_all(): Entry[] {
			return this.entries_baza().map( e => {
				const media = e.Media()?.remote() as $bog_mediagram_media | null
				const year_bint = media?.Year()?.val()
				const rating_bint = e.Rating()?.val()
				return {
					id: e.link().str,
					title: media?.Title()?.val() ?? '(без названия)',
					year: year_bint != null ? String( year_bint ) : '',
					kind: ( media?.Kind()?.val() ?? 'movie' ) as Kind,
					status: ( e.Status()?.val() ?? 'want_to' ) as Status,
					rating: rating_bint != null ? Number( rating_bint ) : null,
					favorite: e.Favorite()?.val() ?? false,
				}
			} )
		}

		@ $mol_mem
		entries_filtered() {
			const q = this.query().trim().toLowerCase()
			const s = this.status()
			const k = this.kind_filter()
			return this.entries_all().filter( e => {
				if( q && !e.title.toLowerCase().includes( q ) ) return false
				if( s !== 'all' && e.status !== s ) return false
				if( k !== 'all' && e.kind !== k ) return false
				return true
			} )
		}

		count_label() {
			return `${ this.entries_filtered().length } записей`
		}

		banner_title() {
			return 'сегодня зафиксировано: 2'
		}

		banner_text() {
			return 'авто из плеера — undo в истории'
		}

		type_chips() {
			return KIND_ORDER.map( k => {
				const chip = this.Chip( k )
				chip.kind = () => k
				chip.label = () => k === 'all' ? 'всё' : KIND_LABEL[ k as Kind ]
				chip.active = () => this.kind_filter() === k ? 'on' : 'off'
				chip.click = ( e?: Event ) => {
					if( e ) e.preventDefault()
					this.kind_filter( k )
					return null
				}
				return chip
			} )
		}

		@ $mol_mem_key
		Chip( id: string ) {
			return new this.$.$bog_mediagram_app_chip()
		}

		entries() {
			return this.entries_filtered().map( e => this.Card( e.id ) )
		}

		@ $mol_mem_key
		Card( id: string ) {
			const card = new this.$.$bog_mediagram_app_card()
			card.title = () => this.entry( id ).title
			card.year = () => this.entry( id ).year
			card.kind = () => this.entry( id ).kind
			card.kind_label = () => KIND_LABEL[ this.entry( id ).kind ]
			card.status_class = () => this.entry( id ).status
			card.status_label = () => STATUS_VERB[ this.entry( id ).status ]( this.entry( id ).kind )
			card.favorite = () => this.entry( id ).favorite
			card.fav_label = () => this.entry( id ).favorite ? '❤' : ''
			card.rating = () => this.entry( id ).rating
			card.rate_text = () => this.entry( id ).rating !== null ? String( this.entry( id ).rating ) : ''
			card.initials = () => initials_of( this.entry( id ).title )
			card.color = () => KIND_COLOR[ this.entry( id ).kind ]
			card.poster_bg = () => {
				const c = KIND_COLOR[ this.entry( id ).kind ]
				return `linear-gradient(150deg, color-mix(in srgb, ${ c } 78%, #0a0b0e), color-mix(in srgb, ${ c } 34%, #0a0b0e))`
			}
			return card
		}

		entry( id: string ) {
			const found = this.entries_all().find( e => e.id === id )
			if( !found ) throw new Error( `entry ${ id } not found` )
			return found
		}

		@ $mol_mem
		tab( next?: string ) {
			return $mol_state_arg.value( 'tab', next ) ?? 'library'
		}

		body_content() {
			switch( this.tab() ) {
				case 'feed': return [ this.Feed_pane() ]
				case 'circles': return [ this.Circles_pane() ]
				case 'me': return [ this.Me_pane() ]
				default: {
					const items: any[] = []
					if( this.snapshot() ) items.push( this.Recognized() )
					items.push( this.Library_filters(), this.Library_banner(), this.Library_grid() )
					return items
				}
			}
		}

		top_content() {
			const items: any[] = [ this.Brand(), this.Search(), this.Theme_toggle() ]
			if( this.in_extension() ) items.push( this.Add_btn() )
			return items
		}

		add_click( e?: Event ) {
			if( e ) e.preventDefault()
			this.add_from_snapshot()
			return null
		}

		in_extension() {
			return Boolean( ( globalThis as any ).chrome?.runtime?.id )
		}

		@ $mol_mem
		snapshot_tick( next?: number ) {
			return next ?? 0
		}

		@ $mol_mem
		snapshot(): any {
			this.snapshot_tick()
			if( !this.in_extension() ) return null
			const c = ( globalThis as any ).chrome
			if( !c?.runtime?.sendMessage ) return null
			const reply = $mol_wire_sync( c.runtime ).sendMessage({ type: 'mediagram_whoami' })
			return reply?.payload ?? null
		}

		recognized_host() {
			return this.snapshot()?.host ?? ''
		}

		recognized_title() {
			return this.snapshot()?.entity?.title ?? ''
		}

		recognized_meta() {
			const snap = this.snapshot()
			if( !snap ) return ''
			const e = snap.entity
			const kind = e?.kind ? ( KIND_LABEL[ e.kind as Kind ] ?? e.kind ) : '—'
			const year = e?.year ? ` · ${ e.year }` : ''
			const pk = snap.page_kind === 'player' ? ' · идёт воспроизведение' : ''
			return `${ kind }${ year }${ pk }`
		}

		recognized_page_kind() {
			return this.snapshot()?.page_kind ?? 'info'
		}

		recognized_status_options() {
			return { want_to: 'хочу', doing: 'смотрю' }
		}

		@ $mol_mem
		recognized_status( next?: string ): string {
			if( next !== undefined ) return next
			return this.snapshot()?.page_kind === 'player' ? 'doing' : 'want_to'
		}

		recognized_add( e?: Event ) {
			if( e ) e.preventDefault()
			this.add_from_snapshot()
			return null
		}

		@ $mol_action
		add_from_snapshot() {
			const snap = this.snapshot()
			if( !snap?.entity?.title ) return null

			const lib = this.library_node()

			const media = lib.Medias( 'auto' )!.make( null )
			media.Title( 'auto' )!.val( snap.entity.title )
			if( snap.entity.kind ) media.Kind( 'auto' )!.val( snap.entity.kind )
			if( snap.entity.year ) {
				try { media.Year( 'auto' )!.val( BigInt( snap.entity.year ) ) }
				catch( _ ) { /* год не цифра — пропускаем */ }
			}
			media.AddedAt( 'auto' )!.val( new this.$.$mol_time_moment() )

			const sources = media.SourceIds( 'auto' )!
			sources.key( source_key( snap.host ), 'auto' )!.val( snap.source_url )

			const entry = lib.Entries( 'auto' )!.make( null )
			entry.Media( 'auto' )!.remote( media )
			entry.Status( 'auto' )!.val( this.recognized_status() )
			entry.Source( 'auto' )!.val( 'manual' )
			entry.StartedAt( 'auto' )!.val( new this.$.$mol_time_moment() )

			return null
		}

	}

}
