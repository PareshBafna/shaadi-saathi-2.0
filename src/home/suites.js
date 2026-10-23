// "Complete Wedding Suite" section: tab bar + service cards.
import { SUITES, ALL_SERVICES } from './services/index.js';

const TABS = [
  ...SUITES.map(s => ({ id: s.id, icon: s.tab.icon, label: s.tab.label })),
  { id: 'all', icon: '✨', label: `View All ${ALL_SERVICES.length} Services` }
];

let activeTab = SUITES[0].id;

const tabsHtml = () => TABS.map(t => `
  <button type="button" role="tab" aria-selected="${activeTab === t.id}" data-tab="${t.id}" class="hp-chip">
    <span aria-hidden="true">${t.icon}</span><span>${t.label}</span>
  </button>`).join('');

const rowHtml = s => `
  <article class="hp-tour-row cursor-pointer" data-open="${s.module}">
    <div>
      <strong>${s.icon} ${s.name}</strong>
      <small>${s.desc}</small>
    </div>
    <div class="flex items-center gap-3">
      <span class="hp-tag">${s.badge}</span>
      <button type="button" data-open="${s.module}" class="px-3 py-1 rounded-full bg-gold/15 border border-gold/40 text-xs font-bold text-gold">Open ${s.name} →</button>
    </div>
  </article>`;

const groupHtml = g => `
  <div class="hp-tour">
    <div class="flex flex-wrap items-center justify-between gap-2 mb-5">
      <h3 class="text-2xl font-serif font-bold text-cream">${g.title}</h3>
      <button type="button" data-open="${g.services[0].module}" class="hp-link">Open in Workspace →</button>
    </div>
    <div class="hp-tour-grid hp-tour-grid-2col">${g.services.map(rowHtml).join('')}</div>
  </div>`;

const groupsHtml = () => (activeTab === 'all' ? SUITES : SUITES.filter(g => g.id === activeTab))
  .map(groupHtml).join('');

export function renderSuites() {
  return `
<section class="hp-band hp-alt" id="grouped-features">
  <div class="hp-wrap">
    <div class="hp-head">
      <span class="hp-kicker">Complete Wedding Suite</span>
      <h2>Every wedding capability, organized into four logical suites.</h2>
      <p>Switch between suite tabs below to explore Command &amp; Invites, Hospitality &amp; Travel, Memories &amp; Shagun, and Vendors &amp; Finance. Click any service to open it directly inside the workspace.</p>
    </div>
    <div class="hp-tabs" id="suiteTabsBar" role="tablist" aria-label="Wedding Suite Tabs">${tabsHtml()}</div>
    <div id="allSuitesContainer" class="space-y-8">${groupsHtml()}</div>
  </div>
</section>`;
}

export function bindSuites(root) {
  const bar = root.querySelector('#suiteTabsBar');
  const box = root.querySelector('#allSuitesContainer');
  bar.addEventListener('click', e => {
    const tab = e.target.closest('[data-tab]');
    if (!tab) return;
    activeTab = tab.dataset.tab;
    bar.innerHTML = tabsHtml();
    box.innerHTML = groupsHtml();
    bar.querySelector(`[data-tab="${activeTab}"]`).focus();
  });
}
