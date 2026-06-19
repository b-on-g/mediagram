namespace $ {

	$mol_style_define( $bog_mediagram_app_circle, {
		flex: { direction: 'column' },
		gap: $mol_gap.text,
		cursor: 'pointer',

		Circle_row_type: {
			align: { self: 'flex-start' },
		},

		Circle_row_title: {
			font: {
				family: $bog_builderui_tokens.font_head,
				size: '16px',
				weight: 700,
			},
		},

		Circle_row_description: {
			color: $bog_builderui_tokens.shade,
			font: { size: '13px' },
		},
	} )

}
