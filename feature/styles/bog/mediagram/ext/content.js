// Универсальный extractor: JSON-LD (schema.org) → OpenGraph fallback.
// Отправляет в background snapshot {page_kind, entity, source_url, host}.
// SPA-навигацию ловим MutationObserver+popstate.

(function () {

	const ANIME_HOST = /(animego|shikimori|myanimelist|anilist|anidb)/i

	function is_anime_host() {
		return ANIME_HOST.test(location.host)
	}

	function year_of(date_str) {
		if (!date_str) return null
		const m = /\d{4}/.exec(String(date_str))
		return m ? m[0] : null
	}

	function image_url(image) {
		if (!image) return null
		if (typeof image === 'string') return image
		if (Array.isArray(image)) return image_url(image[0])
		return image.url || image.contentUrl || null
	}

	function parse_schema(obj) {
		if (!obj || typeof obj !== 'object') return null
		const raw_t = obj['@type']
		if (!raw_t) return null
		const types = (Array.isArray(raw_t) ? raw_t : [raw_t]).map(s => String(s).toLowerCase())
		let kind = null
		if (types.includes('movie')) kind = 'movie'
		else if (types.includes('tvseries') || types.includes('tvepisode') || types.includes('episode')) kind = 'series'
		else if (types.includes('book')) kind = 'book'
		else if (types.includes('videoobject')) kind = 'movie'
		else return null
		if (is_anime_host()) kind = 'anime'
		return {
			title: obj.name || obj.headline || obj.alternateName || '',
			year: year_of(obj.datePublished || obj.dateCreated || obj.copyrightYear),
			kind,
			poster_url: image_url(obj.image) || image_url(obj.thumbnailUrl),
		}
	}

	function from_json_ld() {
		const scripts = document.querySelectorAll('script[type="application/ld+json"]')
		for (const script of scripts) {
			try {
				const data = JSON.parse(script.textContent || '{}')
				const items = Array.isArray(data) ? data : (data['@graph'] || [data])
				for (const item of items) {
					const result = parse_schema(item)
					if (result?.title) return result
				}
			} catch (e) { /* skip malformed */ }
		}
		return null
	}

	function meta_content(name) {
		const el = document.querySelector(
			`meta[property="og:${name}"], meta[name="og:${name}"]`
		)
		return el?.getAttribute('content') || ''
	}

	function from_open_graph() {
		const title = meta_content('title') || document.title
		if (!title) return null
		const type = meta_content('type')
		const image = meta_content('image')
		let kind = is_anime_host() ? 'anime' : null
		if (!kind) {
			if (/video\.movie/.test(type)) kind = 'movie'
			else if (/video\.tv_show|video\.episode/.test(type)) kind = 'series'
			else if (/book/.test(type)) kind = 'book'
		}
		if (!kind) return null
		return { title, year: null, kind, poster_url: image || null }
	}

	function detect_page_kind() {
		for (const v of document.querySelectorAll('video')) {
			if (v.src || v.currentSrc || v.querySelector('source')) return 'player'
		}
		const player_iframe = document.querySelector(
			'iframe[src*="kodik"], iframe[src*="anivost"], iframe[src*="alloha"], iframe[src*="bdcdn"], iframe[src*="player"]'
		)
		if (player_iframe) return 'player'
		return 'info'
	}

	function extract() {
		const entity = from_json_ld() || from_open_graph()
		if (!entity) return null
		return {
			page_kind: detect_page_kind(),
			entity,
			source_url: location.href,
			host: location.host,
			extracted_at: Date.now(),
		}
	}

	function emit() {
		const data = extract()
		if (!data) return
		try {
			chrome.runtime.sendMessage({ type: 'mediagram_extract', payload: data })
		} catch (e) { /* SW asleep — next emit will deliver */ }
	}

	emit()

	let last_url = location.href
	const obs = new MutationObserver(() => {
		if (location.href !== last_url) {
			last_url = location.href
			setTimeout(emit, 300)
		}
	})
	obs.observe(document.documentElement, { childList: true, subtree: true })

	window.addEventListener('popstate', () => setTimeout(emit, 300))

})()
