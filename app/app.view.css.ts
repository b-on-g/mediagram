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

		Theme_btn: {
			flex: { shrink: 0 },
			background: { color: '#ffffff' },
			color: '#050505',
			border: { width: '1px', style: 'solid', color: '#ffffff' },
			borderRadius: '6px',
			font: { weight: 700 },
		},

		Add_btn: {
			flex: { shrink: 0 },
			background: { color: '#e50914' },
			color: '#ffffff',
			border: { width: '1px', style: 'solid', color: '#e50914' },
			borderRadius: '6px',
			font: { weight: 700 },
		},

		Filters: {
			flex: { direction: 'row', wrap: 'wrap', shrink: 0 },
			align: { items: 'center' },
			gap: '14px',
			padding: { top: '14px', right: '32px', bottom: '14px', left: '32px' },
			border: { bottom: { width: '1px', style: 'solid', color: '#ffffff10' } },
			background: { color: '#050505' },
		},

		Types_group: {
			flex: { direction: 'row', wrap: 'wrap', shrink: 0 },
			align: { items: 'center' },
			gap: $mol_gap.text,
		},

		Type_filter_label: {
			flex: { shrink: 0 },
			color: '#ffffff99',
			font: { size: '11px', weight: 800 },
			textTransform: 'uppercase',
		},

		Types: {
			flex: { direction: 'row', wrap: 'wrap' },
			gap: $mol_gap.text,
		},

		Status_row: {
			flex: { direction: 'row', wrap: 'wrap' },
			align: { items: 'center' },
			gap: $mol_gap.text,
		},

		Status_filter_label: {
			flex: { shrink: 0 },
			color: '#ffffff99',
			font: { size: '11px', weight: 800 },
			textTransform: 'uppercase',
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

		Groups: {
			margin: { top: '18px', right: '32px', left: '32px' },
			flex: { shrink: 0 },
			gap: $mol_gap.block,
			padding: { top: '16px', right: '18px', bottom: '18px', left: '18px' },
			background: { color: '#0d0d0d' },
			border: { width: '1px', style: 'solid', color: '#ffffff12' },
			borderRadius: '8px',
		},

		Groups_head: {
			flex: { direction: 'row', wrap: 'wrap' },
			align: { items: 'center' },
			gap: $mol_gap.text,
		},

		Groups_title: {
			font: { weight: 800, size: '18px' },
			color: '#ffffff',
		},

		Groups_count: {
			marginLeft: 'auto',
			color: '#ffffff99',
			font: { size: '12px' },
		},

		Groups_form: {
			flex: { direction: 'row', wrap: 'wrap' },
			align: { items: 'center' },
			gap: $mol_gap.text,
		},

		Group_name: {
			flex: { grow: 1, basis: '180px' },
			minWidth: '150px',
		},

		Group_types: {
			flex: { direction: 'row', wrap: 'wrap', shrink: 0 },
			gap: $mol_gap.text,
		},

		Group_create: {
			flex: { shrink: 0 },
			background: { color: '#e50914' },
			color: '#ffffff',
			border: { width: '1px', style: 'solid', color: '#e50914' },
			borderRadius: '6px',
			font: { weight: 700 },
		},

		Groups_list: {
			display: 'grid',
			gap: $mol_gap.text,
			gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
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

		'@': {
			bog_mediagram_theme: {
				light: {
					background: { color: '#ffffff' },
					color: '#050505',

					Top: {
						background: { color: '#fffffffa' },
						border: { bottom: { width: '1px', style: 'solid', color: '#0505051f' } },
					},

					Filters: {
						background: { color: '#ffffff' },
						border: { bottom: { width: '1px', style: 'solid', color: '#05050517' } },
					},

					Theme_btn: {
						background: { color: '#050505' },
						color: '#ffffff',
						border: { width: '1px', style: 'solid', color: '#050505' },
					},

					Banner: {
						background: { color: '#050505' },
						border: { width: '1px', style: 'solid', color: '#050505' },
					},

					Groups: {
						background: { color: '#ffffff' },
						border: { width: '1px', style: 'solid', color: '#0505051f' },
					},

					Groups_title: {
						color: '#050505',
					},

					Groups_count: {
						color: '#05050599',
					},

					Count: {
						color: '#05050599',
					},

					Type_filter_label: {
						color: '#05050599',
					},

					Status_filter_label: {
						color: '#05050599',
					},
				},
			},
		},

	} )

	$mol_style_define( $bog_mediagram_app_chip, {
		flex: { direction: 'row', shrink: 0 },
		align: { items: 'center' },
		gap: $mol_gap.text,
		cursor: 'pointer',
		background: { color: '#050505' },
		color: '#ffffff',
		border: { width: '1px', style: 'solid', color: '#ffffff26' },
		borderRadius: '6px',
		padding: { top: '7px', right: '10px', bottom: '7px', left: '10px' },
		minHeight: '34px',

		Swatch: {
			width: '8px',
			height: '8px',
			borderRadius: '50%',
			background: { color: 'currentcolor' },
		},

		'@': {
			bog_mediagram_theme: {
				light: {
					background: { color: '#ffffff' },
					color: '#050505',
					border: { width: '1px', style: 'solid', color: '#05050526' },
				},
			},
			bog_mediagram_chip_active: {
				on: {
					background: { color: '#e50914' },
					color: '#ffffff',
					border: { width: '1px', style: 'solid', color: '#e50914' },
				},
			},
		},
	} )

	$mol_style_define( $bog_mediagram_app_group, {
		flex: { direction: 'row' },
		align: { items: 'center' },
		gap: $mol_gap.text,
		padding: { top: '10px', right: '12px', bottom: '10px', left: '12px' },
		background: { color: '#050505' },
		border: { width: '1px', style: 'solid', color: '#ffffff18' },
		borderRadius: '6px',

		Group_icon: {
			flex: { shrink: 0 },
			minWidth: '58px',
			padding: { top: '4px', right: '7px', bottom: '4px', left: '7px' },
			background: { color: '#e50914' },
			color: '#ffffff',
			borderRadius: '4px',
			textTransform: 'uppercase',
			textAlign: 'center',
			font: { size: '10px', weight: 800 },
		},

		Group_meta: {
			flex: { direction: 'column' },
			overflow: { x: 'hidden' },
		},

		Group_title: {
			color: '#ffffff',
			font: { size: '14px', weight: 800 },
			overflow: { x: 'hidden' },
			textOverflow: 'ellipsis',
			whiteSpace: 'nowrap',
		},

		Group_sub: {
			color: '#ffffff91',
			font: { size: '11px' },
		},

		'@': {
			bog_mediagram_theme: {
				light: {
					background: { color: '#ffffff' },
					border: { width: '1px', style: 'solid', color: '#0505051f' },

					Group_title: {
						color: '#050505',
					},

					Group_sub: {
						color: '#05050599',
					},
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
			color: '#e50914',
		},

		Pill: {
			position: 'absolute',
			left: '8px',
			bottom: '8px',
			background: { color: '#e50914' },
			color: '#ffffff',
			border: { width: '1px', style: 'solid', color: '#ffffff5c' },
			borderRadius: '4px',
			padding: { top: '3px', right: '8px', bottom: '3px', left: '8px' },
			font: { size: '11px', weight: 800 },
			cursor: 'pointer',
			textTransform: 'uppercase',
			':hover': {
				background: { color: '#ffffff' },
				color: '#050505',
			},
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

		'@': {
			bog_mediagram_theme: {
				light: {
					Title_view: {
						color: '#050505',
					},

					Sub: {
						color: '#05050599',
					},
				},
			},
		},
	} )

}
