import { initHomePage } from '../pages/home/home.js';

window.switchRootMode = function(mode) {
  if (mode === 'home') {
    bootHome();
  } else {
    alert(`Switch mode: ${mode}`);
  }
};

window.showToast = function(msg) {
  console.log('Toast:', msg);
};

async function bootHome() {
  const root = document.getElementById('root-home');
  const res = await fetch('./pages/home/home.html');
  root.innerHTML = await res.text();
  await initHomePage();
}

bootHome();