namespace $ {

	$mol_style_define( $bog_mediagram_app_head, {

		flex: { direction: 'row', wrap: 'nowrap' },
		align: { items: 'center' },
		gap: $mol_gap.block,
		padding: { top: $mol_gap.block, right: $mol_gap.block, bottom: $mol_gap.block, left: $mol_gap.block },

		Logo: {
			flex: { shrink: 0 },
			minWidth: '32px',
			minHeight: '32px',
			color: $bog_builderui_tokens.current
		},

		Search_field: {
			flex: { grow: 1, shrink: 1 },
			minWidth: 0,
		},

		Search_btn: {
			flex: { shrink: 0 },
		},

	} )

}
