namespace $ {

	$mol_style_define( $bog_mediagram_app, {

		flex: { direction: 'column' },
		minHeight: '100%',
		background: { color: '#050505' },
		color: '#f5f5f5',
		font: { family: 'Inter, Arial, sans-serif' },

		Top: {
			flex: { direction: 'row', wrap: 'wrap', shrink: 0 },
			gap: $mol_gap.block,
			align: { items: 'center' },
			padding: { top: '18px', right: '32px', bottom: '18px', left: '32px' },
			border: { bottom: { width: '1px', style: 'solid', color: '#ffffff14' } },
			background: { color: '#050505f5' },
			position: 'sticky',
			top: 0,
			zIndex: 10,
		},

		Brand: {
			flex: { direction: 'row', shrink: 0 },
			align: { items: 'center' },
			gap: $mol_gap.text,
			font: {
				family: 'Inter, Arial, sans-serif',
				weight: 800,
				size: '24px',
			},
			color: '#e50914',
			textTransform: 'uppercase',
			letterSpacing: '0',
		},

		Brand_mark: {
			width: '10px',
			height: '30px',
			borderRadius: '2px',
			background: { color: '#e50914' },
			boxShadow: '10px 0 0 #b20710',
		},

		Search: {
			flex: { grow: 1, basis: '200px' },
			minWidth: '160px',
			maxWidth: '420px',
		},

		Filters: {
			flex: { direction: 'column', shrink: 0 },
			gap: $mol_gap.block,
			padding: { top: '12px', right: '32px', bottom: '12px', left: '32px' },
			border: { bottom: { width: '1px', style: 'solid', color: '#ffffff10' } },
			background: { color: '#050505' },
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

		Status_chips: {
			flex: { direction: 'row', wrap: 'wrap' },
			gap: $mol_gap.text,
		},

		Count: {
			marginLeft: 'auto',
			color: '#ffffff99',
			font: { size: '12px' },
		},

		Banner: {
			margin: { top: '18px', right: '32px', left: '32px' },
			flex: { shrink: 0 },
			gap: '4px',
			padding: { top: '14px', right: '18px', bottom: '14px', left: '18px' },
			background: { color: '#180203' },
			border: { width: '1px', style: 'solid', color: '#ffffff12' },
			borderRadius: '8px',
			boxShadow: '0 18px 50px #0000008c',
		},

		Banner_title: {
			font: { weight: 800, size: '15px' },
			color: '#ffffff',
		},

		Banner_text: {
			color: '#ffffffa6',
		},

		Library: {
			flex: { grow: 1 },
		},

		Grid: {
			display: 'grid',
			padding: { top: '26px', right: '32px', bottom: '42px', left: '32px' },
			gap: '22px',
			gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))',
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
					background: { color: '#e50914' },
					color: '#ffffff',
				},
			},
		},
	} )

	$mol_style_define( $bog_mediagram_app_card, {
		flex: { direction: 'column' },
		gap: '10px',
		cursor: 'pointer',
		padding: { top: 0, right: 0, bottom: 0, left: 0 },
		background: { color: 'transparent' },
		border: { width: 0 },
		transform: 'translateZ(0)',

		Poster: {
			position: 'relative',
			aspectRatio: '2 / 3',
			overflow: { x: 'hidden', y: 'hidden' },
			border: { width: '1px', style: 'solid', color: '#ffffff1a' },
			borderRadius: '6px',
			display: 'grid',
			align: { items: 'center' },
			justify: { content: 'center' },
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			boxShadow: '0 18px 42px #000000a6',
			transition: 'transform .18s ease, box-shadow .18s ease, border-color .18s ease',
			':hover': {
				transform: 'scale(1.045)',
				border: { color: '#ffffff70' },
				boxShadow: '0 24px 60px #000000d9',
			},
		},

		Kind_flag: {
			position: 'absolute',
			top: '8px',
			left: '8px',
			font: { size: '10px', weight: 600 },
			letterSpacing: '0',
			textTransform: 'uppercase',
			padding: { top: '3px', right: '7px', bottom: '3px', left: '7px' },
			borderRadius: '4px',
			background: { color: '#050505b8' },
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
			background: { color: '#e50914' },
			color: '#ffffff',
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
			background: { color: '#050505c9' },
			padding: { top: '2px', right: '7px', bottom: '2px', left: '7px' },
			borderRadius: '4px',
		},

		Meta: {
			flex: { direction: 'column' },
			gap: '2px',
		},

		Title_view: {
			font: { size: '14px', weight: 700 },
			color: '#ffffff',
			overflow: { x: 'hidden' },
			textOverflow: 'ellipsis',
			whiteSpace: 'nowrap',
		},

		Sub: {
			font: {
				family: 'ui-monospace, "SF Mono", Menlo, monospace',
				size: '11px',
			},
			color: '#ffffff8f',
		},
	} )

}
