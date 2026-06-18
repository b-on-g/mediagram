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
	}) {}

}
