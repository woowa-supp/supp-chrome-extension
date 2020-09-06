(async () => {
    const src = chrome.runtime.getURL('src/js/ProfileExtension.js');
    await import(src);
})();