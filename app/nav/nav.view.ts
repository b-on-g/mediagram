namespace $.$$ {

	export class $bog_mediagram_app_nav extends $.$bog_mediagram_app_nav {

		library_active() { return this.tab() === 'library' ? 'on' : 'off' }
		feed_active()    { return this.tab() === 'feed'    ? 'on' : 'off' }
		circles_active() { return this.tab() === 'circles' ? 'on' : 'off' }
		me_active()      { return this.tab() === 'me'      ? 'on' : 'off' }

		library_click( e?: Event ) {
			if( e ) e.preventDefault()
			this.tab( 'library' )
			return null
		}
		feed_click( e?: Event ) {
			if( e ) e.preventDefault()
			this.tab( 'feed' )
			return null
		}
		circles_click( e?: Event ) {
			if( e ) e.preventDefault()
			console.log( '[mediagram] nav.circles_click — calling this.tab("circles")' )
			this.tab( 'circles' )
			console.log( '[mediagram] nav.circles_click — done' )
			return null
		}
		me_click( e?: Event ) {
			if( e ) e.preventDefault()
			this.tab( 'me' )
			return null
		}

	}

}
