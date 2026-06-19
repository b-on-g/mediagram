namespace $.$$ {

	export class $bog_mediagram_app extends $.$bog_mediagram_app {
		library_node() {
			return this.$.$giper_baza_glob.home().land().Data( this.$.$bog_mediagram_library )
		}
		
		entries_baza() {
			const list = this.library_node().Entries()
			if( !list ) return []
			return list.remote_list() 
		}

		body_content() {
			const tab = this.tab()
			switch( tab ) {
				case 'feed': return [ this.Feed_pane() ]
				case 'circles': return [ this.Circles_pane() ]
				case 'me': return [ this.Me_pane() ]
				default: {
					return [ this.Library_filters(), this.Library_banner(), this.Library_grid()]
				}
			}
		}
	}

}
