namespace $ {

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
