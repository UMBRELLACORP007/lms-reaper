// When extension icon is clicked
chrome.action.onClicked.addListener(async (tab) => {
  const { enabled = true } = await chrome.storage.local.get("enabled");
  const newState = !enabled;

  await chrome.storage.local.set({ enabled: newState });

  chrome.action.setBadgeText({ tabId: tab.id, text: newState ? "ON" : "OFF" });
  chrome.action.setBadgeBackgroundColor({ tabId: tab.id, color: newState ? "#4CAF50" : "#F44336" });

  chrome.tabs.reload(tab.id);

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: (state) => console.log(`🔄 Reloaded. PDF Sniping is now ${state ? "ENABLED ✅" : "DISABLED ❌"}`),
    args: [newState],
  });
});

// Cooldown tracker - prevents duplicate downloads
const recentlyDownloaded = new Set();

// Monitor all completed web requests
chrome.webRequest.onCompleted.addListener(
  (details) => {
    chrome.storage.local.get("enabled", (data) => {
      const isEnabled = data.enabled ?? true;
      if (!isEnabled) return;

      if (details.url.endsWith(".pdf") || (details.url.includes("storage.googleapis.com") && details.url.includes(".pdf"))) {

        if (recentlyDownloaded.has(details.url)) return;
        recentlyDownloaded.add(details.url);
        setTimeout(() => recentlyDownloaded.delete(details.url), 5000);

        console.log("📥 PDF Sniped:", details.url);

        chrome.storage.local.get("pdfs", (result) => {
          const current = result.pdfs || [];
          const updated = [...new Set([...current, details.url])];
          chrome.storage.local.set({ pdfs: updated });
        });

        chrome.downloads.download({ url: details.url });
      }
    });
  },
  { urls: ["<all_urls>"] }
);