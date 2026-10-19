export async function initComparison(slotSelector) {
  const slot = document.querySelector(slotSelector);
  if (!slot) return;
  const res = await fetch('./home/components/comparison/comparison.html');
  slot.innerHTML = await res.text();
}