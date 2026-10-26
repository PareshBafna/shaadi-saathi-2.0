export async function initScrollbar(slotSelector) {
  const slot = document.querySelector(slotSelector);
  if (!slot) return;

  slot.innerHTML = `
    <aside class="ss-scroll-rail" aria-label="Section Scrollbar Navigation">
      <div class="ss-rail-track" id="ssRailTrack">
        <div class="ss-rail-progress" id="ssRailProgress"></div>

        <a href="#top" data-section="top" class="ss-rail-node reached active" style="--dot-color: #FFFDF9;">
          <span class="ss-rail-label">Overview &amp; Live Demo</span>
          <span class="ss-rail-ring"><span class="ss-rail-core"></span></span>
        </a>

        <a href="#problem" data-section="problem" class="ss-rail-node" style="--dot-color: #F5C451;">
          <span class="ss-rail-label">Why Families Switch</span>
          <span class="ss-rail-ring"><span class="ss-rail-core"></span></span>
        </a>

        <a href="#grouped-features" data-section="grouped-features" class="ss-rail-node" style="--dot-color: #EF4444;">
          <span class="ss-rail-label">Complete Wedding Suite</span>
          <span class="ss-rail-ring"><span class="ss-rail-core"></span></span>
        </a>

        <a href="#all-features-deepdives" data-section="all-features-deepdives" class="ss-rail-node" style="--dot-color: #38BDF8;">
          <span class="ss-rail-label">Feature Deep-Dives</span>
          <span class="ss-rail-ring"><span class="ss-rail-core"></span></span>
        </a>

        <a href="#pricing" data-section="pricing" class="ss-rail-node" style="--dot-color: #F472B6;">
          <span class="ss-rail-label">Per-Wedding Pricing</span>
          <span class="ss-rail-ring"><span class="ss-rail-core"></span></span>
        </a>

        <a href="#addons-section" data-section="addons-section" class="ss-rail-node" style="--dot-color: #A855F7;">
          <span class="ss-rail-label">Standalone Add-Ons</span>
          <span class="ss-rail-ring"><span class="ss-rail-core"></span></span>
        </a>

        <a href="#faq" data-section="faq" class="ss-rail-node" style="--dot-color: #22D3EE;">
          <span class="ss-rail-label">FAQ &amp; Guide</span>
          <span class="ss-rail-ring"><span class="ss-rail-core"></span></span>
        </a>
      </div>
    </aside>
  `;

  const track = slot.querySelector('#ssRailTrack');
  const progressLine = slot.querySelector('#ssRailProgress');
  const nodes = Array.from(slot.querySelectorAll('.ss-rail-node'));
  const sectionIds = nodes.map(n => n.dataset.section);

  // Add smooth scroll click handling for anchor targets
  nodes.forEach(node => {
    node.addEventListener('click', (e) => {
      const targetId = node.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  function updateRail() {
    if (!track || !progressLine || !nodes.length) return;

    const firstCenter = nodes[0].offsetTop + nodes[0].offsetHeight / 2;
    const lastCenter = nodes[nodes.length - 1].offsetTop + nodes[nodes.length - 1].offsetHeight / 2;
    const totalSpan = Math.max(1, lastCenter - firstCenter);

    track.style.setProperty('--rail-total-h', `${totalSpan}px`);
    progressLine.style.top = `${firstCenter}px`;

    const triggerY = window.scrollY + window.innerHeight * 0.4;

    const positions = sectionIds.map(id => {
      const el = document.getElementById(id);
      return el ? el.getBoundingClientRect().top + window.scrollY : Number.MAX_SAFE_INTEGER;
    });

    let activeIdx = 0;
    for (let i = 0; i < positions.length; i++) {
      if (triggerY >= positions[i] - 50) {
        activeIdx = i;
      }
    }

    let fraction = 0;
    if (activeIdx < positions.length - 1) {
      const startY = positions[activeIdx];
      const endY = positions[activeIdx + 1];
      const spanY = Math.max(1, endY - startY);
      fraction = Math.min(1, Math.max(0, (triggerY - startY) / spanY));
    }

    const currentDotCenter = nodes[activeIdx].offsetTop + nodes[activeIdx].offsetHeight / 2;
    const nextDotCenter = activeIdx < nodes.length - 1
      ? nodes[activeIdx + 1].offsetTop + nodes[activeIdx + 1].offsetHeight / 2
      : currentDotCenter;

    const lineHeight = (currentDotCenter - firstCenter) + (nextDotCenter - currentDotCenter) * fraction;
    progressLine.style.height = `${Math.max(0, lineHeight)}px`;

    nodes.forEach((node, idx) => {
      node.classList.toggle('reached', idx <= activeIdx);
      node.classList.toggle('active', idx === activeIdx);
    });
  }

  window.addEventListener('scroll', updateRail, { passive: true });
  window.addEventListener('resize', updateRail);
  setTimeout(updateRail, 300);
}