const KEY = 'chronova-theme';
const root = document.documentElement;

export function initTheme(button) {
  const sync = () => {
    const dark = root.dataset.theme === 'dark';
    button.setAttribute('aria-pressed', String(!dark));
    button.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#101012' : '#f3f3f1');
  };
  sync();
  button.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem(KEY, root.dataset.theme); } catch { /* storage unavailable */ }
    sync();
  });
}
