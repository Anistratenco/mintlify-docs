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

/* Unsaved Appearance guide controls; never change the site's theme or account. */
(() => {
  function update(event) {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const demo = target.closest('.appearance-demo');
    if (!demo) return;
    const theme = target.closest('[data-preview-theme]');
    const accent = target.closest('[data-preview-accent]');
    if (event.type === 'click' && theme) {
      demo.dataset.theme = theme.dataset.previewTheme;
      demo.querySelectorAll('[data-preview-theme]').forEach(button => button.setAttribute('aria-pressed', String(button === theme)));
    }
    if ((event.type === 'click' && accent) || (event.type === 'input' && target.matches('[data-preview-color]'))) {
      const color = accent ? accent.dataset.previewAccent : target.value;
      demo.style.setProperty('--demo-accent', color === 'auto' ? 'var(--demo-ink)' : color);
      demo.querySelectorAll('[data-preview-accent]').forEach(button => button.setAttribute('aria-pressed', String(button === accent)));
    }
    if (event.type === 'input' && target.matches('[data-preview-range]')) {
      const key = target.dataset.previewRange;
      const value = Number(target.value);
      if (!Number.isFinite(value)) return;
      demo.style.setProperty(`--demo-${key}`, key === 'font' ? `${value}px` : key === 'contrast' ? value / 100 : value);
      demo.querySelector(`#${target.id}-value`).textContent = `${value}${key === 'scale' ? '×' : ''}`;
    }
    if (event.type === 'click' && target.closest('[data-preview-reset]')) {
      demo.querySelector('[data-preview-theme="light"]').click();
      demo.querySelector('[data-preview-accent="#006fe6"]').click();
      demo.querySelectorAll('[data-preview-range]').forEach(input => {
        input.value = input.defaultValue;
        input.dispatchEvent(new Event('input', { bubbles: true }));
      });
      demo.querySelector('[data-preview-color]').value = '#006fe6';
    }
  }
  document.addEventListener('click', update);
  document.addEventListener('input', update);
})();
