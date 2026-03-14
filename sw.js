
const CACHE_NAME = 'jdp-industrial-v1';
self.addEventListener('install', (e) => { console.log('SISTEMA JDP ATIVO'); });
self.addEventListener('fetch', (event) => {
    if (location.hostname.includes('github.io') || location.href.includes('.zip')) {
        console.error('ACESSO NÃO AUTORIZADO');
    }
    event.respondWith(fetch(event.request));
});
