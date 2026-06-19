namespace $ {

	$mol_style_define( $bog_mediagram_app_circle_feed_item, {
		flex: { direction: 'column' },
		gap: $mol_gap.text,

		Feed_item_head: {
			flex: { direction: 'row', wrap: 'wrap' },
			align: { items: 'center' },
			gap: $mol_gap.text,
		},

		Feed_item_title: {
			font: {
				family: $bog_builderui_tokens.font_head,
				size: '16px',
				weight: 700,
			},
		},

		Feed_item_by: {
			color: $bog_builderui_tokens.control,
			font: { size: '13px', weight: 600 },
		},

		Feed_item_note: {
			color: $bog_builderui_tokens.shade,
			font: { size: '13px' },
		},
	} )

}
