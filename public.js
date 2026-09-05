/* Reuse canonical sidebar labels and icons; keep Mintlify links and focus intact. */
(() => {
  let queued = false;
  function syncPagination() {
    queued = false;
    const navbar = document.querySelector('#navbar');
    const chat = navbar?.querySelector('#topbar-cta-button a[href]');
    if (navbar && chat && !navbar.querySelector('.help-mobile-chat')) {
      const mobileChat = document.createElement('a');
      mobileChat.className = 'help-mobile-chat';
      mobileChat.href = chat.href;
      mobileChat.textContent = 'Chat';
      navbar.append(mobileChat);
    }
    const sidebar = [...document.querySelectorAll('#navigation-items a[href]')];
    for (const link of document.querySelectorAll('#pagination a[href]')) {
      const source = sidebar.find(item => item.getAttribute('href') === link.getAttribute('href'));
      const title = link.querySelector('[data-component-part="pagination-title"]');
      const icon = source?.querySelector('svg');
      const label = source?.textContent.trim();
      if (!title || !icon || !label) continue;
      if (title.textContent === label && title.querySelector('.help-destination-icon')) continue;
      const copy = icon.cloneNode(true);
      copy.setAttribute('class', 'help-destination-icon');
      copy.setAttribute('aria-hidden', 'true');
      title.replaceChildren(copy, document.createTextNode(label));
      link.setAttribute('aria-label', `${link.rel === 'prev' ? 'Previous' : 'Next'}: ${label}`);
    }
  }
  const observer = new MutationObserver(() => {
    if (!queued) { queued = true; requestAnimationFrame(syncPagination); }
  });
  observer.observe(document.body, { childList: true, subtree: true });
  syncPagination();
})();
