namespace $.$$ {

	/** Encrypted land круга. owner=rule, member=post('just'), viewer=read */
	export class $bog_mediagram_circle extends $giper_baza_dict.with({
		Title: $giper_baza_atom_text,
		Feed: $giper_baza_list_link.to(() => $bog_mediagram_activity),
		Watch: $giper_baza_list_link.to(() => $bog_mediagram_watch_item),
		// lord id → display name внутри круга
		Names: $giper_baza_dict_to($giper_baza_atom_text),
	}) {}

}
