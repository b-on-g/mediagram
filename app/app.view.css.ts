namespace $ {

	$mol_style_define( $bog_mediagram_app, {

		flex: { direction: 'column' },
		minHeight: '100%',
		background: { color: $bog_builderui_tokens.back },
		color: $bog_builderui_tokens.text,
		font: { family: $bog_builderui_tokens.font_body },

		Top: {
			flex: { direction: 'row', wrap: 'wrap', shrink: 0 },
			gap: $mol_gap.text,
			align: { items: 'center' },
			padding: {
				top: $mol_gap.block,
				right: $mol_gap.block,
				bottom: $mol_gap.block,
				left: $mol_gap.block,
			},
			border: { bottom: { width: '1px', style: 'solid', color: $bog_builderui_tokens.line } },
			background: { color: $bog_builderui_tokens.card },
			position: 'sticky',
			top: 0,
			zIndex: 5,
		},

		Brand: {
			flex: { direction: 'row', shrink: 0 },
			align: { items: 'center' },
			gap: $mol_gap.text,
			font: {
				family: $bog_builderui_tokens.font_head,
				weight: 600,
				size: '16px',
			},
		},

		Brand_mark: {
			width: '24px',
			height: '24px',
			color: $bog_builderui_tokens.control,
		},

		Search: {
			flex: { grow: 1, basis: '200px' },
			minWidth: '160px',
		},

		Body: {
			flex: { grow: 1 },
		},

		Page: {
			flex: { direction: 'column', grow: 1 },
			padding: { bottom: '72px' },
			width: '100%',
		},

		Library_filters: {
			flex: { direction: 'column', shrink: 0 },
			gap: $mol_gap.text,
			padding: {
				top: $mol_gap.text,
				right: $mol_gap.block,
				bottom: $mol_gap.text,
				left: $mol_gap.block,
			},
			border: { bottom: { width: '1px', style: 'solid', color: $bog_builderui_tokens.line } },
		},

		Types: {
			flex: { direction: 'row', wrap: 'wrap' },
			gap: $mol_gap.text,
		},

		Status_row: {
			flex: { direction: 'row', wrap: 'wrap' },
			align: { items: 'center' },
			gap: $mol_gap.block,
		},

		Count: {
			marginLeft: 'auto',
			color: $bog_builderui_tokens.shade,
			font: { size: '12px' },
		},

		Library_banner: {
			margin: { top: $mol_gap.text, right: $mol_gap.block, left: $mol_gap.block },
			flex: { shrink: 0 },
		},

		Library_grid: {
			display: 'grid',
			padding: {
				top: $mol_gap.block,
				right: $mol_gap.block,
				bottom: $mol_gap.block,
				left: $mol_gap.block,
			},
			gap: $mol_gap.block,
			gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
		},

		Feed_pane: {
			margin: { top: $mol_gap.block, right: $mol_gap.block, left: $mol_gap.block },
			flex: { direction: 'column' },
			gap: $mol_gap.text,
		},

		Circles_pane: {
			margin: { top: $mol_gap.block, right: $mol_gap.block, left: $mol_gap.block },
			flex: { direction: 'column' },
			gap: $mol_gap.text,
		},

		Circles_head: {
			flex: { direction: 'row', wrap: 'wrap' },
			align: { items: 'center' },
			gap: $mol_gap.text,
		},

		Circles_title: {
			font: {
				family: $bog_builderui_tokens.font_head,
				size: '18px',
				weight: 700,
			},
		},

		Circle_create_btn: {
			marginLeft: 'auto',
		},

		Circles_text: {
			color: $bog_builderui_tokens.shade,
		},

		Circles_list: {
			display: 'grid',
			gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))',
			gap: $mol_gap.text,
		},

		Circle_detail_pane: {
			margin: { top: $mol_gap.block, right: $mol_gap.block, left: $mol_gap.block },
			flex: { direction: 'column' },
			gap: $mol_gap.text,
		},

		Circle_detail_head: {
			flex: { direction: 'row', wrap: 'wrap' },
			align: { items: 'center' },
			gap: $mol_gap.text,
		},

		Circle_detail_title: {
			font: {
				family: $bog_builderui_tokens.font_head,
				size: '18px',
				weight: 700,
			},
		},

		Circle_detail_description: {
			color: $bog_builderui_tokens.shade,
		},

		Circle_members_title: {
			font: {
				family: $bog_builderui_tokens.font_head,
				size: '16px',
				weight: 700,
			},
		},

		Circle_members_list: {
			display: 'grid',
			gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))',
			gap: $mol_gap.text,
		},

		Circle_name_field: {
			width: '100%',
		},

		Circle_type_field: {
			width: '100%',
		},

		Circle_description_field: {
			width: '100%',
		},

		Me_pane: {
			margin: { top: $mol_gap.block, right: $mol_gap.block, left: $mol_gap.block },
			flex: { direction: 'column' },
			gap: $mol_gap.text,
		},

		Nav: {
			position: 'sticky',
			bottom: 0,
			zIndex: 6,
			flex: { shrink: 0 },
		},

		Recognized: {
			margin: { top: $mol_gap.block, right: $mol_gap.block, left: $mol_gap.block },
			flex: { direction: 'column', shrink: 0 },
			gap: $mol_gap.text,
		},

		Recognized_head: {
			flex: { direction: 'row', wrap: 'wrap' },
			align: { items: 'center' },
			gap: $mol_gap.text,
		},

		Recognized_badge: {
			font: { size: '11px', weight: 600 },
			textTransform: 'uppercase',
			letterSpacing: '0.4px',
			color: $bog_builderui_tokens.control,
		},

		Recognized_host: {
			font: {
				family: 'ui-monospace, "SF Mono", Menlo, monospace',
				size: '11px',
			},
			color: $bog_builderui_tokens.shade,
		},

		Recognized_title: {
			font: {
				family: $bog_builderui_tokens.font_head,
				size: '18px',
				weight: 700,
			},
		},

		Recognized_meta: {
			font: { size: '13px' },
			color: $bog_builderui_tokens.shade,
		},

		Recognized_actions: {
			flex: { direction: 'row', wrap: 'wrap' },
			gap: $mol_gap.text,
			align: { items: 'center' },
		},

	} )

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
