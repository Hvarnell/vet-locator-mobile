// Shared by index.html and live.html: maps a person saves live in this app's own storage, on this phone only.
function localizeMap(t){return t.replace(/<link rel="stylesheet" href="[^"]*leaflet[^"]*\.css"\/?>/,'<link rel="stylesheet" href="./leaflet.css">').replace(/<script src="[^"]*leaflet[^"]*\.js"><\/script>/,'<script src="./leaflet.js"><\/script><script src="./leaflet-icons.js"><\/script>')}
const mmIdx=()=>{try{return JSON.parse(localStorage.getItem('mymaps')||'[]')}catch(e){return []}};
const mmSave=l=>localStorage.setItem('mymaps',JSON.stringify(l));
async function saveMapHtml(t,fallbackName){
 if(t.indexOf('const DATA=')<0)throw new Error('not a map from the builder');
 t=localizeMap(t);const id=(Date.now().toString(36)+Math.random().toString(36).slice(2,7));
 const c=await caches.open('mymaps');await c.put(new Request('./map-'+id+'.html'),new Response(t,{headers:{'Content-Type':'text/html; charset=utf-8'}}));
 const ti=(t.match(/<title>(.*?)<\/title>/)||[])[1]||fallbackName||'Map',su=(t.match(/<div class="sub">(.*?)<\/div>/)||[])[1]||'';
 const l=mmIdx();l.push({id,title:ti,sub:su.replace(/<[^>]+>/g,'').slice(0,120)});mmSave(l);return id;}
async function removeMap(id){const c=await caches.open('mymaps');await c.delete('./map-'+id+'.html');mmSave(mmIdx().filter(m=>m.id!==id));}
function listenForMaps(onSaved){window.addEventListener('message',async e=>{const d=e.data;if(!d||d.type!=='vetmap'||typeof d.html!=='string')return;
 if(APP_ORIGIN&&e.origin!==APP_ORIGIN)return;try{const id=await saveMapHtml(d.html,d.name);onSaved&&onSaved(id,mmIdx().slice(-1)[0],d);}catch(err){alert('Could not save that map: '+err.message);}});}