// MV3 service worker: открывает side panel по клику на иконку,
// собирает entity-snapshot'ы из content-скриптов и отдаёт их side panel'у.

chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true }).catch(() => {})

const last_by_tab = new Map()

chrome.runtime.onMessage.addListener((msg, sender, send) => {

	if (msg?.type === 'mediagram_extract') {
		const tab_id = sender.tab?.id
		if (tab_id != null) last_by_tab.set(tab_id, msg.payload)
		send({ ok: true })
		return false
	}

	if (msg?.type === 'mediagram_whoami') {
		chrome.tabs.query({ active: true, currentWindow: true }).then(tabs => {
			const id = tabs[0]?.id
			send({ payload: id != null ? last_by_tab.get(id) ?? null : null })
		})
		return true
	}

	return false
})

chrome.tabs.onRemoved.addListener(id => last_by_tab.delete(id))
