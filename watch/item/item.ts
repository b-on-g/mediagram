namespace $.$$ {

	/** Запись в общем watchlist круга */
	export class $bog_mediagram_watch_item extends $giper_baza_dict.with({
		Media: $giper_baza_atom_link.to(() => $bog_mediagram_snapshot),
		AddedBy: $giper_baza_atom_link,
		// list of lord ids (votes "+1")
		Votes: $giper_baza_list_str,
		// list of lord ids who marked as already seen
		SeenBy: $giper_baza_list_str,
		// заполнен → запись в архиве
		WatchedAt: $giper_baza_atom_time,
	}) {

		archived() {
			return this.WatchedAt()?.val() != null
		}

		/** Голос lord'а считается один раз, даже если он повторно нажал «+1» */
		toggle_vote(lord_id: string) {
			this.Votes()?.has(lord_id, !(this.Votes()?.has(lord_id) ?? false))
		}

		mark_seen(lord_id: string) {
			this.SeenBy()?.has(lord_id, true)
		}

		/** Сортировка по количеству голосов (PRD: «голоса +1, сортировка по голосам») */
		votes_count() {
			return this.Votes()?.units().length ?? 0
		}

	}

}
