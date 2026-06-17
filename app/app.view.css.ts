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
			borderRadius: '7px',
			background: { color: $bog_builderui_tokens.control },
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

	$mol_style_define( $bog_mediagram_app_chip, {
		flex: { direction: 'row', shrink: 0 },
		align: { items: 'center' },
		gap: $mol_gap.text,
		cursor: 'pointer',

		Swatch: {
			width: '8px',
			height: '8px',
			borderRadius: '50%',
			background: { color: 'currentcolor' },
		},

		'@': {
			bog_mediagram_chip_active: {
				on: {
					background: { color: $bog_builderui_tokens.hover },
					color: $bog_builderui_tokens.text,
				},
			},
		},
	} )

	$mol_style_define( $bog_mediagram_app_card, {
		flex: { direction: 'column' },
		gap: $mol_gap.text,
		cursor: 'pointer',
		padding: { top: 0, right: 0, bottom: 0, left: 0 },
		background: { color: 'transparent' },
		border: { width: 0 },

		Poster: {
			position: 'relative',
			aspectRatio: '2 / 3',
			overflow: { x: 'hidden', y: 'hidden' },
			border: {
				width: '1px',
				style: 'solid',
				color: $bog_builderui_tokens.line,
				radius: $bog_builderui_tokens.radius,
			},
			display: 'grid',
			align: { items: 'center' },
			justify: { content: 'center' },
		},

		Init: {
			font: {
				family: 'ui-monospace, "SF Mono", Menlo, monospace',
				size: '30px',
				weight: 600,
			},
			color: '#ffffffd1',
			letterSpacing: '0.5px',
			textShadow: '0 1px 8px #00000059',
		},

		Kind_flag: {
			position: 'absolute',
			top: '8px',
			left: '8px',
			font: { size: '10px', weight: 600 },
			letterSpacing: '0.3px',
			textTransform: 'uppercase',
			padding: { top: '3px', right: '7px', bottom: '3px', left: '7px' },
			borderRadius: '6px',
			background: { color: '#08090c8c' },
			color: '#ffffff',
		},

		Fav_view: {
			position: 'absolute',
			top: '8px',
			right: '8px',
			font: { size: '13px' },
			color: '#ef5b6b',
		},

		Pill: {
			position: 'absolute',
			left: '8px',
			bottom: '8px',
		},

		Rate_view: {
			position: 'absolute',
			right: '8px',
			bottom: '8px',
			font: {
				family: 'ui-monospace, "SF Mono", Menlo, monospace',
				size: '12px',
				weight: 600,
			},
			color: '#ffffff',
			background: { color: '#08090c99' },
			padding: { top: '2px', right: '7px', bottom: '2px', left: '7px' },
			borderRadius: '7px',
		},

		Meta: {
			flex: { direction: 'column' },
			gap: '2px',
		},

		Title_view: {
			font: { size: '13px', weight: 600 },
			color: $bog_builderui_tokens.text,
			overflow: { x: 'hidden' },
			textOverflow: 'ellipsis',
			whiteSpace: 'nowrap',
		},

		Sub: {
			font: {
				family: 'ui-monospace, "SF Mono", Menlo, monospace',
				size: '11px',
			},
			color: $bog_builderui_tokens.shade,
		},
	} )

	$mol_style_define( $bog_mediagram_app_nav, {
		flex: { direction: 'row' },
		padding: {
			top: '6px',
			right: $mol_gap.text,
			bottom: '6px',
			left: $mol_gap.text,
		},
		gap: '4px',
		background: { color: $bog_builderui_tokens.card },
		border: { top: { width: '1px', style: 'solid', color: $bog_builderui_tokens.line } },
	} )

	$mol_style_define( $bog_mediagram_app_nav_item, {
		flex: { direction: 'column', grow: 1, basis: '0%' },
		align: { items: 'center' },
		justify: { content: 'center' },
		gap: '2px',
		padding: { top: '8px', right: $mol_gap.text, bottom: '8px', left: $mol_gap.text },
		minWidth: 0,
		minHeight: '56px',
		cursor: 'pointer',
		userSelect: 'none',
		border: { radius: $bog_builderui_tokens.radius },
		color: $bog_builderui_tokens.shade,
		background: { color: 'transparent' },
		transition: 'color 120ms ease, background-color 120ms ease',

		Icon: {
			width: '24px',
			height: '24px',
			color: 'inherit',
		},

		Label: {
			font: { size: '11px', weight: 500 },
			color: 'inherit',
			whiteSpace: 'nowrap',
		},

		':hover': {
			background: { color: $bog_builderui_tokens.hover },
			color: $bog_builderui_tokens.text,
		},

		'@': {
			bog_mediagram_nav_active: {
				on: {
					color: $bog_builderui_tokens.control,
				},
			},
		},
	} )

}
