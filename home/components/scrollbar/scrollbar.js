export async function initScrollbar(slotSelector) {
  const slot = document.querySelector(slotSelector);
  if (!slot) return;

  const res = await fetch('./home/components/scrollbar/scrollbar.html');
  slot.innerHTML = await res.text();

  const nodes = Array.from(slot.querySelectorAll('.ss-rail-node'));
  const sectionIds = nodes.map(n => n.dataset.section);

  function updateActiveDot() {
    const scrollPos = window.scrollY + window.innerHeight * 0.35;
    let currentId = sectionIds[0];

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollPos) {
        currentId = id;
      }
    }

    nodes.forEach(n => {
      n.classList.toggle('active', n.dataset.section === currentId);
    });
  }

  window.addEventListener('scroll', updateActiveDot, { passive: true });
  setTimeout(updateActiveDot, 150);
}