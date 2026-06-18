namespace $.$$ {

	/** Состояние пользователя по конкретному медиа (статус, оценка, ревью) */
	export class $bog_mediagram_entry extends $giper_baza_dict.with({
		Media: $giper_baza_atom_link_to(() => $bog_mediagram_media),
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
	}) {}

}
