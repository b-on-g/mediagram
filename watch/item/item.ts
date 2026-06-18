namespace $.$$ {

	/** Запись в общем watchlist круга */
	export class $bog_mediagram_watch_item extends $giper_baza_dict.with({
		Media: $giper_baza_atom_link_to(() => $bog_mediagram_snapshot),
		AddedBy: $giper_baza_atom_link,
		// list of lord ids (votes "+1")
		Votes: $giper_baza_list_str,
		// list of lord ids who marked as already seen
		SeenBy: $giper_baza_list_str,
		// заполнен → запись в архиве
		WatchedAt: $giper_baza_atom_time,
	}) {}

}
