export async function initScrollbar(slotSelector) {
  const slot = document.querySelector(slotSelector);
  if (!slot) return;

  const res = await fetch('./home/components/scrollbar/scrollbar.html');
  slot.innerHTML = await res.text();

  const track = slot.querySelector('#ssRailTrack');
  const progressLine = slot.querySelector('#ssRailProgress');
  const nodes = Array.from(slot.querySelectorAll('.ss-rail-node'));
  const sectionIds = nodes.map(n => n.dataset.section);

  function updateRail() {
    if (!track || !progressLine || !nodes.length) return;

    const firstCenter = nodes[0].offsetTop + nodes[0].offsetHeight / 2;
    const lastCenter = nodes[nodes.length - 1].offsetTop + nodes[nodes.length - 1].offsetHeight / 2;
    const totalSpan = Math.max(1, lastCenter - firstCenter);

    track.style.setProperty('--rail-total-h', `${totalSpan}px`);
    progressLine.style.top = `${firstCenter}px`;

    const triggerY = window.scrollY + window.innerHeight * 0.42;

    const positions = sectionIds.map(id => {
      const el = document.getElementById(id);
      return el ? el.getBoundingClientRect().top + window.scrollY : 0;
    });

    let activeIdx = 0;
    for (let i = 0; i < positions.length; i++) {
      if (triggerY >= positions[i]) {
        activeIdx = i;
      }
    }

    // Calculate fractional progress toward the next section dot
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
  setTimeout(updateRail, 200);
}