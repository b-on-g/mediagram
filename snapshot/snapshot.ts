namespace $.$$ {

	/**
	 * Денормализованный snapshot медиа для круга. Личный land чужим
	 * не читается, поэтому в circle land храним копию полей —
	 * матчинг «то же самое медиа» делается по SourceIds (wikidata_id и т.п.)
	 */
	export class $bog_mediagram_snapshot extends $giper_baza_dict.with({
		Title: $giper_baza_atom_text,
		// 'movie' | 'series' | 'book' | 'anime'
		Kind: $giper_baza_atom_text,
		Year: $giper_baza_atom_bint,
		PosterThumb: $giper_baza_atom_blob,
		// минимум один ID нужен для матчинга
		SourceIds: $giper_baza_dict_to($giper_baza_atom_text),
	}) {}

}
