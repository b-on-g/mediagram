namespace $.$$ {

	/** Событие активности в ленте круга */
	export class $bog_mediagram_activity extends $giper_baza_dict.with({
		Author: $giper_baza_atom_link,
		Media: $giper_baza_atom_link.to(() => $bog_mediagram_snapshot),
		// 'started' | 'finished' | 'rated' | 'dropped' | 'added' | 'circle_watched'
		Kind: $giper_baza_atom_text,
		// если Kind=rated и ShareRating
		Rating: $giper_baza_atom_bint,
		At: $giper_baza_atom_time,
	}) {

		static readonly kinds = [
			'started', 'finished', 'rated', 'dropped', 'added', 'circle_watched',
		] as const

		valid_kind() {
			const v = this.Kind()?.val()
			return v != null && ($bog_mediagram_activity.kinds as readonly string[]).includes(v)
		}

		/** Rating требуется только если Kind='rated' */
		valid_rating() {
			if (this.Kind()?.val() !== 'rated') return true
			const v = this.Rating()?.val()
			return v != null && v >= 1n && v <= 10n
		}

	}

}
