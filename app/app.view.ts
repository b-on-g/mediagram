namespace $.$$ {

	type Kind = 'movie' | 'series' | 'book' | 'anime'
	type Status = 'want_to' | 'doing' | 'done' | 'dropped'
	type Circle_type = 'family' | 'friends' | 'couple'

	type Entry = {
		id: string
		title: string
		year: string
		kind: Kind
		status: Status
		rating: number | null
		favorite: boolean
	}

	type Circle = {
		id: string
		title: string
		type: Circle_type
		description: string
	}

	type Circle_member = {
		id: string
		name: string
		role: string
		watching: string
	}

	type Circle_feed_item = {
		id: string
		title: string
		by: string
		meta: string
		note: string
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

	const CIRCLE_TYPE_LABEL: Record<Circle_type, string> = {
		family: 'семья',
		friends: 'друзья',
		couple: 'пара',
	}

	const CIRCLE_MEMBERS: Record<Circle_type, Circle_member[]> = {
		family: [
			{ id: 'me', name: 'Я', role: 'смотрю', watching: 'Frieren: Beyond Journey’s End' },
			{ id: 'mom', name: 'Мама', role: 'смотрит', watching: 'The Crown' },
			{ id: 'dad', name: 'Папа', role: 'смотрит', watching: 'Dune: Part Two' },
		],
		friends: [
			{ id: 'me', name: 'Я', role: 'смотрю', watching: 'Jujutsu Kaisen' },
			{ id: 'anya', name: 'Аня', role: 'смотрит', watching: 'Blue Eye Samurai' },
			{ id: 'dima', name: 'Дима', role: 'смотрит', watching: 'Andor' },
			{ id: 'nika', name: 'Ника', role: 'смотрит', watching: 'The Bear' },
		],
		couple: [
			{ id: 'me', name: 'Я', role: 'смотрю', watching: 'Your Name' },
			{ id: 'partner', name: 'Партнёр', role: 'смотрит', watching: 'La La Land' },
		],
	}

	const CIRCLE_NOW_FEED: Record<Circle_type, Circle_feed_item[]> = {
		family: [
			{ id: 'frieren', title: 'Frieren: Beyond Journey’s End', by: 'Я смотрю', meta: 'аниме', note: '10 серия, можно обсудить после ужина' },
			{ id: 'crown', title: 'The Crown', by: 'Мама смотрит', meta: 'сериал', note: 'новый сезон, спокойный вечерний темп' },
			{ id: 'dune', title: 'Dune: Part Two', by: 'Папа смотрит', meta: 'фильм', note: 'пересматривает перед выходными' },
		],
		friends: [
			{ id: 'jujutsu', title: 'Jujutsu Kaisen', by: 'Я смотрю', meta: 'аниме', note: 'арка уже разогналась, спойлеры опасны' },
			{ id: 'blue-eye', title: 'Blue Eye Samurai', by: 'Аня смотрит', meta: 'аниме', note: 'советует всем из-за визуала' },
			{ id: 'andor', title: 'Andor', by: 'Дима смотрит', meta: 'сериал', note: 'говорит, что это лучший Star Wars без шума' },
			{ id: 'bear', title: 'The Bear', by: 'Ника смотрит', meta: 'сериал', note: 'короткие серии для буднего вечера' },
		],
		couple: [
			{ id: 'your-name', title: 'Your Name', by: 'Я смотрю', meta: 'аниме', note: 'красивый вариант на вечер' },
			{ id: 'la-la-land', title: 'La La Land', by: 'Партнёр смотрит', meta: 'фильм', note: 'оставили финал на потом' },
		],
	}

	const CIRCLE_SUGGEST_FEED: Record<Circle_type, Circle_feed_item[]> = {
		family: [
			{ id: 'paddington', title: 'Paddington 2', by: 'Мама предложила', meta: 'вместе позже', note: 'лёгкий фильм на воскресенье' },
			{ id: 'planet-earth', title: 'Planet Earth III', by: 'Папа предложил', meta: 'вместе позже', note: 'посмотреть одну серию всей семьёй' },
			{ id: 'totoro', title: 'My Neighbor Totoro', by: 'Я предложил', meta: 'вместе позже', note: 'уютный вариант без тяжёлого сюжета' },
		],
		friends: [
			{ id: 'oppenheimer', title: 'Oppenheimer', by: 'Дима предложил', meta: 'вместе позже', note: 'длинный вечер, нужен общий слот' },
			{ id: 'scott-pilgrim', title: 'Scott Pilgrim Takes Off', by: 'Аня предложила', meta: 'вместе позже', note: 'короткий сезон для марафона' },
			{ id: 'arcane', title: 'Arcane', by: 'Ника предложила', meta: 'вместе позже', note: 'пересмотреть перед новым обсуждением' },
		],
		couple: [
			{ id: 'before-sunrise', title: 'Before Sunrise', by: 'Партнёр предложил', meta: 'вместе позже', note: 'оставить на тихий вечер' },
			{ id: 'weathering', title: 'Weathering with You', by: 'Я предложил', meta: 'вместе позже', note: 'после Your Name будет в тему' },
		],
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

		circle_type_options() {
			return CIRCLE_TYPE_LABEL
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

		@ $mol_mem
		circle_dialog_showed( next?: boolean ) {
			return $mol_state_local.value( 'mediagram_circle_dialog_showed', next ) as boolean ?? false
		}

		@ $mol_mem
		circle_name( next?: string ) {
			return $mol_state_local.value( 'mediagram_circle_name', next ) as string ?? ''
		}

		@ $mol_mem
		circle_type( next?: Circle_type ) {
			return $mol_state_local.value( 'mediagram_circle_type', next ) as Circle_type ?? 'family'
		}

		@ $mol_mem
		circle_description( next?: string ) {
			return $mol_state_local.value( 'mediagram_circle_description', next ) as string ?? ''
		}

		@ $mol_mem
		circles( next?: Circle[] ) {
			return $mol_state_local.value( 'mediagram_circles', next ) as Circle[] ?? []
		}

		circle_create_open( e?: Event ) {
			if( e ) e.preventDefault()
			this.circle_dialog_showed( true )
			return null
		}

		circle_create_close( e?: Event ) {
			if( e ) e.preventDefault()
			this.circle_dialog_showed( false )
			return null
		}

		@ $mol_action
		circle_create_confirm( e?: Event ) {
			if( e ) e.preventDefault()
			const type = this.circle_type()
			const title = this.circle_name().trim() || CIRCLE_TYPE_LABEL[ type ]
			this.circles( [
				... this.circles(),
				{
					id: `${ Date.now() }`,
					title,
					type,
					description: this.circle_description().trim(),
				},
			] )
			this.circle_name( '' )
			this.circle_description( '' )
			this.circle_dialog_showed( false )
			return null
		}

		circle_rows() {
			return this.circles().map( circle => this.Circle( circle.id ) )
		}

		@ $mol_mem_key
		Circle( id: string ) {
			const circle = new $bog_mediagram_app_circle()
			circle.title = () => this.circle( id ).title
			circle.type_label = () => CIRCLE_TYPE_LABEL[ this.circle( id ).type ]
			circle.description = () => this.circle( id ).description || 'без описания'
			circle.open = ( e?: Event ) => this.circle_open( id, e )
			return circle
		}

		circle_open( id: string, e?: Event ) {
			if( e ) e.preventDefault()
			this.circle_current( id )
			this.tab( 'circle' )
			return null
		}

		circle_back( e?: Event ) {
			if( e ) e.preventDefault()
			this.circle_current( '' )
			this.tab( 'circles' )
			return null
		}

		@ $mol_mem
		circle_current( next?: string ) {
			return $mol_state_arg.value( 'circle', next ) ?? ''
		}

		circle( id: string ) {
			const found = this.circles().find( circle => circle.id === id )
			if( !found ) throw new Error( `circle ${ id } not found` )
			return found
		}

		circle_detail() {
			const id = this.circle_current()
			return this.circles().find( circle => circle.id === id ) ?? null
		}

		circle_detail_title() {
			return this.circle_detail()?.title ?? 'Круг'
		}

		circle_detail_type_label() {
			const type = this.circle_detail()?.type ?? 'friends'
			return CIRCLE_TYPE_LABEL[ type ]
		}

		circle_detail_description() {
			return this.circle_detail()?.description || 'без описания'
		}

		circle_members() {
			const type = this.circle_detail()?.type ?? 'friends'
			return CIRCLE_MEMBERS[ type ]
		}

		circle_member_rows() {
			return this.circle_members().map( member => this.Circle_member( member.id ) )
		}

		@ $mol_mem_key
		Circle_member( id: string ) {
			const member = new $bog_mediagram_app_circle_member()
			member.name = () => this.circle_member( id ).name
			member.role = () => this.circle_member( id ).role
			member.watching = () => this.circle_member( id ).watching
			return member
		}

		circle_member( id: string ) {
			const found = this.circle_members().find( member => member.id === id )
			if( !found ) throw new Error( `circle member ${ id } not found` )
			return found
		}

		circle_now_items() {
			const type = this.circle_detail()?.type ?? 'friends'
			return CIRCLE_NOW_FEED[ type ]
		}

		circle_suggest_items() {
			const type = this.circle_detail()?.type ?? 'friends'
			return CIRCLE_SUGGEST_FEED[ type ]
		}

		circle_now_rows() {
			return this.circle_now_items().map( item => this.Circle_now_item( item.id ) )
		}

		circle_suggest_rows() {
			return this.circle_suggest_items().map( item => this.Circle_suggest_item( item.id ) )
		}

		@ $mol_mem_key
		Circle_now_item( id: string ) {
			const item = new $bog_mediagram_app_circle_feed_item()
			item.title = () => this.circle_now_item( id ).title
			item.by = () => this.circle_now_item( id ).by
			item.meta = () => this.circle_now_item( id ).meta
			item.note = () => this.circle_now_item( id ).note
			return item
		}

		@ $mol_mem_key
		Circle_suggest_item( id: string ) {
			const item = new $bog_mediagram_app_circle_feed_item()
			item.title = () => this.circle_suggest_item( id ).title
			item.by = () => this.circle_suggest_item( id ).by
			item.meta = () => this.circle_suggest_item( id ).meta
			item.note = () => this.circle_suggest_item( id ).note
			return item
		}

		circle_now_item( id: string ) {
			const found = this.circle_now_items().find( item => item.id === id )
			if( !found ) throw new Error( `circle now item ${ id } not found` )
			return found
		}

		circle_suggest_item( id: string ) {
			const found = this.circle_suggest_items().find( item => item.id === id )
			if( !found ) throw new Error( `circle suggest item ${ id } not found` )
			return found
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
				case 'circle': return this.circle_detail() ? [ this.Circle_detail_pane() ] : [ this.Circles_pane() ]
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
			media.AddedAt( 'auto' )!.val( new $mol_time_moment() )

			const sources = media.SourceIds( 'auto' )!
			sources.key( source_key( snap.host ), 'auto' )!.val( snap.source_url )

			const entry = lib.Entries( 'auto' )!.make( null )
			entry.Media( 'auto' )!.remote( media )
			entry.Status( 'auto' )!.val( this.recognized_status() )
			entry.Source( 'auto' )!.val( 'manual' )
			entry.StartedAt( 'auto' )!.val( new $mol_time_moment() )

			return null
		}

	}

	export class $bog_mediagram_app_circle extends $.$bog_mediagram_app_circle {}
	export class $bog_mediagram_app_circle_member extends $.$bog_mediagram_app_circle_member {}
	export class $bog_mediagram_app_circle_feed_item extends $.$bog_mediagram_app_circle_feed_item {}

}
