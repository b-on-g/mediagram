# mediagram — PRD

**Версия**: 3 ( 2026-06-10 )
**Хакатон**: Kodik Launchpad ( дедлайн 2026-07-09, ~30 дней )
**Трек**: `micro_saas`
**Стек**: $mol + Giper Baza + Chrome MV3 extension; разработка в редакторе Kodik ( требование хакатона )

---

## 0. Требования хакатона

- Разработка обязана вестись на платформе Kodik ( редактор на базе VS Code ) — обязательная часть стека по правилам.
- Цель формата — готовый продукт в маркетплейсе Kodik 2.0. Судят качество, проработанность и стабильность; квалификация по уровням Starter / Advanced / Pro / Marketplace Ready. **Целимся в Marketplace Ready.**
- Заявка не позднее **2026-06-11** → доп. номинация «Ранний Кодик».
- Открытый вопрос: формат публикации связки webapp + extension — см. §12.

---

## 1. Обзор и цели

mediagram — социальный трекер потребления медиа ( книги, фильмы, сериалы, аниме ) с авто-фиксацией реального просмотра через browser extension и приватными circles друзей/семьи.

Один продукт вместо четырёх аккаунтов в Goodreads / Letterboxd / Trakt / AniList.

**Модель добавления — два пути, ноль мусора:**
- **Авто**: пишется только реальный просмотр — ≥15 мин в плеере → `doing`. Никаких записей «за открытую карточку».
- **Один клик**: на любом info-сайте из белого списка side panel расширения уже распарсил карточку — добавление одним кликом, без поиска и копипасты.

### Цели
- «Снова забыл отметить что досмотрел» больше не бывает — просмотр фиксируется сам
- Единый дашборд по всему медиа-потреблению
- **Приватный** социальный слой ( узкий круг вместо публичных лайков )
- Без сервера для user-данных и без подписки ( Giper Baza как backend )

### Не-цели на MVP
- Свои рейтинги/метакритика
- Игровые механики ( бейджи, уровни )
- Рекомендации от рандомных юзеров ( только свой круг )
- Монетизация ( после хакатона )

---

## 2. Целевая аудитория

**Primary**: 25-40, потребляют ≥3 типов медиа активно, уже держат 2-5 аккаунтов в нишевых трекерах. Технически грамотные, ставят расширения, ценят приватность.

**Secondary**: пары и семьи — shared watchlist на пятницу, общий список «что почитать в отпуске».

**Anti-persona**: те кто хочет публичной славы и подписчиков ( им в Letterboxd ).

---

## 3. Основные функции

### F1. Extension: авто-фиксация просмотра + one-click add

Каждый сайт = свой extractor: `( document, url ) => { entity: MediaEntity, page_kind: 'info' | 'player' }`.

**Авто-запись — единственное правило:**
- ≥15 мин активного visible-time на `player`-странице ( воспроизведение в браузере: эпизод-страницы animego и т.п. ) → запись **`doing`**
- Если запись уже в `want_to` → promote до `doing`
- Авто никогда не понижает статус и не трогает `done` / `dropped`; manual всегда сильнее auto
- На `info`-страницах ( карточки kinopoisk, imdb, goodreads, livelib, fantlab, shikimori, MAL, myshows, letterboxd ) **авто-записей не происходит никогда**
- v2: вместо таймера — события `<video>` внутри iframe плеера ( all_frames + host permission домена плеера )

**One-click add ( info-страницы ):**
- Юзер открыл карточку → side panel показывает распознанное ( title, year, type, постер ) контекстным блоком поверх библиотеки → кнопка «добавить» → одна запись с выбранным статусом ( дефолт — `want_to` )
- Книги в браузере не потребляются → для них это основной путь вместе с поиском F3

**Acceptance criteria:**
- ≥15 мин активного времени на эпизод-странице animego → `doing` ( или promote want_to → doing )
- 15 мин на карточке kinopoisk → ничего не записано
- Side panel на распознанной info-странице показывает распознанный блок + «добавить» одним кликом, экстрактор уже распарсил данные и постер
- SPA-навигация ( pushState / Navigation API: shikimori, myshows, kinopoisk ) сбрасывает и перезапускает таймер
- Запись существует в любом статусе → не дублируем
- Выключение трекинга per-site и глобально; incognito не трекается
- История авто-добавлений с undo ( 7 дней )

### F2. Webapp — твоя библиотека

Унифицированный список с фильтрами по типу, статусу, году, оценке.

**Стейты записи:**
- `want_to` — собираюсь ( **только ручной**, авто его не создаёт )
- `doing` — смотрю/читаю ( единственный авто-статус )
- `done` — закончил
- `dropped` — бросил
- `favorite` — отдельный флаг

**Acceptance criteria:**
- Виртуальный список ( $mol_scroll ) тысяч записей без тормозов
- Фасетные фильтры в URL через `$mol_state_arg`
- Drag между стейтами или dropdown
- Оценка 1-10 ( опциональный комментарий )
- Поиск по библиотеке ( substring + теги )

### F3. Manual add ( поиск в webapp )

Название → каскадный поиск → выбор → дедуп по universal IDs.

**Каскад источников:**
1. **Wikipedia opensearch + Wikidata** — первичен, universal. **ru.wikipedia первой, en fallback**
2. **TMDB** ( фильмы/сериалы ) — **через свой прокси** ( §4, ключ не в клиенте ), fallback-обогащение: постер, описание
3. **OpenLibrary** ( книги, без ключа, CORS )
4. **Jikan ( MAL ) / AniList** ( аниме, без ключа )

**Дедуп — механизм:**
- Universal key — `wikidata_id`
- Резолв site_id → QID через Wikidata search `haswbstatement` ( свойства внешних ID: IMDb `P345`, Kinopoisk `P2603`, MAL `P4086` и т.п. )
- Резолв асинхронный, best-effort; не удался → временный дубль + кнопка «объединить с…» в detail-view ( source_ids складываются )

**Acceptance criteria:**
- Поиск ru → en; выбор типа при неоднозначности
- TMDB / OpenLibrary при наличии → постер и описание автоматически
- Запись уже есть → «уже есть, открыть?»
- Ручной merge с объединением source_ids

### F4. Circles ( приватные круги )

Круг ( «семья», «гик-друзья» ), 1-20 человек. Внутри: лента активности, общий watchlist, recs.

**Круг = encrypted land Giper Baza, роли = ранги:**
- owner = `rank_rule`, member = `rank_post('just')`, viewer = `rank_read`
- `land.encrypted( true )` — шифрование нативное, ключ расшифровки раздаётся участникам автоматически при `give()`
- Отдельной таблицы ролей нет — права и есть роли

**Вступление — заявка + give():**
- Invite-ссылка несёт land id круга
- Открывший отправляет свой Pass как заявку ( пишет в открытый «прихожая»-list круга )
- Owner видит заявку → «принять» → `give( memberPass, rank_post('just') )` → ключ приезжает участнику сам
- Утёкшая ссылка ≠ доступ: без подтверждения владельца в круг не попасть

**Активность — денормализованный snapshot.** Личный land участника чужим не читается, поэтому Activity в circle-land несёт `$bog_mediagram_snapshot` ( title, kind, year, poster_thumb, source_ids ). Матчинг «одно и то же медиа» между юзерами — по wikidata_id / внешним ID из snapshot.

**Watchlist круга:**
- Любой участник добавляет из библиотеки ( «предложить кругу» ) или через поиск F3
- Голоса «+1», сортировка по голосам
- Бейдж «уже видел: Ваня» — клиент участника сверяет item со своей библиотекой и пишет `SeenBy` ( автоматически если тип медиа разрешён его share-правилами, иначе кнопкой )
- «Посмотрели» → архив + activity `circle_watched`
- Дедуп внутри watchlist по wikidata_id / source_ids

**Share-правила — личные**, живут в личном land юзера ( per circle ): какие типы/статусы реплицировать, шарить ли оценку и текст отзыва.

**Acceptance criteria:**
- Создание круга = `land_grab` + `encrypted( true )` + invite-ссылка
- Заявка → approve-экран владельца → give → участник читает и пишет
- Юзер в нескольких кругах одновременно
- Активность реплицируется по личным share-правилам
- Watchlist: добавление, голоса, seen_by, архив — всё в encrypted land

### F5. Recs по пересечениям

**Формула:** пара ( ты, участник круга ): ≥5 общих оценённых media ( матчинг по wikidata_id / imdb_id из circle-данных ), |Δrating| ≤ 1 на ≥70% общих → показываем её/его 9–10, которых у тебя нет ( или есть только в `want_to` ).

**Acceptance criteria:**
- Блок «друзья оценили высоко» на главной
- Только люди из твоих кругов
- Считается на клиенте по расшифрованным circle-lands

### F6. Постеры с client-side сжатием

- **Extension**: fetch в **background SW** ( content script — tainted canvas ), OffscreenCanvas → WebP ( 75x110 thumb, 200x300 card ) → blob в encrypted land
- Host permissions на CDN постеров — **optional_host_permissions + runtime request**: одновременно per-site whitelist UI; добавление сайтов не триггерит re-review
- **Webapp** ( manual add ): CORS-friendly источники ( Wikimedia Commons, image.tmdb.org, covers.openlibrary.org ) → canvas в webapp; без CORS → placeholder

**Acceptance criteria:**
- Thumb ≤5 KB, card ≤30 KB; нет постера → placeholder initials

### F7. Единая identity webapp + extension: два пира, один auth

Webapp ( gh-pages ) и extension — разные origin'ы с разными IndexedDB, но это просто **два пира одной CRDT-базы**.

**Механизм:**
- Bridge = content script расширения на домене webapp ↔ postMessage
- Поверх bridge реализуется `$giper_baza_port` ( `yard.slaves.add( port )` + `port_income` ) → **локальный синк webapp ↔ extension без сервера**, «merge без потерь» делает сам CRDT
- Auth один на двоих: при старте каждая сторона спрашивает через bridge `whoami`; ключ генерится только если его нет ни у кого; иначе — adopt существующего
- Генерация Auth — PoW 1–10 с → onboarding маскирует спиннером

**Acceptance criteria:**
- Webapp + extension в одном браузере → одна identity, одни lands, при любом порядке установки
- Данные, накопленные до подключения второй стороны, доезжают через port-синк
- E2e-тест bridge ( включая CSP gh-pages ) на week 1

### F8. Перенос аккаунта на другое устройство

Паттерн `bog/vk`: transfer-land ( публичный, `units_saving()` после создания ) хранит зашифрованную auth-строку, ключ — в URL fragment ( не уходит в логи серверов ).

**Acceptance criteria:**
- Кнопка «перенести аккаунт» в webapp и extension
- Открытие ссылки на другом устройстве → adopt auth → доступ ко всем lands
- Запись wipe'ается после импорта; клиент отказывается импортировать payload старше 15 мин
- Fallback: показать auth-строку / QR для ручного переноса

---

## 4. Технический стек

| Слой | Решение | Обоснование |
|---|---|---|
| UI | $mol | виртуализация, реактивность, view.tree |
| Browser ext | Chrome MV3 ( + Firefox если успеем ) | паттерн отработан в `bog/vk` |
| Backend user-данных | Giper Baza, encrypted lands | local-first, real-time sync, шифрование и права нативные |
| Шифрование | `land.encrypted( true )` + `give()` | ключи раздаёт платформа, своего крипто-слоя нет |
| Identity | Giper Baza Auth / Pass / Lord | auth-строка = единственный секрет юзера |
| Metadata proxy | Cloudflare Worker ( `bog/mediagram/proxy` ) | TMDB-ключ server-side, кеш, rate limit; **user-данные через него не ходят** |
| Постеры | OffscreenCanvas в background SW → WebP blob | client-side, без CDN, без tainted canvas |
| Metadata search | Wikipedia / Wikidata ( ru → en ) | бесплатно, без ключей, universal IDs |
| Build | mam | стандарт стека; работает внутри Kodik-редактора |
| Dev env | Kodik editor ( VS Code-based ) | обязателен правилами хакатона |
| Deploy | gh-pages + Chrome Web Store + маркетплейс Kodik | формат маркетплейса — §12 |

### Модули
- `bog/mediagram/app/` — webapp
- `bog/mediagram/ext/` — extension shell ( background SW + content scripts + side panel host + bridge-port ); UI один и тот же $mol-апп, side panel грузит ту же сборку, что и gh-pages
- `bog/mediagram/baza/` — модели Giper Baza
- `bog/mediagram/extractors/` — по сайту на файл, каждый отдаёт `page_kind`
- `bog/mediagram/poster/` — сжатие/canvas
- `bog/mediagram/wiki/` — Wikipedia/Wikidata adapter ( поиск + haswbstatement )
- `bog/mediagram/proxy/` — Cloudflare Worker для TMDB

### 4.1 Затраты
- Chrome Web Store dev fee — $5 разово
- Cloudflare Workers / TMDB / Wikipedia / OpenLibrary / Jikan / gh-pages — бесплатно
- Sync-нода Giper Baza — hyoo-инфраструктура ( 0 ) или свой VPS ( уже оплачен ); решить до week 2 — §12

---

## 5. Модель данных ( entity-синтаксис Giper Baza )

**Media — per-user, глобального каталога нет.** Межюзерный матчинг — только через SourceIds / wikidata_id. Роли в circles = ранги land'ов, отдельных таблиц прав нет.

### Личный land ( encrypted, владелец — юзер )

```ts
export class $bog_mediagram_library extends $giper_baza_entity.with({
	Medias: $giper_baza_list_link_to( ()=> $bog_mediagram_media ),
	Entries: $giper_baza_list_link_to( ()=> $bog_mediagram_entry ),
	ShareRules: $giper_baza_list_link_to( ()=> $bog_mediagram_share_rule ),
	Circles: $giper_baza_list_str,	// land ids моих кругов
}) {}

export class $bog_mediagram_media extends $giper_baza_entity.with({
	// Title наследуется ( canonical, по-русски если есть )
	TitleOriginal: $giper_baza_atom_text,
	Kind: $giper_baza_atom_enum([ 'movie', 'series', 'book', 'anime' ]),
	Year: $giper_baza_atom_bint,
	PosterThumb: $giper_baza_atom_blob,	// 75x110 WebP, ≤5 KB
	PosterCard: $giper_baza_atom_blob,	// 200x300 WebP, ≤30 KB
	SourceIds: $giper_baza_dict_to( $giper_baza_atom_text ),	// 'wikidata' → 'Q…', 'kinopoisk' → …
	AddedAt: $giper_baza_atom_time,
}) {}

export class $bog_mediagram_entry extends $giper_baza_entity.with({
	Media: $giper_baza_atom_link_to( ()=> $bog_mediagram_media ),
	Status: $giper_baza_atom_enum([ 'want_to', 'doing', 'done', 'dropped' ]),
	Favorite: $giper_baza_atom_bool,
	Rating: $giper_baza_atom_bint,	// 1-10
	Review: $giper_baza_atom_text,
	Source: $giper_baza_atom_enum([ 'auto', 'manual' ]),	// manual > auto
	StartedAt: $giper_baza_atom_time,
	FinishedAt: $giper_baza_atom_time,
}) {}

export class $bog_mediagram_share_rule extends $giper_baza_entity.with({
	Circle: $giper_baza_atom_text,	// land id круга
	Kinds: $giper_baza_list_str,	// какие типы реплицировать
	Statuses: $giper_baza_list_str,
	ShareRating: $giper_baza_atom_bool,
	ShareReview: $giper_baza_atom_bool,
}) {}
```

### Circle land ( encrypted, owner = rule, members = post('just'), viewers = read )

```ts
export class $bog_mediagram_circle extends $giper_baza_entity.with({
	// Title = название круга
	Feed: $giper_baza_list_link_to( ()=> $bog_mediagram_activity ),
	Watch: $giper_baza_list_link_to( ()=> $bog_mediagram_watch_item ),
	Names: $giper_baza_dict_to( $giper_baza_atom_text ),	// lord → display name
}) {}

export class $bog_mediagram_snapshot extends $giper_baza_entity.with({
	// Title наследуется; денормализация — личный land чужим не читается
	Kind: $giper_baza_atom_enum([ 'movie', 'series', 'book', 'anime' ]),
	Year: $giper_baza_atom_bint,
	PosterThumb: $giper_baza_atom_blob,
	SourceIds: $giper_baza_dict_to( $giper_baza_atom_text ),	// минимум один ID для матчинга
}) {}

export class $bog_mediagram_activity extends $giper_baza_entity.with({
	Author: $giper_baza_atom_link,	// lord участника
	Media: $giper_baza_atom_link_to( ()=> $bog_mediagram_snapshot ),
	Kind: $giper_baza_atom_enum([ 'started', 'finished', 'rated', 'dropped', 'added', 'circle_watched' ]),
	Rating: $giper_baza_atom_bint,	// если kind=rated и ShareRating
	At: $giper_baza_atom_time,
}) {}

export class $bog_mediagram_watch_item extends $giper_baza_entity.with({
	Media: $giper_baza_atom_link_to( ()=> $bog_mediagram_snapshot ),
	AddedBy: $giper_baza_atom_link,
	Votes: $giper_baza_list_str,	// lord ids
	SeenBy: $giper_baza_list_str,
	WatchedAt: $giper_baza_atom_time,	// заполнен → архив
}) {}
```

Заявки на вступление — открытый «прихожая»-list рядом с circle land ( `[ null, rank_post('slow') ]` ): Pass + имя, owner разгребает.

---

## 6. UI-принципы

- **Главная webapp = библиотека**, лента и watchlist — табы внутри круга
- **Один билд** $mol-аппа работает и как webapp ( gh-pages ), и как Chrome side panel — раскладка адаптируется по ширине через `container-type` ( узкая колонка → списки вместо сетки; распознанный блок текущей вкладки доступен ТОЛЬКО в side panel — `chrome.tabs` feature-gate )
- **Side panel-only функции**: распознанный блок текущей страницы + статус трекинга сайта + быстрый toggle «pause N часов»
- **Виртуализация по умолчанию** ( $mol_list / $mol_scroll )
- **Тёмная тема по умолчанию**
- Карточка: постер 75x110 + title + year + status pill + rating; hover/tap → 200x300 с описанием
- **Detail-view** через `$mol_state_arg` ( deeplink ), там же merge дублей
- Activity feed — chronological, без алгоритма
- Watchlist — сортировка по голосам, бейдж «уже видел: …»
- Бейдж «сегодня зафиксировано: N» → история авто-добавлений с undo

---

## 7. Безопасность и приватность

**Encryption-by-default — критично юридически.** Админ sync-ноды ( и любой со снапшотом land'а ) не должен читать авторские данные юзеров.

- **Все lands с user-данными — `encrypted( true )`**: личная библиотека, circles, blob-land постеров. Крипто-слой свой не пишем — ключи раздаёт Giper Baza через `give()`
- **Единственный секрет юзера — auth-строка** ( приватный ключ Giper Baza ). Export в onboarding: paper key / QR / файл. Потерял auth без бэкапа = потерял данные — честно говорим в onboarding
- **Plain остаются только**: universal media-IDs в заявках/инвайтах — публичная справочная информация
- **Вступление в круг — через give()**: утёкшая invite-ссылка не даёт доступа без подтверждения владельца
- **Ограничение MVP — фиксируем честно**: `give( pass, deny )` при кике режет доставку новых юнитов честными пирами, но ключ расшифровки у бывшего участника остаётся — прошлая история ему читаема. Ротация ключа ( re-encrypt land ) — v2. Предупреждение в UI при kick
- **Прокси не видит user-данных**: только title-запросы метаданных; origin-check + per-IP rate limit + кеш
- **Incognito-aware**: не трекаем
- **Optional_host_permissions** = явный per-site whitelist руками юзера
- **Mute-mode**: пауза трекинга на N часов
- **Right to forget**: удаление записи каскадом убирает её snapshot/activity/watch-следы из circles ( клиент ведёт индекс «что куда реплицировал» )
- **Undo 7 дней** на авто-добавления
- **Перенос identity**: transfer-land + ключ в fragment, wipe после импорта ( F8 )

---

## 8. Этапы разработки ( 30 дней )

### Week 1 — Скелет + submissions ( 2026-06-10 → 2026-06-16 )
- [ ] **Заявка на хакатон не позднее 11.06** ( «Ранний Кодик» ); Kodik-редактор + mam
- [ ] MAM scaffold `bog/mediagram/{app,ext,baza,proxy}` ( `npm create view-tree-lsp` )
- [ ] Модели §5; smoke-тест encrypted lands: `land_grab` + `encrypted( true )` + `give` + `units_saving`
- [ ] Webapp: библиотека + виртуальный список mock-данных
- [ ] Extension: side panel ( та же сборка $mol-аппа, container-queries сжимают раскладку под ~380px ), content-script таймер, каркас optional_host_permissions
- [ ] **Bridge-port прототип**: `$giper_baza_port` поверх postMessage, whoami/adopt auth, e2e с CSP gh-pages
- [ ] **2 extractor end-to-end**: animego player → `doing` авто; kinopoisk info → one-click из side panel
- [ ] Privacy policy страница + permission justifications
- [ ] **Submission в Chrome Web Store** ( минимальный manifest, дальше update-versions )
- [ ] Техправила в репо: запрет `@$mol_mem` на методах, возвращающих land/Node ( Circular subscription ); side-effects только в `@$mol_action`

### Week 2 — Source sites + metadata ( 2026-06-17 → 2026-06-23 )
- [ ] Остальные 4-5 info-extractors + snapshot-тесты; SPA-hooks ( pushState / Navigation API )
- [ ] Постеры: fetch в background SW + OffscreenCanvas + WebP
- [ ] CF Worker proxy для TMDB ( кеш, origin-check, rate limit )
- [ ] Manual add: ru→en Wikipedia → TMDB / OpenLibrary / Jikan
- [ ] Дедуп: haswbstatement-резолв + ручной merge
- [ ] UI: фильтры, статусы, оценки
- [ ] Решение по sync-ноде ( hyoo vs VPS )

### Week 3 — Social ( 2026-06-24 → 2026-06-30 )
- [ ] Circle: `land_grab` + `encrypted( true )`, invite-ссылка, «прихожая»-заявки, approve-экран owner'а с `give()`
- [ ] Activity feed: snapshot-денормализация по личным share-правилам
- [ ] **Watchlist**: добавление, голоса, seen_by, архив
- [ ] Recs по формуле ( ≥5 общих, |Δ|≤1 на ≥70% )

### Week 4 — Полировка и демо ( 2026-07-01 → 2026-07-09 )
- [ ] Onboarding: export auth ( paper key / QR ), спиннер на PoW-генерации, pre-set whitelist
- [ ] История авто-добавлений + undo; privacy controls ( mute, per-site off )
- [ ] Update extension в Chrome Web Store
- [ ] **Размещение в маркетплейсе Kodik**
- [ ] Скринкаст 2-3 мин + стор-описание — через pre-publish tone check, питч от выгоды ( офлайн, синк без сервера, приватность )
- [ ] Webapp deploy на gh-pages; PRD finalization

---

## 9. Потенциальные проблемы

| Риск | Решение |
|---|---|
| Сайты меняют DOM → extractor ломается | Snapshot-тесты html + алерт в side panel «extractor сломан, обнови» |
| SPA меняет URL без reload → таймер не с той страницы | Хуки pushState / Navigation API, тесты на shikimori/myshows |
| 15-мин порог не добивает на коротких эпизодах | One-click в side panel; v2 — события `<video>` в iframe |
| MV3 service worker умирает через ~30 с idle → рваный синк из расширения | Local-first: юниты копятся локально, доезжают при живом SW или через bridge-port в webapp-пира |
| Giper Baza внутри MV3 SW — неизведанная территория | Smoke-тест в week 1 до того как строить на этом всё |
| Wikipedia неоднозначна | UI выбора из топ-5 + ручной ввод |
| Wikidata-резолв не нашёл QID → дубли | Временный дубль + ручной merge |
| Прокси абьюзят как открытый TMDB-гейт | Origin-check, per-IP rate limit, кеш |
| Big libraries ( 10k+ ) тормозят | Виртуализация + lazy decrypt видимых записей |
| Land раздувается у активного юзера | Постеры в отдельном blob-land |
| Кикнутый участник сохраняет ключ | Документируем, предупреждение в UI, ротация — v2 |
| Transfer-ссылка перехвачена | Wipe после импорта + клиентский TTL 15 мин + ключ в fragment |
| Bridge ломается ( CSP gh-pages, гонки ) | E2e-тест week 1; CRDT-merge порядконезависим |
| PoW-генерация ключа 1–10 с пугает юзера | Спиннер с текстом в onboarding |
| Chrome Web Store ревью / реджект за permissions | Submission week 1, минимальный manifest + optional_host_permissions |
| Потерян auth без бэкапа = данные навсегда | Export paper key в onboarding, напоминание |
| «Разработка на платформе Kodik» трактуется строже | Уточнить у оргов week 1; работа в их редакторе с первого дня |

---

## 10. Будущие расширения ( после хакатона )

- **Предложка**: inbox распознанного с info-сайтов ( 1 тап → want_to, TTL ), если юзеры попросят
- **Playback-детекция**: события `<video>` в iframe плееров → точный doing/done и прогресс по эпизодам
- **Ротация ключа круга** при kick ( re-encrypt land )
- **Plex / Jellyfin**: auto для домашних медиатек
- **Mobile** ( share-target ), **Tauri desktop**
- **Импорт**: Goodreads / Trakt / Letterboxd / MAL
- **Public sharing**, **reviews long-form**, **AI-рекомендации**, **pro-tier**

---

## 11. Definition of Done на хакатон

- Авто-фиксация просмотра работает end-to-end на animego ( player → `doing` )
- 6+ source sites: one-click add из side panel + постеры
- Webapp: библиотека, виртуальный список, фильтры, статусы, оценки, merge дублей
- Минимум один circle: заявка → approve → лента + **watchlist с голосами** + recs
- Encrypted lands везде; bridge-port синкает webapp ↔ extension при любом порядке установки
- Extension в Chrome Web Store ( published или submitted )
- Webapp на gh-pages + размещение в маркетплейсе Kodik; **целимся в Marketplace Ready**
- Privacy policy live
- Скринкаст 2-3 мин ( после tone-check ) + demo-сценарий

---

## 12. Открытые вопросы

1. **Формат публикации в маркетплейсе Kodik** для webapp + extension — спросить оргов week 1
2. **Строгость «разработки на платформе»** — достаточно ли их редактора, обязательны ли AI-кредиты
3. **Sync-нода**: hyoo vs свой VPS — решить до week 2