(async () => {
  try {
    const src = chrome.runtime.getURL('src/js/ProfileApplication.js');
    await import(src);
  } catch(e) {
    // application이 없는 페이지 예외가 발생하지 않도록 처리
    // URL matching pattern 변경 필요
  }
})();
