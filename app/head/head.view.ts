namespace $.$$ {

	export class $bog_mediagram_app_head extends $.$bog_mediagram_app_head {

		@ $mol_mem
		override query( next?: string ): string {
			return this.$.$mol_state_arg.value( 'q', next ) ?? ''
		}

		@ $mol_mem
		override tab( next?: string ): string {
			return this.$.$mol_state_arg.value( 'tab', next ) ?? 'library'
		}

		override search() {
			return null
		}

	}

}
