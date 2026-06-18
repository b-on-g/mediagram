namespace $.$$ {

	type Kind = 'movie' | 'series' | 'book' | 'anime' | 'youtube'
	type Status = 'want_to' | 'doing' | 'done' | 'dropped'

	type Entry = {
		id: string
		title: string
		year: string
		kind: Kind
		status: Status
		rating: number | null
		favorite: boolean
		cover: string
	}

	const KIND_LABEL: Record<Kind, string> = {
		movie: 'фильм',
		series: 'сериал',
		book: 'книга',
		anime: 'аниме',
		youtube: 'YouTube',
	}

	const KIND_COLOR: Record<Kind, string> = {
		movie: '#e50914',
		series: '#ffffff',
		book: '#111111',
		anime: '#e50914',
		youtube: '#ff0000',
	}

	const STATUS_VERB: Record<Status, (k: Kind) => string> = {
		want_to: () => 'хочу',
		doing: k => k === 'book' ? 'читаю' : 'смотрю',
		done: k => k === 'book' ? 'прочитал' : 'готово',
		dropped: () => 'бросил',
	}

	const FIXTURE: Entry[] = [
		{ id: '1', title: 'Frieren', year: '2023', kind: 'anime', status: 'doing', rating: null, favorite: true, cover: 'https://image.tmdb.org/t/p/w500/dqZENchTd7lp5zht7BdlqM7RBhD.jpg' },
		{ id: '2', title: 'Dune: Part Two', year: '2024', kind: 'movie', status: 'done', rating: 9, favorite: true, cover: 'https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg' },
		{ id: '3', title: 'Kurzgesagt: Black Holes', year: '2024', kind: 'youtube', status: 'doing', rating: 10, favorite: true, cover: 'https://i.ytimg.com/vi/QqsLTNkzvaY/hq720.jpg' },
		{ id: '4', title: 'Дюна', year: '1965', kind: 'book', status: 'doing', rating: 8, favorite: false, cover: 'https://covers.openlibrary.org/b/isbn/9780441172719-L.jpg' },
		{ id: '5', title: 'Severance', year: '2022', kind: 'series', status: 'done', rating: 9, favorite: false, cover: 'https://image.tmdb.org/t/p/w500/pPHpeI2X1qEd1CS1SeyrdhZ4qnT.jpg' },
		{ id: '6', title: 'Цветы для Элджернона', year: '1966', kind: 'book', status: 'want_to', rating: null, favorite: false, cover: 'https://covers.openlibrary.org/b/isbn/9780156030083-L.jpg' },
		{ id: '7', title: 'Blue Eye Samurai', year: '2023', kind: 'anime', status: 'done', rating: 8, favorite: false, cover: 'https://image.tmdb.org/t/p/w500/fXm3JT4WLQVnwukdvghtAblc1wc.jpg' },
		{ id: '8', title: 'Veritasium: The Most Misunderstood Concept', year: '2021', kind: 'youtube', status: 'want_to', rating: null, favorite: false, cover: 'https://i.ytimg.com/vi/pTn6Ewhb27k/hq720.jpg' },
		{ id: '9', title: 'Andor', year: '2022', kind: 'series', status: 'doing', rating: 9, favorite: true, cover: 'https://image.tmdb.org/t/p/w500/khZqmwHQicTYoS7Flreb9EddFZC.jpg' },
		{ id: '10', title: 'Оппенгеймер', year: '2023', kind: 'movie', status: 'done', rating: 8, favorite: false, cover: 'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg' },
		{ id: '11', title: 'Vinland Saga', year: '2019', kind: 'anime', status: 'dropped', rating: 6, favorite: false, cover: 'https://image.tmdb.org/t/p/w500/rK3FOkHBFQXqxEgTYZ9NqXSthYP.jpg' },
		{ id: '12', title: 'Атака титанов', year: '2013', kind: 'anime', status: 'done', rating: 9, favorite: true, cover: 'https://image.tmdb.org/t/p/w500/hTP1DtLGFamjfu8WqjnuQdP1n4i.jpg' },
		{ id: '13', title: '1984', year: '1949', kind: 'book', status: 'done', rating: 9, favorite: false, cover: 'https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg' },
		{ id: '14', title: 'Marques Brownlee: AI Hardware', year: '2024', kind: 'youtube', status: 'doing', rating: 10, favorite: true, cover: 'https://i.ytimg.com/vi/ddTV12hErTc/hq720.jpg' },
		{ id: '15', title: 'The Bear', year: '2022', kind: 'series', status: 'want_to', rating: null, favorite: false, cover: 'https://image.tmdb.org/t/p/w500/sHFlbKS3WLqMnp9t2ghADIJFnuQ.jpg' },
		{ id: '16', title: 'Поднятие уровня в одиночку', year: '2024', kind: 'anime', status: 'doing', rating: 7, favorite: false, cover: 'https://image.tmdb.org/t/p/w500/geCRueV3ElhRTr0xtJuEWJt6dJ1.jpg' },
		{ id: '17', title: 'Достучаться до небес', year: '1997', kind: 'movie', status: 'want_to', rating: null, favorite: false, cover: 'https://image.tmdb.org/t/p/w500/oY6E8n9s56pmY3z0NwJtYDR2h5b.jpg' },
		{ id: '18', title: 'TED-Ed: Time Travel', year: '2022', kind: 'youtube', status: 'done', rating: 10, favorite: true, cover: 'https://i.ytimg.com/vi/d3zTfXvYZ9s/hq720.jpg' },
	]

	const KIND_ORDER: ( Kind | 'all' )[] = [ 'all', 'movie', 'series', 'book', 'anime', 'youtube' ]
	const STATUS_ORDER: ( Status | 'all' )[] = [ 'all', 'want_to', 'doing', 'done', 'dropped' ]
	const STATUS_FLOW: Status[] = [ 'want_to', 'doing', 'done', 'dropped' ]

	function initials_of( title: string ) {
		return title.replace( /[«»"']/g, '' )
			.split( /\s+/ )
			.slice( 0, 2 )
			.map( w => w[ 0 ] || '' )
			.join( '' )
			.toUpperCase()
	}

	export class $bog_mediagram_app extends $.$bog_mediagram_app {

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

		@ $mol_mem
		theme( next?: string ) {
			return $mol_state_arg.value( 'theme', next ) ?? 'dark'
		}

		theme_label() {
			return this.theme() === 'light' ? 'тёмная' : 'светлая'
		}

		@ $mol_action
		theme_toggle( e?: Event ) {
			if( e ) e.preventDefault()
			this.theme( this.theme() === 'light' ? 'dark' : 'light' )
			return null
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

		@ $mol_mem
		entries_all() {
			return FIXTURE
		}

		@ $mol_mem
		entries_filtered() {
			const q = this.query().trim().toLowerCase()
			const s = this.status()
			const k = this.kind_filter()
			return this.entries_all().filter( e => {
				if( q && !e.title.toLowerCase().includes( q ) ) return false
				if( s !== 'all' && this.entry_status( e.id ) !== s ) return false
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
				chip.theme = () => this.theme()
				chip.click = ( e?: Event ) => {
					if( e ) e.preventDefault()
					this.kind_filter( k )
					return null
				}
				return chip
			} )
		}

		status_chips() {
			return STATUS_ORDER.map( s => {
				const chip = this.Chip( `status-${ s }` )
				chip.kind = () => String( s )
				chip.label = () => this.status_options()[ s ]
				chip.active = () => this.status() === s ? 'on' : 'off'
				chip.theme = () => this.theme()
				chip.click = ( e?: Event ) => {
					if( e ) e.preventDefault()
					this.status( s )
					return null
				}
				return chip
			} )
		}

		@ $mol_mem_key
		Chip( id: string ) {
			return new $bog_mediagram_app_chip()
		}

		entries() {
			return this.entries_filtered().map( e => this.Card( e.id ) )
		}

		@ $mol_mem_key
		Card( id: string ) {
			const card = new $bog_mediagram_app_card()
			card.title = () => this.entry( id ).title
			card.year = () => `год создания: ${ this.entry( id ).year }`
			card.kind = () => this.entry( id ).kind
			card.kind_label = () => KIND_LABEL[ this.entry( id ).kind ]
			card.status_class = () => this.entry_status( id )
			card.status_label = () => STATUS_VERB[ this.entry_status( id ) ]( this.entry( id ).kind )
			card.status_change = ( e?: Event ) => {
				if( e ) e.preventDefault()
				this.entry_status( id, this.status_next( this.entry_status( id ) ) )
				return null
			}
			card.favorite = () => this.entry( id ).favorite
			card.fav_label = () => this.entry( id ).favorite ? '❤' : ''
			card.rating = () => this.entry( id ).rating
			card.rate_text = () => this.entry( id ).rating !== null ? String( this.entry( id ).rating ) : ''
			card.initials = () => initials_of( this.entry( id ).title )
			card.color = () => KIND_COLOR[ this.entry( id ).kind ]
			card.theme = () => this.theme()
			card.poster_bg = () => {
				return `linear-gradient(180deg, #05050500 36%, #050505d9 100%), url("${ this.entry( id ).cover }")`
			}
			return card
		}

		@ $mol_mem_key
		entry_status( id: string, next?: Status ) {
			const key = `mediagram_status_${ id }`
			const value = $mol_state_local.value( key, next ) as Status | null
			return value ?? this.entry( id ).status
		}

		status_next( status: Status ) {
			const index = STATUS_FLOW.indexOf( status )
			return STATUS_FLOW[ ( index + 1 ) % STATUS_FLOW.length ]
		}

		entry( id: string ) {
			const found = this.entries_all().find( e => e.id === id )
			if( !found ) throw new Error( `entry ${ id } not found` )
			return found
		}

		add_click( e?: Event ) {
			if( e ) e.preventDefault()
			return null
		}

	}

	export class $bog_mediagram_app_chip extends $.$bog_mediagram_app_chip {}
	export class $bog_mediagram_app_card extends $.$bog_mediagram_app_card {}

}
