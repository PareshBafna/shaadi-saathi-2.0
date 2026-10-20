export function renderWhatsAppModule(viewport, headerBanner) {
  viewport.innerHTML = headerBanner + `
    <div class="bento-card p-6 space-y-5">
      <div class="flex justify-between items-center">
        <div>
          <span class="text-xs font-mono uppercase text-waGreen font-bold">Meta Cloud API</span>
          <h4 class="font-serif text-2xl font-bold text-cream">WhatsApp Broadcast Blaster</h4>
        </div>
        <button onclick="showToast('Broadcast dispatched successfully!')" class="px-5 py-2.5 rounded-xl bg-waGreen text-obsidian text-xs font-bold">🚀 Dispatch Invites</button>
      </div>
      <div class="bg-obsidian p-5 rounded-2xl border border-borderWarm space-y-3">
        <strong class="text-sm text-cream block">Message Template Preview:</strong>
        <p class="text-xs text-muted bg-card p-4 rounded-xl font-mono">"Namaste {{1}}, cordially inviting you to Aarav & Ananya's wedding celebration in Udaipur. View your pass here: https://shaadi.saathi/pass/{{2}}"</p>
      </div>
    </div>
  `;
}