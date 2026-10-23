// Bottom dock. Two items today: Home, Weddings.
const ITEMS = [
  { mode: 'home',    icon: '✨', label: 'Home' },
  { mode: 'creator', icon: '👑', label: 'Weddings' }
];

const ON  = 'flex flex-col items-center justify-center py-2 px-4 rounded-xl text-xs font-bold transition bg-gold text-obsidian shadow';
const OFF = 'flex flex-col items-center justify-center py-2 px-4 rounded-xl text-xs font-semibold text-cream hover:text-gold transition';

export function renderNavigation() {
  return `
<nav class="ss-nav" aria-label="Main">
  <div class="ss-bottom-dock">
    ${ITEMS.map(i => `
    <button type="button" data-go="${i.mode}" id="dock-${i.mode}" class="${i.mode === 'home' ? ON : OFF}">
      <span class="text-base leading-none mb-1" aria-hidden="true">${i.icon}</span>
      <span>${i.label}</span>
    </button>`).join('')}
  </div>
</nav>`;
}

export function setActiveDock(mode) {
  ITEMS.forEach(i => {
    const btn = document.getElementById(`dock-${i.mode}`);
    if (!btn) return;
    btn.className = i.mode === mode ? ON : OFF;
    i.mode === mode ? btn.setAttribute('aria-current', 'page') : btn.removeAttribute('aria-current');
  });
}
