// One toast box (#toastBox in index.html). Auto-hides after 2.8 s.
let timer;

export function showToast(message) {
  const box = document.getElementById('toastBox');
  if (!box) return;
  box.textContent = message;
  box.classList.remove('hidden');
  clearTimeout(timer);
  timer = setTimeout(() => box.classList.add('hidden'), 2800);
}
