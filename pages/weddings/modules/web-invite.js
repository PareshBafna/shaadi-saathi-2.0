export function renderWebInviteModule(viewport, headerBanner) {
  viewport.innerHTML = headerBanner + `
    <div class="bento-card p-8 text-center max-w-3xl mx-auto space-y-5">
      <span class="px-3.5 py-1 rounded-full text-xs font-bold bg-gold/20 text-gold">3D Wax-Seal Web Invitation</span>
      <h3 class="font-serif text-4xl font-bold text-cream">Royal Web Invite Preview</h3>
      <p class="text-base text-muted">Animated monogram wax seal, falling petals, Shehnai audio, and Google Maps venue routing.</p>
    </div>
  `;
}