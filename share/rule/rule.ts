namespace $.$$ {

	/** Личные правила: что реплицировать в конкретный круг */
	export class $bog_mediagram_share_rule extends $giper_baza_dict.with({
		// land id круга
		Circle: $giper_baza_atom_text,
		// какие kind'ы шарить
		Kinds: $giper_baza_list_str,
		// какие статусы шарить
		Statuses: $giper_baza_list_str,
		ShareRating: $giper_baza_atom_bool,
		ShareReview: $giper_baza_atom_bool,
	}) {

		valid_kinds() {
			const allowed = $bog_mediagram_media.kinds as readonly string[]
			for (const v of this.Kinds()?.items_vary() ?? []) {
				if (typeof v !== 'string' || !allowed.includes(v)) return false
			}
			return true
		}

		valid_statuses() {
			const allowed = $bog_mediagram_entry.statuses as readonly string[]
			for (const v of this.Statuses()?.items_vary() ?? []) {
				if (typeof v !== 'string' || !allowed.includes(v)) return false
			}
			return true
		}

		/** Совпадает ли (kind, status) entry с правилом — true → реплицировать в snapshot/activity */
		matches(kind: string, status: string) {
			const kinds = ( this.Kinds()?.items_vary() ?? [] ) as readonly $giper_baza_vary_type[]
			const statuses = ( this.Statuses()?.items_vary() ?? [] ) as readonly $giper_baza_vary_type[]
			return kinds.includes(kind) && statuses.includes(status)
		}

	}

}
