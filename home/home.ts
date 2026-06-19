namespace $.$$ {

	/**
	 * Корневая entity юзера в home-land (lord-land auth-ключа).
	 * Содержит только ссылку на отдельную encrypted library-land.
	 * Home-land публично-читаемая по дефолту (auth.lord = публичная справка), поэтому
	 * чувствительные данные (Medias/Entries) сюда не кладём.
	 */
	export class $bog_mediagram_home extends $giper_baza_dict.with({
		Library: $giper_baza_atom_link.to(() => $bog_mediagram_library),
	}) {}

}
