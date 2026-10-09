const VERSION='716d540e11';const PRECACHE=["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./leaflet/leaflet.css", "./leaflet/leaflet.js", "./leaflet/images/marker-icon.png", "./leaflet/images/marker-icon-2x.png", "./leaflet/images/marker-shadow.png", "./leaflet/images/layers.png", "./leaflet/images/layers-2x.png", "./vet_corridor_Denver_to_Flint.html", "./vet_corridor_Denver_to_League_City.html", "./vet_home_5341_W_82nd_Ave.html", "./live.html"];
self.addEventListener('install',e=>{e.waitUntil(caches.open('vet-'+VERSION).then(c=>c.addAll(PRECACHE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!=='vet-'+VERSION&&k!=='tiles').map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
async function trim(c){const keys=await c.keys();if(keys.length>2500){for(const k of keys.slice(0,300))await c.delete(k);}}
self.addEventListener('fetch',e=>{
 const u=new URL(e.request.url);
 if(/arcgisonline|nationalmap\.gov/.test(u.host)){
  e.respondWith(caches.open('tiles').then(async c=>{const hit=await c.match(e.request);if(hit)return hit;
   try{const r=await fetch(e.request);c.put(e.request,r.clone());trim(c);return r;}catch(err){return new Response('',{status:504});}}));
  return;}
 if(u.origin===self.location.origin){
  e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(hit=>hit||fetch(e.request).then(r=>{if(r.ok){const cp=r.clone();caches.open('vet-'+VERSION).then(c=>c.put(e.request,cp));}return r;})));
 }
});