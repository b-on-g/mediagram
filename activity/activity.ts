namespace $.$$ {

	/** Событие активности в ленте круга */
	export class $bog_mediagram_activity extends $giper_baza_dict.with({
		Author: $giper_baza_atom_link,
		Media: $giper_baza_atom_link_to(() => $bog_mediagram_snapshot),
		// 'started' | 'finished' | 'rated' | 'dropped' | 'added' | 'circle_watched'
		Kind: $giper_baza_atom_text,
		// если Kind=rated и ShareRating
		Rating: $giper_baza_atom_bint,
		At: $giper_baza_atom_time,
	}) {}

}
