export async function initComparison(slotSelector) {
  const slot = document.querySelector(slotSelector);
  if (!slot) return;
  const res = await fetch('./pages/home/components/comparison/comparison.html');
  slot.innerHTML = await res.text();
}