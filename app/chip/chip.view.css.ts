namespace $ {

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

}
