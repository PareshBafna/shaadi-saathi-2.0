// global/router.js
export function getRouteMode(pathname = window.location.pathname) {
  if (pathname.includes('/pages/weddings/weddings.html')) return 'creator';
  if (pathname.includes('/pages/host/host.html')) return 'host';
  if (pathname.includes('/pages/guest/guest.html')) return 'guest';
  return 'home';
}

export function navigateTo(mode, weddingId, moduleId) {
  const paths = {
    home: '/',
    creator: '/pages/weddings/weddings.html',
    host: '/pages/host/host.html',
    guest: '/pages/guest/guest.html'
  };
  const target = paths[mode] || paths.home;
  window.history.pushState({ mode, wedding: weddingId, module: moduleId }, '', target);
}