namespace $ {

	$mol_style_define( $bog_mediagram_app_card, {

		flex: { direction: 'column' },
		gap: $mol_gap.text,
		cursor: 'pointer',
		padding: { top: 0, right: 0, bottom: 0, left: 0 },
		background: { color: 'transparent' },
		border: { width: 0 },
		boxShadow: 'none',
		transition: 'transform .15s ease',

		':hover': {
			transform: 'translateY(-2px)',
		},

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
			background: { color: $bog_builderui_tokens.card },
			display: 'grid',
			align: { items: 'center' },
			justify: { content: 'center' },
			transition: 'border-color .15s ease',
		},

		Init: {
			font: {
				family: $bog_builderui_tokens.font_head,
				size: '32px',
				weight: 700,
			},
			color: $bog_builderui_tokens.shade,
			letterSpacing: '0.5px',
		},

		Kind_flag: {
			position: 'absolute',
			top: '8px',
			left: '8px',
			font: { size: '10px', weight: 600 },
			letterSpacing: '0.4px',
			textTransform: 'uppercase',
			padding: { top: '3px', right: '8px', bottom: '3px', left: '8px' },
			borderRadius: $bog_builderui_tokens.radius,
			background: { color: $bog_builderui_tokens.back },
			color: $bog_builderui_tokens.text,
			border: {
				width: '1px',
				style: 'solid',
				color: $bog_builderui_tokens.line,
			},
		},

		Fav_view: {
			position: 'absolute',
			top: '8px',
			right: '8px',
			font: { size: '14px' },
			color: $bog_builderui_tokens.current,
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
				family: $bog_builderui_tokens.font_head,
				size: '12px',
				weight: 700,
			},
			color: $bog_builderui_tokens.text,
			background: { color: $bog_builderui_tokens.back },
			padding: { top: '2px', right: '8px', bottom: '2px', left: '8px' },
			borderRadius: $bog_builderui_tokens.radius,
			border: {
				width: '1px',
				style: 'solid',
				color: $bog_builderui_tokens.line,
			},
		},

		Meta: {
			flex: { direction: 'column' },
			gap: '2px',
		},

		Title_view: {
			font: {
				family: $bog_builderui_tokens.font_head,
				size: '14px',
				weight: 600,
			},
			color: $bog_builderui_tokens.text,
			overflow: { x: 'hidden' },
			textOverflow: 'ellipsis',
			whiteSpace: 'nowrap',
		},

		Sub_year: {
			font: {
				family: $bog_builderui_tokens.font_body,
				size: '12px',
			},
			color: $bog_builderui_tokens.shade,
		},

	} )

}
