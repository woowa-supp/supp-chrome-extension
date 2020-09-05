(async () => {
  const src = chrome.runtime.getURL('src/js/ProfileApplication.js');
  await import(src);
})();
