// Right-side section rail: dots + progress line that follow page scroll.
const NODES = [
  { id: 'top',              label: 'Overview &amp; Live Demo',    color: '#FFFDF9' },
  { id: 'problem',          label: 'Why Families Switch',         color: '#F5C451' },
  { id: 'grouped-features', label: 'Complete Wedding Suite',      color: '#EF4444' },
  { id: 'all-explainers',   label: '18 Service Deep-Dives',       color: '#38BDF8' },
  { id: 'pricing',          label: 'Per-Wedding Pricing',         color: '#F472B6' },
  { id: 'addons-section',   label: 'Standalone Add-Ons',          color: '#A855F7' },
  { id: 'faq',              label: 'FAQ &amp; Guide',             color: '#22D3EE' }
];

const nodeHtml = (n, i) => `
  <a href="#${n.id}" data-section="${n.id}" class="ss-rail-node${i === 0 ? ' reached active' : ''}" style="--dot-color: ${n.color};">
    <span class="ss-rail-label">${n.label}</span>
    <span class="ss-rail-ring"><span class="ss-rail-core"></span></span>
  </a>`;

export function renderRail() {
  return `
<aside class="ss-scroll-rail" aria-label="Section navigation">
  <div class="ss-rail-track" id="ssRailTrack">
    <div class="ss-rail-progress" id="ssRailProgress"></div>
    ${NODES.map(nodeHtml).join('')}
  </div>
</aside>`;
}

export function bindRail(root) {
  const track = root.querySelector('#ssRailTrack');
  const line = root.querySelector('#ssRailProgress');
  const dots = [...root.querySelectorAll('.ss-rail-node')];
  const center = el => el.offsetTop + el.offsetHeight / 2;

  function update() {
    if (root.classList.contains('hidden')) return;
    const first = center(dots[0]);
    track.style.setProperty('--rail-total-h', `${Math.max(1, center(dots[dots.length - 1]) - first)}px`);
    line.style.top = `${first}px`;

    const probe = window.scrollY + window.innerHeight * 0.42;
    const tops = NODES.map(n => {
      const el = document.getElementById(n.id);
      return el ? el.getBoundingClientRect().top + window.scrollY : 0;
    });

    let active = 0;
    tops.forEach((y, i) => { if (probe >= y) active = i; });

    let fraction = 0;
    if (active < tops.length - 1) {
      fraction = Math.min(1, Math.max(0, (probe - tops[active]) / Math.max(1, tops[active + 1] - tops[active])));
    }
    const here = center(dots[active]);
    const next = active < dots.length - 1 ? center(dots[active + 1]) : here;
    line.style.height = `${Math.max(0, here - first + (next - here) * fraction)}px`;

    dots.forEach((d, i) => {
      d.classList.toggle('reached', i <= active);
      d.classList.toggle('active', i === active);
    });
  }

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  setTimeout(update, 200);
  return update;
}
