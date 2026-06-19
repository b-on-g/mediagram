namespace $ {

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

		Sub_year: {
			font: {
				family: 'ui-monospace, "SF Mono", Menlo, monospace',
				size: '11px',
			},
			color: $bog_builderui_tokens.shade,
		},
	} )

}
