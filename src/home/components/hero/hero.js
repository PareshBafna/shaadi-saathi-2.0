export async function initHero(slotSelector) {
  const slot = document.querySelector(slotSelector);
  if (!slot) return;

  const res = await fetch('./src/home/components/hero/hero.html');
  slot.innerHTML = await res.text();

  const NAMES = ['Attending', 'Pending', 'Declined'];
  slot.querySelectorAll('#hpList .hp-pill').forEach(p => {
    p.addEventListener('click', () => {
      const i = (+p.dataset.status + 1) % 3;
      p.dataset.status = i;
      p.textContent = NAMES[i];
      p.className = 'hp-pill hp-' + NAMES[i];
      const who = p.closest('li').querySelector('strong').textContent;
      const msgEl = document.getElementById('hpMsg');
      if (msgEl) msgEl.textContent = `${who} updated to ${NAMES[i]}.`;
    });
  });

  const rem = document.getElementById('hpRemind');
  if (rem) {
    rem.addEventListener('click', () => {
      const msgEl = document.getElementById('hpMsg');
      if (msgEl) msgEl.textContent = '✓ Reminder queued for 46 pending families.';
    });
  }
}