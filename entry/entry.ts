namespace $.$$ {

	/** Состояние пользователя по конкретному медиа (статус, оценка, ревью) */
	export class $bog_mediagram_entry extends $giper_baza_dict.with({
		Media: $giper_baza_atom_link.to(() => $bog_mediagram_media),
		// 'want_to' | 'doing' | 'done' | 'dropped'
		Status: $giper_baza_atom_text,
		Favorite: $giper_baza_atom_bool,
		// 1-10
		Rating: $giper_baza_atom_bint,
		Review: $giper_baza_atom_text,
		// 'auto' | 'manual' — manual всегда сильнее auto
		Source: $giper_baza_atom_text,
		StartedAt: $giper_baza_atom_time,
		FinishedAt: $giper_baza_atom_time,
	}) {

		static readonly statuses = [ 'want_to', 'doing', 'done', 'dropped' ] as const
		static readonly sources = [ 'auto', 'manual' ] as const
		static readonly rating_min = 1n
		static readonly rating_max = 10n

		valid_status() {
			const v = this.Status()?.val()
			return v != null && ($bog_mediagram_entry.statuses as readonly string[]).includes(v)
		}

		valid_source() {
			const v = this.Source()?.val()
			return v != null && ($bog_mediagram_entry.sources as readonly string[]).includes(v)
		}

		/** 1..10 включительно; null допустим (нет оценки) */
		valid_rating() {
			const v = this.Rating()?.val()
			if (v == null) return true
			return v >= $bog_mediagram_entry.rating_min && v <= $bog_mediagram_entry.rating_max
		}

		/**
		 * PRD §F1: авто никогда не понижает статус и не трогает done/dropped.
		 * Manual всегда сильнее. Возвращает true если auto-апдейт на next разрешён.
		 */
		can_auto_apply(next: string) {
			const current = this.Status()?.val() ?? null
			if (this.Source()?.val() === 'manual') return false
			if (current === 'done' || current === 'dropped') return false
			if (current === 'doing' && next === 'want_to') return false
			return true
		}

	}

}
