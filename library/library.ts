namespace $.$$ {

	/** Личный home land юзера — корневая entity библиотеки */
	export class $bog_mediagram_library extends $giper_baza_dict.with({
		Name: $giper_baza_atom_text,
		Medias: $giper_baza_list_link_to(() => $bog_mediagram_media),
		Entries: $giper_baza_list_link_to(() => $bog_mediagram_entry),
		ShareRules: $giper_baza_list_link_to(() => $bog_mediagram_share_rule),
		Circles: $giper_baza_list_str,
	}) {}

}
