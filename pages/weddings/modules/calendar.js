export function renderCalendarModule(viewport, headerBanner) {
  viewport.innerHTML = headerBanner + `
    <div class="bento-card p-6 space-y-5">
      <h4 class="font-serif text-2xl font-bold text-cream">Wedding Timeline &amp; Event Calendar</h4>
    </div>
  `;
}