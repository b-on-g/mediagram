namespace $ {

	$mol_style_define( $bog_mediagram_app_circle_member, {
		flex: { direction: 'column' },
		gap: $mol_gap.text,

		Member_head: {
			flex: { direction: 'row', wrap: 'wrap' },
			align: { items: 'center' },
			gap: $mol_gap.text,
		},

		Member_name: {
			font: {
				family: $bog_builderui_tokens.font_head,
				size: '16px',
				weight: 700,
			},
		},

		Member_watching: {
			color: $bog_builderui_tokens.shade,
			font: { size: '13px' },
		},
	} )

}
