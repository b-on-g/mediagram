namespace $.$$ {

	/** Каноническая запись о медиа в личной библиотеке */
	export class $bog_mediagram_media extends $giper_baza_dict.with({
		Title: $giper_baza_atom_text,
		TitleOriginal: $giper_baza_atom_text,
		// 'movie' | 'series' | 'book' | 'anime'
		Kind: $giper_baza_atom_text,
		Year: $giper_baza_atom_bint,
		// 75x110 WebP, ≤5 KB
		PosterThumb: $giper_baza_atom_blob,
		// 200x300 WebP, ≤30 KB
		PosterCard: $giper_baza_atom_blob,
		// 'wikidata' → 'Q…', 'kinopoisk' → …, 'imdb' → 'tt…' и т.д.
		SourceIds: $giper_baza_dict_to($giper_baza_atom_text),
		AddedAt: $giper_baza_atom_time,
	}) {}

}
