const VERSION='c213d1b63d';const PRECACHE=["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./icon-512-maskable.png", "./leaflet.css", "./leaflet.js", "./leaflet-icons.js", "./mymaps.js", "./privacy.html", "./builtin.json", "./clinics-us.json", "./live.html", "./install.html"];
self.addEventListener('install',e=>{e.waitUntil(caches.open('vet-'+VERSION).then(c=>Promise.allSettled(PRECACHE.map(u=>c.add(u)))).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!=='vet-'+VERSION&&k!=='tiles'&&k!=='mymaps').map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
async function trim(c){const keys=await c.keys();if(keys.length>2500){for(const k of keys.slice(0,300))await c.delete(k);}}
self.addEventListener('fetch',e=>{
 const u=new URL(e.request.url);
 if(/arcgisonline|nationalmap\.gov/.test(u.host)){
  e.respondWith(caches.open('tiles').then(async c=>{const hit=await c.match(e.request);if(hit)return hit;
   try{const r=await fetch(e.request);c.put(e.request,r.clone());trim(c);return r;}catch(err){return new Response('',{status:504});}}));
  return;}
 if(u.origin===self.location.origin){
  if(u.pathname.endsWith('/sponsor.json')){e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)));return;}
  e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(hit=>hit||fetch(e.request).then(r=>{if(r.ok&&u.pathname.indexOf('/map-')<0){const cp=r.clone();caches.open('vet-'+VERSION).then(c=>c.put(e.request,cp));}return r;})));
 }
});