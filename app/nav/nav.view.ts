namespace $.$$ {

	export class $bog_mediagram_app_nav extends $.$bog_mediagram_app_nav {

		library_active() { return this.tab() === 'library' ? 'on' : 'off' }
		feed_active()    { return this.tab() === 'feed'    ? 'on' : 'off' }
		circles_active() { return this.tab() === 'circles' ? 'on' : 'off' }
		me_active()      { return this.tab() === 'me'      ? 'on' : 'off' }

		@ $mol_action
		library_click( e?: Event ) {
			if( e ) e.preventDefault()
			this.tab( 'library' )
			return null
		}
		@ $mol_action
		feed_click( e?: Event ) {
			if( e ) e.preventDefault()
			this.tab( 'feed' )
			return null
		}
		@ $mol_action
		circles_click( e?: Event ) {
			if( e ) e.preventDefault()
			this.tab( 'circles' )
			return null
		}
		@ $mol_action
		me_click( e?: Event ) {
			if( e ) e.preventDefault()
			this.tab( 'me' )
			return null
		}

	}

}
