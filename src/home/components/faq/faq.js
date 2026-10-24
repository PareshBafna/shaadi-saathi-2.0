export async function initFaq(slotSelector) {
  const slot = document.querySelector(slotSelector);
  if (!slot) return;

  const res = await fetch('./home/components/faq/faq.html');
  slot.innerHTML = await res.text();

  const allDetails = slot.querySelectorAll('#faqAccordionGroup details');
  allDetails.forEach(dt => {
    dt.addEventListener('toggle', () => {
      if (dt.open) {
        allDetails.forEach(other => {
          if (other !== dt && other.open) other.removeAttribute('open');
        });
      }
    });
  });
}