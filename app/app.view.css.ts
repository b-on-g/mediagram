namespace $ {

	$mol_style_define( $bog_mediagram_app, {

		Body_inner: {
			flex: { direction: 'column', grow: 1 },
			width: '100%',
		},

		Library: {
			display: 'grid',
			gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
			gap: $mol_gap.block,
			padding: { top: 0, right: $mol_gap.block, bottom: $mol_gap.block, left: $mol_gap.block },
		},

	} )

}
