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
	}) {

		static readonly kinds = [ 'movie', 'series', 'book', 'anime' ] as const

		static readonly poster_thumb_max_bytes = 5 * 1024
		static readonly poster_card_max_bytes = 30 * 1024

		/** Kind должен входить в {@link $bog_mediagram_media.kinds} */
		valid_kind() {
			const v = this.Kind()?.val()
			return v != null && ($bog_mediagram_media.kinds as readonly string[]).includes(v)
		}

		/** Хоть один source-id (минимум для матчинга между юзерами) */
		valid_source_ids() {
			const dict = this.SourceIds()
			return Boolean(dict && dict.units().length > 0)
		}

		/** Title непустой */
		valid_title() {
			const v = this.Title()?.val()
			return typeof v === 'string' && v.trim().length > 0
		}

	}

}
