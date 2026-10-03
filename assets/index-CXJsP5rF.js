(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`modulepreload`,t=function(e){return`/crescendo-sim/`+e},n={},r=function(e){return e.pathname.endsWith(`.css`)},i=function(i,a,o){let s=Promise.resolve();if(a&&a.length>0){let i,c=document.querySelector(`meta[property=csp-nonce]`),l=c?.nonce||c?.getAttribute(`nonce`);function u(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function d(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}s=u(a.map(a=>{a=t(a,o);let s=d(a);if(s.href in n)return;n[s.href]=!0;let c=r(s);if(i===void 0){i={all:new Set,styles:new Set};let e=document.getElementsByTagName(`link`);for(let t=e.length-1;t>=0;t--){let n=e[t];i.all.add(n.href),n.rel===`stylesheet`&&i.styles.add(n.href)}}if((c?i.styles:i.all).has(s.href))return;let u=document.createElement(`link`);if(u.rel=c?`stylesheet`:e,c||(u.as=`script`),u.crossOrigin=``,u.href=s.href,l&&u.setAttribute(`nonce`,l),document.head.appendChild(u),c)return new Promise((e,t)=>{u.addEventListener(`load`,e),u.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${s}`)))})}).filter(e=>e!==void 0))}function c(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return s.then(e=>{for(let t of e||[])t.status===`rejected`&&c(t.reason);return i().catch(c)})},a=`true`,o=`false`,s=a===`true`,c=o===`true`;function l(e={}){let{immediate:t=!1,onNeedReload:n,onNeedRefresh:r,onOfflineReady:a,onRegistered:o,onRegisteredSW:l,onRegisterError:u}=e,d,f,p,m=async(e=!0)=>{await f,s||p?.()};async function h(){if(`serviceWorker`in navigator){if(d=await i(async()=>{let{Workbox:e}=await import(`./workbox-window.prod.es5-Bd17z0YL.js`);return{Workbox:e}},[]).then(({Workbox:e})=>new e(`/crescendo-sim/sw.js`,{scope:`/crescendo-sim/`,type:`classic`})).catch(e=>{u?.(e)}),!d)return;if(p=()=>{d?.messageSkipWaiting()},!c){if(s)d.addEventListener(`activated`,e=>{(e.isUpdate||e.isExternal)&&(n?n():window.location.reload())}),d.addEventListener(`installed`,e=>{e.isUpdate||a?.()});else{let e=!1,t=()=>{e=!0,d?.addEventListener(`controlling`,e=>{e.isUpdate&&(n?n():window.location.reload())}),r?.()};d.addEventListener(`installed`,n=>{n.isUpdate===void 0?n.isExternal===void 0?!e&&a?.():n.isExternal?t():!e&&a?.():n.isUpdate||a?.()}),d.addEventListener(`waiting`,t)}}d.register({immediate:t}).then(e=>{l?l(`/crescendo-sim/sw.js`,e):o?.(e)}).catch(e=>{u?.(e)})}}return f=h(),m}var u={mx:0,my:0,rot:0,shoot:!1,intake:!1,special:!1,climb:!1,amp:!1,amplify:!1,coop:!1,highNote:!1},d={vx:0,vy:0,omega:0,heading:null,shoot:!1,amp:!1,climb:!1},f={robot:`TEAM'S OWN AUTO`,drive:`DRIVE IT YOURSELF`,none:`SIT STILL`,leave:`LEAVE ONLY`,two:`2 NOTE`,four:`4 NOTE`},p={auto:!0,teleopTime:135,unlimited:!1,fouls:!0,humanPlayer:`auto`,stage:!0,aiLevel:`normal`,bots:!0,pinLimit:5,modded:!1,autoIntake:!1};function m(e,t){try{let n=localStorage.getItem(e);return n==null?t:JSON.parse(n)}catch{return t}}function h(e,t){try{return localStorage.setItem(e,JSON.stringify(t)),!0}catch{return!1}}function g(e){try{localStorage.removeItem(e)}catch{}}var _={pause:`Escape`,reset:`KeyR`,fullscreen:``,camera:`Space`,up:`KeyW`,down:`KeyS`,left:`KeyA`,right:`KeyD`,rotL:`KeyJ`,rotR:`KeyL`,intake:`Quote`,shoot:`KeyK`,amp:`KeyF`,special:`KeyC`,climb:`KeyV`,amplify:`KeyQ`,coop:`KeyE`,highNote:`KeyH`},v={pause:9,reset:-1,camera:8,intake:6,shoot:7,amp:4,special:0,climb:5,amplify:2,coop:1,highNote:3},y={name:`Driver`,volume:.7,camera:`driver`,frameRate:`vsync`,graphics:typeof navigator<`u`&&navigator.maxTouchPoints>0&&Math.min(screen.width,screen.height)<820?`low`:`high`,deadzone:.08,curve:2,touch:`auto`,separateAmp:!0,keys:_,pad:v},b={alliance:`blue`,robot:`254`,pos:{x:1.37,y:5.55,heading:0},auto:`robot`,bots:[`1690`,`1678`,`6328`,`3005`,`1323`],rules:p,mods:{}},x={...y,...m(`crescendo.settings`,{})},S=x.keys,C=S&&Object.values(S).every(e=>typeof e==`string`)&&!(`aim`in S);x.keys=C?{..._,...x.keys}:{..._},C&&!(`amp`in S)&&x.keys.fullscreen===`KeyF`&&(x.keys.fullscreen=``),x.pad=`aim`in(x.pad??{})?{...v}:{...v,...x.pad};var w={...b,...m(`crescendo.setup`,{})};w.rules={...p,...w.rules};var T=()=>h(`crescendo.settings`,x),E=()=>h(`crescendo.setup`,w),D=null;function O(){try{return D??=new AudioContext,D.state===`suspended`&&D.resume(),D}catch{return null}}function k(e,t,n=`square`,r=.12,i=0){let a=O();if(!a||x.volume<=0)return;let o=a.createOscillator(),s=a.createGain();o.type=n,o.frequency.setValueAtTime(e,a.currentTime),i&&o.frequency.exponentialRampToValueAtTime(Math.max(30,e+i),a.currentTime+t),s.gain.setValueAtTime(r*x.volume,a.currentTime),s.gain.exponentialRampToValueAtTime(1e-4,a.currentTime+t),o.connect(s).connect(a.destination),o.start(),o.stop(a.currentTime+t)}var A={shot:()=>k(520,.08,`square`,.05,-300),score:()=>{k(660,.08,`square`,.08),setTimeout(()=>k(990,.12,`square`,.08),70)},amplify:()=>[523,659,784,1047].forEach((e,t)=>setTimeout(()=>k(e,.12,`square`,.08),t*70)),foul:()=>k(140,.35,`sawtooth`,.1),horn:()=>k(220,.7,`sawtooth`,.1),click:()=>k(880,.03,`square`,.04),unlock:()=>O()},j=(e,t)=>({x:e,y:t}),M=(e,t)=>Math.hypot(e.x-t.x,e.y-t.y),N=(e,t,n)=>e<t?t:e>n?n:e,ee=e=>{for(;e>Math.PI;)e-=2*Math.PI;for(;e<-Math.PI;)e+=2*Math.PI;return e};function P(e,t,n,r,i){let a=Math.cos(i),o=Math.sin(i),s=[];for(let[i,c]of[[n,r],[-n,r],[-n,-r],[n,-r]])s.push({x:e+i*a-c*o,y:t+i*o+c*a});return s}function te(e){let t=0,n=0;for(let r of e)t+=r.x,n+=r.y;return{x:t/e.length,y:n/e.length}}function ne(e,t){let n=te(e);return e.map(e=>({x:n.x+(e.x-n.x)*t,y:n.y+(e.y-n.y)*t}))}function re(e,t,n){let r=1/0,i=-1/0;for(let a of e){let e=a.x*t+a.y*n;e<r&&(r=e),e>i&&(i=e)}return[r,i]}function F(e,t){let n=1/0,r=0,i=0;for(let a of[e,t])for(let o=0;o<a.length;o++){let s=a[o],c=a[(o+1)%a.length],l=-(c.y-s.y),u=c.x-s.x,d=Math.hypot(l,u);if(d<1e-9)continue;l/=d,u/=d;let[f,p]=re(e,l,u),[m,h]=re(t,l,u),g=Math.min(p,h)-Math.max(f,m);if(g<=0)return null;g<n&&(n=g,r=l,i=u)}let a=te(e),o=te(t);return(a.x-o.x)*r+(a.y-o.y)*i<0&&(r=-r,i=-i),{nx:r,ny:i,depth:n}}function ie(e,t){let n=!1;for(let r=0,i=t.length-1;r<t.length;i=r++){let a=t[r],o=t[i];a.y>e.y!=o.y>e.y&&e.x<(o.x-a.x)*(e.y-a.y)/(o.y-a.y)+a.x&&(n=!n)}return n}function ae(e,t,n,r){let i=(e,t,n)=>(t.x-e.x)*(n.y-e.y)-(t.y-e.y)*(n.x-e.x),a=i(n,r,e),o=i(n,r,t),s=i(e,t,n),c=i(e,t,r);return a*o<0&&s*c<0}function I(e,t,n){if(ie(e,n)||ie(t,n))return!0;for(let r=0;r<n.length;r++)if(ae(e,t,n[r],n[(r+1)%n.length]))return!0;return!1}var L=[`blue`,`red`],R=e=>e===`blue`?`red`:`blue`,z=.0254,oe=Math.PI/180,B=651.223*z,V=323.277*z,se=B/2,H=(e,t)=>e===`blue`?t:B-t,ce=e=>e===`blue`?1:-1,le=(e,t)=>e===`blue`?t:B-t,ue=2*z,de=76.1*z,fe=231.2*z,pe=130*z,me=17.75*z,U=218.42*z,he=41.375*z/2,ge=18*z,_e=78*z,W=82.875*z,ve=14*oe,G=e=>_e+e*Math.tan(ve),ye=100*z,be=30*z,xe=.22,Se=G(xe),Ce=e=>j(H(e,xe),U),we=36.125*z,Te=41*z,Ee=20.5*z,De=37*z,Oe=8.375*z,ke=7*z;function Ae(e){return Ft([j(0,4.506468),j(we,5.027168),j(we,6.068567999999999),j(0,6.589267999999999)].map(t=>j(H(e,t.x),t.y)))}var je=72.5*z,Me=23*z,Ne=48*z,Pe=14*z,Fe={halfW:12*z,bottom:26*z,top:44*z,depth:3.875*z},Ie=e=>j(H(e,je),V),Le=e=>j(H(e,je),7.711235799999999),Re=.5,ze=42.88*z,Be=74.3*z,Ve=18.75*z,He={halfW:75.25*z/2,bottom:36.75*z,top:42.75*z};function Ue(e){let t=R(e),n=j(H(t,0),ze),r=j(H(t,Be),0),i=e===`blue`?120*oe:60*oe;return{a:n,b:r,mid:j((n.x+r.x)/2,(n.y+r.y)/2),nx:Math.cos(i),ny:Math.sin(i)}}var We=e=>Ue(e).mid;function Ge(e){let t=Ue(e);return j(t.mid.x+t.nx*.95,t.mid.y+t.ny*.95)}function Ke(e){let t=Ue(e);return Ft([j(H(R(e),0),0),t.a,t.b])}function qe(e){let t=Ue(e),n=e=>j(e.x+t.nx*Ve,e.y+t.ny*Ve),r=n(t.a),i=n(t.b),a=(t.a.x-r.x)/(t.b.x-t.a.x),o=j(t.a.x,r.y+a*(t.b.y-t.a.y)),s=(t.b.x-i.x)/(t.b.x-t.a.x),c=j(t.b.x,i.y+s*(t.b.y-t.a.y));return Ft([t.a,t.b,c,o])}var Je=191.65*z,Ye=161.62*z,Xe=64.35*z,Ze=11.5*z,Qe=12.5*z,$e=74.99*z,et=92*z,tt=80*z;27.875*z;var nt=28.25*z,rt=76.25*z,it=17.83*z,at=12*z,ot=48*z,st=28.25*z;16.625*z;var ct=56.5*z,lt=88.25*z,ut=12*z,dt={w:10*z,h:17.75*z},ft=e=>j(H(e,Je),Ye),pt=e=>e===`blue`?Math.PI:0;function mt(e){let t=ft(e);return[0,1,2].map(n=>{let r=pt(e)+n*2*Math.PI/3;return j(t.x+Math.cos(r)*Xe,t.y+Math.sin(r)*Xe)})}function ht(e){let t=mt(e),n=ft(e);return[0,1,2].map(r=>{let i=t[r],a=t[(r+1)%3],o=j((i.x+a.x)/2,(i.y+a.y)/2),s=Math.hypot(o.x-n.x,o.y-n.y),c=(o.x-n.x)/s,l=(o.y-n.y)/s,u=.875157-s,d=j(i.x+c*u,i.y+l*u),f=j(a.x+c*u,a.y+l*u);return{alliance:e,index:r,a:d,b:f,mid:j((d.x+f.x)/2,(d.y+f.y)/2),nx:c,ny:l}})}var gt=e=>st+.5016499999999998*(2*e-1)**2,_t=e=>Ft(mt(e));function vt(e){let t=ft(e),n=2*Math.sqrt(3)*it,r=[];for(let i=0;i<3;i++){let a=pt(e)+i*2*Math.PI/3,o=n/Math.sqrt(3),s=t.x+Math.cos(a)*o,c=t.y+Math.sin(a)*o;for(let e of[1,-1]){let t=a+Math.PI+Math.PI/6*e;r.push(j(s+Math.cos(t)*at,c+Math.sin(t)*at))}}return Ft(r)}function yt(e){let t=ft(e),n=[],r=$e,i=.3606799999999999/Math.cos(Math.PI/6);for(let a=0;a<3;a++){let o=pt(e)+a*2*Math.PI/3,s=t.x+Math.cos(o)*r,c=t.y+Math.sin(o)*r;for(let e of[1,-1]){let t=o+Math.PI+Math.PI/6*e;n.push(j(s+Math.cos(t)*i,c+Math.sin(t)*i))}}return Ft(n)}function bt(e,t){let n=mt(e)[t],r=pt(e)+t*2*Math.PI/3+Math.PI/4,i=Qe/Math.SQRT2;return Ft([0,1,2,3].map(e=>j(n.x+Math.cos(r+e*Math.PI/2)*i,n.y+Math.sin(r+e*Math.PI/2)*i)))}var xt=[{kind:`ds`,n:1,y0:ze,y1:112*z},{kind:`ds`,n:2,y0:112*z,y1:181*z},{kind:`speaker`,n:0,y0:181*z,y1:256*z},{kind:`ds`,n:3,y0:256*z,y1:V}],St=36.75*z,Ct=78.75*z,wt=[186*z,B-186*z],Tt=38*z,Et=20*z,Dt=(()=>{let e=[];e.push({kind:`wall`,poly:Ft([j(-2,-2),j(0,-2),j(0,10.211235799999999),j(-2,10.211235799999999)])}),e.push({kind:`wall`,poly:Ft([j(B,-2),j(18.541064199999997,-2),j(18.541064199999997,10.211235799999999),j(B,10.211235799999999)])}),e.push({kind:`wall`,poly:Ft([j(-2,-2),j(18.541064199999997,-2),j(18.541064199999997,0),j(-2,0)])}),e.push({kind:`wall`,poly:Ft([j(-2,V),j(18.541064199999997,V),j(18.541064199999997,10.211235799999999),j(-2,10.211235799999999)])});for(let t of L){e.push({kind:`subwoofer`,poly:Ae(t)}),e.push({kind:`source`,poly:Ke(t)});for(let n=0;n<3;n++)e.push({kind:`leg`,poly:bt(t,n)});e.push({kind:`stage`,poly:_t(t),tallOnly:!0})}return e})(),Ot=114*z,kt=325.61*z,At=[161.64,218.64,275.64].map(e=>e*z),jt=[29.64,95.64,161.64,227.64,293.64].map(e=>e*z);function Mt(){let e=[];for(let t of At)e.push(j(Ot,t)),e.push(j(13.645464199999997,t));for(let t of jt)e.push(j(kt,t));return e}var Nt=[[1,593.68,9.68,53.38,120],[2,637.21,34.79,53.38,120],[3,652.73,196.17,57.13,180],[4,652.73,218.42,57.13,180],[5,578.77,323,53.38,270],[6,72.5,323,53.38,270],[7,-1.5,218.42,57.13,0],[8,-1.5,196.17,57.13,0],[9,14.02,34.79,53.38,60],[10,57.54,9.68,53.38,60],[11,468.69,146.19,52,300],[12,468.69,177.1,52,60],[13,441.74,161.62,52,180],[14,209.48,161.62,52,0],[15,182.73,177.1,52,120],[16,182.73,146.19,52,240]].map(([e,t,n,r,i])=>({id:e,x:t*z,y:n*z,z:r*z,yaw:i*oe})),Pt=(e,t)=>e===`blue`?t<se:t>se;function Ft(e){let t=0;for(let n=0;n<e.length;n++){let r=e[n],i=e[(n+1)%e.length];t+=r.x*i.y-i.x*r.y}return t<0?[...e].reverse():e}var It={111:{name:`WildStang`,epa:38.2,rank:121,auto:11.8,autoNotes:10.2,teleop:25.7,endgame:.7,speaker:32.1,amplified:4.16,notePts:35.9,onstage:-.01,trap:.26,harmony:-.06,winrate:.489,wins:22,losses:23},254:{name:`The Cheesy Poofs`,epa:51.7,rank:9,auto:15.9,autoNotes:13.9,teleop:29.5,endgame:6.3,speaker:39.8,amplified:5.19,notePts:43.4,onstage:3.15,trap:3.1,harmony:-.1,winrate:.892,wins:45,losses:5},1323:{name:`MadTown Robotics`,epa:55.8,rank:2,auto:19.5,autoNotes:17.7,teleop:28.6,endgame:7.7,speaker:43.3,amplified:4.88,notePts:46.3,onstage:3.66,trap:4.04,harmony:-.08,winrate:.859,wins:45,losses:7},1678:{name:`Citrus Circuits`,epa:58,rank:1,auto:18.3,autoNotes:16.6,teleop:32.5,endgame:7.2,speaker:45.6,amplified:6.01,notePts:49.2,onstage:3.33,trap:3.64,harmony:-.17,winrate:.819,wins:56,losses:12},1690:{name:`Orbit`,epa:53.6,rank:6,auto:17,autoNotes:15.1,teleop:31.3,endgame:5.3,speaker:42.3,amplified:5.78,notePts:46.4,onstage:2.81,trap:1.96,harmony:.25,winrate:.924,wins:66,losses:5},2056:{name:`OP Robotics`,epa:53.7,rank:5,auto:16.7,autoNotes:15.2,teleop:33.2,endgame:3.8,speaker:45,amplified:5.94,notePts:48.4,onstage:2.87,trap:-.23,harmony:.59,winrate:.957,wins:67,losses:3},2471:{name:`Team Mean Machine`,epa:33.3,rank:230,auto:8.2,autoNotes:6.5,teleop:21.8,endgame:3.2,speaker:25.5,amplified:3.77,notePts:28.4,onstage:2.47,trap:-.12,harmony:.54,winrate:.592,wins:29,losses:20},2910:{name:`Jack in the Bot`,epa:50.2,rank:13,auto:13,autoNotes:10.9,teleop:34.6,endgame:2.6,speaker:42.5,amplified:5.41,notePts:45.6,onstage:1.91,trap:.28,harmony:-.02,winrate:.754,wins:50,losses:16},3476:{name:`Code Orange`,epa:32.5,rank:261,auto:8.5,autoNotes:7,teleop:19.9,endgame:4.1,speaker:24.2,amplified:3.09,notePts:27,onstage:1.8,trap:1.94,harmony:-.14,winrate:.662,wins:26,losses:13},4414:{name:`HighTide`,epa:49.5,rank:14,auto:18.1,autoNotes:16.4,teleop:25.6,endgame:5.9,speaker:38.8,amplified:4.11,notePts:42,onstage:2.89,trap:2.85,harmony:.05,winrate:.825,wins:47,losses:10},6328:{name:`Mechanical Advantage`,epa:54.3,rank:4,auto:16.7,autoNotes:14.9,teleop:31.1,endgame:6.4,speaker:43.2,amplified:5.36,notePts:46.1,onstage:3.08,trap:3.13,harmony:-.14,winrate:.826,wins:57,losses:12},7414:{name:`Retrobotics`,epa:24.9,rank:627,auto:12.4,autoNotes:11.4,teleop:11.8,endgame:.7,speaker:21.9,amplified:1.18,notePts:23.2,onstage:.36,trap:.04,harmony:-.03,winrate:.535,wins:23,losses:20},3005:{name:`RoboChargers`,epa:54.9,rank:3,auto:15.9,autoNotes:13.6,teleop:34.7,endgame:4.2,speaker:43.8,amplified:6.39,notePts:48.3,onstage:3.2,trap:-.14,harmony:.99,winrate:.855,wins:59,losses:10},1796:{name:`RoboTigers`,epa:53,rank:7,auto:18.6,autoNotes:17,teleop:28.2,endgame:6.2,speaker:41.7,amplified:5.2,notePts:45.2,onstage:2.75,trap:3.32,harmony:-.13,winrate:.845,wins:49,losses:9},1771:{name:`North Gwinnett Robotics`,epa:52.7,rank:8,auto:19.9,autoNotes:18,teleop:27.2,endgame:5.6,speaker:42.4,amplified:4.18,notePts:45.2,onstage:2.13,trap:3.33,harmony:-.12,winrate:.892,wins:58,losses:7},1756:{name:`Argos`,epa:51.7,rank:10,auto:12.2,autoNotes:10.3,teleop:33.4,endgame:6.1,speaker:40,amplified:5.76,notePts:43.7,onstage:2.35,trap:3.66,harmony:-.15,winrate:.755,wins:35,losses:11},1706:{name:`Ratchet Rockers`,epa:51.3,rank:11,auto:17,autoNotes:15.2,teleop:28.1,endgame:6.2,speaker:40.1,amplified:4.79,notePts:43.3,onstage:3.13,trap:3,harmony:-.06,winrate:.917,wins:44,losses:4},604:{name:`Quixilver`,epa:50.9,rank:12,auto:16.6,autoNotes:14.9,teleop:28.6,endgame:5.8,speaker:40.6,amplified:4.61,notePts:43.5,onstage:2.74,trap:3,harmony:-.1,winrate:.848,wins:58,losses:10},5940:{name:`BREAD`,epa:49.2,rank:15,auto:15.7,autoNotes:14,teleop:26.9,endgame:6.7,speaker:37.7,amplified:4.85,notePts:40.8,onstage:2.53,trap:3.94,harmony:-.13,winrate:.783,wins:47,losses:13},4613:{name:`Barker Redbacks`,epa:48.4,rank:16,auto:13.2,autoNotes:11.3,teleop:33,endgame:2.1,speaker:40.8,amplified:5.22,notePts:44.3,onstage:1.65,trap:-.41,harmony:.35,winrate:.908,wins:44,losses:4},359:{name:`Hawaiian Kids`,epa:47.6,rank:20,auto:15.3,autoNotes:13.5,teleop:25.8,endgame:6.5,speaker:35.6,amplified:4.49,notePts:39.3,onstage:3.14,trap:3.25,harmony:-.02,winrate:.867,wins:68,losses:10},3847:{name:`Spectrum   -△◅`,epa:46.9,rank:22,auto:15.3,autoNotes:13.9,teleop:26.3,endgame:5.3,speaker:36.9,amplified:4.3,notePts:40.1,onstage:2.59,trap:2.89,harmony:-.28,winrate:.785,wins:51,losses:14},2767:{name:`Stryke Force`,epa:45.4,rank:27,auto:13.8,autoNotes:12.2,teleop:25,endgame:6.7,speaker:33.8,amplified:4.67,notePts:37.2,onstage:3.3,trap:3.51,harmony:.05,winrate:.75,wins:45,losses:15},5460:{name:`Strike Zone`,epa:45.3,rank:29,auto:13.8,autoNotes:11.7,teleop:26.7,endgame:4.8,speaker:35.4,amplified:4.26,notePts:38.4,onstage:2.38,trap:2.37,harmony:-.09,winrate:.642,wins:51,losses:28},125:{name:`NUTRONs`,epa:44.9,rank:32,auto:15,autoNotes:13.5,teleop:23.1,endgame:6.7,speaker:33.5,amplified:3.87,notePts:36.6,onstage:3.14,trap:3.71,harmony:-.2,winrate:.735,wins:50,losses:18},118:{name:`Robonauts`,epa:40.9,rank:78,auto:14,autoNotes:12.4,teleop:21.1,endgame:5.8,speaker:30.9,amplified:4.18,notePts:33.5,onstage:3.04,trap:2.76,harmony:-.1,winrate:.82,wins:93,losses:20},4522:{name:`Team SCREAM`,epa:42.4,rank:55,auto:13.2,autoNotes:11.6,teleop:24.8,endgame:4.4,speaker:33,amplified:4.19,notePts:36.4,onstage:1.81,trap:2.18,harmony:-.14,winrate:.779,wins:53,losses:15},9432:{name:`Team 8-Bit`,epa:26.8,rank:494,auto:10.5,autoNotes:9,teleop:16.3,endgame:-0,speaker:22.5,amplified:2.35,notePts:25.3,onstage:-.49,trap:-.56,harmony:-.04,winrate:.59,wins:23,losses:16},321:{name:`RoboLancers`,epa:17.4,rank:1322,auto:8,autoNotes:6.3,teleop:9,endgame:.4,speaker:14,amplified:.88,notePts:15.3,onstage:.39,trap:-.49,harmony:-.05,winrate:.556,wins:34,losses:27},971:{name:`Spartan Robotics`,epa:32.7,rank:251,auto:14.3,autoNotes:13,teleop:15.4,endgame:3,speaker:26.8,amplified:2.25,notePts:28.4,onstage:1.8,trap:.99,harmony:-.07,winrate:.643,wins:27,losses:15},9496:{name:`LYNK`,epa:42.5,rank:53,auto:15.8,autoNotes:14,teleop:25.2,endgame:1.5,speaker:36.6,amplified:3.56,notePts:39.2,onstage:.62,trap:.18,harmony:.11,winrate:.804,wins:74,losses:18},1114:{name:`Simbotics`,epa:40.7,rank:80,auto:13,autoNotes:11.3,teleop:26.1,endgame:1.7,speaker:34.6,amplified:4.03,notePts:37.3,onstage:1.12,trap:-.01,harmony:-.04,winrate:.556,wins:35,losses:28},368:{name:`Team Kika Mana`,epa:47.2,rank:21,auto:16.9,autoNotes:15,teleop:23.5,endgame:6.8,speaker:35.7,amplified:3.75,notePts:38.5,onstage:2.96,trap:3.95,harmony:-.05,winrate:.889,wins:40,losses:5},2046:{name:`Bear Metal`,epa:41.8,rank:68,auto:11,autoNotes:9.2,teleop:26.6,endgame:4.3,speaker:32.4,amplified:4.26,notePts:35.8,onstage:2.28,trap:2.04,harmony:-.15,winrate:.79,wins:64,losses:17}},Lt=[{key:`speed`,label:`SPEED`,unit:`ft/s`,min:6,max:40,step:.5},{key:`accel`,label:`ACCELERATION`,unit:`ft/s2`,min:6,max:100,step:1},{key:`weight`,label:`PUSH`,unit:`lb`,min:60,max:300,step:5},{key:`range`,label:`SHOT RANGE`,unit:`ft`,min:3,max:40,step:.5},{key:`accuracy`,label:`ACCURACY`,unit:`%`,min:0,max:100,step:1},{key:`shootOnMove`,label:`SHOOT ON MOVE`,unit:`%`,min:0,max:100,step:1},{key:`indexTime`,label:`INDEX TIME`,unit:`s`,min:.05,max:2,step:.05,lowerBetter:!0},{key:`climbTime`,label:`CLIMB TIME`,unit:`s`,min:0,max:15,step:.5,lowerBetter:!0}],Rt=It,zt=(e,t,n,r,i,a,o,s)=>({speed:e,accel:t,weight:n,range:r,accuracy:i,shootOnMove:a,indexTime:o,climbTime:s}),Bt=e=>Math.max(0,Math.min(1,e));function Vt(e){if(!e)return{autoNotes:1,centerAuto:!1,ampShare:.3,climbRate:0,trapRate:0,role:`scorer`,passer:!1,pace:.5};let t=Math.max(1,e.teleop/2.4),n=Bt(e.onstage/3);return{autoNotes:Math.round(Math.max(1,Math.min(6,e.autoNotes/5*1.05))*100)/100,centerAuto:e.autoNotes/5>=2.6,ampShare:Math.max(.08,Math.min(.5,(e.notePts-e.speaker)/t)),climbRate:n,trapRate:n>.05?Bt(e.trap/5/n):0,role:`scorer`,passer:!1,pace:Math.max(.15,Math.min(1,(e.epa-10)/45))}}function Ht(e,t){let n=Rt[String(e)],r={...Vt(n),...t.behavior};return{key:String(e),team:e,name:t.name??n?.name??`Team ${e}`,robotName:t.robotName,stats:t.stats,intake:t.intake??(t.look.intakeStyle===`source`?`source`:`ground`),underStage:t.look.height<27.875,amp:!0,trap:r.trapRate>.05,turret:t.look.shooter===`turret`,dualIntake:!!t.dualIntake,drive:t.drive??`swerve`,frame:t.frame??[27,27],look:t.look,behavior:r,real:n&&{epa:n.epa,rank:n.rank,auto:n.auto,teleop:n.teleop,endgame:n.endgame,wins:n.wins,losses:n.losses,winrate:n.winrate,autoNotes:n.autoNotes,speaker:n.speaker,notePts:n.notePts,onstage:n.onstage,trap:n.trap},notes:t.notes,champion:t.champion,place:Ut[String(e)]??``}}var Ut={1678:`Davis, CA`,1323:`Madera, CA`,3005:`Dallas, TX`,6328:`Littleton, MA`,2056:`Stoney Creek, ON`,1690:`Binyamina, Israel`,1796:`Queens, NY`,1771:`Suwanee, GA`,254:`San Jose, CA`,1756:`Peoria, IL`,1706:`Wentzville, MO`,604:`San Jose, CA`,2910:`Mill Creek, WA`,4414:`Ventura, CA`,5940:`Redwood City, CA`,4613:`Sydney, Australia`,359:`Waialua, HI`,368:`Honolulu, HI`,3847:`Houston, TX`,2767:`Kalamazoo, MI`,5460:`Lapeer, MI`,125:`Revere, MA`,118:`Houston, TX`,4522:`Sedalia, MO`,9432:`Anthem, AZ`,321:`Philadelphia, PA`,971:`Mountain View, CA`,9496:`Spindale, NC`,1114:`St Catharines, ON`,2046:`Maple Valley, WA`,111:`Arlington Heights, IL`,2471:`Camas, WA`,3476:`Irvine, CA`,7414:`Collegeville, PA`},Wt=`#b9bec6`,Gt=`#1c1d21`,Kt=`#3a3d43`,qt=`#ff7a2a`,Jt=`#5ac36b`,Yt=`#8d939c`,Xt=[Ht(1678,{frame:[26,26],stats:zt(17,38,150,24,93,65,.2,3.8),look:{frameColor:`#c9ccd1`,accent:`#3a3d43`,wheels:`#e2793a`,rollers:`#9bd84a`,height:25,shooter:`pivot`,shooterPos:-.55,ampMech:`intake`,intakeStyle:`otb`,climber:`arms`,numbers:`condensed`},behavior:{passer:!0},notes:`Back-mounted pivoting shooter; the front over-bumper intake also scores the amp. Climber arm + trap. #1 EPA of 2024.`}),Ht(1323,{frame:[27,27],stats:zt(17,38,152,24,93,55,.2,3.6),look:{frameColor:`#2350c8`,accent:Gt,wheels:Gt,height:26,shooter:`arm`,shooterPos:-.4,ampMech:`arm`,intakeStyle:`utb`,climber:`hooks`},behavior:{passer:!0},notes:`A long blue powder-coated arm carries the shooter, amp and trap, and folds low enough for the stage. #2 EPA.`}),Ht(3005,{robotName:`Surge`,frame:[27,27],stats:zt(18.5,40,150,24,92,55,.2,3.5),look:{frameColor:Gt,accent:`#24262b`,wheels:qt,height:27,shooter:`pivot`,shooterPos:-.45,ampMech:`diverter`,intakeStyle:`utb`,climber:`telescope`},dualIntake:!0,behavior:{passer:!0},notes:`Double-sided under-bumper intake, pivoting launcher with a diverter for amp shots, single telescoping side climber, fast MAXSwerve. No trap.`}),Ht(6328,{frame:[27,27],stats:zt(16.5,38,148,24,93,75,.22,4),look:{frameColor:`#1f6fd1`,accent:Gt,wheels:Yt,height:25,shooter:`pivot`,shooterPos:-.6,ampMech:`shooter`,intakeStyle:`utb`,climber:`hooks`},behavior:{passer:!0},notes:`Large back pivot fed from an under-bumper intake (the "6328/4481 style"); strong shoot-on-the-move.`}),Ht(2056,{frame:[26,26],stats:zt(17,38,152,23,94,50,.22,4),look:{frameColor:Gt,accent:`#23324d`,wheels:Yt,height:22,shooter:`arm`,shooterPos:-.35,ampMech:`arm`,intakeStyle:`utb`,climber:`hooks`,lights:`#ff3fd0`},behavior:{passer:!0},notes:`Swinging arm shooter over an under-bumper intake (the "2056 style"), zero-backlash arm gearbox. 0.96 win rate; no trap.`}),Ht(1690,{robotName:`Doppler`,frame:[26,26],stats:zt(17.5,40,145,24,93,70,.2,3.5),look:{frameColor:Gt,accent:`#e8e9ec`,wheels:Gt,rollers:`#3fbf5a`,lights:`#43ff7a`,height:11,shooter:`pivot`,shooterPos:-.3,ampMech:`shooter`,intakeStyle:`utb`,climber:`hooks`},behavior:{passer:!0},champion:!0,notes:`About 11 in tall with the shooter stowed; it pivots up to fire. Captain of the 2024 World Champion alliance.`}),Ht(1796,{frame:[27,27],stats:zt(17,38,150,23,92,55,.22,4),look:{frameColor:`#36c24e`,accent:Gt,wheels:qt,height:26,shooter:`pivot`,shooterPos:-.5,ampMech:`shooter`,intakeStyle:`utb`,climber:`hooks`},behavior:{passer:!0},notes:`Bright green powder-coated pivot shooter with orange flywheels; climbs and traps.`}),Ht(1771,{frame:[26,26],stats:zt(17,38,148,23,93,55,.2,4),look:{frameColor:Gt,accent:`#c8282e`,wheels:`#c8282e`,height:24,shooter:`pivot`,shooterPos:-.4,ampMech:`shooter`,intakeStyle:`utb`,climber:`hooks`},behavior:{passer:!0},notes:`Compact black-and-red pivot shooter with the best autos in the 2024 top 10.`}),Ht(254,{robotName:`Vortex`,frame:[27,27],stats:zt(16.5,38,150,22,92,82,.24,4),look:{frameColor:Gt,accent:`#1f5fff`,wheels:`#e2793a`,rollers:`#79b8e8`,lights:`#43ff6a`,height:26.5,shooter:`turret`,shooterPos:-.15,ampMech:`elevator`,intakeStyle:`utb`,climber:`winch`,numbers:`italic`},behavior:{passer:!0},notes:`Turreted shooter with adjustable angle, full-width under-bumper intake, "Amplifier" elevator for amp/trap/source feeding, winch-down climber arms. Einstein finalist.`}),Ht(1756,{frame:[27,27],stats:zt(16,36,152,21,91,40,.25,4.5),look:{frameColor:Gt,accent:`#f2c21b`,wheels:Gt,height:34,shooter:`elevator`,shooterPos:.1,ampMech:`elevator`,intakeStyle:`utb`,climber:`hooks`,towers:`twin`,panel:Gt},notes:`Shooter rides an elevator between tall yellow uprights (black-and-yellow CAT livery); trap off the elevator.`}),Ht(1706,{robotName:`Riot`,frame:[27,27],stats:zt(16.5,36,150,22,92,45,.22,4),look:{frameColor:Wt,accent:`#2b6fd8`,wheels:qt,height:26,shooter:`elevator`,shooterPos:-.1,ampMech:`elevator`,intakeStyle:`utb`,climber:`telescope`},dualIntake:!0,notes:`Pocketed elevator with a long shooter on top, double-sided intake, Thrifty climber-in-a-box.`}),Ht(604,{frame:[27,27],stats:zt(16.5,36,150,22,91,45,.25,4.5),look:{frameColor:`#7b7f87`,accent:`#e8c547`,wheels:`#e8c547`,height:27,shooter:`pivot`,shooterPos:-.2,ampMech:`elevator`,intakeStyle:`otb`,climber:`telescope`},notes:`High pivot shooter/amp on a one-stage elevator, flexible polycarbonate over-bumper intake.`}),Ht(2910,{robotName:`Typhoon`,frame:[26.5,26.5],stats:zt(17,38,150,24,91,85,.3,4.5),look:{frameColor:Wt,accent:Gt,wheels:`#6f8fb5`,height:21.6,shooter:`turret`,shooterPos:0,ampMech:`shooter`,intakeStyle:`utb`,climber:`hooks`},behavior:{passer:!0},notes:`Their shortest robot yet (21.6 in): a turret fed from both sides so it loads at any angle. The climber kept stalling, so it rarely hung.`}),Ht(4414,{robotName:`TIDEPOD`,frame:[27,27],stats:zt(17,38,150,22,91,78,.24,4),look:{frameColor:Gt,accent:`#1fb5b0`,wheels:Gt,height:26,shooter:`turret`,shooterPos:0,ampMech:`shooter`,intakeStyle:`utb`,climber:`hooks`},behavior:{passer:!0},notes:`Black turreted shooter fed off a flat plate, under-bumper intake; strong 5-note autos.`}),Ht(5940,{robotName:`Roti`,frame:[27,27],stats:zt(16,36,152,21,91,40,.25,4),look:{frameColor:Wt,accent:`#5d3fd3`,wheels:qt,height:34,shooter:`elevator`,shooterPos:0,ampMech:`elevator`,intakeStyle:`utb`,climber:`hooks`,towers:`twin`,lights:`#a040ff`},notes:`Shooter rides an elevator between twin uprights (purple underglow); one of the most frequent trap scorers.`}),Ht(4613,{frame:[23,23],stats:zt(17,40,132,22,92,40,.22,5),look:{frameColor:`#d7dbe0`,accent:Gt,wheels:Yt,height:20,shooter:`pivot`,shooterPos:0,ampMech:`shooter`,intakeStyle:`utb`,climber:`hooks`},notes:`Tiny, simple, very effective pivot shooter from Australia; no trap.`}),Ht(359,{frame:[27,27],stats:zt(16.5,36,150,21,90,40,.25,4),look:{frameColor:Gt,accent:`#7ed957`,wheels:Gt,height:27,shooter:`arm`,shooterPos:-.2,ampMech:`arm`,intakeStyle:`otb`,climber:`hooks`},notes:`Over-bumper intake hands off to an arm-and-wrist shooter; a very efficient trap and an "antenna" to brace off the stage. (Colors approximate.)`}),Ht(368,{frame:[26,26],stats:zt(16.5,36,150,21,90,40,.24,3),look:{frameColor:`#e6d3dc`,accent:`#c94a7a`,wheels:Gt,height:40,shooter:`pivot`,shooterPos:-.3,ampMech:`shooter`,intakeStyle:`utb`,climber:`hooks`,towers:`mast`},notes:`Hooks pre-deployed and "the fastest trap in the West" (under 3 s); wing-line shooter.`}),Ht(3847,{name:`Spectrum`,frame:[27,27],stats:zt(16.5,36,150,21,90,40,.25,4.5),look:{frameColor:Gt,accent:`#7b3fe4`,wheels:Gt,height:27,shooter:`pivot`,shooterPos:-.3,ampMech:`elevator`,intakeStyle:`utb`,climber:`hooks`},notes:`Pivot launcher with an elevator for amp and trap; famously detailed Open Alliance build blog. (Colors approximate.)`}),Ht(2767,{frame:[27,27],stats:zt(16,36,150,20,90,35,.26,4),look:{frameColor:Gt,accent:`#ffd21f`,wheels:Gt,height:27,shooter:`arm`,shooterPos:-.2,ampMech:`arm`,intakeStyle:`utb`,climber:`arms`,panel:`#ffd21f`},notes:`Yellow arm and Stryker sponsor panel; climber arm inspired by 6377, scores the trap.`}),Ht(5460,{frame:[27,27],stats:zt(16,36,150,21,89,35,.27,5),look:{frameColor:`#4caf3f`,accent:`#2a2f6b`,wheels:Jt,height:27,shooter:`arm`,shooterPos:-.3,ampMech:`arm`,intakeStyle:`utb`,climber:`hooks`},notes:`Big green-and-navy arm with the shooter at the end ("big arm" architecture).`}),Ht(125,{frame:[27,27],stats:zt(16,36,150,20,89,30,.26,4),look:{frameColor:Gt,accent:`#f26a1b`,wheels:Gt,height:30,shooter:`pivot`,shooterPos:-.1,ampMech:`arm`,intakeStyle:`utb`,climber:`arms`,towers:`twin`},dualIntake:!0,notes:`Bi-directional intake and tall orange climber/trap arms.`}),Ht(118,{robotName:`Twister`,frame:[27,27],stats:zt(16,34,150,20,88,70,.3,4.5),look:{frameColor:`#d9a92a`,accent:`#1e2a5a`,wheels:Gt,height:32,shooter:`turret`,shooterPos:0,ampMech:`arm`,intakeStyle:`utb`,climber:`hooks`},behavior:{passer:!0},notes:`Turret with a 360° note feed ("it's called Twister for a reason"); gold-anodized parts.`}),Ht(4522,{frame:[27,27],stats:zt(16,36,150,20,89,35,.27,5),look:{frameColor:Wt,accent:`#c8282e`,wheels:Gt,height:36,shooter:`pivot`,shooterPos:-.2,ampMech:`elevator`,intakeStyle:`utb`,climber:`hooks`,towers:`box`},champion:!0,notes:`Tall trap mechanism over a pivot shooter. First pick of the 2024 World Champion alliance.`}),Ht(9432,{name:`Team 8-Bit`,frame:[26,26],stats:zt(16,38,155,15,82,10,.35,0),look:{frameColor:Kt,accent:`#9fb8c8`,wheels:Gt,height:18,shooter:`pivot`,shooterPos:0,ampMech:`shooter`,intakeStyle:`utb`,climber:`none`,lights:`#3fe8ff`},behavior:{passer:!0,climbRate:0,trapRate:0},champion:!0,notes:`Low robot with cyan lights. Scored for itself in qualifications; on the 2024 World Champion alliance it fed notes to 1690 and 4522.`}),Ht(321,{frame:[26,26],stats:zt(15.5,40,160,10,68,0,.45,0),look:{frameColor:Gt,accent:Kt,wheels:Gt,height:22,shooter:`fixed`,shooterPos:0,ampMech:`shooter`,intakeStyle:`utb`,climber:`none`,lights:`#3dff6e`},behavior:{role:`defender`,climbRate:0,trapRate:0},champion:!0,notes:`Low, heavy robot with green lights; a 2024 World Champion as the alliance's defender.`}),Ht(971,{robotName:`Sublime`,frame:[27,27],stats:zt(15.5,34,155,18,85,30,.3,5),look:{frameColor:Wt,accent:`#d8253a`,wheels:`#d8253a`,height:44,shooter:`pivot`,shooterPos:.1,ampMech:`arm`,intakeStyle:`utb`,climber:`hooks`,towers:`box`},notes:`Tall raw-aluminum tower with a red hood up top and a compact amp mechanism.`}),Ht(9496,{name:`LYNK`,frame:[27,27],stats:zt(16.5,36,150,21,90,35,.25,5),look:{frameColor:Gt,accent:`#ff6a13`,wheels:Yt,height:30,shooter:`pivot`,shooterPos:-.2,ampMech:`shooter`,intakeStyle:`utb`,climber:`hooks`},notes:`Rookie standout: clean pivot shooter and tall orange climber hooks (it rarely hung).`}),Ht(1114,{robotName:`Skyfall`,frame:[27,27],stats:zt(16,36,150,20,88,35,.28,5),look:{frameColor:Gt,accent:`#5a5f68`,wheels:Gt,height:25,shooter:`pivot`,shooterPos:-.1,ampMech:`elevator`,intakeStyle:`utb`,climber:`hooks`},notes:`Low black wedge with a pivot shooter; the elevator extends to score the amp.`}),Ht(2046,{robotName:`Bearitone`,frame:[27,27],stats:zt(15.5,34,152,19,87,25,.3,5),look:{frameColor:Gt,accent:`#f5c518`,wheels:`#d9d9d9`,height:33,shooter:`pivot`,shooterPos:-.1,ampMech:`arm`,intakeStyle:`utb`,climber:`arms`,towers:`twin`},notes:`"Baton" amp/trap arm, "Soprano" shooter, "Sforzando" climber, black-and-yellow.`}),Ht(111,{frame:[27,27],stats:zt(15.5,34,150,19,86,25,.3,0),look:{frameColor:Wt,accent:`#2f6fe0`,wheels:qt,height:38,shooter:`pivot`,shooterPos:.15,ampMech:`shooter`,intakeStyle:`otb`,climber:`none`,towers:`mast`,panel:`#d23cff`},notes:`Tall frame with a moving intake that hands off to the shooter (the "111 archetype"); no climber.`}),Ht(2471,{frame:[27,27],stats:zt(15,32,150,16,84,15,.35,5),look:{frameColor:Gt,accent:`#c8282e`,wheels:`#c8282e`,height:32,shooter:`pivot`,shooterPos:-.4,ampMech:`shooter`,intakeStyle:`utb`,climber:`hooks`,panel:`#5a3b28`},notes:`Big sponsor panel across the back, stacked red flywheels; climbs most matches.`}),Ht(3476,{robotName:`Haleiwa`,frame:[27,27],stats:zt(15,32,148,15,84,20,.35,5.5),look:{frameColor:`#f07a1f`,accent:`#1fa3a8`,wheels:`#f07a1f`,height:22,shooter:`pivot`,shooterPos:0,ampMech:`sideways`,intakeStyle:`utb`,climber:`hooks`},notes:`Orange-and-teal anodized robot with a sideways elevator ("#sidewayselevatorgang").`}),Ht(7414,{frame:[26,26],stats:zt(14.5,30,145,13,80,10,.4,0),look:{frameColor:Wt,accent:`#ff7f27`,wheels:Gt,height:20,shooter:`pivot`,shooterPos:.1,ampMech:`shooter`,intakeStyle:`utb`,climber:`none`},notes:`Low raw-aluminum shooter; solid autos but no climber.`}),Ht(9999,{name:`KitBot`,robotName:`FIRST KitBot`,frame:[28,24],drive:`tank`,stats:zt(12,20,120,6,78,0,.6,0),look:{frameColor:Wt,accent:`#c49a6c`,wheels:`#3a3d43`,height:22,shooter:`fixed`,shooterPos:.2,ampMech:`shooter`,intakeStyle:`source`,climber:`none`},behavior:{autoNotes:1,centerAuto:!1,ampShare:.3,climbRate:0,trapRate:0,role:`scorer`,passer:!1,pace:.45},notes:`FIRST's 2024 KitBot: tank drive, fed by the human player at the source, fixed launcher for subwoofer and amp shots.`})],Zt=e=>Xt.find(t=>t.key===e)??Xt[0];function Qt(e){let t=[];return e.champion&&t.push(`WORLD CHAMP`),e.turret&&t.push(`TURRET`),e.look.shooter===`arm`&&t.push(`ARM`),(e.look.shooter===`elevator`||e.look.ampMech===`elevator`||e.look.ampMech===`sideways`)&&t.push(`ELEVATOR`),e.underStage&&t.push(`UNDER STAGE`),e.stats.climbTime>0&&e.behavior.climbRate>.3&&t.push(`CLIMB`),e.trap&&e.behavior.trapRate>.4&&t.push(`TRAP`),e.dualIntake&&t.push(`DUAL INTAKE`),e.intake===`source`&&t.push(`SOURCE ONLY`),e.behavior.passer&&t.push(`PASSER`),e.behavior.role===`defender`&&t.push(`DEFENSE`),e.drive===`tank`&&t.push(`TANK DRIVE`),e.stats.range>=22&&t.push(`LONG SHOT`),t}var $t=[`ALL`,`WORLD CHAMP`,`TURRET`,`ARM`,`ELEVATOR`,`UNDER STAGE`,`CLIMB`,`TRAP`,`DUAL INTAKE`,`PASSER`,`DEFENSE`,`LONG SHOT`,`SOURCE ONLY`,`TANK DRIVE`];function en(e){let t=e.stats,n=(e,t,n)=>Math.max(0,Math.min(1,(e-t)/(n-t))),r=n(t.speed,10,18)*14+n(t.accel,15,40)*8+n(t.weight,110,160)*6+n(t.range,5,24)*18+n(t.accuracy,60,93)*18+n(t.shootOnMove,0,80)*8+(1-n(t.indexTime,.2,.7))*10+(t.climbTime>0?6+(1-n(t.climbTime,3,8))*3:0)+(e.trap?4:0)+(e.underStage?2:0)+(e.intake===`ground`?3:0);return Math.round(Math.min(100,r))}function tn(e,t=!1){return e.real&&!t?Math.round(Math.max(0,Math.min(100,(e.real.epa-10)/50*100))):en(e)}function nn(e){return e>=80?`S`:e>=66?`A`:e>=54?`B`:e>=40?`C`:e>=26?`D`:`F`}var rn=(e,t)=>Object.keys(e).every(n=>e[n]===t[n]),an=[{x:1.37,y:5.55},{x:1.37,y:6.95},{x:1.37,y:3.6}],on=e=>e===`blue`?0:Math.PI;function sn(e){let t=Xt.filter(e=>e.key!==`9999`).map(e=>e.key),n=e,r=[];for(let e=0;e<5;e++)n=n*1103515245+12345>>>0,r.push(t[n%t.length]);return r}function cn(e,t,n){let r=[],i=e.playerAlliance,a=i===`blue`?`red`:`blue`;r.push({robot:e.playerRobot,alliance:i,isPlayer:!0,auto:e.playerAuto,x:e.playerPos.x,y:e.playerPos.y,heading:e.playerPos.heading});let o=e.playerPos.y,s=[...an].sort((e,t)=>Math.abs(t.y-o)-Math.abs(e.y-o)).slice(0,2);return e.botKeys.forEach((e,t)=>{let n=t<2?i:a,o=t<2?s[t]:an[t-2];r.push({robot:Zt(e),alliance:n,isPlayer:!1,auto:`robot`,x:H(n,o.x),y:o.y,heading:on(n)})}),{seed:n,slots:r,rules:t}}function ln(e,t){let n=-1/0,r=0;for(let i=0;i<e.length;i++){let a=e[i],o=e[(i+1)%e.length],s=o.y-a.y,c=-(o.x-a.x),l=Math.hypot(s,c);if(l<1e-12)continue;s/=l,c/=l;let u=1/0;for(let e of t){let t=(e.x-a.x)*s+(e.y-a.y)*c;t<u&&(u=t)}u>n&&(n=u,r=i)}return{sep:n,edge:r}}function un(e,t){let n=ln(e,t);if(n.sep>0)return null;let r=ln(t,e);if(r.sep>0)return null;let i=e,a=t,o=n.edge,s=!1;r.sep>n.sep+1e-4&&(i=t,a=e,o=r.edge,s=!0);let c=i[o],l=i[(o+1)%i.length],u=l.x-c.x,d=l.y-c.y,f=Math.hypot(u,d);u/=f,d/=f;let p=d,m=-u,h=0,g=1/0;for(let e=0;e<a.length;e++){let t=a[e],n=a[(e+1)%a.length],r=n.y-t.y,i=-(n.x-t.x),o=Math.hypot(r,i)||1;r/=o,i/=o;let s=r*p+i*m;s<g&&(g=s,h=e)}let _=[a[h],a[(h+1)%a.length]];if(_=dn(_,-u,-d,-(u*c.x+d*c.y)),_.length<2||(_=dn(_,u,d,u*l.x+d*l.y),_.length<2))return null;let v=[];for(let e of _){let t=(e.x-c.x)*p+(e.y-c.y)*m;t<=0&&v.push({x:e.x-p*t/2,y:e.y-m*t/2,depth:-t})}return v.length?s?{nx:-p,ny:-m,points:v}:{nx:p,ny:m,points:v}:null}function dn(e,t,n,r){let i=[],a=e[0].x*t+e[0].y*n-r,o=e[1].x*t+e[1].y*n-r;if(a<=0&&i.push(e[0]),o<=0&&i.push(e[1]),a*o<0){let t=a/(a-o);i.push({x:e[0].x+(e[1].x-e[0].x)*t,y:e[0].y+(e[1].y-e[0].y)*t})}return i}function fn(e,t,n,r){let i=-1/0,a=0;for(let o=0;o<e.length;o++){let s=e[o],c=e[(o+1)%e.length],l=c.y-s.y,u=-(c.x-s.x),d=Math.hypot(l,u);l/=d,u/=d;let f=(t-s.x)*l+(n-s.y)*u;if(f>r)return null;f>i&&(i=f,a=o)}let o=e[a],s=e[(a+1)%e.length];if(i<1e-9){let e=s.y-o.y,a=-(s.x-o.x),c=Math.hypot(e,a);return e/=c,a/=c,{nx:e,ny:a,points:[{x:t-e*r,y:n-a*r,depth:r-i}]}}let c=s.x-o.x,l=s.y-o.y,u=Math.max(0,Math.min(1,((t-o.x)*c+(n-o.y)*l)/(c*c+l*l))),d=o.x+c*u,f=o.y+l*u,p=Math.hypot(t-d,n-f);for(let r=0;r<e.length;r++){let i=e[r],a=e[(r+1)%e.length],o=a.x-i.x,s=a.y-i.y,c=Math.max(0,Math.min(1,((t-i.x)*o+(n-i.y)*s)/(o*o+s*s))),l=i.x+o*c,u=i.y+s*c,m=Math.hypot(t-l,n-u);m<p&&(p=m,d=l,f=u)}return p>=r?null:{nx:(t-d)/(p||1),ny:(n-f)/(p||1),points:[{x:d,y:f,depth:r-p}]}}function pn(e,t,n,r,i,a){let o=r-e,s=i-t,c=Math.hypot(o,s);if(c>=n+a)return null;let l=c>1e-9?o/c:1,u=c>1e-9?s/c:0;return{nx:l,ny:u,points:[{x:e+l*n,y:t+u*n,depth:n+a-c}]}}function mn(e,t,n,r,i,a){for(let o of n.points)a.push({a:e,b:t,nx:n.nx,ny:n.ny,px:o.x,py:o.y,depth:o.depth,restitution:r,friction:i,rax:0,ray:0,rbx:0,rby:0,nMass:0,tMass:0,bias:0,jn:0,jt:0})}var hn=.25,gn=.004;function _n(e){let t=e.a,n=e.b,r=t.vx-t.omega*e.ray,i=t.vy+t.omega*e.rax,a=n.vx-n.omega*e.rby,o=n.vy+n.omega*e.rbx;return[a-r,o-i]}function vn(e,t,n){let r=e.a,i=e.b;r.vx-=t*r.invMass,r.vy-=n*r.invMass,r.omega-=r.invI*(e.rax*n-e.ray*t),i.vx+=t*i.invMass,i.vy+=n*i.invMass,i.omega+=i.invI*(e.rbx*n-e.rby*t)}function yn(e,t,n,r,i,a){let o=e.invMass,s=e.invI,c=o+s*n*n,l=-s*t*n,u=o+s*t*t,d=c*u-l*l||1e-12;return{body:e,rx:t,ry:n,tvx:r,tvy:i,max:a,jx:0,jy:0,k11:u/d,k12:-l/d,k22:c/d}}function bn(e){let t=e.body,n=t.vx-t.omega*e.ry,r=t.vy+t.omega*e.rx,i=e.tvx-n,a=e.tvy-r,o=e.jx+e.k11*i+e.k12*a,s=e.jy+e.k12*i+e.k22*a,c=Math.hypot(o,s);c>e.max&&(o*=e.max/c,s*=e.max/c);let l=o-e.jx,u=s-e.jy;e.jx=o,e.jy=s,t.vx+=l*t.invMass,t.vy+=u*t.invMass,t.omega+=t.invI*(e.rx*u-e.ry*l)}function xn(e,t=8){for(let n=0;n<t;n++)for(let t of e)bn(t)}function Sn(e,t,n=10,r=[]){for(let n of e){n.rax=n.px-n.a.x,n.ray=n.py-n.a.y,n.rbx=n.px-n.b.x,n.rby=n.py-n.b.y;let e=n.rax*n.ny-n.ray*n.nx,r=n.rbx*n.ny-n.rby*n.nx,i=n.a.invMass+n.b.invMass+n.a.invI*e*e+n.b.invI*r*r;n.nMass=i>0?1/i:0;let a=-n.ny,o=n.nx,s=n.rax*o-n.ray*a,c=n.rbx*o-n.rby*a,l=n.a.invMass+n.b.invMass+n.a.invI*s*s+n.b.invI*c*c;n.tMass=l>0?1/l:0;let[u,d]=_n(n),f=u*n.nx+d*n.ny;n.bias=hn/t*Math.max(0,n.depth-gn),f<-.4&&(n.bias=Math.max(n.bias,-n.restitution*f))}for(let t=0;t<n;t++){for(let e of r)bn(e);for(let t of e){if(t.nMass===0)continue;let[e,n]=_n(t),r=e*t.nx+n*t.ny,i=t.nMass*(-r+t.bias),a=Math.max(t.jn+i,0);i=a-t.jn,t.jn=a,vn(t,i*t.nx,i*t.ny),[e,n]=_n(t);let o=-t.ny,s=t.nx,c=e*o+n*s,l=t.tMass*-c,u=t.friction*t.jn,d=Math.max(-u,Math.min(u,t.jt+l));l=d-t.jt,t.jt=d,vn(t,l*o,l*s)}}}var Cn=7*z,wn=1*z,Tn=.235,En=9.81,Dn=1.2,On=.75,kn=.01806448,An=Math.PI*(.1778**2-.127**2),jn=.07;.5*Dn*On*kn/Tn;var Mn=.5*Dn*jn*An/Tn;function Nn(e,t){let n=we*t,r=ke+(Te-ke)*t,i=ke+(Ee-ke)*t;return Ft([j(0,U-r),j(Math.max(n,.02),U-i),j(Math.max(n,.02),U+i),j(0,U+r)].map(t=>j(H(e,t.x),t.y)))}var Pn=(e,t,n,r)=>Ft([j(e,t),j(n,t),j(n,r),j(e,r)]),Fn=(()=>{let e=[],t=.08;e.push({kind:`guardrail`,poly:Pn(Be,-.08,B-Be,0),z0:0,z1:Et,e:.35,mu:.3}),e.push({kind:`guardrail`,poly:Pn(0,V,B,V+t),z0:0,z1:Et,e:.35,mu:.3});for(let n of L){let r=n===`blue`?-.08:B,i=n===`blue`?0:B+t;for(let t of xt){let n=t.kind===`speaker`?_e-.04:Ct;e.push({kind:`wall`,poly:Pn(r,t.y0,i,t.y1),z0:0,z1:n,e:.3,mu:.3})}let a=ge+1*z,o=Math.min(H(n,0),H(n,a)),s=Math.max(H(n,0),H(n,a));e.push({kind:`wall`,poly:Pn(r,U-be,i,U+be),z0:_e-.04,z1:ye,e:.2,mu:.3}),e.push({kind:`speaker`,poly:Pn(o,U-be,s,U+be),z0:W,z1:ye,e:.3,mu:.3});for(let t of[-1,1]){let n=U+t*he,r=U+t*be;e.push({kind:`speaker`,poly:Pn(o,Math.min(n,r),s,Math.max(n,r)),z0:70*z,z1:ye,e:.3,mu:.3})}for(let t=0;t<6;t++){let r=t===0?0:Oe+(De-Oe)*t/6,i=Oe+(De-Oe)*(t+1)/6,a=1-(r-Oe)/(De-Oe);e.push({kind:`subwoofer`,poly:Nn(n,t===0?1:a),z0:r,z1:t===0?Math.max(i,Oe):i,e:.3,mu:.4})}let c=H(n,je);e.push({kind:`amp`,poly:Pn(c-Me,V,c+Me,V+Pe),z0:0,z1:Ne,e:.3,mu:.3});let l=Ue(n),u=l.b.x-l.a.x,d=l.b.y-l.a.y,f=Math.hypot(u,d);e.push({kind:`source`,poly:P((l.a.x+l.b.x)/2-l.nx*.06,(l.a.y+l.b.y)/2-l.ny*.06,f/2,.06,Math.atan2(d,u)),z0:0,z1:2.1,e:.3,mu:.3});let p=ft(n);for(let t of mt(n)){e.push({kind:`stage`,poly:P(t.x,t.y,Ze/2,Ze/2,Math.atan2(t.y-p.y,t.x-p.x)),z0:0,z1:et,e:.35,mu:.3});let n=Math.atan2(t.y-p.y,t.x-p.x),r=Math.hypot(t.x-p.x,t.y-p.y);e.push({kind:`stage`,poly:P((t.x+p.x)/2,(t.y+p.y)/2,r/2,Ze/2,n),z0:tt,z1:et,e:.35,mu:.3})}e.push({kind:`stage`,poly:vt(n),z0:nt,z1:rt,e:.3,mu:.3}),e.push({kind:`stage`,poly:P(p.x,p.y,.25,.25,0),z0:rt,z1:lt,e:.3,mu:.3})}return e})();function In(e,t,n){let r=Math.hypot(e,t,n),i=-.03459155744680851*r*e,a=-.03459155744680851*r*t,o=-.03459155744680851*r*n-En;if(r>.5){let s=e/r,c=t/r,l=n/r,u=-l*s,d=-l*c,f=1-l*l,p=Math.hypot(u,d,f);if(p>1e-6){let e=Mn*r*r/p;u*=e,d*=e,f*=e,i+=u,a+=d,o+=f}}return[i,a,o]}function Ln(e,t){let[n,r,i]=In(e.vx,e.vy,e.vz);e.vx+=n*t,e.vy+=r*t,e.vz+=i*t,e.x+=e.vx*t,e.y+=e.vy*t,e.z+=e.vz*t}function Rn(e,t){if(e.z+wn<t.z0||e.z-wn>t.z1)return null;let n=fn(t.poly,e.x,e.y,Cn);if(!n)return null;let r=n.points[0].depth,i=e.z+wn-t.z0,a=t.z1-(e.z-wn),o=Math.min(i,a),s,c;return r<o?(s=[n.nx,n.ny,0],c=r):(s=a<i?[0,0,1]:[0,0,-1],c=o),e.x+=s[0]*c,e.y+=s[1]*c,e.z+=s[2]*c,zn(e,s,t.e,t.mu),s}function zn(e,t,n,r){let i=e.vx*t[0]+e.vy*t[1]+e.vz*t[2];if(i>=0)return;let a=e.vx-i*t[0],o=e.vy-i*t[1],s=e.vz-i*t[2],c=Math.hypot(a,o,s),l=Math.min(c,r*(1+n)*-i);if(c>1e-9){let e=(c-l)/c;a*=e,o*=e,s*=e}e.vx=a-n*i*t[0],e.vy=o-n*i*t[1],e.vz=s-n*i*t[2]}var Bn=.05,Vn=ge-.06,Hn=he-Cn+.02;function Un(e,t,n,r){for(let i of L){let a=i===`blue`?e:B-e,o=i===`blue`?r.x:B-r.x;if(o>.5072||o<-.3)continue;let s=n-G(a)<0,c=r.z-G(o)<0;if(!s||c)continue;let l=n-G(a),u=l/(l-(r.z-G(o))),d=a+(o-a)*u,f=t+(r.y-t)*u-U;if(d<-.05||d>.4572||Math.abs(f)>.5254624999999999+Cn)continue;if(d>=Bn&&d<=Vn&&Math.abs(f)<=Hn)return{kind:`speaker`,alliance:i};let p=Math.abs(f)>Hn?-Math.sign(f)*.4:0,m=d>Vn?.5:-.2,h=[i===`blue`?m:-m,p,-Math.cos(ve)],g=Math.hypot(...h);return r.x=e,r.y=t,r.z=n,zn(r,[h[0]/g,h[1]/g,h[2]/g],.3,.3),{kind:`rim`}}if(t<8.211235799999999&&r.y>=8.2012358)for(let e of L){let t=H(e,je);if(Math.abs(r.x-t)<=Fe.halfW-Cn*.6&&r.z-wn>=Fe.bottom&&r.z+wn<=Fe.top)return{kind:`amp`,alliance:e}}return null}var Wn=1/240;function Gn(e,t,n,r){let i=0,a=r,o=Math.cos(t)*n,s=Math.sin(t)*n,c=0;for(;i<e;){let[t,,n]=In(o,0,s),r=i,l=a;if(o+=t*Wn,s+=n*Wn,i+=o*Wn,a+=s*Wn,c+=Wn,o<.3||c>4||a<-.5)return null;if(i>=e){let t=(e-r)/(i-r);return{z:l+(a-l)*t,t:c-Wn*(1-t),slope:s/o}}}return{z:a,t:c,slope:s/o}}var Kn=Math.PI/180*8,qn=Math.PI/180*66,Jn=-Math.tan(ve)*.9;function Yn(e,t,n,r){let i=Kn,a=Gn(e,Kn,n,r),o=1/0,s={pitch:Kn,speed:n,tof:e/n,ok:!1},c=Math.PI/180*2;for(let l=Kn+c;l<=qn+1e-9;l+=c){let c=Gn(e,l,n,r);if(c&&Math.abs(c.z-t)<o&&(o=Math.abs(c.z-t),s={pitch:l,speed:n,tof:c.t,ok:!1}),a&&c&&a.z<t&&c.z>=t){let a=i,o=l,s=c;for(let i=0;i<16;i++){let i=(a+o)/2,c=Gn(e,i,n,r);if(!c)break;c.z<t?a=i:(o=i,s=c)}if(s.slope>=Jn)return{pitch:o,speed:n,tof:s.t,ok:!0}}a=c,i=l}return s}function Xn(e,t,n,r,i){let a=2,o=i,s={pitch:n,speed:i,tof:1,ok:!1};for(let i=0;i<20;i++){let i=(a+o)/2,c=Gn(e,n,i,r);!c||c.z<t?a=i:(o=i,s={pitch:n,speed:i,tof:c.t,ok:c.slope>=Jn})}return s}function Zn(e,t,n){let r=0,i=n,a=Math.cos(e)*t,o=Math.sin(e)*t;for(let e=0;e<5;e+=Wn){let[e,,t]=In(a,0,o);if(a+=e*Wn,o+=t*Wn,r+=a*Wn,i+=o*Wn,i<=wn&&o<0)return r}return r}function Qn(e,t,n,r){let i=2,a=r;if(Zn(t,a,n)<e)return a;for(let r=0;r<18;r++){let r=(i+a)/2;Zn(t,r,n)<e?i=r:a=r}return a}var $n=new Map;function er(e,t){let n=`${e.toFixed(3)}:${t.toFixed(3)}`,r=$n.get(n);if(r)return r;let i=4,a=35;for(let n=0;n<18;n++){let n=(i+a)/2;Yn(e,Se,n,t).ok?a=n:i=n}let o=a*1.04;return $n.set(n,o),o}var tr=1;function nr(e,t,n=wn){return{id:tr++,air:n>wn+.05,x:e,y:t,z:n,vx:0,vy:0,vz:0,omega:0,invMass:1/Tn,invI:0,yaw:tr*2.3999%(Math.PI*2),by:null,shooter:null,age:0,spin:0}}function rr(){tr=1}var ir=class{s;constructor(e){this.s=e>>>0}next(){let e=this.s=this.s+1831565813>>>0;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}range(e,t){return e+(t-e)*this.next()}gauss(){return(this.next()+this.next()+this.next()+this.next()-2)*1.732}},ar=.3048,or=54*Math.PI/180,sr=.0254,cr=.45359,lr=9.81,ur=3.25*sr,dr=2.75*sr,fr=4,pr=class{id;def;alliance;isPlayer;auto;x;y;heading;vx=0;vy=0;omega=0;halfL;halfW;mass;inertia;maxV;vFree;maxA;maxW;moduleR;modules;height;shooterZ;exitSpeed;hasNote=!1;readyAt=0;shootCooldown=0;action=null;chain=null;chainSlot=0;climbLift=0;onstage=!1;turretYaw=0;pivot=.6;left=!1;lastCmd=null;contacts=new Set;touchingStatic=!1;constructor(e,t,n,r,i,a,o,s){this.id=e,this.def=t,this.alliance=n,this.isPlayer=r,this.auto=i,this.x=a,this.y=o,this.heading=s;let c=t.frame[0]*sr,l=t.frame[1]*sr;this.halfL=c/2+ur,this.halfW=l/2+ur;let u=t.stats;this.mass=u.weight*cr,this.inertia=this.mass*((2*this.halfL)**2+(2*this.halfW)**2)/12,this.maxV=u.speed*ar,this.vFree=this.maxV*1.12,this.maxA=u.accel*ar;let d=c/2-dr,f=l/2-dr;this.modules=[[d,f],[-d,f],[-d,-f],[d,-f]],this.moduleR=Math.hypot(d,f),this.maxW=this.maxV/this.moduleR,this.height=t.look.height*sr;let p=t.look,m={pivot:19,turret:p.height-2,arm:24,elevator:30,fixed:p.height*.8}[p.shooter];this.shooterZ=Math.max(14,Math.min(40,m))*sr,this.exitSpeed=er(u.range*ar*1.2,this.shooterZ)}get isStatic(){return this.onstage||this.action?.kind===`climb`||this.action?.kind===`unclimb`}get invMass(){return this.isStatic?0:1/this.mass}get invI(){return this.isStatic?0:1/this.inertia}poly(){return P(this.x,this.y,this.halfL,this.halfW,this.heading)}get busy(){return this.action!==null||this.onstage}get speed(){return Math.hypot(this.vx,this.vy)}plan(e,t){if(this.lastCmd=e,this.isStatic)return this.vx=this.vy=this.omega=0,[];let n=e.vx*this.maxV,r=e.vy*this.maxV,i=Math.hypot(n,r);i>this.maxV&&(n*=this.maxV/i,r*=this.maxV/i);let a=this.mass*this.maxA/4,o=4*a*this.moduleR/this.inertia,s;if(e.heading!==null){let t=ee(e.heading-this.heading),n=Math.sqrt(2*o*.6*Math.abs(t));s=Math.sign(t)*Math.min(this.maxW,n,Math.abs(t)*14)}else s=e.omega*this.maxW;this.def.drive===`tank`&&([n,r,s]=this.tank(n,r,s,e)),this.busy&&(n=r=s=0);let c=Math.cos(this.heading),l=Math.sin(this.heading);return this.modules.map(([e,i])=>{let o=e*c-i*l,u=e*l+i*c,d=n-s*u,f=r+s*o,p=this.vx-this.omega*u,m=this.vy+this.omega*o,h=d-p,g=f-m,_=Math.hypot(h,g),v=1;return _>1e-6&&(v=N(fr*(1-(p*h+m*g)/_/this.vFree),0,1)),yn(this,o,u,d,f,a*v*t)})}tank(e,t,n,r){let i=Math.cos(this.heading),a=Math.sin(this.heading),o=Math.hypot(e,t),s=e*i+t*a;if(o>.05*this.maxV&&r.heading===null&&Math.abs(r.omega)<.1){let r=ee(Math.atan2(t,e)-this.heading),i=1;Math.abs(r)>Math.PI/2&&(r=ee(r+Math.PI),i=-1),n=N(r*6,-this.maxW,this.maxW),s=i*o*Math.max(0,Math.cos(r))}return[s*i,s*a,n]}drive(e,t){xn(this.plan(e,t))}integrate(e){this.isStatic||(this.x+=this.vx*e,this.y+=this.vy*e,this.heading=ee(this.heading+this.omega*e))}inIntake(e,t,n=.3){let r=Math.cos(this.heading),i=Math.sin(this.heading),a=e-this.x,o=t-this.y,s=a*r+o*i,c=-a*i+o*r;return Math.abs(c)>this.halfW*.85?!1:s>this.halfL-.1&&s<this.halfL+n||this.def.dualIntake&&s<-this.halfL+.1&&s>-this.halfL-n}shooterPos(){let e=this.def.turret?-.05:.08;return{x:this.x+Math.cos(this.heading)*e,y:this.y+Math.sin(this.heading)*e,z:this.shooterZ}}get mu(){return this.maxA/lr}},mr={leave:2,autoAmp:2,autoSpeaker:5,amp:1,speaker:2,ampSpeaker:5,park:1,onstage:3,spotlit:1,harmony:2,trap:5,foul:2,techFoul:5},hr=class{leave=0;autoAmp=0;autoSpeaker=0;amp=0;speaker=0;ampSpeaker=0;park=0;onstage=0;spotlit=0;harmony=0;trap=0;foulPoints=0;foulsCommitted=0;techFoulsCommitted=0;notes=0;bank=0;amplifyLeft=0;amplifyNotes=0;coop=!1;mics=[!1,!1,!1];get autoPoints(){return this.leave+this.autoAmp+this.autoSpeaker}get stagePoints(){return this.park+this.onstage+this.spotlit+this.harmony+this.trap}get total(){return this.autoPoints+this.amp+this.speaker+this.ampSpeaker+this.stagePoints+this.foulPoints}get amplified(){return this.amplifyLeft>0&&this.amplifyNotes>0}};function gr(e,t){return e.notes++,t?(e.autoSpeaker+=mr.autoSpeaker,mr.autoSpeaker):e.amplified?(e.ampSpeaker+=mr.ampSpeaker,e.amplifyNotes--,e.amplifyNotes<=0&&(e.amplifyLeft=0),mr.ampSpeaker):(e.speaker+=mr.speaker,mr.speaker)}function _r(e,t){return e.notes++,e.amplified||(e.bank=Math.min(2,e.bank+1)),t?(e.autoAmp+=mr.autoAmp,mr.autoAmp):(e.amp+=mr.amp,mr.amp)}function vr(e){return e.amplified||e.bank<2?!1:(e.bank=0,e.amplifyLeft=10,e.amplifyNotes=4,!0)}function yr(e,t){return e.coop||e.bank<1||t>45?!1:(e.bank--,e.coop=!0,!0)}function br(e,t){e.amplifyLeft>0&&(e.amplifyLeft=Math.max(0,e.amplifyLeft-t),e.amplifyLeft===0&&(e.amplifyNotes=0))}function xr(e,t){let n=[0,0,0];e.park=e.onstage=e.spotlit=e.harmony=0;for(let r of t)r.chain===null?r.parked&&(e.park+=mr.park):(n[r.chain]++,e.onstage+=mr.onstage,e.mics[r.chain]&&(e.spotlit+=mr.spotlit));for(let t of n)t>=2&&(e.harmony+=mr.harmony*(t-1))}function Sr(e,t){return e.notes>=(t?15:18)}function Cr(e,t){return e.stagePoints>=10&&t>=2}function wr(e,t,n){let r=n.x-t.x,i=n.y-t.y,a=N(((e.x-t.x)*r+(e.y-t.y)*i)/(r*r+i*i||1),0,1);return Math.hypot(e.x-(t.x+r*a),e.y-(t.y+i*a))}var Tr=class{m;mem=new Map;tri={blue:ne(_t(`blue`),1.05),red:ne(_t(`red`),1.05)};triWide={blue:ne(_t(`blue`),1.35),red:ne(_t(`red`),1.35)};constructor(e){this.m=e;let t=e.rng;for(let n of[`blue`,`red`]){let r=e.robots.filter(e=>e.alliance===n),i=[1,0,2];r.forEach((e,n)=>{let r=e.def.behavior;this.mem.set(e.id,{role:`scorer`,noteId:null,stuckT:0,sidestep:null,autoPicked:0,autoPlan:[],chainIdx:i[n%3],willClimb:e.def.stats.climbTime>0&&t.next()<r.climbRate,willTrap:e.def.trap&&t.next()<r.trapRate,autoNotes:Math.floor(r.autoNotes)+ +(t.next()<r.autoNotes%1),ampThis:null,alignedSince:1/0,dwellUntil:0,hadNote:!0,contactT:0,backoffUntil:0})}),this.planAutos(r),this.pickRoles(r)}}pickRoles(e){let t=e.filter(e=>!e.isPlayer);if(e.length<3||!t.length)return;for(let n of t){let t=e.filter(e=>e!==n);n.def.behavior.role===`defender`&&t.every(e=>this.pace(e)>=.7)&&(this.mem.get(n.id).role=`defender`)}let n=[...e].sort((e,t)=>this.pace(t)-this.pace(e)),r=n[n.length-1];if(r.isPlayer||!r.def.behavior.passer)return;let i=this.mem.get(r.id);i.role===`scorer`&&this.pace(n[1])>=.8&&this.pace(r)<.6&&(i.role=`feeder`)}get skill(){return this.m.rules.aiLevel===`easy`?.75:1}pace(e){return e.isPlayer?1:e.def.behavior.pace}think(e){let t=this.mem.get(e.id);if(t.hadNote&&!e.hasNote&&this.m.phase===`teleop`){let n=this.pace(e);t.dwellUntil=this.m.time+(1-n)*1.2+Math.max(0,.5-n)*12}return t.hadNote=e.hasNote,!e.hasNote&&this.m.time<t.dwellUntil&&this.m.phase===`teleop`?{...d,heading:e.heading}:this.m.phase===`auto`?this.auto(e,t):this.teleop(e,t)}planAutos(e){if(!e.length)return;let t=e[0].alliance,n=At.map(e=>j(H(t,Ot),e)),r=jt.map(e=>j(kt,e)),i=e=>this.mem.get(e.id).autoNotes,a=e.filter(e=>e.auto===`robot`).sort((e,t)=>i(t)-i(e)),o=(e,t,n)=>{let r=[],i=t;for(let t=0;t<n&&e.length;t++){e.sort((e,t)=>M(e,i)-M(t,i));let t=e.shift();r.push(t),i=t}return r},s=!1;for(let e of a){let t=this.mem.get(e.id),i=e.def.intake===`source`?0:t.autoNotes-1;if(i<=0)continue;let a;if(!s&&n.length)a=o(n,e,Math.min(i,3)),i>3&&e.def.behavior.centerAuto&&a.push(...o(r,a[a.length-1],i-3)),s=!0;else{let t=n.filter(t=>Math.abs(t.y-e.y)<1.2);a=t.length?o(t,e,1):[];for(let e of a)n.splice(n.indexOf(e),1);a.length<i&&e.def.behavior.centerAuto&&a.push(...o(r,a[0]??e,Math.min(i-a.length,2)))}t.autoPlan=a.map(e=>this.m.notes.reduce((t,n)=>M(n,e)<M(t,e)?n:t,this.m.notes[0])).filter(e=>e&&M(e,a[0])<20).map(e=>e.id)}}auto(e,t){let n=e.auto;if(n===`none`||n===`drive`)return d;let r=H(e.alliance,de+1.4);if(n===`leave`)return this.goTo(e,t,{x:r,y:e.y},e.heading);if(e.hasNote)return this.scoreSpeaker(e,t,1.4);if(n===`robot`){for(;t.autoPlan.length;){let n=this.m.notes.find(e=>e.id===t.autoPlan[0]&&!e.air);if(n&&le(e.alliance,n.x)<8.770532099999999&&this.reachable(e,n))return this.chaseNote(e,t,n,!0);t.autoPlan.shift()}if(t.autoPicked<t.autoNotes-1&&e.def.intake===`ground`){let n=this.pickNote(e,t,t=>le(e.alliance,t.x)<fe);if(n)return this.chaseNote(e,t,n,!0)}return this.goTo(e,t,{x:r,y:e.y},e.heading)}let i=n===`two`?1:3;if(t.autoPicked<i){let n=this.pickNote(e,t,t=>le(e.alliance,t.x)<fe);if(n)return this.chaseNote(e,t,n,!0)}return this.goTo(e,t,{x:r,y:e.y},e.heading)}teleop(e,t){let n=this.m,r=e.def.stats;if(n.rules.stage&&!n.rules.unlimited){let i=t.willClimb,a=i?8+r.climbTime+4*(1-this.pace(e)):6,o=t.willTrap&&e.hasNote&&n.teleopLeft<a+6;if(n.teleopLeft<a||e.onstage||e.chain||o)return this.endgame(e,t,i)}if(t.role===`scorer`&&e.def.behavior.role===`defender`&&!e.isPlayer&&n.teleopLeft<90&&(t.role=`defender`),t.role===`defender`&&!e.hasNote)return this.defend(e,t);if(t.role===`feeder`)return this.feed(e,t);if(e.hasNote){if(n.time<t.dwellUntil)return{...d,heading:e.heading};let r=n.scores[e.alliance];return t.ampThis===null&&(t.ampThis=n.rng.next()<e.def.behavior.ampShare),t.ampThis&&e.def.amp&&r.bank<2&&!r.amplified?this.scoreAmp(e,t):this.scoreSpeaker(e,t,0)}return t.ampThis=null,this.fetch(e,t)}fetch(e,t){let n=Ge(e.alliance),r=e.def.intake===`source`?e=>M(e,n)<1.6:t=>le(e.alliance,t.x)<9.770532099999999||M(t,n)<2.5,i=this.pickNote(e,t,r);if(i&&M(e,i)<7)return this.chaseNote(e,t,i,!1);let a=this.sourceSpot(e);return i&&M(e,i)<M(e,a.p)+2?this.chaseNote(e,t,i,!1):this.goTo(e,t,a.p,a.face)}sourceSpot(e){let t=Ue(e.alliance);if(e.def.intake===`source`){let n=e.halfL+.12;return{p:j(t.mid.x+t.nx*n,t.mid.y+t.ny*n),face:Math.atan2(-t.ny,-t.nx)}}let n=Ge(e.alliance),r={x:n.x-ce(e.alliance)*.9,y:n.y+.5};return{p:r,face:Math.atan2(n.y-r.y,n.x-r.x)}}inNeutral(e){let t=le(e.alliance,e.x);return t>5.8724799999999995&&t<10.668584199999998}feed(e,t){return e.hasNote?Pt(e.alliance,e.x)&&le(e.alliance,e.x)<6.8724799999999995?this.scoreSpeaker(e,t,0):this.pass(e,t):this.fetch(e,t)}pass(e,t){let n=e.alliance,r=j(H(n,3.6),6.1),i=j(H(n,B-fe-.8),N(e.y,1.6,V-1.6)),a=Math.atan2(r.y-e.y,r.x-e.x),o=this.inNeutral(e)&&le(n,e.x)<10.268584199999998,s=e.def.turret||Math.abs(ee(a-e.heading))<.08;return{...this.goTo(e,t,o?e:i,a),shoot:o&&s&&this.m.time>=e.readyAt,passTo:r}}defend(e,t){let n=this.m,r=R(e.alliance),i=n.robots.filter(e=>e.alliance===r&&!e.onstage&&!e.action);if(!i.length)return this.fetch(e,t);let a=i.filter(e=>e.hasNote),o=(a.length?a:i).reduce((e,t)=>M(t,Ce(r))<M(e,Ce(r))?t:e);t.contactT=e.contacts.has(o.id)?t.contactT+1/120:Math.max(0,t.contactT-1/60),t.contactT>3&&(t.backoffUntil=n.time+1.2,t.contactT=0);let s=Ce(r),c=Math.atan2(s.y-o.y,s.x-o.x),l=j(o.x+Math.cos(c)*1,o.y+Math.sin(c)*1);n.time<t.backoffUntil&&(l=j(o.x+Math.cos(c)*2.2,o.y+Math.sin(c)*2.2+.8)),le(r,l.x)<1.6&&(l.x=H(r,1.6)),l.y>7.311235799999999&&le(r,l.x)<3.902&&(l.y=V-.9);let u=Math.atan2(o.y-e.y,o.x-e.x);return this.goTo(e,t,l,u,!0)}endgame(e,t,n){let r=this.m;if(e.onstage){let n=e.chain&&!r.trapsDone[e.alliance][e.chain.index];return{...d,shoot:e.hasNote&&e.def.trap&&t.willTrap&&!!n}}if(e.action)return d;if(!n){let n=ft(e.alliance),r=mt(e.alliance)[(t.chainIdx+1)%3],i={x:n.x+(r.x-n.x)*1.12,y:n.y+(r.y-n.y)*1.12},a=e.def.underStage?n:i;return this.goTo(e,t,a,e.heading)}let i=r.chains[e.alliance][t.chainIdx],a={x:i.mid.x+i.nx*.9,y:i.mid.y+i.ny*.9},o=Math.atan2(-i.ny,-i.nx);return M(e,a)>.35&&M(e,i.mid)>.6?this.goTo(e,t,a,o):{...this.goTo(e,t,i.mid,o,!1,!0),climb:M(e,i.mid)<.6&&!e.chain}}scoreAmp(e,t){let n=Le(e.alliance);return{...this.goTo(e,t,n,Math.PI/2),amp:M(e,n)<.5&&this.m.time>=e.readyAt}}reachable(e,t){return M(t,We(R(e.alliance)))<2.6?!1:e.def.underStage||!(ie(t,this.tri.blue)||ie(t,this.tri.red))}clearShot(e,t){let n=M(e,t)||1,r=j(e.x+(t.x-e.x)/n*.45,e.y+(t.y-e.y)/n*.45);for(let e of[`blue`,`red`]){for(let n of mt(e))if(wr(n,r,t)<.42)return!1;if(I(r,t,this.tri[e]))return!1}return!0}scoreSpeaker(e,t,n){let r=this.m,i=Ce(e.alliance),a=e.def.stats.range*ar,o=e.def.look.shooter===`fixed`,s=o?1.15:N(a*.7*this.skill,1.15,4.6),c=Math.atan2(e.y-i.y,e.x-i.x),l=e.alliance===`blue`?0:Math.PI,u=e.alliance===`blue`?1:-1;c=l+u*N(u*ee(c-l),-.7,1);let d=e=>({x:i.x+Math.cos(e)*s,y:N(i.y+Math.sin(e)*s,.6,V-.6)}),f=t=>ie(t,this.triWide[e.alliance])||!this.clearShot(t,i),p=d(c);for(let e=1;e<=10&&f(p);e++)for(let t of[1,-1]){let n=d(l+u*N(u*ee(c+t*e*.12-l),-.7,1));if(!f(n)){p=n;break}}let m=r.aim(e),h=m.yaw,g=m.dist<(o?1.7:a*.88)&&Pt(e.alliance,e.x)&&this.clearShot(e,i);r.phase===`auto`&&(g&&=Math.min(...e.poly().map(t=>le(e.alliance,t.x)))<fe-.1);let _=Math.abs(ee(h-e.heading)),v=e.def.turret||_<Math.atan2(.09,m.dist),y=(1-e.def.stats.shootOnMove/100)*m.tof,b=y*e.speed<.2,x=r.time>=e.readyAt+n*+(r.phase===`auto`&&r.phaseTime<2),S=g&&v&&b&&Math.abs(e.omega)<1.2;S?t.alignedSince===1/0&&(t.alignedSince=r.time):t.alignedSince=1/0;let C=(1-this.pace(e))*.8,w=S&&x&&r.time-t.alignedSince>=C,T=e.def.drive===`tank`;if(g){let n=e.def.stats.shootOnMove>50&&!T&&r.phase===`teleop`,i=this.goTo(e,t,p,h),a=n?Math.min(.35,.15/Math.max(y,.02)/e.maxV):0;return{...i,vx:i.vx*a,vy:i.vy*a,shoot:w,heading:h}}let E=this.goTo(e,t,p,h);return{...E,shoot:w,heading:T?null:E.heading}}pickNote(e,t,n){let r=new Set;for(let[t,n]of this.mem)if(t!==e.id&&(n.noteId!==null&&r.add(n.noteId),this.m.phase===`auto`))for(let e of n.autoPlan)r.add(e);let i=null,a=1/0;for(let o of this.m.notes){if(o.air||r.has(o.id)||!n(o)||!this.reachable(e,o))continue;let s=M(e,o);o.id===t.noteId&&--s,(o.x<.8||o.x>15.741064199999997)&&(s+=3),s<a&&(a=s,i=o)}return t.noteId=i?i.id:null,i}chaseNote(e,t,n,r){let i=Math.atan2(n.y-e.y,n.x-e.x);e.def.dualIntake&&Math.abs(ee(i-e.heading))>Math.PI/2&&(i=ee(i+Math.PI));let a=this.goTo(e,t,n,i,!0),o=Math.abs(ee(i-e.heading)),s=M(e,n)-e.halfL,c=r?.85:1;return s<1.2&&o>.35&&(c*=N(1-(o-.35)*1.1,.12,1)*N(.4+s*.5,.4,1)),{...a,vx:a.vx*c,vy:a.vy*c}}noteIntaken(e){let t=this.mem.get(e.id);t&&(this.m.phase===`auto`&&(t.autoPicked++,this.m.notes.find(e=>e.id===t.autoPlan[0])||t.autoPlan.shift()),t.noteId=null,t.ampThis=null,t.alignedSince=1/0,t.dwellUntil=this.m.time+(1-this.pace(e))*.7)}pastLegs(e,t){let n=t.x-e.x,r=t.y-e.y,i=Math.hypot(n,r);if(i<.05)return t;let a=n/i,o=r/i,s=Math.hypot(e.halfL,e.halfW)+Qe/2+.1,c=null,l=1/0;for(let n of[`blue`,`red`])for(let r of mt(n)){let n=r.x-e.x,u=r.y-e.y,d=n*a+u*o,f=-n*o+u*a;if(d<-.1||d>i+.2||Math.abs(f)>=s||d>=l||M(t,r)<s)continue;let p=f>0?-1:1;c=j(r.x-o*p*s,r.y+a*p*s),l=d}return c??t}goTo(e,t,n,r,i=!1,a=!1){let o=this.m,s=n;if(!e.def.underStage)for(let t of[`blue`,`red`]){let n=ne(_t(t),1.25);if(!(a&&ie(s,n))&&I(e,s,n)){let r=ne(_t(t),1.75),i=s,a=1/0;for(let t of r){if(M(e,t)<.35||I(e,t,n))continue;let r=M(e,t)+M(t,s);r<a&&(a=r,i=t)}s=i}}let c=M(e,n),l=i&&c<1.3;l||(s=this.pastLegs(e,s));let u=s.x-e.x,f=s.y-e.y,p=Math.hypot(u,f);if(p<.04)return{...d,heading:r};let m=Math.sqrt(2*e.maxA*Math.max(0,c-(i?0:.05)))/e.maxV,h=.6+.4*this.pace(e),g=N(Math.min(1,m*.85),0,1)*this.skill*h,_=u/p*g,v=f/p*g,y=this.mem.get(e.id)?.role===`defender`&&o.phase===`teleop`;for(let t of o.robots){if(t===e||y&&t.alliance!==e.alliance)continue;let n=e.x-t.x,r=e.y-t.y,i=Math.hypot(n,r);if(i<1.4&&i>0){let a=(1.4-i)/1.4*(t.alliance===e.alliance?.9:.5);_+=n/i*a,v+=r/i*a}}let b=.62;for(let t of[`blue`,`red`]){if(l)break;for(let n of mt(t)){let t=e.x-n.x,r=e.y-n.y,i=Math.hypot(t,r);i<b&&i>0&&(_+=t/i*(b-i)*.8,v+=r/i*(b-i)*.8)}}let x=We(R(e.alliance)),S=M(e,x);if(S<3.2&&S>0){let t=(3.2-S)*.9;_+=(e.x-x.x)/S*t,v+=(e.y-x.y)/S*t}if(y){let t=R(e.alliance);for(let[n,r]of[[j(H(t,pe/2),V-.2),1.9],[mt(t)[0],o.isEndgame?0:1.1]]){let t=M(e,n);t<r&&t>0&&(_+=(e.x-n.x)/t*(r-t)*1.4,v+=(e.y-n.y)/t*(r-t)*1.4)}}if(o.isEndgame||o.phase===`teleop`&&o.teleopLeft<25){let t=ft(R(e.alliance)),n=M(e,t);if(n<3.6&&n>0){let r=(3.6-n)*.8;_+=(e.x-t.x)/n*r,v+=(e.y-t.y)/n*r}}let C=Math.hypot(_,v);if(C>1&&(_/=C,v/=C),g>.3&&e.speed<.15?t.stuckT+=1/120:t.stuckT=Math.max(0,t.stuckT-1/60),t.stuckT>.8&&!t.sidestep){let e=o.rng.next()<.5?1:-1;t.sidestep={vx:-f/p*e,vy:u/p*e,until:o.time+.7},t.stuckT=0}t.sidestep&&(o.time>t.sidestep.until?t.sidestep=null:(_=t.sidestep.vx,v=t.sidestep.vy));let w=e.def.drive===`tank`&&c>.5?null:r;return{vx:_,vy:v,omega:0,heading:w,shoot:!1,amp:!1,climb:!1}}},Er=1/120,Dr=40,Or=3,kr=4,Ar=.55,jr=.03,Mr=Math.PI/180,Nr=[.15,.5],Pr=[.1,.25],Fr=[.3,.35],Ir=[.3,.3],Lr=[.3,.3],Rr={x:0,y:0,vx:0,vy:0,omega:0,invMass:0,invI:0},zr=e=>{let t=H(e,0),n=H(e,pe);return Ft([j(Math.min(t,n),V-me),j(Math.max(t,n),V-me),j(Math.max(t,n),V),j(Math.min(t,n),V)])},Br=class{cfg;rules;rng;robots=[];notes=[];scores={blue:new hr,red:new hr};robotStats=new Map;player;brain;phase=`pre`;phaseTime=0;time=0;tick=0;events=[];pinTimers=new Map;pinFouled=new Set;foulCooldown=new Map;hpDropCd={blue:0,red:0};hpHighCd={blue:0,red:0};hpHighLeft={blue:Or,red:Or};trapsDone={blue:[!1,!1,!1],red:[!1,!1,!1]};prevInput=u;prevCmd=new Map;wingFlags=new Map;chains={blue:ht(`blue`),red:ht(`red`)};zones={stage:{blue:yt(`blue`),red:yt(`red`)},source:{blue:qe(`blue`),red:qe(`red`)},amp:{blue:zr(`blue`),red:zr(`red`)}};constructor(e){this.cfg=e,this.rules=e.rules,this.rng=new ir(e.seed),rr(),e.slots.forEach((t,n)=>{if(!t.isPlayer&&!e.rules.bots)return;let r=new pr(n,t.robot,t.alliance,t.isPlayer,t.auto,t.x,t.y,t.heading);r.hasNote=!0,this.robots.push(r),this.robotStats.set(n,{speaker:0,amp:0,points:0,fouls:0})}),this.player=this.robots.find(e=>e.isPlayer)??null;for(let e of Mt())this.notes.push(nr(e.x,e.y));this.brain=new Tr(this)}get teleopElapsed(){return this.phase===`teleop`?this.phaseTime:0}get teleopLeft(){return this.phase===`teleop`?this.rules.unlimited?1/0:Math.max(0,this.rules.teleopTime-this.phaseTime):this.rules.teleopTime}get isEndgame(){return this.phase===`teleop`&&!this.rules.unlimited&&this.teleopLeft<=20}get clock(){switch(this.phase){case`pre`:return Math.ceil(3-this.phaseTime);case`auto`:return Math.max(0,15-this.phaseTime);case`transition`:return this.rules.teleopTime;case`teleop`:return this.rules.unlimited?this.phaseTime:this.teleopLeft;default:return 0}}get over(){return this.phase===`post`}emit(e){this.events.push(e)}step(e){let t=Er;this.tick++,this.time+=t,this.phaseTime+=t,this.updatePhase();let n=this.phase===`auto`||this.phase===`teleop`,r=this.robots.map(t=>{let r=d;return n&&(r=t.isPlayer&&(this.phase===`teleop`||t.auto===`drive`)?this.playerCmd(t,e):this.brain.think(t)),t.lastCmd=r,t.contacts.clear(),t.touchingStatic=!1,r});this.carpetFriction(t),n&&this.intakes();let i=this.robots.flatMap((e,n)=>e.plan(r[n],t));if(this.solveContacts(t,i),this.integrate(t),n){for(let e of this.robots)this.mechanisms(e,t);this.humanPlayers(e,t),this.fouls(t)}this.flyNotes(t);for(let e of L)br(this.scores[e],this.phase===`teleop`?t:0);this.prevInput=e}updatePhase(){this.phase===`pre`&&this.phaseTime>=3?(this.setPhase(this.rules.auto?`auto`:`teleop`),this.emit({kind:`horn`,text:this.rules.auto?`AUTO`:`TELEOP`})):this.phase===`auto`&&this.phaseTime>=15?(this.scoreLeave(),this.setPhase(`transition`),this.emit({kind:`info`,text:`AUTO COMPLETE`})):this.phase===`transition`&&this.phaseTime>=3?(this.setPhase(`teleop`),this.emit({kind:`horn`,text:`TELEOP`})):this.phase===`teleop`&&!this.rules.unlimited&&this.phaseTime>=this.rules.teleopTime&&this.endMatch(),this.phase===`teleop`&&!this.rules.unlimited&&Math.abs(this.teleopLeft-20)<.008333333333333333/2&&this.emit({kind:`info`,text:`ENDGAME`})}setPhase(e){this.phase=e,this.phaseTime=0}overlaps(e,t){return F(e.poly(),t)!==null}endMatch(){if(this.phase!==`post`){for(let e of L)xr(this.scores[e],this.robots.filter(t=>t.alliance===e).map(t=>({chain:t.onstage&&t.chain?t.chain.index:null,parked:this.overlaps(t,this.zones.stage[e])})));for(let e of this.robots)e.vx=e.vy=e.omega=0;this.setPhase(`post`),this.emit({kind:`horn`,text:`MATCH OVER`})}}scoreLeave(){for(let e of this.robots)Math.min(...e.poly().map(t=>le(e.alliance,t.x)))>1.9329399999999999&&(e.left=!0,this.scores[e.alliance].leave+=mr.leave,this.addRobotPoints(e.id,mr.leave))}addRobotPoints(e,t){let n=this.robotStats.get(e);n&&(n.points+=t)}aim(e,t=!1){let n=Ce(e.alliance),r=e.shooterPos(),i=e.def.stats.shootOnMove/100,a=Math.hypot(n.x-r.x,n.y-r.y)/(e.exitSpeed*.8),o=n.x,s=n.y,c={pitch:.6,speed:e.exitSpeed,tof:a,ok:!0};for(let l=0;l<(t?3:1);l++){o=n.x-i*e.vx*a,s=n.y-i*e.vy*a;let l=Math.hypot(o-r.x,s-r.y);t&&(c=Yn(l,Se,e.exitSpeed,r.z),a=c.tof)}let l=Math.hypot(o-r.x,s-r.y);return{yaw:Math.atan2(s-r.y,o-r.x),dist:l,pitch:c.pitch,speed:c.speed,tof:a,ok:c.ok}}isPass(e){let t=Ce(e.alliance);return Math.hypot(t.x-e.x,t.y-e.y)>e.def.stats.range*.3048*1.35||!Pt(e.alliance,e.x)}aimLatch=0;playerCmd(e,t){let n=ce(e.alliance);t.shoot&&!this.prevInput.shoot&&(this.aimLatch=3),!t.shoot&&(Math.abs(t.rot)>.3||!e.hasNote)&&(this.aimLatch=0),this.aimLatch=Math.max(0,this.aimLatch-Er);let r=null,i=!1;if((t.shoot||this.aimLatch>0)&&e.hasNote&&!e.onstage){if(!t.separateAmp&&e.def.amp&&M(e,Le(e.alliance))<.5||this.isPass(e)||e.def.turret)i=!0;else{let t=this.aim(e);r=t.yaw;let n=N(Math.atan2(.3,t.dist),.012,.2);i=Math.abs(ee(t.yaw-e.heading))<n&&Math.abs(e.omega)<1.5}}return{vx:t.my*n,vy:-t.mx*n,omega:-t.rot,heading:r,shoot:i,amp:t.amp,shootAmps:!t.separateAmp,climb:t.climb,special:t.special,intake:t.intake||this.rules.autoIntake}}carpetFriction(e){let t=jr*9.81*e;for(let e of this.robots){if(e.isStatic)continue;let n=e.speed;n<=t?e.vx=e.vy=0:(e.vx*=1-t/n,e.vy*=1-t/n)}let n=Ar*9.81*e;for(let e of this.notes){if(e.air)continue;let t=Math.hypot(e.vx,e.vy);t<=n?e.vx=e.vy=0:(e.vx*=1-n/t,e.vy*=1-n/t)}}fumbles=new Map;intakes(){for(let e of this.robots){if(e.hasNote||e.busy||e.climbLift>.2||!(e.lastCmd?.intake??!0))continue;let t=this.notes.findIndex(t=>!t.air&&e.inIntake(t.x,t.y)&&this.intakeAllowed(e,t)&&!((this.fumbles.get(`${t.id}:${e.id}`)??0)>this.time));if(t<0)continue;let n=this.notes[t];if(!e.isPlayer&&this.rng.next()>.55+.45*e.def.behavior.pace){this.fumbles.set(`${n.id}:${e.id}`,this.time+.6);continue}this.notes.splice(t,1),this.wingFlags.delete(n.id),e.hasNote=!0,e.readyAt=this.time+e.def.stats.indexTime,this.brain.noteIntaken(e)}}intakeAllowed(e,t){return e.def.intake===`ground`||M(t,Ge(e.alliance))<1.6}solveContacts(e,t){let n=[],r=this.robots,i=r.map(e=>e.poly());for(let e=0;e<r.length;e++){for(let t=e+1;t<r.length;t++){let a=r[e],o=r[t];if(a.isStatic&&o.isStatic)continue;let s=un(i[e],i[t]);s&&(mn(a,o,s,...Nr,n),a.alliance!==o.alliance&&(a.contacts.add(o.id),o.contacts.add(a.id)),a.isStatic&&(o.touchingStatic=!0),o.isStatic&&(a.touchingStatic=!0))}let t=r[e];if(!t.isStatic)for(let r of Dt){if(r.tallOnly&&t.def.underStage)continue;let a=un(i[e],r.poly);a&&(mn(t,Rr,a,...Pr,n),t.touchingStatic=!0)}}let a=this.notes.filter(e=>!e.air);for(let e=0;e<a.length;e++){let t=a[e];for(let e=0;e<r.length;e++){if(r[e].climbLift>.3)continue;let a=fn(i[e],t.x,t.y,Cn);a&&mn(r[e],t,a,...Fr,n)}for(let e of Dt){if(e.tallOnly)continue;let r=fn(e.poly,t.x,t.y,Cn);r&&mn(Rr,t,r,...Ir,n)}for(let r=e+1;r<a.length;r++){let e=a[r],i=pn(t.x,t.y,Cn,e.x,e.y,Cn);i&&mn(t,e,i,...Lr,n)}}Sn(n,e,12,t)}integrate(e){for(let t of this.robots)t.integrate(e);for(let t of this.notes)t.air||(t.x+=t.vx*e,t.y+=t.vy*e,t.yaw+=Math.hypot(t.vx,t.vy)*e*.8,this.checkWingFlag(t))}flyNotes(e){let t=this.notes.filter(e=>e.air);if(!t.length)return;let n=this.robots.map(e=>({kind:`robot`,id:e.id,poly:e.poly(),z0:e.climbLift*.45,z1:e.height+e.climbLift*.45,e:.25,mu:.4})),r=e/kr,i=new Set;for(let a of t){a.age+=e,a.spin+=e*9;for(let e=0;e<kr&&!i.has(a);e++){let e=a.x,t=a.y,o=a.z;Ln(a,r);let s=Un(e,t,o,a);if(s?.kind===`speaker`){this.speakerScore(a,s.alliance),i.add(a);break}if(s?.kind===`amp`){this.ampShotScore(a,s.alliance),i.add(a);break}let c=e=>{let t=le(e,a.x);return t<.02||t>.7072||Math.abs(a.y-5.547867999999999)>=.5254624999999999||a.vz<=-3?!1:a.z<G(Math.min(t,ge))+.01},l=c(`blue`)||c(`red`);for(let e of Fn){if(l&&e.kind===`speaker`)continue;let t=Rn(a,e);t&&t[2]>.5&&Math.abs(a.vz)<.6&&this.slideOff(a,e.poly)}for(let e of n){if(e.id===a.shooter&&a.age<.6&&fn(e.poly,a.x,a.y,Cn))continue;let t=Rn(a,e);t&&t[2]>.5&&Math.abs(a.vz)<.6&&this.slideOff(a,e.poly)}a.z-wn<=0&&(a.z=wn,a.vz<-1.2?zn(a,[0,0,1],.35,.45):(a.vz=0,a.air=!1,a.shooter=null)),this.checkWingFlag(a),(a.x<-.6||a.x>17.1410642||a.y<-.6||a.y>8.811235799999999||a.age>8)&&(i.add(a),this.wingFlags.delete(a.id))}}i.size&&(this.notes=this.notes.filter(e=>!i.has(e)))}slideOff(e,t){let n=0,r=0;for(let e of t)n+=e.x/t.length,r+=e.y/t.length;let i=e.x-n,a=e.y-r,o=Math.hypot(i,a)||1;e.vx+=i/o*.9,e.vy+=a/o*.9}checkWingFlag(e){let t=this.wingFlags.get(e.id);if(t&&le(t.alliance,e.x)<5.8724799999999995){this.wingFlags.delete(e.id);let n=this.robots.find(e=>e.id===t.offender);n&&this.rules.fouls&&this.foul(n,null,t.tech,t.rule)}}speakerScore(e,t){if(this.wingFlags.delete(e.id),this.phase===`post`||this.phase===`pre`)return;let n=this.phase===`auto`||this.phase===`transition`,r=this.scores[t],i=r.amplified,a=gr(r,n);if(e.shooter!==null){let t=this.robotStats.get(e.shooter);t&&(t.speaker++,t.points+=a)}let o=Ce(t);this.emit({kind:`score`,text:`${i?`AMPLIFIED `:``}SPEAKER +${a}`,alliance:t,x:o.x,y:o.y})}ampShotScore(e,t){if(this.wingFlags.delete(e.id),this.phase===`post`||this.phase===`pre`)return;let n=_r(this.scores[t],this.phase===`auto`||this.phase===`transition`);if(e.shooter!==null){let t=this.robotStats.get(e.shooter);t&&(t.amp++,t.points+=n)}let r=Le(t);this.emit({kind:`score`,text:`AMP +${n}`,alliance:t,x:r.x,y:r.y})}mechanisms(e,t){let n=e.lastCmd??d,r=this.prevCmd.get(e.id)??d;if(this.prevCmd.set(e.id,n),e.shootCooldown=Math.max(0,e.shootCooldown-t),e.def.turret&&(e.turretYaw=ee(this.aim(e).yaw-e.heading)),e.action){e.action.t+=t,e.action.kind===`climb`&&(e.climbLift=N(e.action.t/e.action.dur,0,1)),e.action.kind===`unclimb`&&(e.climbLift=N(1-e.action.t/e.action.dur,0,1)),e.action.t>=e.action.dur&&this.finishAction(e);return}let i=e.hasNote&&this.time>=e.readyAt&&e.shootCooldown<=0,a=M(e,Le(e.alliance))<Re,o=e.onstage&&e.def.trap&&!this.trapsDone[e.alliance][e.chain.index],s=!!n.special&&!r.special,c=s&&!e.onstage&&a&&e.hasNote,l=s&&o&&e.hasNote;if((n.climb&&!r.climb||s&&!c&&!l)&&this.phase===`teleop`&&this.rules.stage){if(e.onstage){e.onstage=!1,e.action={kind:`unclimb`,t:0,dur:1};return}if(this.tryClimb(e))return}let u=n.amp&&!r.amp||c;if(e.onstage){i&&(l||n.shoot)&&o&&(e.action={kind:`trap`,t:0,dur:1.6});return}if(i){if((u||n.shoot&&a&&n.shootAmps!==!1)&&a&&e.def.amp){e.action={kind:`amp`,t:0,dur:.45};return}u&&a&&!e.def.amp&&e.isPlayer&&this.emit({kind:`info`,text:`THIS ROBOT CAN'T AMP`}),n.shoot&&this.shoot(e)}}finishAction(e){let t=e.action;e.action=null;let n=this.scores[e.alliance],r=this.phase===`auto`;if(t.kind===`amp`&&e.hasNote){e.hasNote=!1;let t=_r(n,r);this.robotStats.get(e.id).amp++,this.addRobotPoints(e.id,t);let i=Le(e.alliance);this.emit({kind:`score`,text:`AMP +${t}`,alliance:e.alliance,x:i.x,y:i.y})}else t.kind===`climb`?(e.onstage=!0,e.climbLift=1):t.kind===`unclimb`?(e.chain=null,e.climbLift=0):t.kind===`trap`&&e.hasNote&&e.chain&&(e.hasNote=!1,this.trapsDone[e.alliance][e.chain.index]=!0,n.trap+=mr.trap,this.addRobotPoints(e.id,mr.trap),this.emit({kind:`score`,text:`TRAP +${mr.trap}`,alliance:e.alliance,x:e.x,y:e.y}))}tryClimb(e){if(e.def.stats.climbTime<=0)return e.isPlayer&&this.emit({kind:`info`,text:`THIS ROBOT CAN'T CLIMB`}),!1;let t=null,n=.8,r=0;for(let i of this.chains[e.alliance]){let a=i.b.x-i.a.x,o=i.b.y-i.a.y,s=a*a+o*o,c=N(((e.x-i.a.x)*a+(e.y-i.a.y)*o)/s,.15,.85),l=Math.hypot(e.x-(i.a.x+a*c),e.y-(i.a.y+o*c));l<n&&(t=i,n=l,r=c)}if(!t)return e.isPlayer&&this.emit({kind:`info`,text:`GET UNDER A CHAIN TO CLIMB`}),!1;let i=this.robots.filter(n=>n!==e&&n.chain===t).map(e=>e.chainSlot),a=[.3,.5,.7].filter(e=>!i.includes(e));if(!a.length)return!1;let o=a.reduce((e,t)=>Math.abs(t-r)<Math.abs(e-r)?t:e);return e.chain=t,e.chainSlot=o,e.x=t.a.x+(t.b.x-t.a.x)*o,e.y=t.a.y+(t.b.y-t.a.y)*o,e.heading=Math.atan2(-t.ny,-t.nx),e.vx=e.vy=e.omega=0,e.action={kind:`climb`,t:0,dur:e.def.stats.climbTime},!0}aiSkill(e){return e.isPlayer?1:this.rules.aiLevel===`easy`?.8:this.rules.aiLevel===`hard`?1.04:.94}shoot(e){let t=e.def.stats,n=N(t.accuracy/100*this.aiSkill(e),0,1),r=e.shooterPos(),i=e.lastCmd?.passTo,a=this.isPass(e)||!!i,o,s,c;if(a){let t=i??{x:r.x+Math.cos(e.heading)*8,y:r.y+Math.sin(e.heading)*8},n=Math.hypot(t.x-r.x,t.y-r.y);o=e.def.turret?Math.atan2(t.y-r.y,t.x-r.x):e.heading,s=e.def.look.shooter===`fixed`?or:40*Mr,c=Qn(n,s,r.z,e.exitSpeed*1.1)}else{let t=this.aim(e,!0);o=e.def.turret?t.yaw:e.heading,s=t.pitch,c=t.speed,e.def.look.shooter===`fixed`&&(s=or,c=Xn(t.dist,Se,s,r.z,e.exitSpeed*1.15).speed)}let l=1-n;o+=this.rng.gauss()*(l*2.5+.25)*Mr,s+=this.rng.gauss()*(l*2.5+.25)*Mr,c*=1+this.rng.gauss()*(l*.025+.004),this.rng.next()<Math.max(0,.9-t.accuracy/100)*1.5&&(c*=.72+this.rng.next()*.16,o+=this.rng.gauss()*3*Mr),e.pivot=s;let u=nr(r.x,r.y,r.z);u.air=!0,u.by=e.alliance,u.shooter=e.id;let d=Math.cos(s)*c;u.vx=Math.cos(o)*d+e.vx,u.vy=Math.sin(o)*d+e.vy,u.vz=Math.sin(s)*c,this.notes.push(u),e.hasNote=!1,e.shootCooldown=.25,this.flagWingShot(e,u),this.emit({kind:`shot`,text:``,alliance:e.alliance,x:e.x,y:e.y})}flagWingShot(e,t){let n=e.poly().map(t=>le(e.alliance,t.x)),r=Math.min(...n)>fe,i=Math.max(...n)>B-fe;this.phase===`auto`&&r?this.wingFlags.set(t.id,{offender:e.id,alliance:e.alliance,tech:!0,rule:`AUTO SHOT FROM OUTSIDE WING`}):i&&this.wingFlags.set(t.id,{offender:e.id,alliance:e.alliance,tech:!1,rule:`FULL-COURT SHOT`})}humanPlayers(e,t){if(this.rules.humanPlayer!==`off`)for(let n of L){let r=this.scores[n];if(this.feedSource(n,t),this.phase!==`teleop`)continue;let i=this.rules.humanPlayer===`manual`&&this.player?.alliance===n,a=t=>e[t]&&!this.prevInput[t],o,s,c;i?(o=a(`amplify`),s=a(`coop`),c=a(`highNote`)):(o=r.bank>=2,s=this.teleopElapsed>3&&r.bank>=1&&!r.coop,this.hpHighCd[n]-=t,c=this.isEndgame&&this.hpHighCd[n]<=0&&this.robots.some(e=>e.alliance===n&&e.chain&&!r.mics[e.chain.index])),s&&yr(r,this.teleopElapsed)?this.emit({kind:`amplify`,text:`COOPERTITION`,alliance:n}):o&&vr(r)?this.emit({kind:`amplify`,text:`AMPLIFIED!`,alliance:n}):i&&a(`amplify`)&&this.emit({kind:`info`,text:r.amplified?`ALREADY AMPLIFIED`:`NEED 2 AMP NOTES`}),c&&this.throwHighNote(n)}}feedSource(e,t){if(this.hpDropCd[e]-=t,this.hpDropCd[e]>0||this.notes.length>=Dr)return;let n=Ge(e),r=this.robots.filter(t=>t.alliance===e&&!t.hasNote&&!t.busy&&M(t,n)<3);if(!r.length||this.notes.some(e=>M(e,n)<1.2))return;let i=Ue(e),a=i.b.x-i.a.x,o=i.b.y-i.a.y,s=Math.hypot(a,o),c=(this.rng.next()-.5)*2*(He.halfW-Cn-.1),l=i.mid.x+a/s*c+i.nx*.06,u=i.mid.y+o/s*c+i.ny*.06;this.hpDropCd[e]=1.6;let d=r.find(e=>{if(e.def.intake!==`source`)return!1;let t=Math.cos(e.heading),n=Math.sin(e.heading);return M(e,j(l,u))<e.halfL+.45&&t*-i.nx+n*-i.ny>.7});if(d){d.hasNote=!0,d.readyAt=this.time+d.def.stats.indexTime,this.brain.noteIntaken(d);return}let f=nr(l,u,He.bottom+wn+.01);f.air=!0;let p=2.4,m=50*Mr;f.vx=i.nx*p*Math.cos(m),f.vy=i.ny*p*Math.cos(m),f.vz=-2.4*Math.sin(m),this.notes.push(f)}throwHighNote(e){let t=this.scores[e];if(this.hpHighLeft[e]<=0||!this.rules.stage)return;this.hpHighLeft[e]--,this.hpHighCd[e]=3;let n=this.robots.find(n=>n.alliance===e&&n.chain&&!t.mics[n.chain.index])?.chain?.index??t.mics.findIndex(e=>!e);n<0||(this.rng.next()<.45?(t.mics[n]=!0,this.emit({kind:`score`,text:`SPOTLIT!`,alliance:e})):this.emit({kind:`info`,text:`HIGH NOTE MISSED`,alliance:e}))}pinProgress(e){let t=0;for(let[n,r]of this.pinTimers)n.endsWith(`>`+e.id)&&(t=Math.max(t,r/this.rules.pinLimit));return N(t,0,1)}onPodium(e){let t=mt(e.alliance)[0],n=-ce(e.alliance),r=t.x+n*(Ze/2+.02);return fn(e.poly(),r,t.y,.08)!==null}fouls(e){if(!this.rules.fouls)return;for(let[t,n]of this.foulCooldown)this.foulCooldown.set(t,n-e);let t=new Map(this.robots.map(e=>[e.id,e])),n=new Set;for(let r of this.robots)for(let i of r.contacts){let a=t.get(i),o=`${r.id}>${a.id}`;n.add(o);let s=r.lastCmd??d,c=a.x-r.x,l=a.y-r.y,u=Math.hypot(c,l)||1,f=(s.vx*c+s.vy*l)/u>.25,p=a.speed<.35&&(a.touchingStatic||a.onstage),m=this.pinTimers.get(o)??0;if(m=f&&p&&!a.onstage?m+e:Math.max(0,m-e*.5),m>=this.rules.pinLimit&&(this.foul(r,a,this.pinFouled.has(o),`PIN`),this.pinFouled.add(o),m=0),m===0&&!f&&this.pinFouled.delete(o),this.pinTimers.set(o,m),(this.foulCooldown.get(o)??0)>0)continue;let h=this.zones,g=a.alliance;if(this.overlaps(a,h.stage[g])&&(a.onstage||a.climbLift>0)||this.isEndgame&&(this.overlaps(a,h.stage[g])||this.overlaps(r,h.stage[g])))this.foul(r,a,!0,`STAGE PROTECTION`),this.foul(r,a,!0,`STAGE PROTECTION`),this.foulCooldown.set(o,5);else if(this.overlaps(r,h.source[g])||this.overlaps(a,h.source[g])||this.overlaps(r,h.amp[g])||this.overlaps(a,h.amp[g]))this.foul(r,a,!0,`SOURCE/AMP ZONE`),this.foulCooldown.set(o,5);else if(!this.isEndgame&&this.onPodium(a))this.foul(r,a,!0,`PODIUM PROTECTION`),this.foulCooldown.set(o,5);else if(this.phase===`auto`){let e=r.poly().map(e=>le(r.alliance,e.x));Math.min(...e)>8.270532099999999&&(this.foul(r,a,!0,`AUTO CENTER LINE`),this.foulCooldown.set(o,5))}}for(let t of[...this.pinTimers.keys()])if(!n.has(t)){let n=this.pinTimers.get(t);n>0?this.pinTimers.set(t,Math.max(0,n-e*.5)):(this.pinTimers.delete(t),this.pinFouled.delete(t))}}foul(e,t,n,r){let i=n?mr.techFoul:mr.foul,a=R(e.alliance);this.scores[a].foulPoints+=i;let o=this.scores[e.alliance];n?o.techFoulsCommitted++:o.foulsCommitted++,this.robotStats.get(e.id).fouls++,this.emit({kind:`foul`,text:`${n?`TECH FOUL`:`FOUL`} ${e.def.team}: ${r} +${i} ${a.toUpperCase()}`,alliance:a,x:(t??e).x,y:(t??e).y})}};function Vr(e,t,n){let r=Math.abs(e);return r<t?0:Math.sign(e)*((r-t)/(1-t))**n}function Hr(){let e=navigator.getGamepads?navigator.getGamepads():[],t=Array.from(e).find(e=>e&&e.connected);if(!t)return{connected:!1,lx:0,ly:0,rx:0,buttons:[]};let n=x.deadzone,r=x.curve,i=t.axes[0]??0,a=-(t.axes[1]??0),o=Math.hypot(i,a);if(o<n)i=a=0;else{let e=Vr(Math.min(1,o),n,r)/o;i*=e,a*=e}return{connected:!0,lx:i,ly:a,rx:Vr(t.axes[2]??0,n,r),buttons:t.buttons.map(e=>e.pressed||e.value>.5)}}var Ur=(e,t)=>!!e.buttons[x.pad[t]];function Wr(){return new Promise(e=>{let t=Hr().buttons.slice(),n=()=>{let r=Hr().buttons.findIndex((e,n)=>e&&!t[n]);r>=0?e(r):requestAnimationFrame(n)};n()})}var Gr=new Set;function Kr(e){let t=e.target;return!!t&&(t.tagName===`INPUT`||t.tagName===`TEXTAREA`)}window.addEventListener(`keydown`,e=>{Kr(e)||(Gr.add(e.code),[`Space`,`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,`Tab`,`Quote`,`Slash`].includes(e.code)&&e.preventDefault())}),window.addEventListener(`keyup`,e=>Gr.delete(e.code)),window.addEventListener(`blur`,()=>Gr.clear());var qr=e=>!!e&&Gr.has(e),Jr={Escape:`ESC`,Quote:`'`,Semicolon:`;`,Comma:`,`,Period:`.`,Slash:`/`,Backslash:`\\`,BracketLeft:`[`,BracketRight:`]`,Minus:`-`,Equal:`=`,Backquote:"`",Space:`SPACE`};function Yr(e){return e?Jr[e]?Jr[e]:e.replace(/^Key/,``).replace(/^Digit/,``).replace(`Arrow`,``).replace(`BracketLeft`,`[`).replace(`BracketRight`,`]`).replace(`Left`,` L`).replace(`Right`,` R`).toUpperCase():`—`}var Xr={lx:0,ly:0,rx:0,buttons:{}},Zr=()=>`ontouchstart`in window||navigator.maxTouchPoints>0;function Qr(e,t){let n=document.createElement(`div`);n.className=`stick-base`;let r=document.createElement(`div`);r.className=`stick-knob`,n.appendChild(r),e.appendChild(n);let i=null,a=0,o=0;e.addEventListener(`pointerdown`,t=>{if(i!==null)return;i=t.pointerId,e.setPointerCapture(t.pointerId);let r=e.getBoundingClientRect();a=t.clientX,o=t.clientY,n.style.left=`${a-r.left}px`,n.style.top=`${o-r.top}px`,n.classList.add(`on`)}),e.addEventListener(`pointermove`,e=>{if(e.pointerId!==i)return;let n=e.clientX-a,s=e.clientY-o,c=Math.hypot(n,s);c>60&&(n*=60/c,s*=60/c),r.style.transform=`translate(${n}px, ${s}px)`,t(n/60,-s/60)});let s=e=>{e.pointerId===i&&(i=null,r.style.transform=``,n.classList.remove(`on`),t(0,0))};e.addEventListener(`pointerup`,s),e.addEventListener(`pointercancel`,s)}function $r(e){e.innerHTML=``;let t=document.createElement(`div`);t.className=`stick-zone left`;let n=document.createElement(`div`);n.className=`stick-zone right`,e.append(t,n),Qr(t,(e,t)=>{Xr.lx=e,Xr.ly=t}),Qr(n,e=>{Xr.rx=Math.abs(e)<.15?0:e});let r=document.createElement(`div`);r.className=`touch-btns`;let i=document.createElement(`div`);i.className=`touch-hp`;let a=(e,t,n,r=``)=>{let i=document.createElement(`button`);i.className=`tbtn ${r}`,i.textContent=n,i.addEventListener(`pointerdown`,e=>{e.preventDefault(),e.stopPropagation(),Xr.buttons[t]=!0,i.classList.add(`on`)});let a=()=>{Xr.buttons[t]=!1,i.classList.remove(`on`)};i.addEventListener(`pointerup`,a),i.addEventListener(`pointercancel`,a),i.addEventListener(`pointerleave`,a),e.appendChild(i)};a(r,`shoot`,`SHOOT`,`big`),a(r,`intake`,`INTAKE`),a(r,`amp`,`AMP`),a(r,`special`,`SPECIAL`),a(r,`climb`,`CLIMB`),a(i,`amplify`,`AMPLIFY`),a(i,`coop`,`CO-OP`),a(i,`highNote`,`HIGH NOTE`),a(i,`camera`,`CAM`),a(i,`pause`,`II`),e.append(r,i)}var ei=e=>Math.round(Math.max(-1,Math.min(1,e))*64)/64,ti={},ni=(e,t)=>{let n=t&&!ti[e];return ti[e]=t,n};function ri(){let e=e=>qr(x.keys[e]),t=Hr(),n=e=>t.connected&&Ur(t,e),r=e=>!!Xr.buttons[e],i=+!!e(`right`)-!!e(`left`),a=+!!e(`up`)-!!e(`down`),o=Math.hypot(i,a);o>1&&(i/=o,a/=o);let s=+!!e(`rotR`)-!!e(`rotL`);i+=t.lx+Xr.lx,a+=t.ly+Xr.ly,s+=t.rx+Xr.rx;let c=Math.hypot(i,a);c>1&&(i/=c,a/=c);let l=t=>e(t)||n(t)||r(t);return{player:{mx:ei(i),my:ei(a),rot:ei(s),shoot:l(`shoot`),intake:l(`intake`),special:l(`special`),climb:l(`climb`),amp:l(`amp`),separateAmp:x.separateAmp,amplify:l(`amplify`),coop:l(`coop`),highNote:l(`highNote`)},camera:ni(`camera`,l(`camera`)),pause:ni(`pause`,l(`pause`)),reset:ni(`reset`,l(`reset`)),fullscreen:ni(`fullscreen`,e(`fullscreen`))}}var ii=1e3,ai=1001,oi=1002,si=1003,ci=1004,li=1005,ui=1006,di=1007,fi=1008,pi=1009,mi=1010,hi=1011,gi=1012,_i=1013,vi=1014,yi=1015,bi=1016,xi=1017,Si=1018,Ci=1020,wi=35902,Ti=35899,Ei=1021,Di=1022,Oi=1023,ki=1026,Ai=1027,ji=1028,Mi=1029,Ni=1030,Pi=1031,Fi=1033,Ii=33776,Li=33777,Ri=33778,zi=33779,Bi=35840,Vi=35841,Hi=35842,Ui=35843,Wi=36196,Gi=37492,Ki=37496,qi=37488,Ji=37489,Yi=37490,Xi=37491,Zi=37808,Qi=37809,$i=37810,ea=37811,ta=37812,na=37813,ra=37814,ia=37815,aa=37816,oa=37817,sa=37818,ca=37819,la=37820,ua=37821,da=36492,fa=36494,pa=36495,ma=36283,ha=36284,ga=36285,_a=36286,va=2300,ya=2301,ba=2302,xa=2303,Sa=2400,Ca=2401,wa=2402,Ta=3200,Ea=`srgb`,Da=`srgb-linear`,Oa=`linear`,ka=`srgb`,Aa=7680,ja=35044,Ma=2e3;function Na(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Pa(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Fa(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Ia(){let e=Fa(`canvas`);return e.style.display=`block`,e}var La={};function Ra(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function za(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function K(...e){e=za(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function q(...e){e=za(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Ba(...e){let t=e.join(` `);t in La||(La[t]=!0,K(...e))}function Va(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var Ha={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},Ua=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},Wa=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),Ga=Math.PI/180,Ka=180/Math.PI;function qa(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Wa[e&255]+Wa[e>>8&255]+Wa[e>>16&255]+Wa[e>>24&255]+`-`+Wa[t&255]+Wa[t>>8&255]+`-`+Wa[t>>16&15|64]+Wa[t>>24&255]+`-`+Wa[n&63|128]+Wa[n>>8&255]+`-`+Wa[n>>16&255]+Wa[n>>24&255]+Wa[r&255]+Wa[r>>8&255]+Wa[r>>16&255]+Wa[r>>24&255]).toLowerCase()}function Ja(e,t,n){return Math.max(t,Math.min(n,e))}function Ya(e,t){return(e%t+t)%t}function Xa(e,t,n){return(1-n)*e+n*t}function Za(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function Qa(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var J=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ja(this.x,e.x,t.x),this.y=Ja(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ja(this.x,e,t),this.y=Ja(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ja(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ja(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$a=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:K(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ja(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Y=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(to.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(to.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ja(this.x,e.x,t.x),this.y=Ja(this.y,e.y,t.y),this.z=Ja(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ja(this.x,e,t),this.y=Ja(this.y,e,t),this.z=Ja(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ja(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return eo.copy(this).projectOnVector(e),this.sub(eo)}reflect(e){return this.sub(eo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ja(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},eo=new Y,to=new $a,no=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Ba(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(ro.makeScale(e,t)),this}rotate(e){return Ba(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(ro.makeRotation(-e)),this}translate(e,t){return Ba(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(ro.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ro=new no,io=new no().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ao=new no().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function oo(){let e={enabled:!0,workingColorSpace:Da,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=co(e.r),e.g=co(e.g),e.b=co(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=lo(e.r),e.g=lo(e.g),e.b=lo(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Oa:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return Ba(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return Ba(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Da]:{primaries:t,whitePoint:r,transfer:Oa,toXYZ:io,fromXYZ:ao,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ea},outputColorSpaceConfig:{drawingBufferColorSpace:Ea}},[Ea]:{primaries:t,whitePoint:r,transfer:ka,toXYZ:io,fromXYZ:ao,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ea}}}),e}var so=oo();function co(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function lo(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var uo,fo=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{uo===void 0&&(uo=Fa(`canvas`)),uo.width=e.width,uo.height=e.height;let t=uo.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=uo}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Fa(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=co(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(co(t[e]/255)*255):t[e]=co(t[e]);return{data:t,width:e.width,height:e.height}}return K(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},po=0,mo=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:po++}),this.uuid=qa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(ho(r[t].image)):e.push(ho(r[t]))}else e=ho(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function ho(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?fo.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(K(`Texture: Unable to serialize Texture.`),{})}var go=0,_o=new Y,vo=class e extends Ua{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=ai,i=ai,a=ui,o=fi,s=Oi,c=pi,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:go++}),this.uuid=qa(),this.name=``,this.source=new mo(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new J(0,0),this.repeat=new J(1,1),this.center=new J(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new no,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(_o).x}get height(){return this.source.getSize(_o).y}get depth(){return this.source.getSize(_o).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){K(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){K(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ii:e.x-=Math.floor(e.x);break;case ai:e.x=e.x<0?0:1;break;case oi:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case ii:e.y-=Math.floor(e.y);break;case ai:e.y=e.y<0?0:1;break;case oi:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};vo.DEFAULT_IMAGE=null,vo.DEFAULT_MAPPING=300,vo.DEFAULT_ANISOTROPY=1;var yo=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ja(this.x,e.x,t.x),this.y=Ja(this.y,e.y,t.y),this.z=Ja(this.z,e.z,t.z),this.w=Ja(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ja(this.x,e,t),this.y=Ja(this.y,e,t),this.z=Ja(this.z,e,t),this.w=Ja(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ja(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},bo=class extends Ua{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ui,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new yo(0,0,e,t),this.scissorTest=!1,this.viewport=new yo(0,0,e,t),this.textures=[];let r=new vo({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:ui,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new mo(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},xo=class extends bo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},So=class extends vo{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=si,this.minFilter=si,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Co=class extends vo{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=si,this.minFilter=si,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},wo=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/To.setFromMatrixColumn(e,0).length(),i=1/To.setFromMatrixColumn(e,1).length(),a=1/To.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Do,e,Oo)}lookAt(e,t,n){let r=this.elements;return jo.subVectors(e,t),jo.lengthSq()===0&&(jo.z=1),jo.normalize(),ko.crossVectors(n,jo),ko.lengthSq()===0&&(Math.abs(n.z)===1?jo.x+=1e-4:jo.z+=1e-4,jo.normalize(),ko.crossVectors(n,jo)),ko.normalize(),Ao.crossVectors(jo,ko),r[0]=ko.x,r[4]=Ao.x,r[8]=jo.x,r[1]=ko.y,r[5]=Ao.y,r[9]=jo.y,r[2]=ko.z,r[6]=Ao.z,r[10]=jo.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],ee=r[7],P=r[11],te=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*ee,i[8]=a*C+o*D+s*j+c*P,i[12]=a*w+o*O+s*M+c*te,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*ee,i[9]=l*C+u*D+d*j+f*P,i[13]=l*w+u*O+d*M+f*te,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*ee,i[10]=p*C+m*D+h*j+g*P,i[14]=p*w+m*O+h*M+g*te,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*ee,i[11]=_*C+v*D+y*j+b*P,i[15]=_*w+v*O+y*M+b*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=To.set(r[0],r[1],r[2]).length(),o=To.set(r[4],r[5],r[6]).length(),s=To.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Eo.copy(this);let c=1/a,l=1/o,u=1/s;return Eo.elements[0]*=c,Eo.elements[1]*=c,Eo.elements[2]*=c,Eo.elements[4]*=l,Eo.elements[5]*=l,Eo.elements[6]*=l,Eo.elements[8]*=u,Eo.elements[9]*=u,Eo.elements[10]*=u,t.setFromRotationMatrix(Eo),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Ma,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ma,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},To=new Y,Eo=new wo,Do=new Y(0,0,0),Oo=new Y(1,1,1),ko=new Y,Ao=new Y,jo=new Y,Mo=new wo,No=new $a,Po=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(Ja(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-Ja(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(Ja(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-Ja(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(Ja(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-Ja(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:K(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Mo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return No.setFromEuler(this),this.setFromQuaternion(No,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Po.DEFAULT_ORDER=`XYZ`;var Fo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},Io=0,Lo=new Y,Ro=new $a,zo=new wo,Bo=new Y,Vo=new Y,Ho=new Y,Uo=new $a,Wo=new Y(1,0,0),Go=new Y(0,1,0),Ko=new Y(0,0,1),qo={type:`added`},Jo={type:`removed`},Yo={type:`childadded`,child:null},Xo={type:`childremoved`,child:null},Zo=class e extends Ua{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Io++}),this.uuid=qa(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new Y,n=new Po,r=new $a,i=new Y(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new wo},normalMatrix:{value:new no}}),this.matrix=new wo,this.matrixWorld=new wo,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ro.setFromAxisAngle(e,t),this.quaternion.multiply(Ro),this}rotateOnWorldAxis(e,t){return Ro.setFromAxisAngle(e,t),this.quaternion.premultiply(Ro),this}rotateX(e){return this.rotateOnAxis(Wo,e)}rotateY(e){return this.rotateOnAxis(Go,e)}rotateZ(e){return this.rotateOnAxis(Ko,e)}translateOnAxis(e,t){return Lo.copy(e).applyQuaternion(this.quaternion),this.position.add(Lo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wo,e)}translateY(e){return this.translateOnAxis(Go,e)}translateZ(e){return this.translateOnAxis(Ko,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zo.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Bo.copy(e):Bo.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zo.lookAt(Vo,Bo,this.up):zo.lookAt(Bo,Vo,this.up),this.quaternion.setFromRotationMatrix(zo),r&&(zo.extractRotation(r.matrixWorld),Ro.setFromRotationMatrix(zo),this.quaternion.premultiply(Ro.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(q(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qo),Yo.child=e,this.dispatchEvent(Yo),Yo.child=null):q(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jo),Xo.child=e,this.dispatchEvent(Xo),Xo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zo.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zo.multiply(e.parent.matrixWorld)),e.applyMatrix4(zo),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qo),Yo.child=e,this.dispatchEvent(Yo),Yo.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,e,Ho),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,Uo,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Zo.DEFAULT_UP=new Y(0,1,0),Zo.DEFAULT_MATRIX_AUTO_UPDATE=!0,Zo.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Qo=class extends Zo{constructor(){super(),this.isGroup=!0,this.type=`Group`}},$o={type:`move`},es=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($o)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Qo;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ts={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},rs={h:0,s:0,l:0};function is(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var as=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ea){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,so.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=so.workingColorSpace){return this.r=e,this.g=t,this.b=n,so.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=so.workingColorSpace){if(e=Ya(e,1),t=Ja(t,0,1),n=Ja(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=is(i,r,e+1/3),this.g=is(i,r,e),this.b=is(i,r,e-1/3)}return so.colorSpaceToWorking(this,r),this}setStyle(e,t=Ea){function n(t){t!==void 0&&parseFloat(t)<1&&K(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:K(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);K(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ea){let n=ts[e.toLowerCase()];return n===void 0?K(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=co(e.r),this.g=co(e.g),this.b=co(e.b),this}copyLinearToSRGB(e){return this.r=lo(e.r),this.g=lo(e.g),this.b=lo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ea){return so.workingToColorSpace(os.copy(this),e),Math.round(Ja(os.r*255,0,255))*65536+Math.round(Ja(os.g*255,0,255))*256+Math.round(Ja(os.b*255,0,255))}getHexString(e=Ea){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=so.workingColorSpace){so.workingToColorSpace(os.copy(this),t);let n=os.r,r=os.g,i=os.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=so.workingColorSpace){return so.workingToColorSpace(os.copy(this),t),e.r=os.r,e.g=os.g,e.b=os.b,e}getStyle(e=Ea){so.workingToColorSpace(os.copy(this),e);let t=os.r,n=os.g,r=os.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(ns),this.setHSL(ns.h+e,ns.s+t,ns.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ns),e.getHSL(rs);let n=Xa(ns.h,rs.h,t),r=Xa(ns.s,rs.s,t),i=Xa(ns.l,rs.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},os=new as;as.NAMES=ts;var ss=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new as(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},cs=class extends Zo{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Po,this.environmentIntensity=1,this.environmentRotation=new Po,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ls=new Y,us=new Y,ds=new Y,fs=new Y,ps=new Y,ms=new Y,hs=new Y,gs=new Y,_s=new Y,vs=new Y,ys=new yo,bs=new yo,xs=new yo,Ss=class e{constructor(e=new Y,t=new Y,n=new Y){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),ls.subVectors(e,t),r.cross(ls);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){ls.subVectors(r,t),us.subVectors(n,t),ds.subVectors(e,t);let a=ls.dot(ls),o=ls.dot(us),s=ls.dot(ds),c=us.dot(us),l=us.dot(ds),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,fs)!==null&&fs.x>=0&&fs.y>=0&&fs.x+fs.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,fs)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,fs.x),s.addScaledVector(a,fs.y),s.addScaledVector(o,fs.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return ys.setScalar(0),bs.setScalar(0),xs.setScalar(0),ys.fromBufferAttribute(e,t),bs.fromBufferAttribute(e,n),xs.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ys,i.x),a.addScaledVector(bs,i.y),a.addScaledVector(xs,i.z),a}static isFrontFacing(e,t,n,r){return ls.subVectors(n,t),us.subVectors(e,t),ls.cross(us).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ls.subVectors(this.c,this.b),us.subVectors(this.a,this.b),ls.cross(us).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;ps.subVectors(r,n),ms.subVectors(i,n),gs.subVectors(e,n);let s=ps.dot(gs),c=ms.dot(gs);if(s<=0&&c<=0)return t.copy(n);_s.subVectors(e,r);let l=ps.dot(_s),u=ms.dot(_s);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(ps,a);vs.subVectors(e,i);let f=ps.dot(vs),p=ms.dot(vs);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(ms,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return hs.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(hs,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(ps,a).addScaledVector(ms,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Cs=class{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ts.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ts.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ts.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Ts):Ts.fromBufferAttribute(r,t),Ts.applyMatrix4(e.matrixWorld),this.expandByPoint(Ts);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Es.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Es.copy(e.boundingBox)),Es.applyMatrix4(e.matrixWorld),this.union(Es)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ts),Ts.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ns),Ps.subVectors(this.max,Ns),Ds.subVectors(e.a,Ns),Os.subVectors(e.b,Ns),ks.subVectors(e.c,Ns),As.subVectors(Os,Ds),js.subVectors(ks,Os),Ms.subVectors(Ds,ks);let t=[0,-As.z,As.y,0,-js.z,js.y,0,-Ms.z,Ms.y,As.z,0,-As.x,js.z,0,-js.x,Ms.z,0,-Ms.x,-As.y,As.x,0,-js.y,js.x,0,-Ms.y,Ms.x,0];return!Ls(t,Ds,Os,ks,Ps)||(t=[1,0,0,0,1,0,0,0,1],!Ls(t,Ds,Os,ks,Ps))?!1:(Fs.crossVectors(As,js),t=[Fs.x,Fs.y,Fs.z],Ls(t,Ds,Os,ks,Ps))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ts).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ts).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ws[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ws[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ws[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ws[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ws[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ws[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ws[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ws[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ws),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ws=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Ts=new Y,Es=new Cs,Ds=new Y,Os=new Y,ks=new Y,As=new Y,js=new Y,Ms=new Y,Ns=new Y,Ps=new Y,Fs=new Y,Is=new Y;function Ls(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Is.fromArray(e,a);let o=i.x*Math.abs(Is.x)+i.y*Math.abs(Is.y)+i.z*Math.abs(Is.z),s=t.dot(Is),c=n.dot(Is),l=r.dot(Is);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Rs=new Y,zs=new J,Bs=0,Vs=class extends Ua{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bs++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=ja,this.updateRanges=[],this.gpuType=yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)zs.fromBufferAttribute(this,t),zs.applyMatrix3(e),this.setXY(t,zs.x,zs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Rs.fromBufferAttribute(this,t),Rs.applyMatrix3(e),this.setXYZ(t,Rs.x,Rs.y,Rs.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Rs.fromBufferAttribute(this,t),Rs.applyMatrix4(e),this.setXYZ(t,Rs.x,Rs.y,Rs.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rs.fromBufferAttribute(this,t),Rs.applyNormalMatrix(e),this.setXYZ(t,Rs.x,Rs.y,Rs.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rs.fromBufferAttribute(this,t),Rs.transformDirection(e),this.setXYZ(t,Rs.x,Rs.y,Rs.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Za(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qa(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Za(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qa(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Za(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qa(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Za(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qa(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Za(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qa(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Qa(t,this.array),n=Qa(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Qa(t,this.array),n=Qa(n,this.array),r=Qa(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Qa(t,this.array),n=Qa(n,this.array),r=Qa(r,this.array),i=Qa(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},Hs=class extends Vs{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Us=class extends Vs{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Ws=class extends Vs{constructor(e,t,n){super(new Float32Array(e),t,n)}},Gs=new Cs,Ks=new Y,qs=new Y,Js=class{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Gs.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ks.subVectors(e,this.center);let t=Ks.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Ks,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ks.copy(e.center).add(qs)),this.expandByPoint(Ks.copy(e.center).sub(qs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ys=0,Xs=new wo,Zs=new Zo,Qs=new Y,$s=new Cs,ec=new Cs,tc=new Y,nc=class e extends Ua{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ys++}),this.uuid=qa(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Na(e)?Us:Hs)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new no().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Xs.makeRotationFromQuaternion(e),this.applyMatrix4(Xs),this}rotateX(e){return Xs.makeRotationX(e),this.applyMatrix4(Xs),this}rotateY(e){return Xs.makeRotationY(e),this.applyMatrix4(Xs),this}rotateZ(e){return Xs.makeRotationZ(e),this.applyMatrix4(Xs),this}translate(e,t,n){return Xs.makeTranslation(e,t,n),this.applyMatrix4(Xs),this}scale(e,t,n){return Xs.makeScale(e,t,n),this.applyMatrix4(Xs),this}lookAt(e){return Zs.lookAt(e),Zs.updateMatrix(),this.applyMatrix4(Zs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qs).negate(),this.translate(Qs.x,Qs.y,Qs.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Ws(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&K(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){q(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];$s.setFromBufferAttribute(n),this.morphTargetsRelative?(tc.addVectors(this.boundingBox.min,$s.min),this.boundingBox.expandByPoint(tc),tc.addVectors(this.boundingBox.max,$s.max),this.boundingBox.expandByPoint(tc)):(this.boundingBox.expandByPoint($s.min),this.boundingBox.expandByPoint($s.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&q(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Js);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){q(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new Y,1/0);return}if(e){let n=this.boundingSphere.center;if($s.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];ec.setFromBufferAttribute(n),this.morphTargetsRelative?(tc.addVectors($s.min,ec.min),$s.expandByPoint(tc),tc.addVectors($s.max,ec.max),$s.expandByPoint(tc)):($s.expandByPoint(ec.min),$s.expandByPoint(ec.max))}$s.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)tc.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(tc));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)tc.fromBufferAttribute(a,t),o&&(Qs.fromBufferAttribute(e,t),tc.add(Qs)),r=Math.max(r,n.distanceToSquared(tc))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&q(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){q(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Vs(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new Y,s[e]=new Y;let c=new Y,l=new Y,u=new Y,d=new J,f=new J,p=new J,m=new Y,h=new Y;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new Y,y=new Y,b=new Y,x=new Y;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Vs(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new Y,i=new Y,a=new Y,o=new Y,s=new Y,c=new Y,l=new Y,u=new Y;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)tc.fromBufferAttribute(e,t),tc.normalize(),e.setXYZ(t,tc.x,tc.y,tc.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Vs(a,r,i)}if(this.index===null)return K(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},rc=new Y,ic=new Y,ac=new no,oc=class{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=rc.subVectors(n,t).cross(ic.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(rc),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ac.getNormalMatrix(e),r=this.coplanarPoint(rc).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},sc=0,cc=class extends Ua{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sc++}),this.uuid=qa(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new as(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Aa,this.stencilZFail=Aa,this.stencilZPass=Aa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){K(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){K(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new as().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new oc().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new J().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new J().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},lc=new Y,uc=new Y,dc=new Y,fc=new Y,pc=class{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,lc)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=lc.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(lc.copy(this.origin).addScaledVector(this.direction,t),lc.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){uc.copy(e).add(t).multiplyScalar(.5),dc.copy(t).sub(e).normalize(),fc.copy(this.origin).sub(uc);let i=e.distanceTo(t)*.5,a=-this.direction.dot(dc),o=fc.dot(this.direction),s=-fc.dot(dc),c=fc.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(uc).addScaledVector(dc,d),f}intersectSphere(e,t){if(e.radius<0)return null;lc.subVectors(e.center,this.origin);let n=lc.dot(this.direction),r=lc.dot(lc)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,lc)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,M,N;if(y>=b&&y>=x?(w=s,D=u,A=p,N=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,M=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,M=_)):b>=x?(w=c,D=d,A=m,N=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,M=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,M=v)):(w=l,D=f,A=h,N=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,M=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,M=g)),w===0)return null;let ee=S/w,P=C/w,te=1/w,ne=T-ee*D,re=E-P*D,F=O-ee*A,ie=k-P*A,ae=j-ee*N,I=M-P*N,L=ae*ie-I*F,R=ne*I-re*ae,z=F*re-ie*ne;if(r){if(L<0||R<0||z<0)return null}else if((L<0||R<0||z<0)&&(L>0||R>0||z>0))return null;let oe=L+R+z;if(oe===0)return null;let B=te*(L*D+R*A+z*N);return(oe>0?B<0:B>0)?null:this.at(B/oe,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},mc=class extends cc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new as(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Po,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},hc=new wo,gc=new pc,_c=new Js,vc=new Y,yc=new Y,bc=new Y,xc=new Y,Sc=new Y,Cc=new Y,wc=new Y,Tc=new Y,Ec=class extends Zo{constructor(e=new nc,t=new mc){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Cc.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Sc.fromBufferAttribute(s,e),a?Cc.addScaledVector(Sc,r):Cc.addScaledVector(Sc.sub(t),r))}t.add(Cc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_c.copy(n.boundingSphere),_c.applyMatrix4(i),gc.copy(e.ray).recast(e.near),!(_c.containsPoint(gc.origin)===!1&&(gc.intersectSphere(_c,vc)===null||gc.origin.distanceToSquared(vc)>(e.far-e.near)**2))&&(hc.copy(i).invert(),gc.copy(e.ray).applyMatrix4(hc),(n.boundingBox===null||gc.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,gc)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Oc(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Oc(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Oc(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Oc(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Dc(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Tc.copy(s),Tc.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Tc);return l<n.near||l>n.far?null:{distance:l,point:Tc.clone(),object:e}}function Oc(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,yc),e.getVertexPosition(c,bc),e.getVertexPosition(l,xc);let u=Dc(e,t,n,r,yc,bc,xc,wc);if(u){let e=new Y;Ss.getBarycoord(wc,yc,bc,xc,e),i&&(u.uv=Ss.getInterpolatedAttribute(i,s,c,l,e,new J)),a&&(u.uv1=Ss.getInterpolatedAttribute(a,s,c,l,e,new J)),o&&(u.normal=Ss.getInterpolatedAttribute(o,s,c,l,e,new Y),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new Y,materialIndex:0};Ss.getNormal(yc,bc,xc,t.normal),u.face=t,u.barycoord=e}return u}var kc=class extends vo{constructor(e=null,t=1,n=1,r,i,a,o,s,c=si,l=si,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ac=class extends Vs{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},jc=new wo,Mc=new wo,Nc=[],Pc=new Cs,Fc=new wo,Ic=new Ec,Lc=new Js,Rc=class extends Ec{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ac(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Fc)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Cs),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,jc),Pc.copy(e.boundingBox).applyMatrix4(jc),this.boundingBox.union(Pc)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Js),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,jc),Lc.copy(e.boundingSphere).applyMatrix4(jc),this.boundingSphere.union(Lc)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Ic.geometry=this.geometry,Ic.material=this.material,Ic.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Lc.copy(this.boundingSphere),Lc.applyMatrix4(n),e.ray.intersectsSphere(Lc)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,jc),Mc.multiplyMatrices(n,jc),Ic.matrixWorld=Mc,Ic.raycast(e,Nc);for(let e=0,n=Nc.length;e<n;e++){let n=Nc[e];n.instanceId=i,n.object=this,t.push(n)}Nc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ac(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new kc(new Float32Array(r*this.count),r,this.count,ji,yi));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},zc=new Js,Bc=new J(.5,.5),Vc=new Y,Hc=class{constructor(e=new oc,t=new oc,n=new oc,r=new oc,i=new oc,a=new oc){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ma,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zc.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zc.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zc)}intersectsSprite(e){return zc.center.set(0,0,0),zc.radius=.7071067811865476+Bc.distanceTo(e.center),zc.applyMatrix4(e.matrixWorld),this.intersectsSphere(zc)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Vc.x=r.normal.x>0?e.max.x:e.min.x,Vc.y=r.normal.y>0?e.max.y:e.min.y,Vc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Vc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Uc=class extends vo{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Wc=class extends vo{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Gc=class extends vo{constructor(e,t,n=vi,r,i,a,o=si,s=si,c,l=ki,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new mo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Kc=class extends Gc{constructor(e,t=vi,n=301,r,i,a=si,o=si,s,c=ki){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},qc=class extends vo{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Jc=class e extends nc{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Ws(c,3)),this.setAttribute(`normal`,new Ws(l,3)),this.setAttribute(`uv`,new Ws(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new Y;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Yc=class e extends nc{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new Y,l=new J;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new Ws(a,3)),this.setAttribute(`normal`,new Ws(o,3)),this.setAttribute(`uv`,new Ws(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Xc=class e extends nc{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new Ws(u,3)),this.setAttribute(`normal`,new Ws(d,3)),this.setAttribute(`uv`,new Ws(f,2));function _(){let a=new Y,_=new Y,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new J,m=new Y,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Zc=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){K(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new J:new Y);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new Y,r=[],i=[],a=[],o=new Y,s=new wo;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new Y)}i[0]=new Y,a[0]=new Y;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(Ja(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(Ja(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Qc=class extends Zc{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new J){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},$c=class extends Qc{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function el(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var tl=new Y,nl=new Y,rl=new el,il=new el,al=new el,ol=class extends Zc{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new Y){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(nl.subVectors(r[0],r[1]).add(r[0]),c=nl);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(tl.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=tl),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),rl.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),il.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),al.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(rl.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),il.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),al.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(rl.calc(s),il.calc(s),al.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new Y().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function sl(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function cl(e,t){let n=1-e;return n*n*t}function ll(e,t){return 2*(1-e)*e*t}function ul(e,t){return e*e*t}function dl(e,t,n,r){return cl(e,t)+ll(e,n)+ul(e,r)}function fl(e,t){let n=1-e;return n*n*n*t}function pl(e,t){let n=1-e;return 3*n*n*e*t}function ml(e,t){return 3*(1-e)*e*e*t}function hl(e,t){return e*e*e*t}function gl(e,t,n,r,i){return fl(e,t)+pl(e,n)+ml(e,r)+hl(e,i)}var _l=class extends Zc{constructor(e=new J,t=new J,n=new J,r=new J){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new J){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(gl(e,r.x,i.x,a.x,o.x),gl(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},vl=class extends Zc{constructor(e=new Y,t=new Y,n=new Y,r=new Y){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new Y){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(gl(e,r.x,i.x,a.x,o.x),gl(e,r.y,i.y,a.y,o.y),gl(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},yl=class extends Zc{constructor(e=new J,t=new J){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new J){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new J){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},bl=class extends Zc{constructor(e=new Y,t=new Y){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new Y){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Y){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xl=class extends Zc{constructor(e=new J,t=new J,n=new J){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new J){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(dl(e,r.x,i.x,a.x),dl(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Sl=class extends Zc{constructor(e=new Y,t=new Y,n=new Y){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Y){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(dl(e,r.x,i.x,a.x),dl(e,r.y,i.y,a.y),dl(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Cl=class extends Zc{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new J){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(sl(o,s.x,c.x,l.x,u.x),sl(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new J().fromArray(n))}return this}},wl=Object.freeze({__proto__:null,ArcCurve:$c,CatmullRomCurve3:ol,CubicBezierCurve:_l,CubicBezierCurve3:vl,EllipseCurve:Qc,LineCurve:yl,LineCurve3:bl,QuadraticBezierCurve:xl,QuadraticBezierCurve3:Sl,SplineCurve:Cl}),Tl=class extends Zc{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new wl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new wl[n.type]().fromJSON(n))}return this}},El=class extends Tl{constructor(e){super(),this.type=`Path`,this.currentPoint=new J,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new yl(this.currentPoint.clone(),new J(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new xl(this.currentPoint.clone(),new J(e,t),new J(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new _l(this.currentPoint.clone(),new J(e,t),new J(n,r),new J(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new Cl([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new Qc(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Dl=class extends El{constructor(e){super(e),this.uuid=qa(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new El().fromJSON(n))}return this}};function Ol(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=kl(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=Il(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return jl(a,o,n,s,c,l,0),o}function kl(e,t,n,r,i){let a;if(i===ou(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=ru(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=ru(i/r|0,e[i],e[i+1],a);return a&&Yl(a,a.next)&&(iu(a),a=a.next),a}function Al(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(Yl(n,n.next)||Jl(n.prev,n,n.next)===0)){if(iu(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function jl(e,t,n,r,i,a,o){if(!e)return;!o&&a&&Vl(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?Nl(e,r,i,a):Ml(e)){t.push(c.i,e.i,l.i),iu(e),e=l.next,s=l.next;continue}if(e=l,e===s){o?o===1?(e=Pl(Al(e),t),jl(e,t,n,r,i,a,2)):o===2&&Fl(e,t,n,r,i,a):jl(Al(e),t,n,r,i,a,1);break}}}function Ml(e){let t=e.prev,n=e,r=e.next;if(Jl(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&Kl(i,s,a,c,o,l,m.x,m.y)&&Jl(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Nl(e,t,n,r){let i=e.prev,a=e,o=e.next;if(Jl(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=Ul(p,m,t,n,r),v=Ul(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Kl(s,u,c,d,l,f,y.x,y.y)&&Jl(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Kl(s,u,c,d,l,f,b.x,b.y)&&Jl(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Kl(s,u,c,d,l,f,y.x,y.y)&&Jl(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Kl(s,u,c,d,l,f,b.x,b.y)&&Jl(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Pl(e,t){let n=e;do{let r=n.prev,i=n.next.next;!Yl(r,i)&&Xl(r,n,n.next,i)&&eu(r,i)&&eu(i,r)&&(t.push(r.i,n.i,i.i),iu(n),iu(n.next),n=e=i),n=n.next}while(n!==e);return Al(n)}function Fl(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&ql(o,e)){let s=nu(o,e);o=Al(o,o.next),s=Al(s,s.next),jl(o,t,n,r,i,a,0),jl(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function Il(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=kl(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(Wl(o))}i.sort(Ll);for(let e=0;e<i.length;e++)n=Rl(i[e],n);return n}function Ll(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function Rl(e,t){let n=zl(e,t);if(!n)return t;let r=nu(n,e);return Al(r,r.next),Al(n,n.next)}function zl(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(Yl(e,n))return n;do{if(Yl(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&Gl(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);eu(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&Bl(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function Bl(e,t){return Jl(e.prev,e,t.prev)<0&&Jl(t.next,e,e.next)<0}function Vl(e,t,n,r){let i=e;do i.z===0&&(i.z=Ul(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,Hl(i)}function Hl(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function Ul(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Wl(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function Gl(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function Kl(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&Gl(e,t,n,r,i,a,o,s)}function ql(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!$l(e,t)&&(eu(e,t)&&eu(t,e)&&tu(e,t)&&(Jl(e.prev,e,t.prev)||Jl(e,t.prev,t))||Yl(e,t)&&Jl(e.prev,e,e.next)>0&&Jl(t.prev,t,t.next)>0)}function Jl(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Yl(e,t){return e.x===t.x&&e.y===t.y}function Xl(e,t,n,r){let i=Ql(Jl(e,t,n)),a=Ql(Jl(e,t,r)),o=Ql(Jl(n,r,e)),s=Ql(Jl(n,r,t));return!!(i!==a&&o!==s||i===0&&Zl(e,n,t)||a===0&&Zl(e,r,t)||o===0&&Zl(n,e,r)||s===0&&Zl(n,t,r))}function Zl(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Ql(e){return e>0?1:e<0?-1:0}function $l(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Xl(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function eu(e,t){return Jl(e.prev,e,e.next)<0?Jl(e,t,e.next)>=0&&Jl(e,e.prev,t)>=0:Jl(e,t,e.prev)<0||Jl(e,e.next,t)<0}function tu(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function nu(e,t){let n=au(e.i,e.x,e.y),r=au(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function ru(e,t,n,r){let i=au(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function iu(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function au(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ou(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var su=class{static triangulate(e,t,n=2){return Ol(e,t,n)}},cu=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];lu(e),uu(n,e);let a=e.length;t.forEach(lu);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,uu(n,t[e]);let o=su.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function lu(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function uu(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var du=class e extends nc{constructor(e=new Dl([new J(.5,.5),new J(-.5,.5),new J(-.5,-.5),new J(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new Ws(r,3)),this.setAttribute(`uv`,new Ws(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?fu:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new Y,b=new Y,x=new Y}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!cu.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];cu.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));if(s<=10000000000000001e-36*c*c){e.splice(r,1),n--;continue}t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function O(e,t,n){return t||q(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let k=C.length;function A(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new J(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new J(r/a,i/a)}let j=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),j[e]=A(D[e],D[n],D[r]);let M=[],N,ee=j.concat();for(let e=0,t=E;e<t;e++){let t=w[e];N=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),N[e]=A(t[e],t[r],t[i]);M.push(N),ee=ee.concat(N)}let P;if(p===0)P=cu.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=O(D[t],j[t],a);ae(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];N=M[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=O(n[e],N[e],a);ae(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}P=cu.triangulateShape(e,t)}let te=P.length,ne=d+f;for(let e=0;e<k;e++){let t=l?O(C[e],ee[e],ne):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),ae(x.x,x.y,x.z)):ae(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<k;t++){let n=l?O(C[t],ee[t],ne):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),ae(x.x,x.y,x.z)):ae(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=O(D[e],j[e],r);ae(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];N=M[e];for(let e=0,i=t.length;e<i;e++){let i=O(t[e],N[e],r);_?ae(i.x,i.y+g[s-1].y,g[s-1].x+n):ae(i.x,i.y,c+n)}}}re(),F();function re(){let e=r.length/3;if(l){let e=0,t=k*e;for(let e=0;e<te;e++){let n=P[e];I(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=k*e;for(let e=0;e<te;e++){let n=P[e];I(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<te;e++){let t=P[e];I(t[2],t[1],t[0])}for(let e=0;e<te;e++){let t=P[e];I(t[0]+k*s,t[1]+k*s,t[2]+k*s)}}n.addGroup(e,r.length/3-e,0)}function F(){let e=r.length/3,t=0;ie(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];ie(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function ie(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=k*e,a=k*(e+1);L(t+r+n,t+i+n,t+i+a,t+r+a)}}}function ae(e,t,n){a.push(e),a.push(t),a.push(n)}function I(e,t,i){R(e),R(t),R(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);z(o[0]),z(o[1]),z(o[2])}function L(e,t,i,a){R(e),R(t),R(a),R(t),R(i),R(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);z(s[0]),z(s[1]),z(s[3]),z(s[1]),z(s[2]),z(s[3])}function R(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function z(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return pu(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new wl[i.type]().fromJSON(i)),new e(r,t.options)}},fu={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new J(a,o),new J(s,c),new J(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new J(o,1-c),new J(l,1-d),new J(f,1-m),new J(h,1-_)]:[new J(s,1-c),new J(u,1-d),new J(p,1-m),new J(g,1-_)]}};function pu(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var mu=class e extends nc{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Ws(p,3)),this.setAttribute(`normal`,new Ws(m,3)),this.setAttribute(`uv`,new Ws(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},hu=class e extends nc{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new Y,p=new J;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new Ws(s,3)),this.setAttribute(`normal`,new Ws(c,3)),this.setAttribute(`uv`,new Ws(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},gu=class e extends nc{constructor(e=new Dl([new J(0,.5),new J(-.5,-.5),new J(.5,-.5)]),t=12){super(),this.type=`ShapeGeometry`,this.parameters={shapes:e,curveSegments:t};let n=[],r=[],i=[],a=[],o=0,s=0;if(Array.isArray(e)===!1)c(e);else for(let t=0;t<e.length;t++)c(e[t]),this.addGroup(o,s,t),o+=s,s=0;this.setIndex(n),this.setAttribute(`position`,new Ws(r,3)),this.setAttribute(`normal`,new Ws(i,3)),this.setAttribute(`uv`,new Ws(a,2));function c(e){let o=r.length/3,c=e.extractPoints(t),l=c.shape,u=c.holes;cu.isClockWise(l)===!1&&(l=l.reverse());for(let e=0,t=u.length;e<t;e++){let t=u[e];cu.isClockWise(t)===!0&&(u[e]=t.reverse())}let d=cu.triangulateShape(l,u);for(let e=0,t=u.length;e<t;e++){let t=u[e];l=l.concat(t)}for(let e=0,t=l.length;e<t;e++){let t=l[e];r.push(t.x,t.y,0),i.push(0,0,1),a.push(t.x,t.y)}for(let e=0,t=d.length;e<t;e++){let t=d[e],r=t[0]+o,i=t[1]+o,a=t[2]+o;n.push(r,i,a),s+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return _u(t,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}return new e(r,t.curveSegments)}};function _u(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}var vu=class e extends nc{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new Y,f=new Y,p=new Y;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new Ws(c,3)),this.setAttribute(`normal`,new Ws(l,3)),this.setAttribute(`uv`,new Ws(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function yu(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(xu(i))i.isRenderTargetTexture?(K(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(xu(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function bu(e){let t={};for(let n=0;n<e.length;n++){let r=yu(e[n]);for(let e in r)t[e]=r[e]}return t}function xu(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Su(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Cu(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:so.workingColorSpace}var wu={clone:yu,merge:bu},Tu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Eu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Du=class extends cc{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tu,this.fragmentShader=Eu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yu(e.uniforms),this.uniformsGroups=Su(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new as().setHex(r.value);break;case`v2`:this.uniforms[n].value=new J().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new Y().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new yo().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new no().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new wo().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ou=class extends Du{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},ku=class extends cc{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new as(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new as(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Po,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Au=class extends cc{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new as(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new as(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Po,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ju=class extends cc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Ta,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Mu=class extends cc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Nu(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Pu(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Fu=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Iu=class extends Fu{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sa,endingEnd:Sa}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ca:i=e,o=2*t-n;break;case wa:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Ca:a=e,s=2*n-t;break;case wa:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Lu=class extends Fu{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Ru=class extends Fu{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},zu=class extends Fu{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Hu(n,t,g,y,r);i[p]=Bu(x,o,_,b,m)}return i}};function Bu(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Vu(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Hu(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Bu(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Vu(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Uu=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Nu(t,this.TimeBufferType),this.values=Nu(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Nu(e.times,Array),values:Nu(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Pu(e.settings)&&(n.settings={inTangents:Nu(e.settings.inTangents,Array),outTangents:Nu(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ru(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Lu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Iu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new zu(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case va:t=this.InterpolantFactoryMethodDiscrete;break;case ya:t=this.InterpolantFactoryMethodLinear;break;case ba:t=this.InterpolantFactoryMethodSmooth;break;case xa:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return K(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return va;case this.InterpolantFactoryMethodLinear:return ya;case this.InterpolantFactoryMethodSmooth:return ba;case this.InterpolantFactoryMethodBezier:return xa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Pu(this.settings)&&(Wu(this.settings.inTangents,e),Wu(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(q(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(q(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){q(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){q(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Pa(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){q(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===ba,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Pu(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Wu(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Uu.prototype.ValueTypeName=``,Uu.prototype.TimeBufferType=Float32Array,Uu.prototype.ValueBufferType=Float32Array,Uu.prototype.DefaultInterpolation=ya;var Gu=class extends Uu{constructor(e,t,n){super(e,t,n)}};Gu.prototype.ValueTypeName=`bool`,Gu.prototype.ValueBufferType=Array,Gu.prototype.DefaultInterpolation=va,Gu.prototype.InterpolantFactoryMethodLinear=void 0,Gu.prototype.InterpolantFactoryMethodSmooth=void 0;var Ku=class extends Uu{constructor(e,t,n,r){super(e,t,n,r)}};Ku.prototype.ValueTypeName=`color`;var qu=class extends Uu{constructor(e,t,n,r){super(e,t,n,r)}};qu.prototype.ValueTypeName=`number`;var Ju=class extends Fu{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)$a.slerpFlat(i,0,a,c-o,a,c,s);return i}},Yu=class extends Uu{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Ju(this.times,this.values,this.getValueSize(),e)}};Yu.prototype.ValueTypeName=`quaternion`,Yu.prototype.InterpolantFactoryMethodSmooth=void 0;var Xu=class extends Uu{constructor(e,t,n){super(e,t,n)}};Xu.prototype.ValueTypeName=`string`,Xu.prototype.ValueBufferType=Array,Xu.prototype.DefaultInterpolation=va,Xu.prototype.InterpolantFactoryMethodLinear=void 0,Xu.prototype.InterpolantFactoryMethodSmooth=void 0;var Zu=class extends Uu{constructor(e,t,n,r){super(e,t,n,r)}};Zu.prototype.ValueTypeName=`vector`;var Qu=class extends Zo{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new as(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},$u=class extends Qu{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Zo.DEFAULT_UP),this.updateMatrix(),this.groundColor=new as(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ed=new wo,td=new Y,nd=new Y,rd=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new J(512,512),this.mapType=pi,this.map=null,this.mapPass=null,this.matrix=new wo,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hc,this._frameExtents=new J(1,1),this._viewportCount=1,this._viewports=[new yo(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;td.setFromMatrixPosition(e.matrixWorld),t.position.copy(td),nd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){ed.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ed,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(ed)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},id=new Y,ad=new $a,od=new Y,sd=class extends Zo{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new wo,this.projectionMatrix=new wo,this.projectionMatrixInverse=new wo,this.coordinateSystem=Ma,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(id,ad,od),od.x===1&&od.y===1&&od.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(id,ad,od.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(id,ad,od),od.x===1&&od.y===1&&od.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(id,ad,od.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},cd=new Y,ld=new J,ud=new J,dd=class extends sd{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ka*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ga*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ka*2*Math.atan(Math.tan(Ga*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){cd.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(cd.x,cd.y).multiplyScalar(-e/cd.z),cd.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(cd.x,cd.y).multiplyScalar(-e/cd.z)}getViewSize(e,t){return this.getViewBounds(e,ld,ud),t.subVectors(ud,ld)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ga*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},fd=class extends rd{constructor(){super(new dd(90,1,.5,500)),this.isPointLightShadow=!0}},pd=class extends Qu{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new fd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},md=class extends sd{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},hd=class extends rd{constructor(){super(new md(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},gd=class extends Qu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Zo.DEFAULT_UP),this.updateMatrix(),this.target=new Zo,this.shadow=new hd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},_d=-90,vd=1,yd=class extends Zo{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new dd(_d,vd,e,t);r.layers=this.layers,this.add(r);let i=new dd(_d,vd,e,t);i.layers=this.layers,this.add(i);let a=new dd(_d,vd,e,t);a.layers=this.layers,this.add(a);let o=new dd(_d,vd,e,t);o.layers=this.layers,this.add(o);let s=new dd(_d,vd,e,t);s.layers=this.layers,this.add(s);let c=new dd(_d,vd,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},bd=class extends dd{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},xd=`\\[\\]\\.:\\/`,Sd=RegExp(`[\\[\\]\\.:\\/]`,`g`),Cd=`[^\\[\\]\\.:\\/]`,wd=`[^`+xd.replace(`\\.`,``)+`]`,Td=`((?:WC+[\\/:])*)`.replace(`WC`,Cd),Ed=`(WCOD+)?`.replace(`WCOD`,wd),Dd=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Cd),Od=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Cd),kd=RegExp(`^`+Td+Ed+Dd+Od+`$`),Ad=[`material`,`materials`,`bones`,`map`],jd=class{constructor(e,t,n){let r=n||Md.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Md=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Sd,``)}static parseTrackName(e){let t=kd.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Ad.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){K(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){q(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){q(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){q(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){q(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){q(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){q(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){q(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;q(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){q(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){q(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Md.Composite=jd,Md.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Md.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Md.prototype.GetterByBindingType=[Md.prototype._getValue_direct,Md.prototype._getValue_array,Md.prototype._getValue_arrayElement,Md.prototype._getValue_toArray],Md.prototype.SetterByBindingTypeAndVersioning=[[Md.prototype._setValue_direct,Md.prototype._setValue_direct_setNeedsUpdate,Md.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Md.prototype._setValue_array,Md.prototype._setValue_array_setNeedsUpdate,Md.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Md.prototype._setValue_arrayElement,Md.prototype._setValue_arrayElement_setNeedsUpdate,Md.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Md.prototype._setValue_fromArray,Md.prototype._setValue_fromArray_setNeedsUpdate,Md.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}};function Nd(e,t,n,r){let i=Pd(r);switch(n){case Ei:return e*t;case ji:return e*t/i.components*i.byteLength;case Mi:return e*t/i.components*i.byteLength;case Ni:return e*t*2/i.components*i.byteLength;case Pi:return e*t*2/i.components*i.byteLength;case Di:return e*t*3/i.components*i.byteLength;case Oi:return e*t*4/i.components*i.byteLength;case Fi:return e*t*4/i.components*i.byteLength;case Ii:case Li:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ri:case zi:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Vi:case Ui:return Math.max(e,16)*Math.max(t,8)/4;case Bi:case Hi:return Math.max(e,8)*Math.max(t,8)/2;case Wi:case Gi:case qi:case Ji:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ki:case Yi:case Xi:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Zi:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Qi:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case $i:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ea:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ta:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case na:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ra:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ia:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case aa:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case oa:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case sa:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case ca:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case la:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case ua:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case da:case fa:case pa:return Math.ceil(e/4)*Math.ceil(t/4)*16;case ma:case ha:return Math.ceil(e/4)*Math.ceil(t/4)*8;case ga:case _a:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Pd(e){switch(e){case pi:case mi:return{byteLength:1,components:1};case gi:case hi:case bi:return{byteLength:2,components:1};case xi:case Si:return{byteLength:2,components:4};case vi:case _i:case yi:return{byteLength:4,components:1};case wi:case Ti:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?K(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function Fd(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Id(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Ld={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},X={common:{diffuse:{value:new as(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new no},alphaMap:{value:null},alphaMapTransform:{value:new no},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new no}},envmap:{envMap:{value:null},envMapRotation:{value:new no},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new no}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new no}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new no},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new no},normalScale:{value:new J(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new no},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new no}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new no}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new no}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new as(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Y},probesMax:{value:new Y},probesResolution:{value:new Y}},points:{diffuse:{value:new as(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new no},alphaTest:{value:0},uvTransform:{value:new no}},sprite:{diffuse:{value:new as(16777215)},opacity:{value:1},center:{value:new J(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new no},alphaMap:{value:null},alphaMapTransform:{value:new no},alphaTest:{value:0}}},Rd={basic:{uniforms:bu([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.fog]),vertexShader:Ld.meshbasic_vert,fragmentShader:Ld.meshbasic_frag},lambert:{uniforms:bu([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new as(0)},envMapIntensity:{value:1}}]),vertexShader:Ld.meshlambert_vert,fragmentShader:Ld.meshlambert_frag},phong:{uniforms:bu([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new as(0)},specular:{value:new as(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ld.meshphong_vert,fragmentShader:Ld.meshphong_frag},standard:{uniforms:bu([X.common,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.roughnessmap,X.metalnessmap,X.fog,X.lights,{emissive:{value:new as(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ld.meshphysical_vert,fragmentShader:Ld.meshphysical_frag},toon:{uniforms:bu([X.common,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.gradientmap,X.fog,X.lights,{emissive:{value:new as(0)}}]),vertexShader:Ld.meshtoon_vert,fragmentShader:Ld.meshtoon_frag},matcap:{uniforms:bu([X.common,X.bumpmap,X.normalmap,X.displacementmap,X.fog,{matcap:{value:null}}]),vertexShader:Ld.meshmatcap_vert,fragmentShader:Ld.meshmatcap_frag},points:{uniforms:bu([X.points,X.fog]),vertexShader:Ld.points_vert,fragmentShader:Ld.points_frag},dashed:{uniforms:bu([X.common,X.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ld.linedashed_vert,fragmentShader:Ld.linedashed_frag},depth:{uniforms:bu([X.common,X.displacementmap]),vertexShader:Ld.depth_vert,fragmentShader:Ld.depth_frag},normal:{uniforms:bu([X.common,X.bumpmap,X.normalmap,X.displacementmap,{opacity:{value:1}}]),vertexShader:Ld.meshnormal_vert,fragmentShader:Ld.meshnormal_frag},sprite:{uniforms:bu([X.sprite,X.fog]),vertexShader:Ld.sprite_vert,fragmentShader:Ld.sprite_frag},background:{uniforms:{uvTransform:{value:new no},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ld.background_vert,fragmentShader:Ld.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new no}},vertexShader:Ld.backgroundCube_vert,fragmentShader:Ld.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ld.cube_vert,fragmentShader:Ld.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ld.equirect_vert,fragmentShader:Ld.equirect_frag},distance:{uniforms:bu([X.common,X.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ld.distance_vert,fragmentShader:Ld.distance_frag},shadow:{uniforms:bu([X.lights,X.fog,{color:{value:new as(0)},opacity:{value:1}}]),vertexShader:Ld.shadow_vert,fragmentShader:Ld.shadow_frag}};Rd.physical={uniforms:bu([Rd.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new no},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new no},clearcoatNormalScale:{value:new J(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new no},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new no},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new no},sheen:{value:0},sheenColor:{value:new as(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new no},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new no},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new no},transmissionSamplerSize:{value:new J},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new no},attenuationDistance:{value:0},attenuationColor:{value:new as(0)},specularColor:{value:new as(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new no},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new no},anisotropyVector:{value:new J},anisotropyMap:{value:null},anisotropyMapTransform:{value:new no}}]),vertexShader:Ld.meshphysical_vert,fragmentShader:Ld.meshphysical_frag};var zd={r:0,b:0,g:0},Bd=new wo,Vd=new no;Vd.set(-1,0,0,0,1,0,0,0,1);function Hd(e,t,n,r,i,a){let o=new as(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new Ec(new Jc(1,1,1),new Du({name:`BackgroundCubeMaterial`,uniforms:yu(Rd.backgroundCube.uniforms),vertexShader:Rd.backgroundCube.vertexShader,fragmentShader:Rd.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Bd.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Vd),l.material.toneMapped=so.getTransfer(i.colorSpace)!==ka,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new Ec(new mu(2,2),new Du({name:`BackgroundMaterial`,uniforms:yu(Rd.background.uniforms),vertexShader:Rd.background.vertexShader,fragmentShader:Rd.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=so.getTransfer(i.colorSpace)!==ka,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(zd,Cu(e)),n.buffers.color.setClear(zd.r,zd.g,zd.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Ud(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Wd(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Gd(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(K(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&K(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Kd(e){let t=this,n=null,r=0,i=!1,a=!1,o=new oc,s=new no,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var qd=4,Jd=6,Yd=20,Xd=256,Zd=new md,Qd=new as,$d=null,ef=0,tf=0,nf=!1,rf=new Y,af=new Y,of=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=rf}=i;$d=this._renderer.getRenderTarget(),ef=this._renderer.getActiveCubeFace(),tf=this._renderer.getActiveMipmapLevel(),nf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ff(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget($d,ef,tf),this._renderer.xr.enabled=nf,e.scissorTest=!1,lf(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$d=this._renderer.getRenderTarget(),ef=this._renderer.getActiveCubeFace(),tf=this._renderer.getActiveMipmapLevel(),nf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ui,minFilter:ui,generateMipmaps:!1,type:bi,format:Oi,colorSpace:Da,depthBuffer:!1},r=cf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cf(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=sf(r)),this._blurMaterial=df(r,e,t),this._ggxMaterial=uf(r,e,t)}return r}_compileMaterial(e){let t=new Ec(new nc,e);this._renderer.compile(t,Zd)}_sceneToCubeUV(e,t,n,r,i){let a=new dd(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Qd),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ec(new Jc,new mc({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Qd),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;lf(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=pf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ff());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;lf(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Zd)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-qd?n-d+qd:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,lf(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Zd),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,lf(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Zd)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];lf(t,3*l*(r>this._lodMax-qd?r-this._lodMax+qd:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,Zd)}};function sf(e){let t=[],n=[],r=e,i=e-qd+1+Jd;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?af.set(1,r,n):e===1?af.set(-n,1,-r):e===2?af.set(-n,r,1):e===3?af.set(-1,r,-n):e===4?af.set(-n,-1,r):af.set(n,r,-1),af.toArray(l,(e*6+t)*3)}}let u=new nc;u.setAttribute(`position`,new Vs(c,3)),u.setAttribute(`outputDirection`,new Vs(l,3)),n.push(new Ec(u,null)),r>qd&&r--}return{lodMeshes:n,sizeLods:t}}function cf(e,t,n){let r=new xo(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function lf(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function uf(e,t,n){return new Du({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Xd,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:mf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function df(e,t,n){return new Du({name:`SphericalGaussianBlur`,defines:{SAMPLES:Yd,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:mf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ff(){return new Du({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:mf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function pf(){return new Du({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function mf(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var hf=class extends xo{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Uc(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Jc(5,5,5),i=new Du({name:`CubemapFromEquirect`,uniforms:yu(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Ec(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=ui),new yd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function gf(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new hf(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new of(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new of(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function _f(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Ba(`WebGLRenderer: `+e+` extension not supported.`),t}}}function vf(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Us:Hs)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function yf(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function bf(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:q(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function xf(e,t,n){let r=new WeakMap,i=new yo;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new So(h,p,m,u);g.type=yi,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new J(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Sf(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Cf={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function wf(e,t,n,r,i,a){let o=new xo(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new nc;l.setAttribute(`position`,new Ws([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new Ws([0,2,0,0,2,0],2));let u=new Ou({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Ec(l,u),f=new md(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new xo(t,n,{type:bi,depthBuffer:!1,stencilBuffer:!1}),c=new xo(t,n,{type:bi,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},so.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=Cf[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Tf=new vo,Ef=new Gc(1,1),Df=new So,Of=new Co,kf=new Uc,Af=[],jf=[],Mf=new Float32Array(16),Nf=new Float32Array(9),Pf=new Float32Array(4);function Ff(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Af[i];if(a===void 0&&(a=new Float32Array(i),Af[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function If(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Lf(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Rf(e,t){let n=jf[t];n===void 0&&(n=new Int32Array(t),jf[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function zf(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Bf(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(If(n,t))return;e.uniform2fv(this.addr,t),Lf(n,t)}}function Vf(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(If(n,t))return;e.uniform3fv(this.addr,t),Lf(n,t)}}function Hf(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(If(n,t))return;e.uniform4fv(this.addr,t),Lf(n,t)}}function Uf(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(If(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Lf(n,t)}else{if(If(n,r))return;Pf.set(r),e.uniformMatrix2fv(this.addr,!1,Pf),Lf(n,r)}}function Wf(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(If(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Lf(n,t)}else{if(If(n,r))return;Nf.set(r),e.uniformMatrix3fv(this.addr,!1,Nf),Lf(n,r)}}function Gf(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(If(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Lf(n,t)}else{if(If(n,r))return;Mf.set(r),e.uniformMatrix4fv(this.addr,!1,Mf),Lf(n,r)}}function Kf(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function qf(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(If(n,t))return;e.uniform2iv(this.addr,t),Lf(n,t)}}function Jf(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(If(n,t))return;e.uniform3iv(this.addr,t),Lf(n,t)}}function Yf(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(If(n,t))return;e.uniform4iv(this.addr,t),Lf(n,t)}}function Xf(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Zf(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(If(n,t))return;e.uniform2uiv(this.addr,t),Lf(n,t)}}function Qf(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(If(n,t))return;e.uniform3uiv(this.addr,t),Lf(n,t)}}function $f(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(If(n,t))return;e.uniform4uiv(this.addr,t),Lf(n,t)}}function ep(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Ef.compareFunction=n.isReversedDepthBuffer()?518:515,a=Ef):a=Tf,n.setTexture2D(t||a,i)}function tp(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Of,i)}function np(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||kf,i)}function rp(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Df,i)}function ip(e){switch(e){case 5126:return zf;case 35664:return Bf;case 35665:return Vf;case 35666:return Hf;case 35674:return Uf;case 35675:return Wf;case 35676:return Gf;case 5124:case 35670:return Kf;case 35667:case 35671:return qf;case 35668:case 35672:return Jf;case 35669:case 35673:return Yf;case 5125:return Xf;case 36294:return Zf;case 36295:return Qf;case 36296:return $f;case 35678:case 36198:case 36298:case 36306:case 35682:return ep;case 35679:case 36299:case 36307:return tp;case 35680:case 36300:case 36308:case 36293:return np;case 36289:case 36303:case 36311:case 36292:return rp}}function ap(e,t){e.uniform1fv(this.addr,t)}function op(e,t){let n=Ff(t,this.size,2);e.uniform2fv(this.addr,n)}function sp(e,t){let n=Ff(t,this.size,3);e.uniform3fv(this.addr,n)}function cp(e,t){let n=Ff(t,this.size,4);e.uniform4fv(this.addr,n)}function lp(e,t){let n=Ff(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function up(e,t){let n=Ff(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function dp(e,t){let n=Ff(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function fp(e,t){e.uniform1iv(this.addr,t)}function pp(e,t){e.uniform2iv(this.addr,t)}function mp(e,t){e.uniform3iv(this.addr,t)}function hp(e,t){e.uniform4iv(this.addr,t)}function gp(e,t){e.uniform1uiv(this.addr,t)}function _p(e,t){e.uniform2uiv(this.addr,t)}function vp(e,t){e.uniform3uiv(this.addr,t)}function yp(e,t){e.uniform4uiv(this.addr,t)}function bp(e,t,n){let r=this.cache,i=t.length,a=Rf(n,i);If(r,a)||(e.uniform1iv(this.addr,a),Lf(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Ef:Tf;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function xp(e,t,n){let r=this.cache,i=t.length,a=Rf(n,i);If(r,a)||(e.uniform1iv(this.addr,a),Lf(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Of,a[e])}function Sp(e,t,n){let r=this.cache,i=t.length,a=Rf(n,i);If(r,a)||(e.uniform1iv(this.addr,a),Lf(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||kf,a[e])}function Cp(e,t,n){let r=this.cache,i=t.length,a=Rf(n,i);If(r,a)||(e.uniform1iv(this.addr,a),Lf(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Df,a[e])}function wp(e){switch(e){case 5126:return ap;case 35664:return op;case 35665:return sp;case 35666:return cp;case 35674:return lp;case 35675:return up;case 35676:return dp;case 5124:case 35670:return fp;case 35667:case 35671:return pp;case 35668:case 35672:return mp;case 35669:case 35673:return hp;case 5125:return gp;case 36294:return _p;case 36295:return vp;case 36296:return yp;case 35678:case 36198:case 36298:case 36306:case 35682:return bp;case 35679:case 36299:case 36307:return xp;case 35680:case 36300:case 36308:case 36293:return Sp;case 36289:case 36303:case 36311:case 36292:return Cp}}var Tp=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ip(t.type)}},Ep=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wp(t.type)}},Dp=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Op=/(\w+)(\])?(\[|\.)?/g;function kp(e,t){e.seq.push(t),e.map[t.id]=t}function Ap(e,t,n){let r=e.name,i=r.length;for(Op.lastIndex=0;;){let a=Op.exec(r),o=Op.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){kp(n,l===void 0?new Tp(s,e,t):new Ep(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Dp(s),kp(n,e)),n=e}}}var jp=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Ap(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Mp(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Np=37297,Pp=0;function Fp(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Ip=new no;function Lp(e){so._getMatrix(Ip,so.workingColorSpace,e);let t=`mat3( ${Ip.elements.map(e=>e.toFixed(4))} )`;switch(so.getTransfer(e)){case Oa:return[t,`LinearTransferOETF`];case ka:return[t,`sRGBTransferOETF`];default:return K(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Rp(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Fp(e.getShaderSource(t),r)}return i}function zp(e,t){let n=Lp(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Bp={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Vp(e,t){let n=Bp[t];return n===void 0?(K(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Hp=new Y;function Up(){return so.getLuminanceCoefficients(Hp),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Hp.x.toFixed(4)}, ${Hp.y.toFixed(4)}, ${Hp.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Wp(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(qp).join(`
`)}function Gp(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Kp(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function qp(e){return e!==``}function Jp(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Yp(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Xp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zp(e){return e.replace(Xp,$p)}var Qp=new Map;function $p(e,t){let n=Ld[t];if(n===void 0){let e=Qp.get(t);if(e!==void 0)n=Ld[e],K(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Zp(n)}var em=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tm(e){return e.replace(em,nm)}function nm(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function rm(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var im={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function am(e){return im[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var om={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function sm(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:om[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var cm={302:`ENVMAP_MODE_REFRACTION`};function lm(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:cm[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var um={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function dm(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:um[e.combine]||`ENVMAP_BLENDING_NONE`}function fm(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function pm(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=am(n),l=sm(n),u=lm(n),d=dm(n),f=fm(n),p=Wp(n),m=Gp(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(qp).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(qp).join(`
`),_.length>0&&(_+=`
`)):(g=[rm(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(qp).join(`
`),_=[rm(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Ld.tonemapping_pars_fragment,n.toneMapping===0?``:Vp(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Ld.colorspace_pars_fragment,zp(`linearToOutputTexel`,n.outputColorSpace),Up(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(qp).join(`
`)),o=Zp(o),o=Jp(o,n),o=Yp(o,n),s=Zp(s),s=Jp(s,n),s=Yp(s,n),o=tm(o),s=tm(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Mp(i,i.VERTEX_SHADER,y),S=Mp(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Rp(i,x,`vertex`),n=Rp(i,S,`fragment`);q(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):K(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new jp(i,h),T=Kp(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Np)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Pp++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var mm=0,hm=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new gm(e),t.set(e,n)),n}},gm=class{constructor(e){this.id=mm++,this.code=e,this.usedTimes=0}};function _m(e){return e===1030||e===37490||e===36285}function vm(e,t,n,r,i,a){let o=new Fo,s=new hm,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&K(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=Rd[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let j=e.getRenderTarget(),M=e.state.buffers.depth.getReversed(),N=h.isInstancedMesh===!0,ee=h.isBatchedMesh===!0,P=!!i.map,te=!!i.matcap,ne=!!x,re=!!i.aoMap,F=!!i.lightMap,ie=!!i.bumpMap&&i.wireframe===!1,ae=!!i.normalMap,I=!!i.displacementMap,L=!!i.emissiveMap,R=!!i.metalnessMap,z=!!i.roughnessMap,oe=i.anisotropy>0,B=i.clearcoat>0,V=i.dispersion>0,se=i.retroreflectivity>0,H=i.iridescence>0,ce=i.sheen>0,le=i.transmission>0,ue=oe&&!!i.anisotropyMap,de=B&&!!i.clearcoatMap,fe=B&&!!i.clearcoatNormalMap,pe=B&&!!i.clearcoatRoughnessMap,me=H&&!!i.iridescenceMap,U=H&&!!i.iridescenceThicknessMap,he=ce&&!!i.sheenColorMap,ge=ce&&!!i.sheenRoughnessMap,_e=!!i.specularMap,W=!!i.specularColorMap,ve=!!i.specularIntensityMap,G=le&&!!i.transmissionMap,ye=le&&!!i.thicknessMap,be=!!i.gradientMap,xe=!!i.alphaMap,Se=i.alphaTest>0,Ce=!!i.alphaHash,we=!!i.extensions,Te=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Te=e.toneMapping);let Ee={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:ee,batchingColor:ee&&h._colorsTexture!==null,instancing:N,instancingColor:N&&h.instanceColor!==null,instancingMorph:N&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:so.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:P,matcap:te,envMap:ne,envMapMode:ne&&x.mapping,envMapCubeUVHeight:S,aoMap:re,lightMap:F,bumpMap:ie,normalMap:ae,displacementMap:I,emissiveMap:L,normalMapObjectSpace:ae&&i.normalMapType===1,normalMapTangentSpace:ae&&i.normalMapType===0,packedNormalMap:ae&&i.normalMapType===0&&_m(i.normalMap.format),metalnessMap:R,roughnessMap:z,anisotropy:oe,anisotropyMap:ue,clearcoat:B,clearcoatMap:de,clearcoatNormalMap:fe,clearcoatRoughnessMap:pe,dispersion:V,retroreflection:se,iridescence:H,iridescenceMap:me,iridescenceThicknessMap:U,sheen:ce,sheenColorMap:he,sheenRoughnessMap:ge,specularMap:_e,specularColorMap:W,specularIntensityMap:ve,transmission:le,transmissionMap:G,thicknessMap:ye,gradientMap:be,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:xe,alphaTest:Se,alphaHash:Ce,combine:i.combine,mapUv:P&&m(i.map.channel),aoMapUv:re&&m(i.aoMap.channel),lightMapUv:F&&m(i.lightMap.channel),bumpMapUv:ie&&m(i.bumpMap.channel),normalMapUv:ae&&m(i.normalMap.channel),displacementMapUv:I&&m(i.displacementMap.channel),emissiveMapUv:L&&m(i.emissiveMap.channel),metalnessMapUv:R&&m(i.metalnessMap.channel),roughnessMapUv:z&&m(i.roughnessMap.channel),anisotropyMapUv:ue&&m(i.anisotropyMap.channel),clearcoatMapUv:de&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:fe&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:U&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:he&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:ge&&m(i.sheenRoughnessMap.channel),specularMapUv:_e&&m(i.specularMap.channel),specularColorMapUv:W&&m(i.specularColorMap.channel),specularIntensityMapUv:ve&&m(i.specularIntensityMap.channel),transmissionMapUv:G&&m(i.transmissionMap.channel),thicknessMapUv:ye&&m(i.thicknessMap.channel),alphaMapUv:xe&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(ae||oe),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(P||xe),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&ae===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:M,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Te,decodeVideoTexture:P&&i.map.isVideoTexture===!0&&so.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:L&&i.emissiveMap.isVideoTexture===!0&&so.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:we&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(we&&i.extensions.multiDraw===!0||ee)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Ee.vertexUv1s=c.has(1),Ee.vertexUv2s=c.has(2),Ee.vertexUv3s=c.has(3),c.clear(),Ee}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Rd[t];n=wu.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new pm(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function ym(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function bm(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function xm(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Sm(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||bm),r.length>1&&r.sort(t||xm),i.length>1&&i.sort(t||xm)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Cm(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Sm,e.set(t,[i])):n>=r.length?(i=new Sm,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function wm(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new Y,color:new as};break;case`SpotLight`:n={position:new Y,direction:new Y,color:new as,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new Y,color:new as,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new Y,skyColor:new as,groundColor:new as};break;case`RectAreaLight`:n={color:new as,position:new Y,halfWidth:new Y,halfHeight:new Y}}return e[t.id]=n,n}}}function Tm(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Em=0;function Dm(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Om(e){let t=new wm,n=Tm(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new Y);let i=new Y,a=new wo,o=new wo;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Dm);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=X.LTC_FLOAT_1,r.rectAreaLTC2=X.LTC_FLOAT_2):(r.rectAreaLTC1=X.LTC_HALF_1,r.rectAreaLTC2=X.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Em++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function km(e){let t=new Om(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Am(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new km(e),t.set(n,[a])):r>=i.length?(a=new km(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var jm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Nm=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],Pm=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],Fm=new wo,Im=new Y,Lm=new Y;function Rm(e,t,n){let r=new Hc,i=new J,a=new J,o=new yo,s=new ju,c=new Mu,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new Du({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new J},radius:{value:4}},vertexShader:jm,fragmentShader:Mm}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new nc;m.setAttribute(`position`,new Vs(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new Ec(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(K(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){K(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){K(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new xo(i.x,i.y,{format:Ni,type:bi,minFilter:ui,magFilter:ui,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Gc(i.x,i.y,yi),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=ki,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=si,d.map.depthTexture.magFilter=si}else l.isPointLight?(d.map=new hf(i.x),d.map.depthTexture=new Kc(i.x,vi)):(d.map=new xo(i.x,i.y),d.map.depthTexture=new Gc(i.x,i.y,vi)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=ki,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=ui,d.map.depthTexture.magFilter=ui):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=si,d.map.depthTexture.magFilter=si);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Im.setFromMatrixPosition(l.matrixWorld),e.position.copy(Im),Lm.copy(e.position),Lm.add(Nm[t]),e.up.copy(Pm[t]),e.lookAt(Lm),e.updateMatrixWorld(),n.makeTranslation(-Im.x,-Im.y,-Im.z),Fm.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Fm,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new xo(i.x,i.y,{format:Ni,type:bi}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function zm(e,t){function n(){let t=!1,n=new yo,r=null,i=new yo(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?R(e.DEPTH_TEST):z(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Ha[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?R(e.STENCIL_TEST):z(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new as(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,ee=0,P=e.getParameter(e.VERSION);P.indexOf(`WebGL`)===-1?P.indexOf(`OpenGL ES`)!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),N=ee>=2):(ee=parseFloat(/^WebGL (\d)/.exec(P)[1]),N=ee>=1);let te=null,ne={},re=e.getParameter(e.SCISSOR_BOX),F=e.getParameter(e.VIEWPORT),ie=new yo().fromArray(re),ae=new yo().fromArray(F);function I(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let L={};L[e.TEXTURE_2D]=I(e.TEXTURE_2D,e.TEXTURE_2D,1),L[e.TEXTURE_CUBE_MAP]=I(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),L[e.TEXTURE_2D_ARRAY]=I(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),L[e.TEXTURE_3D]=I(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),R(e.DEPTH_TEST),o.setFunc(3),ue(!1),de(1),R(e.CULL_FACE),ce(0);function R(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function z(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function oe(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function B(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function V(t){return h!==t&&(e.useProgram(t),h=t,!0)}let se={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};se[103]=e.MIN,se[104]=e.MAX;let H={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ce(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(z(e.BLEND),g=!1);return}if(g===!1&&(R(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:q(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:q(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:q(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:q(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(se[n],se[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(H[r],H[i],H[o],H[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function le(t,n){t.side===2?z(e.CULL_FACE):R(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ue(r),t.blending===1&&t.transparent===!1?ce(0):ce(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),pe(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?R(e.SAMPLE_ALPHA_TO_COVERAGE):z(e.SAMPLE_ALPHA_TO_COVERAGE)}function ue(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function de(t){t===0?z(e.CULL_FACE):(R(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function fe(t){t!==k&&(N&&e.lineWidth(t),k=t)}function pe(t,n,r){t?(R(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):z(e.POLYGON_OFFSET_FILL)}function me(t){t?R(e.SCISSOR_TEST):z(e.SCISSOR_TEST)}function U(t){t===void 0&&(t=e.TEXTURE0+M-1),te!==t&&(e.activeTexture(t),te=t)}function he(t,n,r){r===void 0&&(r=te===null?e.TEXTURE0+M-1:te);let i=ne[r];i===void 0&&(i={type:void 0,texture:void 0},ne[r]=i),(i.type!==t||i.texture!==n)&&(te!==r&&(e.activeTexture(r),te=r),e.bindTexture(t,n||L[t]),i.type=t,i.texture=n)}function ge(){let t=ne[te];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function _e(){try{e.compressedTexImage2D(...arguments)}catch(e){q(`WebGLState:`,e)}}function W(){try{e.compressedTexImage3D(...arguments)}catch(e){q(`WebGLState:`,e)}}function ve(){try{e.texSubImage2D(...arguments)}catch(e){q(`WebGLState:`,e)}}function G(){try{e.texSubImage3D(...arguments)}catch(e){q(`WebGLState:`,e)}}function ye(){try{e.compressedTexSubImage2D(...arguments)}catch(e){q(`WebGLState:`,e)}}function be(){try{e.compressedTexSubImage3D(...arguments)}catch(e){q(`WebGLState:`,e)}}function xe(){try{e.texStorage2D(...arguments)}catch(e){q(`WebGLState:`,e)}}function Se(){try{e.texStorage3D(...arguments)}catch(e){q(`WebGLState:`,e)}}function Ce(){try{e.texImage2D(...arguments)}catch(e){q(`WebGLState:`,e)}}function we(){try{e.texImage3D(...arguments)}catch(e){q(`WebGLState:`,e)}}function Te(t){return d[t]===void 0?e.getParameter(t):d[t]}function Ee(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function De(t){ie.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ie.copy(t))}function Oe(t){ae.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ae.copy(t))}function ke(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Ae(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function je(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},te=null,ne={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new as(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ie.set(0,0,e.canvas.width,e.canvas.height),ae.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:R,disable:z,bindFramebuffer:oe,drawBuffers:B,useProgram:V,setBlending:ce,setMaterial:le,setFlipSided:ue,setCullFace:de,setLineWidth:fe,setPolygonOffset:pe,setScissorTest:me,activeTexture:U,bindTexture:he,unbindTexture:ge,compressedTexImage2D:_e,compressedTexImage3D:W,texImage2D:Ce,texImage3D:we,pixelStorei:Ee,getParameter:Te,updateUBOMapping:ke,uniformBlockBinding:Ae,texStorage2D:xe,texStorage3D:Se,texSubImage2D:ve,texSubImage3D:G,compressedTexSubImage2D:ye,compressedTexSubImage3D:be,scissor:De,viewport:Oe,reset:je}}function Bm(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new J,u=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):Fa(`canvas`)}function g(e,t,n){let r=1,i=_e(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=h(n,a));let o=t?h(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),K(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&K(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function _(e){return e.generateMipmaps}function v(t){e.generateMipmap(t)}function y(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function b(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];K(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||K(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Oa:so.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function x(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,K(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function S(e,t){return _(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function C(e){let t=e.target;t.removeEventListener(`dispose`,C),T(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function w(e){let t=e.target;t.removeEventListener(`dispose`,w),D(t)}function T(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&E(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function E(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function D(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let O=0;function k(){O=0}function A(){return O}function j(e){O=e}function M(){let e=O;return e>=i.maxTextures&&K(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),O+=1,e}function N(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ee(t,i){let a=r.get(t);if(t.isVideoTexture&&he(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)K(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)K(`WebGLRenderer: Texture marked for update but image is incomplete`);else{z(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function P(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){z(a,t,i);return}t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function te(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){z(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function ne(t,i){let a=r.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){oe(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let re={[ii]:e.REPEAT,[ai]:e.CLAMP_TO_EDGE,[oi]:e.MIRRORED_REPEAT},F={[si]:e.NEAREST,[ci]:e.NEAREST_MIPMAP_NEAREST,[li]:e.NEAREST_MIPMAP_LINEAR,[ui]:e.LINEAR,[di]:e.LINEAR_MIPMAP_NEAREST,[fi]:e.LINEAR_MIPMAP_LINEAR},ie={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ae(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&K(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,re[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,re[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,re[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,F[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,F[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,ie[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function I(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,C));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=N(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&E(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function L(e,t,n){return Math.floor(Math.floor(e/n)/t)}function R(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=L(n.start,r.width,4),c=L(t.start,r.width,4);n.start<=i+1&&a===c&&L(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function z(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=I(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=so.getPrimaries(so.workingColorSpace),r=o.colorSpace===``?null:so.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=g(o.image,!1,i.maxTextureSize);t=ge(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=b(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);ae(c,o);let h,y=o.mipmaps,C=o.isVideoTexture!==!0,w=f.__version===void 0||l===!0,T=u.dataReady,E=S(o,t);if(o.isDepthTexture)m=x(o.format===Ai,o.type),w&&(C?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(y.length>0){C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else C?(w&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&R(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){C&&w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,y[0].width,y[0].height,t.depth);for(let i=0,a=y.length;i<a;i++)if(h=y[i],o.format!==1023){if(r!==null){if(C){if(T){if(o.layerUpdates.size>0){let t=Nd(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else K(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else C?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],o.format===1023?C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?K(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):C?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(C){if(w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=Nd(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)C?(w&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(w){if(C)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(y.length>0){if(C&&w){let t=_e(y[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(C){if(w){let r=_e(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);_(o)&&v(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function oe(t,o,s){if(o.image.length!==6)return;let c=I(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=so.getPrimaries(so.workingColorSpace),r=o.colorSpace===``?null:so.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=g(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=ge(o,m[e]);let h=m[0],y=a.convert(o.format,o.colorSpace),x=a.convert(o.type),C=b(o.internalFormat,y,x,o.normalized,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=S(o,h);ae(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,y,x,i.data):y===null?K(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=_e(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,y,x,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,y,x,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,y,x,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,y,x,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,y,x,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,y,x,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,y,x,i.image[t])}}}_(o)&&v(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function B(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=b(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),U(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,me(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function V(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=x(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;U(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,me(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,me(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=b(o.internalFormat,c,l,o.normalized,o.colorSpace);U(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,me(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,me(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function se(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,C)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),ae(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else ee(i.depthTexture,0);let u=l.__webglTexture,d=me(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)U(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)U(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function H(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)se(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?se(i.__webglFramebuffer[0],t,0):se(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),V(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),V(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ce(t,n,i){let a=r.get(t);n!==void 0&&B(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&H(t)}function le(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,w);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&U(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=b(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=me(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),V(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),ae(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)B(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else B(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);_(i)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),ae(c,a),B(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),_(a)&&v(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),ae(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)B(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else B(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);_(i)&&v(r),n.unbindTexture()}t.depthBuffer&&H(t)}function ue(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(_(a)){let t=y(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),v(t),n.unbindTexture()}}}let de=[],fe=[];function pe(t){if(t.samples>0){if(U(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(de.length=0,fe.length=0,de.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(de.push(l),fe.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,fe)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,de))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function me(e){return Math.min(i.maxSamples,e.samples)}function U(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function he(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function ge(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(so.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&K(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):q(`WebGLTextures: Unsupported texture color space:`,n)),t}function _e(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=M,this.resetTextureUnits=k,this.getTextureUnits=A,this.setTextureUnits=j,this.setTexture2D=ee,this.setTexture2DArray=P,this.setTexture3D=te,this.setTextureCube=ne,this.rebindTextures=ce,this.setupRenderTarget=le,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=H,this.setupFrameBufferTexture=B,this.useMultisampledRTT=U,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Vm(e,t){function n(n,r=``){let i,a=so.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Hm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Um=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Wm=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new qc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Du({vertexShader:Hm,fragmentShader:Um,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ec(new mu(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Gm=class extends Ua{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new Wm,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new J,C=null,w=null,T=new dd;T.viewport=new yo;let E=new dd;E.viewport=new yo;let D=[T,E],O=new bd,k=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new es,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new es,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new es,b[e]=t),t.getHandSpace()};function j(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function M(){r.removeEventListener(`select`,j),r.removeEventListener(`selectstart`,j),r.removeEventListener(`selectend`,j),r.removeEventListener(`squeeze`,j),r.removeEventListener(`squeezestart`,j),r.removeEventListener(`squeezeend`,j),r.removeEventListener(`end`,M),r.removeEventListener(`inputsourceschange`,N);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}k=null,A=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,ae.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&K(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&K(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,j),r.addEventListener(`selectstart`,j),r.addEventListener(`selectend`,j),r.addEventListener(`squeeze`,j),r.addEventListener(`squeezestart`,j),r.addEventListener(`squeezeend`,j),r.addEventListener(`end`,M),r.addEventListener(`inputsourceschange`,N),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?Ai:ki,a=_.stencil?Ci:vi);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new xo(d.textureWidth,d.textureHeight,{format:Oi,type:pi,depthTexture:new Gc(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new xo(f.framebufferWidth,f.framebufferHeight,{format:Oi,type:pi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),ae.setContext(r),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function N(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let ee=new Y,P=new Y;function te(e,t,n){ee.setFromMatrixPosition(t.matrixWorld),P.setFromMatrixPosition(n.matrixWorld);let r=ee.distanceTo(P),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ne(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(k!==O.near||A!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,A=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;ne(O,i);for(let e=0;e<a.length;e++)ne(a[e],i);a.length===2?te(O,T,E):O.projectionMatrix.copy(T.projectionMatrix),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),re(e,O,i)};function re(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Ka*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let F=null;function ie(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new dd,o.layers.enable(n),o.viewport=new yo,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new qc,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}F&&F(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let ae=new Fd;ae.setAnimationLoop(ie),this.setAnimationLoop=function(e){F=e},this.dispose=function(){}}},Km=new wo,qm=new no;qm.set(-1,0,0,0,1,0,0,0,1);function Jm(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Cu(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Km.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(qm),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Ym(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return q(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?K(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):K(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Xm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Zm=null;function Qm(){return Zm===null&&(Zm=new kc(Xm,16,16,Ni,bi),Zm.name=`DFG_LUT`,Zm.minFilter=ui,Zm.magFilter=ui,Zm.wrapS=ai,Zm.wrapT=ai,Zm.generateMipmaps=!1,Zm.needsUpdate=!0),Zm}var $m=class{constructor(e={}){let{canvas:t=Ia(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=pi}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([Fi,Pi,Mi]),g=new Set([pi,vi,gi,Ci,xi,Si]),_=new Uint32Array(4),v=new Int32Array(4),y=new Y,b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,k=null,A=null;this._outputColorSpace=Ea;let j=0,M=0,N=null,ee=-1,P=null,te=new yo,ne=new yo,re=null,F=new as(0),ie=0,ae=t.width,I=t.height,L=1,R=null,z=null,oe=new yo(0,0,ae,I),B=new yo(0,0,ae,I),V=!1,se=new Hc,H=!1,ce=!1,le=new wo,ue=new Y,de=new yo,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},pe=!1;function me(){return N===null?L:1}let U=n;function he(e,n){return t.getContext(e,n)}let ge,_e,W,ve,G,ye,be,xe,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,ze,!1),t.addEventListener(`webglcontextrestored`,Be,!1),t.addEventListener(`webglcontextcreationerror`,Ve,!1),U===null){let t=`webgl2`;if(U=he(t,e),U===null)throw he(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}Le()}catch(e){throw t.removeEventListener(`webglcontextlost`,ze,!1),t.removeEventListener(`webglcontextrestored`,Be,!1),t.removeEventListener(`webglcontextcreationerror`,Ve,!1),q(`WebGLRenderer: `+e.message),e}function Le(){ge=new _f(U),ge.init(),Pe=new Vm(U,ge),_e=new Gd(U,ge,e,Pe),W=new zm(U,ge),_e.reversedDepthBuffer&&d&&W.buffers.depth.setReversed(!0),O=U.createFramebuffer(),k=U.createFramebuffer(),A=U.createFramebuffer(),ve=new bf(U),G=new ym,ye=new Bm(U,ge,W,G,_e,Pe,ve),be=new gf(T),xe=new Id(U),Fe=new Ud(U,xe),Se=new vf(U,xe,ve,Fe),Ce=new Sf(U,Se,xe,Fe,ve),je=new xf(U,_e,ye),Oe=new Kd(G),we=new vm(T,be,ge,_e,Fe,Oe),Te=new Jm(T,G),Ee=new Cm,De=new Am(ge),Ae=new Hd(T,be,W,Ce,p,s),ke=new Rm(T,Ce,_e),Ie=new Ym(U,ve,_e,W),Me=new Wd(U,ge,ve),Ne=new yf(U,ge,ve),ve.programs=we.programs,T.capabilities=_e,T.extensions=ge,T.properties=G,T.renderLists=Ee,T.shadowMap=ke,T.state=W,T.info=ve}m!==1009&&(w=new wf(m,t.width,t.height,o,r,i));let Re=new Gm(T,U);this.xr=Re,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let e=ge.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=ge.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(e){e!==void 0&&(L=e,this.setSize(ae,I,!1))},this.getSize=function(e){return e.set(ae,I)},this.setSize=function(e,n,r=!0){if(Re.isPresenting){K(`WebGLRenderer: Can't change size while VR device is presenting.`);return}ae=e,I=n,t.width=Math.floor(e*L),t.height=Math.floor(n*L),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(ae*L,I*L).floor()},this.setDrawingBufferSize=function(e,n,r){ae=e,I=n,L=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009){q(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){K(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(te)},this.getViewport=function(e){return e.copy(oe)},this.setViewport=function(e,t,n,r){e.isVector4?oe.set(e.x,e.y,e.z,e.w):oe.set(e,t,n,r),W.viewport(te.copy(oe).multiplyScalar(L).round())},this.getScissor=function(e){return e.copy(B)},this.setScissor=function(e,t,n,r){e.isVector4?B.set(e.x,e.y,e.z,e.w):B.set(e,t,n,r),W.scissor(ne.copy(B).multiplyScalar(L).round())},this.getScissorTest=function(){return V},this.setScissorTest=function(e){W.setScissorTest(V=e)},this.setOpaqueSort=function(e){R=e},this.setTransparentSort=function(e){z=e},this.getClearColor=function(e){return e.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(N!==null){let t=N.texture.format;e=h.has(t)}if(e){let e=N.texture.type,t=g.has(e),n=Ae.getClearColor(),r=Ae.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,U.clearBufferuiv(U.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,U.clearBufferiv(U.COLOR,0,v))}else r|=U.COLOR_BUFFER_BIT}t&&(r|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&U.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,ze,!1),t.removeEventListener(`webglcontextrestored`,Be,!1),t.removeEventListener(`webglcontextcreationerror`,Ve,!1),Ae.dispose(),Ee.dispose(),De.dispose(),G.dispose(),be.dispose(),Ce.dispose(),Fe.dispose(),Ie.dispose(),we.dispose(),Re.dispose(),Re.removeEventListener(`sessionstart`,Je),Re.removeEventListener(`sessionend`,Ye),Xe.stop()};function ze(e){e.preventDefault(),Ra(`WebGLRenderer: Context Lost.`),E=!0}function Be(){Ra(`WebGLRenderer: Context Restored.`),E=!1;let e=ve.autoReset,t=ke.enabled,n=ke.autoUpdate,r=ke.needsUpdate,i=ke.type;Le(),ve.autoReset=e,ke.enabled=t,ke.autoUpdate=n,ke.needsUpdate=r,ke.type=i}function Ve(e){q(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function He(e){let t=e.target;t.removeEventListener(`dispose`,He),Ue(t)}function Ue(e){We(e),G.remove(e)}function We(e){let t=G.get(e).programs;t!==void 0&&(t.forEach(function(e){we.releaseProgram(e)}),e.isShaderMaterial&&we.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=fe);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=ot(e,t,n,r,i);W.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Se.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Fe.setup(i,r,s,n,c);let h,g=Me;if(c!==null&&(h=xe.get(c),g=Ne,g.setIndex(h)),i.isMesh)r.wireframe===!0?(W.setLineWidth(r.wireframeLinewidth*me()),g.setMode(U.LINES)):g.setMode(U.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),W.setLineWidth(e*me()),i.isLineSegments?g.setMode(U.LINES):i.isLineLoop?g.setMode(U.LINE_LOOP):g.setMode(U.LINE_STRIP)}else i.isPoints?g.setMode(U.POINTS):i.isSprite&&g.setMode(U.TRIANGLES);if(i.isBatchedMesh){if(ge.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?xe.get(c).bytesPerElement:1,o=G.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(U,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Ge(e,t,n,r){D!==null&&e.isNodeMaterial&&D.setObject(r,e),H===!0&&Oe.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,nt(e,t,r),e.side=0,e.needsUpdate=!0,nt(e,t,r),e.side=2):nt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),D!==null&&D.renderStart(e,t,n),x=De.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),ce=this.localClippingEnabled,H=Oe.init(this.clippingPlanes,ce),H===!0&&Oe.setGlobalState(this.clippingPlanes,t),D!==null&&ke.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];Ge(o,n,t,e),r.add(o)}else Ge(i,n,t,e),r.add(i)}}),x=C.pop(),D!==null&&D.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){let t=G.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}ge.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let Ke=null;function qe(e){Ke&&Ke(e)}function Je(){Xe.stop()}function Ye(){Xe.start()}let Xe=new Fd;Xe.setAnimationLoop(qe),typeof self<`u`&&Xe.setContext(self),this.setAnimationLoop=function(e){Ke=e,Re.setAnimationLoop(e),e===null?Xe.stop():Xe.start()},Re.addEventListener(`sessionstart`,Je),Re.addEventListener(`sessionend`,Ye),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){q(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=Re.enabled===!0&&Re.isPresenting===!0,r=w!==null&&(N===null||n)&&w.begin(T,N);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(t),t=Re.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,N),x=De.get(e,C.length),x.init(t),x.state.textureUnits=ye.getTextureUnits(),C.push(x),le.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),se.setFromProjectionMatrix(le,Ma,t.reversedDepth),ce=this.localClippingEnabled,H=Oe.init(this.clippingPlanes,ce),b=Ee.get(e,S.length),b.init(),S.push(b),Re.enabled===!0&&Re.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&Ze(e,t,-1/0,T.sortObjects)}Ze(e,t,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(R,z),pe=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,pe&&Ae.addToRenderList(b,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),H===!0&&Oe.beginShadows();let i=x.state.shadowsArray;if(ke.render(i,e,t),H===!0&&Oe.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];$e(n,r,e,a)}pe&&Ae.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];Qe(b,e,n,n.viewport)}}else r.length>0&&$e(n,r,e,t),pe&&Ae.render(e),Qe(b,e,t)}N!==null&&M===0&&(ye.updateMultisampleRenderTarget(N),ye.updateRenderTargetMipmap(N)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),Fe.resetDefaultState(),ee=-1,P=null,C.pop(),C.length>0?(x=C[C.length-1],ye.setTextureUnits(x.state.textureUnits),H===!0&&Oe.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function Ze(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)x.pushLightProbeGrid(e);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(se)){r&&de.setFromMatrixPosition(e.matrixWorld).applyMatrix4(le);let i=Ce.update(e),a=e.material;a.visible&&b.push(e,i,a,n,de.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(se))){let i=Ce.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),de.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),de.copy(e.boundingSphere.center)),de.applyMatrix4(e.matrixWorld).applyMatrix4(le)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,de.z,s,t)}}else a.visible&&b.push(e,i,a,n,de.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)Ze(i[e],t,n,r)}function Qe(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),H===!0&&Oe.setGlobalState(T.clippingPlanes,n),r&&W.viewport(te.copy(r)),i.length>0&&et(i,t,n),a.length>0&&et(a,t,n),o.length>0&&et(o,t,n),W.buffers.depth.setTest(!0),W.buffers.depth.setMask(!0),W.buffers.color.setMask(!0),W.setPolygonOffset(!1)}function $e(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=ge.has(`EXT_color_buffer_half_float`)||ge.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new xo(1,1,{generateMipmaps:!0,type:e?bi:pi,minFilter:fi,samples:Math.max(4,_e.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:so.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||te;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(F),ie=T.getClearAlpha(),ie<1&&T.setClearColor(16777215,.5),T.clear(),pe&&Ae.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),H===!0&&Oe.setGlobalState(T.clippingPlanes,r),et(e,n,r),ye.updateMultisampleRenderTarget(a),ye.updateRenderTargetMipmap(a),ge.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,tt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(ye.updateMultisampleRenderTarget(a),ye.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(F,ie),d!==void 0&&(r.viewport=d),T.toneMapping=u}function et(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&tt(o,t,n,s,l,c)}}function tt(e,t,n,r,i,a){D!==null&&i.isNodeMaterial&&D.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function nt(e,t,n){t.isScene!==!0&&(t=fe);let r=G.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=we.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=we.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=be.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,He),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return it(e,s),d}else s.uniforms=we.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=we.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Oe.uniform),it(e,s),r.needsLights=ct(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=x.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function rt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=jp.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function it(e,t){let n=G.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function at(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];y.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(y))return n}return null}function ot(e,t,n,r,i){t.isScene!==!0&&(t=fe),ye.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=N===null?T.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:so.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=be.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=G.get(r),y=x.state.lights;if(H===!0&&(ce===!0||e!==P)){let t=e===P&&r.id===ee;Oe.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Oe.numPlanes||v.numIntersection!==Oe.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=x.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;b===!0&&(S=nt(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,S,v));let C=!1,w=!1,E=!1,O=S.getUniforms(),k=v.uniforms;if(W.useProgram(S.program)&&(C=!0,w=!0,E=!0),r.id!==ee&&(ee=r.id,w=!0),v.needsLights){let e=at(x.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(C||P!==e){W.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),O.setValue(U,`projectionMatrix`,e.projectionMatrix),O.setValue(U,`viewMatrix`,e.matrixWorldInverse);let t=O.map.cameraPosition;t!==void 0&&t.setValue(U,ue.setFromMatrixPosition(e.matrixWorld)),_e.logarithmicDepthBuffer&&O.setValue(U,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&O.setValue(U,`isOrthographic`,e.isOrthographicCamera===!0),P!==e&&(P=e,w=!0,E=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&O.setValue(U,`sunShadowMap`,y.state.sunShadowMap,ye),y.state.directionalShadowMap.length>0&&O.setValue(U,`directionalShadowMap`,y.state.directionalShadowMap,ye),y.state.spotShadowMap.length>0&&O.setValue(U,`spotShadowMap`,y.state.spotShadowMap,ye),y.state.pointShadowMap.length>0&&O.setValue(U,`pointShadowMap`,y.state.pointShadowMap,ye)),i.isSkinnedMesh){O.setOptional(U,i,`bindMatrix`),O.setOptional(U,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),O.setValue(U,`boneTexture`,e.boneTexture,ye))}i.isBatchedMesh&&(O.setOptional(U,i,`batchingTexture`),O.setValue(U,`batchingTexture`,i._matricesTexture,ye),O.setOptional(U,i,`batchingIdTexture`),O.setValue(U,`batchingIdTexture`,i._indirectTexture,ye),O.setOptional(U,i,`batchingColorTexture`),i._colorsTexture!==null&&O.setValue(U,`batchingColorTexture`,i._colorsTexture,ye));let A=n.morphAttributes;if((A.position!==void 0||A.normal!==void 0||A.color!==void 0)&&je.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,O.setValue(U,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(k.envMapIntensity.value=t.environmentIntensity),k.dfgLUT!==void 0&&(k.dfgLUT.value=Qm()),w){if(O.setValue(U,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&st(k,E),a&&r.fog===!0&&Te.refreshFogUniforms(k,a),Te.refreshMaterialUniforms(k,r,L,I,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;k.probesSH.value=e.texture,k.probesMin.value.copy(e.boundingBox.min),k.probesMax.value.copy(e.boundingBox.max),k.probesResolution.value.copy(e.resolution)}jp.upload(U,rt(v),k,ye)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(jp.upload(U,rt(v),k,ye),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&O.setValue(U,`center`,i.center),O.setValue(U,`modelViewMatrix`,i.modelViewMatrix),O.setValue(U,`normalMatrix`,i.normalMatrix),O.setValue(U,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Ie.update(n,S),Ie.bind(n,S)}}return S}function st(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function ct(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(e,t,n){let r=G.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),G.get(e.texture).__webglTexture=t,G.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=G.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){N=e,j=t,M=n;let r=null,i=!1,a=!1;if(e){let o=G.get(e);if(o.__useDefaultFramebuffer!==void 0){W.bindFramebuffer(U.FRAMEBUFFER,o.__webglFramebuffer),te.copy(e.viewport),ne.copy(e.scissor),re=e.scissorTest,W.viewport(te),W.scissor(ne),W.setScissorTest(re),ee=-1;return}if(o.__webglFramebuffer===void 0)ye.setupRenderTarget(e);else if(o.__hasExternalTextures)ye.rebindTextures(e,G.get(e.texture).__webglTexture,G.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&G.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);ye.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=G.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&ye.useMultisampledRTT(e)===!1?G.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,te.copy(e.viewport),ne.copy(e.scissor),re=e.scissorTest}else te.copy(oe).multiplyScalar(L).floor(),ne.copy(B).multiplyScalar(L).floor(),re=V;if(n!==0&&(r=O),W.bindFramebuffer(U.FRAMEBUFFER,r)&&W.drawBuffers(e,r),W.viewport(te),W.scissor(ne),W.setScissorTest(re),i){let r=G.get(e.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=G.get(e.textures[t]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=G.get(e.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,t.__webglTexture,n)}ee=-1};function lt(e){let t=G.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=_e.textureFormatReadable(e.format),t.__typeReadable=_e.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){q(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=G.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){W.bindFramebuffer(U.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+s);let u=lt(o);if(u.__formatReadable===!1){q(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){q(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&U.readPixels(t,n,r,i,Pe.convert(c),Pe.convert(l),a)}finally{let e=N===null?null:G.get(N).__webglFramebuffer;W.bindFramebuffer(U.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=G.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){W.bindFramebuffer(U.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+s);let d=lt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,f),U.bufferData(U.PIXEL_PACK_BUFFER,a.byteLength,U.STREAM_READ),U.readPixels(t,n,r,i,Pe.convert(l),Pe.convert(u),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let p=N===null?null:G.get(N).__webglFramebuffer;W.bindFramebuffer(U.FRAMEBUFFER,p);let m=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Va(U,m,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,f),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,a),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(f),U.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;ye.setTexture2D(e,0),U.copyTexSubImage2D(U.TEXTURE_2D,n,0,0,o,s,i,a),W.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Pe.convert(t.format),_=Pe.convert(t.type),v;t.isData3DTexture?(ye.setTexture3D(t,0),v=U.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(ye.setTexture2DArray(t,0),v=U.TEXTURE_2D_ARRAY):(ye.setTexture2D(t,0),v=U.TEXTURE_2D),W.activeTexture(U.TEXTURE0),W.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,t.flipY),W.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),W.pixelStorei(U.UNPACK_ALIGNMENT,t.unpackAlignment);let y=W.getParameter(U.UNPACK_ROW_LENGTH),b=W.getParameter(U.UNPACK_IMAGE_HEIGHT),x=W.getParameter(U.UNPACK_SKIP_PIXELS),S=W.getParameter(U.UNPACK_SKIP_ROWS),C=W.getParameter(U.UNPACK_SKIP_IMAGES);W.pixelStorei(U.UNPACK_ROW_LENGTH,h.width),W.pixelStorei(U.UNPACK_IMAGE_HEIGHT,h.height),W.pixelStorei(U.UNPACK_SKIP_PIXELS,l),W.pixelStorei(U.UNPACK_SKIP_ROWS,u),W.pixelStorei(U.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=G.get(e),r=G.get(t),h=G.get(n.__renderTarget),g=G.get(r.__renderTarget);W.bindFramebuffer(U.READ_FRAMEBUFFER,h.__webglFramebuffer),W.bindFramebuffer(U.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,G.get(e).__webglTexture,i,d+n),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,G.get(t).__webglTexture,a,m+n)),U.blitFramebuffer(l,u,o,s,f,p,o,s,U.DEPTH_BUFFER_BIT,U.NEAREST);W.bindFramebuffer(U.READ_FRAMEBUFFER,null),W.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||G.has(e)){let n=G.get(e),r=G.get(t);W.bindFramebuffer(U.READ_FRAMEBUFFER,k),W.bindFramebuffer(U.DRAW_FRAMEBUFFER,A);for(let e=0;e<c;e++)w?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,n.__webglTexture,i),T?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,r.__webglTexture,a),i===0?T?U.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):U.copyTexSubImage2D(v,a,f,p,l,u,o,s):U.blitFramebuffer(l,u,o,s,f,p,o,s,U.COLOR_BUFFER_BIT,U.NEAREST);W.bindFramebuffer(U.READ_FRAMEBUFFER,null),W.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?U.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?U.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):U.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):U.texSubImage2D(U.TEXTURE_2D,a,f,p,o,s,g,_,h);W.pixelStorei(U.UNPACK_ROW_LENGTH,y),W.pixelStorei(U.UNPACK_IMAGE_HEIGHT,b),W.pixelStorei(U.UNPACK_SKIP_PIXELS,x),W.pixelStorei(U.UNPACK_SKIP_ROWS,S),W.pixelStorei(U.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&U.generateMipmap(v),W.unbindTexture()},this.initRenderTarget=function(e){G.get(e).__webglFramebuffer===void 0&&ye.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?ye.setTextureCube(e,0):e.isData3DTexture?ye.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?ye.setTexture2DArray(e,0):ye.setTexture2D(e,0),W.unbindTexture()},this.resetState=function(){j=0,M=0,N=null,W.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ma}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=so._getDrawingBufferColorSpace(e),t.unpackColorSpace=so._getUnpackColorSpace()}},eh=class extends cs{constructor(){super(),this.name=`RoomEnvironment`,this.position.y=-3.5;let e=new Jc;e.deleteAttribute(`uv`);let t=new ku({side:1}),n=new ku,r=new pd(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let i=new Ec(e,t);i.position.set(-.757,13.219,.717),i.scale.set(31.713,28.305,28.591),this.add(i);let a=new Rc(e,n,6),o=new Zo;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let s=new Ec(e,th(50));s.position.set(-16.116,14.37,8.208),s.scale.set(.1,2.428,2.739),this.add(s);let c=new Ec(e,th(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let l=new Ec(e,th(17));l.position.set(14.904,12.198,-1.832),l.scale.set(.15,4.265,6.331),this.add(l);let u=new Ec(e,th(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new Ec(e,th(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new Ec(e,th(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function th(e){return new Au({color:0,emissive:16777215,emissiveIntensity:e})}function nh(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new nc,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=rh(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=rh(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function rh(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new Vs(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}var ih={1:`1111111111100000000110110110011001011101101111000110011000011010110101100010010110000000011111111111`,2:`1111111111100000000110110111011001001001101000000110001001011000010001100011100110000000011111111111`,3:`1111111111100000000110111001011000011101101001110110101001011011001001100110000110000000011111111111`,4:`1111111111100000000110111010011011110001101011110110001010011010000001101000100110000000011111111111`,5:`1111111111100000000110111100011011000101101101100110101011011000111001101011000110000000011111111111`,6:`1111111111100000000110000001011001011001101010010110011101011000001001100001010110000000011111111111`,7:`1111111111100000000110000100011000011001100101000110101110011000011101100101000110000000011111111111`,8:`1111111111100000000110001000011010101101100001110110011111011011101001101011010110000000011111111111`,9:`1111111111100000000110001001011010010101101010110110010000011001000101101100100110000000011111111111`,10:`1111111111100000000110001101011000111101101110100110010001011010111001100001100110000000011111111111`,11:`1111111111100000000110001111011011111101101001010110100010011011001101100101010110000000011111111111`,12:`1111111111100000000110010000011011101001100010010110010011011000101001100110100110000000011111111111`,13:`1111111111100000000110010001011011010001101011010110000011011010000101100111110110000000011111111111`,14:`1111111111100000000110010011011010100101101101000110100100011000111101101010010110000000011111111111`,15:`1111111111100000000110010100011010010001100110000110010100011010011001101011100110000000011111111111`,16:`1111111111100000000110010110011001100101100111110110110101011001010001101110000110000000011111111111`},ah=new wo().set(1,0,0,-B/2,0,0,1,0,0,-1,0,V/2,0,0,0,1),oh=class{groups=new Map;add(e,t){let n=t.index?t.toNonIndexed():t;if(!n.getAttribute(`uv`)){let e=n.getAttribute(`position`).count;n.setAttribute(`uv`,new Vs(new Float32Array(e*2),2))}for(let e of Object.keys(n.attributes))[`position`,`normal`,`uv`].includes(e)||n.deleteAttribute(e);n.getAttribute(`normal`)||n.computeVertexNormals(),n=n.applyMatrix4(ah);let r=this.groups.get(e)??[];r.push(n),this.groups.set(e,r)}build(e,t){for(let[n,r]of this.groups){let i=nh(r,!1);if(!i)continue;let a=new Ec(i,n),o=n.transparent;a.castShadow=t&&!o,a.receiveShadow=t,e.add(a)}}};function sh(e,t,n,r,i,a,o=0){let s=new Jc(r,i,a);return s.rotateZ(o),s.translate(e,t,n),s}function ch(e,t,n,r=8){let i=new Y(t[0]-e[0],t[1]-e[1],t[2]-e[2]),a=new Xc(n,n,i.length(),r,1,!1);return a.applyQuaternion(new $a().setFromUnitVectors(new Y(0,1,0),i.normalize())),a.translate((e[0]+t[0])/2,(e[1]+t[1])/2,(e[2]+t[2])/2),a}function lh(e,t,n){let r=new du(new Dl(e.map(e=>new J(e.x,e.y))),{depth:n-t,bevelEnabled:!1});return r.translate(0,0,t),r}function uh(e,t){let n=[],r=[];for(let i=1;i<e.length-1;i++)for(let a of[0,i,i+1]){n.push(...e[a]);let i=t?t[a]:[0,0];r.push(i[0],i[1])}let i=new nc;return i.setAttribute(`position`,new Ws(n,3)),i.setAttribute(`uv`,new Ws(r,2)),i.computeVertexNormals(),i}function dh(e,t,n,r,i,a){let o=new mu(r,i);return o.rotateX(Math.PI/2),o.rotateZ(a+Math.PI/2),o.translate(e,t,n),o}function fh(e,t,n,r,i,a){let o=Math.cos(a)*.002,s=Math.sin(a)*.002;return[dh(e+o,t+s,n,r,i,a),dh(e-o,t-s,n,r,i,a+Math.PI)]}function ph(e,t){let n=new vu(6*z,1*z,8,20),r=new Y(...t).normalize();return n.applyQuaternion(new $a().setFromUnitVectors(new Y(0,0,1),r)),n.translate(e[0],e[1],e[2]),n}function mh(){let e=gh(64,64),t=e.getContext(`2d`);t.clearRect(0,0,64,64),t.strokeStyle=`#0d0e10`,t.lineWidth=3;for(let e=0;e<=64;e+=16)t.beginPath(),t.moveTo(e,0),t.lineTo(e,64),t.moveTo(0,e),t.lineTo(64,e),t.stroke();let n=_h(e);return n.wrapS=n.wrapT=ii,n}function hh(e,t,n,r,i,a){let o=new Y(r[0]-n[0],r[1]-n[1],r[2]-n[2]),s=o.length();o.normalize();let c=Math.abs(o.z)>.9?new Y(1,0,0):new Y(0,0,1),l=new Y().crossVectors(o,c).normalize().multiplyScalar(i/2),u=new Y().crossVectors(o,l).normalize().multiplyScalar(i/2),d=[l.clone().add(u),l.clone().sub(u),l.clone().negate().sub(u),l.clone().negate().add(u)],f=(e,t)=>[n[0]+o.x*s*t+e.x,n[1]+o.y*s*t+e.y,n[2]+o.z*s*t+e.z];for(let n of d)e.add(t,ch(f(n,0),f(n,1),.024,6));if(!a)return;let p=Math.max(1,Math.round(s/i));for(let n=0;n<4;n++){let r=d[n],i=d[(n+1)%4];for(let n=0;n<p;n++){let a=n/p,o=(n+1)/p;e.add(t,ch(f(n%2?r:i,a),f(n%2?i:r,o),.008,4)),e.add(t,ch(f(r,a),f(i,a),.008,4))}}}var gh=(e,t)=>{let n=document.createElement(`canvas`);return n.width=e,n.height=t,n};function _h(e,t=!0){let n=new Wc(e);return t&&(n.colorSpace=Ea),n}var vh={blue:`#1d4fd8`,red:`#d7262f`,white:`#f1f1ee`,black:`#121212`},yh={blue:2052054,red:13642288},bh=3.2,xh=1.8;function Sh(e){let t=e?4096:2048,n=t/2,r=t/(B+2*bh),i=n/(V+2*xh),a=gh(t,n),o=a.getContext(`2d`),s=(e,t)=>[(e+bh)*r,(V+xh-t)*i];o.fillStyle=`#26272b`,o.fillRect(0,0,t,n),o.fillStyle=`#4e5055`;let c=(e,t,n,r)=>{let[i,a]=s(e,r),[c,l]=s(n,t);o.fillRect(i,a,c-i,l-a)};c(0,0,B,V);for(let e of L){let t=H(e,-3),n=H(e,0);c(Math.min(t,n),0,Math.max(t,n),V);let r=H(e,-3),i=H(e,2.45);c(Math.min(r,i),V,Math.max(r,i),V+1.54);let a=H(e,-3),o=H(e,1.9);c(Math.min(a,o),-1.54,Math.max(a,o),0)}let l=o.getImageData(0,0,t,n),u=l.data,d=1234567,f=()=>(d=d*1664525+1013904223>>>0)/4294967296;for(let e=0;e<n;e++)for(let n=0;n<t;n++){let r=(e*t+n)*4;if(u[r]<50)continue;let i=Math.sin(n*.011)*Math.sin(e*.017)*3+Math.sin(n*.0031+e*.0047)*4,a=(f()-.5)*16+i;u[r]=Math.max(0,Math.min(255,u[r]+a)),u[r+1]=Math.max(0,Math.min(255,u[r+1]+a)),u[r+2]=Math.max(0,Math.min(255,u[r+2]+a*1.05))}o.putImageData(l,0,0);let p=(e,t,n,a,c,l=ue)=>{o.strokeStyle=c,o.lineWidth=l*(r+i)/2,o.lineCap=`butt`,o.beginPath(),o.moveTo(...s(e,t)),o.lineTo(...s(n,a)),o.stroke()},m=(e,t)=>{o.save(),o.beginPath(),e.forEach((e,t)=>t?o.lineTo(...s(e.x,e.y)):o.moveTo(...s(e.x,e.y))),o.closePath(),o.clip(),o.strokeStyle=t,o.lineWidth=2*ue*(r+i)/2,o.stroke(),o.restore()};p(B/2,0,B/2,V,vh.white);for(let e of L){let t=vh[e],n=t=>H(e,t);p(n(fe-ue/2),0,n(fe-ue/2),V,t);let r=qe(e===`blue`?`red`:`blue`).reduce((e,t)=>Math.max(e,t.y),0);p(n(de-ue/2),r*.5,n(de-ue/2),V-me,vh.black),p(n(0),V-me+ue/2,n(pe),V-me+ue/2,t),p(n(pe-ue/2),V-me,n(pe-ue/2),V,t),m(qe(e),t),m(yt(e),t);for(let e of At)p(n(Ot-6.5*z),e,n(Ot+6.5*z),e,vh.black);let i=n(-3);p(i,V+1.54,i,-1.54,t),p(n(-.61-ue/2),0,n(-.61-ue/2),V,vh.white),p(i,V+1.54,n(2.45),V+1.54,t),p(n(2.45),V+1.54,n(2.45),V,t),p(i,-1.54,n(1.9),-1.54,vh[e===`blue`?`red`:`blue`])}for(let e of jt)p(kt-6.5*z,e,kt+6.5*z,e,vh.black,.6*z);p(0,ue/2,B,ue/2,`#3a3b40`,ue),p(0,V-ue/2,B,V-ue/2,`#3a3b40`,ue);let h=_h(a);return h.generateMipmaps=!0,h.minFilter=fi,h}function Ch(e){let t=ih[e],n=gh(12,12),r=n.getContext(`2d`);r.fillStyle=`#fff`,r.fillRect(0,0,12,12);for(let e=0;e<10;e++)for(let n=0;n<10;n++)r.fillStyle=t[e*10+n]===`1`?`#fff`:`#000`,r.fillRect(n+1,e+1,1,1);let i=_h(n);return i.magFilter=si,i.minFilter=si,i.generateMipmaps=!1,i}function wh(){let e=gh(128,128),t=e.getContext(`2d`);t.fillStyle=`#9ea3ab`,t.fillRect(0,0,128,128);for(let e=0;e<128;e+=16)for(let n=0;n<128;n+=16){let r=e/16%2?8:0;t.save(),t.translate(n+r+8,e+8),t.rotate((e/16%2?1:-1)*.785),t.fillStyle=`#c3c8cf`,t.fillRect(-6,-1.5,12,3),t.fillStyle=`#7d828a`,t.fillRect(-6,1.5,12,1),t.restore()}let n=_h(e);return n.wrapS=n.wrapT=ii,n}function Th(e){let t=gh(512,512),n=t.getContext(`2d`),r=n.createLinearGradient(0,0,512,512);r.addColorStop(0,`#f4f5f6`),r.addColorStop(1,`#c9ccd1`),n.fillStyle=r,n.fillRect(0,0,512,512),n.translate(256,318),n.strokeStyle=`#2b2d31`,n.lineWidth=16,n.beginPath(),n.arc(0,0,100,Math.PI*.75,Math.PI*2.25),n.stroke();for(let e=0;e<=10;e++){let t=Math.PI*(.75+1.5*e/10);n.strokeStyle=`#3a3c40`,n.lineWidth=5,n.beginPath(),n.moveTo(Math.cos(t)*116,Math.sin(t)*116),n.lineTo(Math.cos(t)*130,Math.sin(t)*130),n.stroke(),n.fillStyle=`#3a3c40`,n.font=`bold 17px Silkscreen, monospace`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(e===0?`OFF`:String(e),Math.cos(t)*150,Math.sin(t)*150)}let i=n.createRadialGradient(-24,-24,8,0,0,84);i.addColorStop(0,`#f8f9fa`),i.addColorStop(.6,`#a9adb3`),i.addColorStop(1,`#55585e`),n.fillStyle=i,n.beginPath(),n.arc(0,0,82,0,Math.PI*2),n.fill();for(let e=22;e<82;e+=11)n.strokeStyle=`rgba(0,0,0,0.12)`,n.lineWidth=2,n.beginPath(),n.arc(0,0,e,0,Math.PI*2),n.stroke();n.setTransform(1,0,0,1,0,0),n.fillStyle=`#20232a`,n.font=`bold 30px Silkscreen, monospace`,n.textAlign=`center`,n.fillText(`CRESCENDO`,256,104),n.font=`15px Silkscreen, monospace`,n.fillText(`VOLUME`,256,138);let a=_h(t),o=gh(256,256),s=o.getContext(`2d`);s.fillStyle=`#000`,s.fillRect(0,0,256,256);let c=_h(o),l=e===`blue`?`#3f74ff`:`#ff3540`,u=-1;return{tex:a,glowTex:c,setLit(e){if(e!==u){u=e,s.fillStyle=`#000`,s.fillRect(0,0,256,256),s.lineWidth=7,s.strokeStyle=l;for(let t=0;t<e;t++){let e=Math.PI*(.75+1.5*t/10)+.03,n=Math.PI*(.75+1.5*(t+1)/10)-.03;s.beginPath(),s.arc(128,159,50,e,n),s.stroke()}c.needsUpdate=!0}}}}function Eh(){let e=gh(512,192),t=e.getContext(`2d`);return t.fillStyle=`#0b1f14`,t.fillRect(0,0,512,192),t.strokeStyle=`#1e8a4c`,t.lineWidth=8,t.strokeRect(6,6,500,180),t.fillStyle=`#2fd66c`,t.font=`bold 76px Silkscreen, monospace`,t.textAlign=`center`,t.textBaseline=`middle`,t.fillText(`CRESCENDO`,256,90),t.font=`18px Silkscreen, monospace`,t.fillStyle=`#8fe3b0`,t.fillText(`PRESENTED BY HAAS`,256,152),_h(e)}function Dh(e){let t=gh(256,256),n=t.getContext(`2d`);return n.fillStyle=e===`blue`?`#1f4fd6`:`#d02a30`,n.fillRect(0,0,256,256),n.fillStyle=`#fff`,n.font=`bold 34px Silkscreen, monospace`,n.textAlign=`center`,n.fillText(`FIRST`,150,120),n.font=`bold 20px Silkscreen, monospace`,n.fillText(`ROBOTICS`,150,150),n.fillText(`COMPETITION`,150,174),_h(t)}function Oh(e){let t=new Qo,n=new oh,r=(e,t={})=>new ku({color:e,...t}),i={alu:r(13225686,{metalness:.8,roughness:.32,side:2}),aluDark:r(9278364,{metalness:.7,roughness:.45}),black:r(1513499,{roughness:.75,side:2}),hdpeBlack:r(1052947,{roughness:.9,side:2}),white:r(15330286,{roughness:.55,side:2}),poly:r(14149362,{transparent:!0,opacity:.16,roughness:.05,metalness:.1,depthWrite:!1,side:2}),polyFrost:r(15659766,{transparent:!0,opacity:.45,roughness:.3,depthWrite:!1,side:2}),feet:r(3882306,{roughness:.7,metalness:.3}),diamond:r(16777215,{map:wh(),metalness:.6,roughness:.4}),grid:r(16777215,{map:mh(),alphaTest:.5,transparent:!0,roughness:.6,side:2}),foam:r(16738844,{roughness:.82}),chainSteel:r(12172740,{metalness:.9,roughness:.3}),yellow:r(15909424,{roughness:.6}),alliance:{blue:r(yh.blue,{roughness:.55,side:2}),red:r(yh.red,{roughness:.55,side:2})},clear:r(15266554,{transparent:!0,opacity:.12,roughness:.04,metalness:.1,depthWrite:!1,side:2})};i.diamond.map.repeat.set(4,2);let a=new Ec(new mu(B+2*bh,V+2*xh),new ku({map:Sh(e),roughness:.97,metalness:0}));a.rotation.x=-Math.PI/2,a.receiveShadow=e,t.add(a);let o=new Ec(new mu(120,80),new ku({color:1842465,roughness:1}));o.rotation.x=-Math.PI/2,o.position.y=-.005,t.add(o);let s=(e,t,r,a)=>{n.add(i.alu,sh((e+t)/2,r+a*.025,.03,t-e,.05,.06)),n.add(i.alu,ch([e,r+a*.02,Et],[t,r+a*.02,Et],.022,8)),n.add(i.poly,sh((e+t)/2,r+a*.02,(Et+.06)/2,t-e,.006,Et-.06));let o=Math.max(1,Math.round((t-e)/1.5));for(let s=0;s<=o;s++){let c=e+(t-e)*s/o;n.add(i.alu,sh(c,r+a*.03,Et/2,.045,.045,Et)),n.add(i.aluDark,sh(c,r+a*.17,.01,.05,.3,.02))}},c=(e,t)=>{let n=[],r=e;for(let e of wt)e-.9652/2>r&&e+.9652/2<t&&(n.push([r,e-Tt/2]),n.push([e-Tt/2,e+Tt/2]),r=e+Tt/2);return n.push([r,t]),n};for(let[e,t]of c(Be,B-Be))s(e,t,0,-1);let l=L.map(e=>H(e,je)).sort((e,t)=>e-t),u=[[0,l[0]-Me],...c(l[0]+Me,l[1]-Me),[l[1]+Me,B]];for(let[e,t]of u)s(e,t,V,1);let d=(e,t,r,a,o,s=10.5*z)=>{let c=Math.cos(o)*.004,l=Math.sin(o)*.004;n.add(i.white,dh(t+c,r+l,a,s,s,o));let u=new ku({map:Ch(e),roughness:.7});n.add(u,dh(t+2*c,r+2*l,a,8.125*z,8.125*z,o))},f={group:t,ampLights:{},speakerLeds:{},subwoofers:{},mics:{blue:[],red:[]},dsSigns:{blue:[],red:[]},timers:{},dsStacks:{blue:[],red:[]},speakers:{}};for(let r of L){let a=r===`blue`?1:-1,o=e=>H(r,e),s=i.alliance[r],c=r===`blue`?0:Math.PI;for(let e of xt){let t=(e.y0+e.y1)/2,a=e.y1-e.y0;if(e.kind===`ds`){n.add(i.diamond,sh(o(-.02),t,St/2,.04,a,St)),n.add(i.poly,sh(o(-.02),t,(St+Ct)/2,.01,a,Ct-St));for(let t of[e.y0+.025,e.y1-.025])n.add(i.alu,sh(o(-.03),t,Ct/2,.05,.05,Ct));n.add(i.alu,ch([o(-.03),e.y0,Ct],[o(-.03),e.y1,Ct],.024)),n.add(i.alu,sh(o(-.18),t,St+.02,.31,a*.85,.02));let s=Ah(256,96);f.dsSigns[r].push(s);let l=new mc({map:s.tex});n.add(l,dh(o(-.03),t,Ct+.16,.72,.27,c)),n.add(i.black,sh(o(-.06),t,Ct+.16,.05,.76,.3));for(let e=0;e<3;e++){let i=new mc({color:e<2?2236962:3351040});e<2&&f.dsStacks[r].push(i),n.add(i,ch([o(-.06),t+.5,Ct+.03+e*.06],[o(-.06),t+.5,Ct+.08+e*.06],.03,10))}if(e.n===2){let e=Ah(256,96);f.timers[r]=e,n.add(new mc({map:e.tex}),dh(o(-.03),t-.55,Ct+.16,.42,.16,c))}}else n.add(i.hdpeBlack,sh(o(-.03),t,_e/2,.06,a,_e))}for(let e of Nt.filter(e=>(r===`blue`?[7,8]:[3,4]).includes(e.id)))d(e.id,o(0),e.y,e.z,e.yaw);let l=new oh,u={black:i.black.clone(),alu:i.alu.clone(),white:i.white.clone(),mouth:new mc({color:328966,side:2})},p=be;l.add(u.black,sh(o(-.55),U,(_e+2.62)/2,1.1,p*2+.25,2.62-_e)),l.add(u.alu,sh(o(-.55),U,2.63,1.12,p*2+.28,.03));let m=[[ge,W],[ge+.05,W+.02],[ge+.05,ye-.18],[-.2,ye+.08],[-.2,ye-.06],[.05,W+.08]];for(let e of[-1,1]){let t=U+e*p;l.add(u.white,uh(m.map(([e,n])=>[o(e),t,n])))}for(let e=0;e<m.length;e++){let[t,n]=m[e],[r,i]=m[(e+1)%m.length];l.add(e===0?u.alu:u.white,uh([[o(t),U-p,n],[o(r),U-p,i],[o(r),U+p,i],[o(t),U+p,n]]))}l.add(u.mouth,uh([[o(0),U-he,_e],[o(ge),U-he,W],[o(ge),U+he,W],[o(0),U+he,_e]]));for(let e of[-1,1]){let t=U+e*he,n=U+e*p;l.add(u.black,uh([[o(0),t,_e-.2],[o(ge),t,W],[o(ge),n,W],[o(0),n,_e-.2]]))}let h=new mc({color:2236962});f.speakerLeds[r]=h,l.add(h,sh(o(ge-.01),U,W+.015,.025,he*2,.02));let g=new ku({map:Dh(r),side:2,roughness:.6}),_=new Qo;f.speakers[r]={group:_,materials:[u.black,u.alu,u.white,u.mouth,g,h]};for(let e of[-1,1]){let t=U+e*(p+.02),n=[[o(.3),t,ye-.15],[o(-.6),t+e*.55,ye-.25],[o(-.6),t,ye+.12]];l.add(g,uh(n,[[1,.6],[0,.1],[0,.95]]))}l.build(_,e),t.add(_);let v=(e,t,n)=>[o(e),U+t,n],y=v(0,-Te,0),b=v(we,-Ee,0),x=v(we,Ee,0),S=v(0,Te,0),C=(e,t)=>[e[0],e[1],t],w=Oe;for(let[e,t]of[[y,b],[b,x],[x,S]])n.add(i.hdpeBlack,uh([e,t,C(t,w),C(e,w)]));let T=v(0,-ke,De),E=v(0,ke,De),D=Th(r);f.subwoofers[r]=D;let O=new ku({map:D.tex,roughness:.35,metalness:.2,emissive:16777215,emissiveMap:D.glowTex,emissiveIntensity:1}),k=ke/Ee/2,A=[[0,0],[1,0],[.5+k,1],[.5-k,1]];n.add(O,uh([C(b,w),C(x,w),E,T],r===`blue`?A:A.map(([e,t])=>[1-e,t]))),n.add(s,uh([C(y,w),C(b,w),T])),n.add(s,uh([C(x,w),C(S,w),E]));let j=o(je),M=new Dl([{x:-Me,y:0},{x:Me,y:0},{x:Me,y:Ne},{x:-Me,y:Ne}].map(e=>new J(e.x,e.y)));M.holes.push(new El([new J(-Fe.halfW,Fe.bottom),new J(Fe.halfW,Fe.bottom),new J(Fe.halfW,Fe.top),new J(-Fe.halfW,Fe.top)]));let N=new gu(M);N.rotateX(Math.PI/2),N.translate(j,V,0),n.add(s,N),n.add(i.black,sh(j,V+Fe.depth/2+.005,(Fe.bottom+Fe.top)/2,Fe.halfW*2,Fe.depth,Fe.top-Fe.bottom)),n.add(i.black,sh(j,V+Pe/2+.02,Ne/2,Me*2,Pe,Ne)),n.add(i.alu,sh(j,V+Pe/2,Ne+.015,Me*2+.02,Pe+.04,.03)),d(r===`blue`?6:5,j,V-.005,53.38*z,-Math.PI/2),n.add(i.white,sh(j,V+.06,53.38*z,11*z,.1,11*z));let ee=(e,t)=>{let r=new mc({color:t});return n.add(r,ch([j+e,V+.12,Ne+.03],[j+e,V+.12,Ne+.16],.04,12)),r};f.ampLights[r]={bottom:ee(-.32,2236962),top:ee(-.22,2236962),coop:ee(.4,3351040)};let P=o(.05),te=o(je)-a*Me,ne=dh((P+te)/2,V+.02,Et+.3,Math.abs(te-P),.6,-Math.PI/2),re=ne.getAttribute(`uv`);for(let e=0;e<re.count;e++)re.setXY(e,re.getX(e)*Math.abs(te-P)*6,re.getY(e)*.6*6);n.add(i.grid,ne),n.add(i.alu,ch([P,V+.02,Et+.6],[te,V+.02,Et+.6],.012));for(let e=0;e<4;e++)n.add(i.foam,ph([j+.12,V+.16,Ne+.04+e*.052],[0,0,1]));let F=Ue(r),ie=Math.hypot(F.b.x-F.a.x,F.b.y-F.a.y),ae=Math.atan2(F.ny,F.nx),I=Math.atan2(F.b.y-F.a.y,F.b.x-F.a.x),L=e=>[F.mid.x-F.nx*e,F.mid.y-F.ny*e],[R,oe]=L(.02);n.add(i.poly,sh(R,oe,He.bottom/2,ie,.012,He.bottom,I)),n.add(i.polyFrost,sh(R,oe,(He.top+1.78)/2,ie,.012,1.78-He.top,I));for(let e of[.02,He.bottom,He.top,1.78,2.1])n.add(i.alu,ch([F.a.x-F.nx*.03,F.a.y-F.ny*.03,e],[F.b.x-F.nx*.03,F.b.y-F.ny*.03,e],.02));for(let e of[0,.5,1]){let t=F.a.x+(F.b.x-F.a.x)*e-F.nx*.03,r=F.a.y+(F.b.y-F.a.y)*e-F.ny*.03;n.add(i.alu,ch([t,r,0],[t,r,2.1],.022));let[a,o]=[t-F.nx*.9,r-F.ny*.9];n.add(i.alu,ch([a,o,0],[a,o,2.1],.022)),n.add(i.alu,ch([t,r,2.1],[a,o,2.1],.02))}let[B,se]=L(.04),[ce,le]=L(.04+.42/Math.tan(50*Math.PI/180));n.add(i.polyFrost,uh([[B-Math.cos(I)*ie*.45,se-Math.sin(I)*ie*.45,He.bottom],[B+Math.cos(I)*ie*.45,se+Math.sin(I)*ie*.45,He.bottom],[ce+Math.cos(I)*ie*.45,le+Math.sin(I)*ie*.45,He.bottom+.42],[ce-Math.cos(I)*ie*.45,le-Math.sin(I)*ie*.45,He.bottom+.42]])),n.add(new mc({color:328966}),sh(R-F.nx*.01,oe-F.ny*.01,(He.bottom+He.top)/2,He.halfW*2,.01,He.top-He.bottom,I));for(let[e,t]of[[.25,.2],[.45,.58]]){let[r,a]=L(e);n.add(i.aluDark,sh(r,a,t-.19,ie*.8,.3,.02,I));for(let e=0;e<24;e++){let o=(e-11.5)*.056;n.add(i.foam,ph([r+Math.cos(I)*o,a+Math.sin(I)*o,t],[Math.cos(I),Math.sin(I),0]))}}for(let e of Nt.filter(e=>(r===`blue`?[1,2]:[9,10]).includes(e.id)))d(e.id,e.x-F.nx*.005,e.y-F.ny*.005,e.z,ae);let ue=ft(r),de=mt(r),fe=new ku({map:Eh(),roughness:.5,emissive:670236,emissiveIntensity:.4});for(let e=0;e<3;e++){let t=de[e],r=Math.atan2(t.y-ue.y,t.x-ue.x),a=20*z;n.add(i.feet,sh(t.x-Math.cos(r)*(a/2-Qe/2),t.y-Math.sin(r)*(a/2-Qe/2),.012,a,Qe,.024,r)),hh(n,i.alu,[t.x,t.y,.03],[t.x,t.y,et],Ze,!0);let o=[ue.x+Math.cos(r)*.32,ue.y+Math.sin(r)*.32,(tt+et)/2];hh(n,i.alu,[t.x-Math.cos(r)*Ze/2,t.y-Math.sin(r)*Ze/2,(tt+et)/2],o,et-tt,!0),n.add(i.aluDark,sh(t.x,t.y,ot,Ze+.04,Ze+.04,.05,r));let s=[(t.x+ue.x)/2,(t.y+ue.y)/2];for(let e of fh(s[0],s[1],tt-.22,.95,.36,r+Math.PI/2))n.add(fe,e);n.add(i.black,sh(s[0],s[1],tt-.22,.96,.012,.37,r+Math.PI/2))}let pe=de[0];n.add(s,sh(pe.x-a*(Ze/2+.0064),pe.y,.03+dt.h/2,.0127,dt.w,dt.h)),n.add(i.aluDark,lh(vt(r),tt-.02,tt+.02));let me=vt(r);n.add(i.clear,lh(me,nt,rt)),n.add(i.aluDark,lh(me.map(e=>({x:ue.x+(e.x-ue.x)*.55,y:ue.y+(e.y-ue.y)*.55})),nt+.4,nt+.43)),n.add(i.alu,lh(me,nt,nt+.03)),n.add(i.alu,lh(me,rt-.02,rt));for(let e of me)n.add(i.alu,ch([e.x,e.y,nt],[e.x,e.y,tt],.015,6));for(let e of ht(r)){let a=ue.x+e.nx*(17.83*z),o=ue.y+e.ny*(17.83*z),s=Math.atan2(e.ny,e.nx);n.add(i.polyFrost,sh(a+e.nx*.07,o+e.ny*.07,ct+.2,.14,.55,.4,s)),n.add(i.alu,sh(a+e.nx*.14,o+e.ny*.14,ct,.03,.58,.03,s)),n.add(i.alu,sh(a+e.nx*.14,o+e.ny*.14,ct+.4,.03,.58,.03,s));let c=new mc({color:10133672});f.mics[r].push(c),n.add(c,ch([a-e.nx*.12,o-e.ny*.12,lt-ut],[a-e.nx*.12,o-e.ny*.12,lt],.021,10)),kh(t,e.a.x,e.a.y,e.b.x,e.b.y,-e.nx*.025,-e.ny*.025,i.chainSteel)}for(let e of Nt.filter(e=>(r===`blue`?[14,15,16]:[11,12,13]).includes(e.id)))d(e.id,e.x,e.y,e.z,e.yaw,9.5*z)}return n.build(t,e),f}function kh(e,t,n,r,i,a,o,s){let c=Math.hypot(r-t,i-n),l=Math.round(c*1.08/.024),u=new vu(.009,.0032,4,8);u.scale(1.5,1,1);let d=new Rc(u,s,l),f=new wo,p=new $a,m=new Y(1,1,1),h=[];for(let e=0;e<=l;e++){let s=e/l,c=t+(r-t)*s+a*Math.sin(Math.PI*s),u=n+(i-n)*s+o*Math.sin(Math.PI*s);h.push(new Y(c,u,gt(s)).applyMatrix4(ah))}for(let e=0;e<l;e++){let t=h[e].clone().add(h[e+1]).multiplyScalar(.5),n=h[e+1].clone().sub(h[e]).normalize();p.setFromUnitVectors(new Y(1,0,0),n),e%2&&p.multiply(new $a().setFromAxisAngle(new Y(1,0,0),Math.PI/2)),f.compose(t,p,m),d.setMatrixAt(e,f)}d.castShadow=!0,e.add(d)}function Ah(e,t){let n=gh(e,t);return{canvas:n,tex:_h(n),last:``}}function jh(e,t,n,r=`#050505`){if(e.last===t+n)return;e.last=t+n;let i=e.canvas.getContext(`2d`);i.fillStyle=r,i.fillRect(0,0,e.canvas.width,e.canvas.height),i.fillStyle=n,i.font=`bold ${Math.round(e.canvas.height*.7)}px Silkscreen, monospace`,i.textAlign=`center`,i.textBaseline=`middle`,i.fillText(t,e.canvas.width/2,e.canvas.height/2+2),e.tex.needsUpdate=!0}var Mh={blue:2052054,red:13642288,blueHex:`#1f4fd6`,redHex:`#d02a30`,note:16738844};function Nh(e,t,n=0){return new Y(e-B/2,n,V/2-t)}var Ph=new vu(Cn-wn,wn,10,32),Fh=new ku({color:Mh.note,roughness:.82,metalness:0});function Ih(){let e=new Ec(Ph,Fh);return e.rotation.x=-Math.PI/2,e.castShadow=!0,e}var Z=.0254,Lh=14,Rh=new Map;function zh(e,t=.62,n=.08){let r=`p${e}|${t}|${n}`,i=Rh.get(r);return i||Rh.set(r,i=new ku({color:new as(e),roughness:t,metalness:n})),i}function Bh(e){let t=`l${e}`,n=Rh.get(t);return n||Rh.set(t,n=new mc({color:new as(e).multiplyScalar(1.25),toneMapped:!1})),n}var Vh=new ku({color:14674160,transparent:!0,opacity:.22,roughness:.15,depthWrite:!1}),Hh={alu:`#c9ccd1`,aluDark:`#8d9198`,black:`#17181b`,motor:`#141416`,motorCap:`#5a5e66`,tread:`#1d1d1f`,wood:`#4a2618`,battery:`#1b1b1d`,red:`#c0392b`,rio:`#e3e4e6`,belt:`#26201d`};function Uh(e){let t=new as(e),n={h:0,s:0,l:0};return t.getHSL(n),n.s<.12&&n.l>.45?zh(e,.45,.3):zh(e,.55,.12)}var Wh=class e{parts=new Map;static m=new wo;static q=new $a;static e=new Po;static p=new Y;static s=new Y(1,1,1);add(t,n,r=0,i=0,a=0,o=0,s=0,c=0){let l=t.index?t.toNonIndexed():t;l!==t&&t.dispose();for(let e of Object.keys(l.attributes))e!==`position`&&e!==`normal`&&e!==`uv`&&l.deleteAttribute(e);l.attributes.uv||l.setAttribute(`uv`,new Ws(new Float32Array(l.attributes.position.count*2),2)),l.clearGroups(),e.e.set(o,s,c),e.q.setFromEuler(e.e),e.p.set(r,i,a),l.applyMatrix4(e.m.compose(e.p,e.q,e.s));let u=this.parts.get(n);u||this.parts.set(n,u=[]),u.push(l)}into(e){for(let[t,n]of this.parts){let r=nh(n,!1);for(let e of n)e.dispose();if(!r)continue;let i=new Ec(r,t);i.castShadow=t!==Vh&&!(t instanceof mc),i.receiveShadow=!0,e.add(i)}this.parts.clear()}},Gh=(e,t,n)=>new Jc(e,t,n),Kh=(e,t,n=Lh)=>new Xc(e,e,t,n).rotateZ(Math.PI/2),qh=(e,t,n=Lh)=>new Xc(e,e,t,n),Jh=(e,t,n=Lh)=>new Xc(e,e,t,n).rotateX(Math.PI/2);function Yh(e,t,n){let r=new Dl,i=-e/2,a=-t/2;return n=Math.min(n,e/2,t/2),r.moveTo(i+n,a),r.lineTo(i+e-n,a),r.quadraticCurveTo(i+e,a,i+e,a+n),r.lineTo(i+e,a+t-n),r.quadraticCurveTo(i+e,a+t,i+e-n,a+t),r.lineTo(i+n,a+t),r.quadraticCurveTo(i,a+t,i,a+t-n),r.lineTo(i,a+n),r.quadraticCurveTo(i,a,i+n,a),r}function Xh(e,t){let n=(e[0][0]+e[1][0]+e[2][0])/3,r=(e[0][1]+e[1][1]+e[2][1])/3,i=Math.max(...e.map(([e,t])=>Math.hypot(e-n,t-r))),a=Math.max(.2,1-t/i),o=new El;return e.forEach(([e,t],i)=>i?o.lineTo(n+(e-n)*a,r+(t-r)*a):o.moveTo(n+(e-n)*a,r+(t-r)*a)),o.closePath(),o}function Zh(e,t,n=.25*Z,r=`truss`){let i=Yh(e,t,.8*Z),a=Math.min(e,t)*.16+.25*Z,o=e-2*a,s=t-2*a;if(r===`truss`&&o>2*Z&&s>1.2*Z){let e=Math.max(1,Math.round(o/(s*1.1))),t=o/e,n=-o/2,r=-s/2,a=s/2;for(let o=0;o<e;o++){let s=n+o*t;i.holes.push(Xh([[s,r],[s+t,r],[s+t/2,a]],.35*Z)),o<e-1&&i.holes.push(Xh([[s+t/2,a],[s+t*1.5,a],[s+t,r]],.35*Z))}}else if(r===`round`&&o>1.5*Z){let e=Math.min(s,o)*.4,t=Math.max(1,Math.floor(o/(e*2.6)));for(let n=0;n<t;n++){let r=new El;r.absarc(-o/2+o/t*(n+.5),0,e,0,Math.PI*2,!1),i.holes.push(r)}}return new du(i,{depth:n,bevelEnabled:!1,curveSegments:4}).translate(0,0,-n/2)}function Qh(e,t,n=0,r=.25*Z){let i=new Dl;return i.moveTo(-e/2,0),i.lineTo(e/2,0),i.lineTo(n+.9*Z,t),i.lineTo(n-.9*Z,t),i.closePath(),e>3*Z&&t>3*Z&&i.holes.push(Xh([[-e/2+.6*Z,.6*Z],[e/2-.6*Z,.6*Z],[n,t-1.4*Z]],.9*Z)),new du(i,{depth:r,bevelEnabled:!1,curveSegments:2}).translate(0,0,-r/2)}var $h=new Map;function eg(e,t){let n=`${e}|${t}`,r=$h.get(n);if(!r){let i=document.createElement(`canvas`);i.width=512,i.height=128;let a=i.getContext(`2d`);a.fillStyle=`#e9e9ea`,a.textAlign=`center`,a.textBaseline=`middle`,a.font=t===`condensed`?`112px Anton, Impact, sans-serif`:`${t===`italic`?`italic `:``}900 104px Inter, "Arial Black", sans-serif`;let o=a.measureText(String(e)).width,s=Math.min(1,470/o);a.save(),a.translate(256,68),a.scale(s,1),a.fillText(String(e),0,0),a.restore(),r=new Wc(i),r.colorSpace=Ea,r.anisotropy=4,$h.set(n,r)}let i=Rh.get(`n${n}`);return i||(i=new ku({map:r,transparent:!0,alphaTest:.35,roughness:.85,polygonOffset:!0,polygonOffsetFactor:-2}),Rh.set(`n${n}`,i)),i}function tg(e,t){let n=new Qo,r=new Qo;n.add(r);let i=new Wh,a=e.look,o=e.frame[0]*Z,s=e.frame[1]*Z,c=a.height*Z,l=3.5*Z,u=5*Z,d=.6*Z,f=Uh(a.frameColor),p=Uh(a.accent),m=zh(a.wheels,.7,0),h=zh(a.rollers??(a.wheels===Hh.black||a.wheels===`#1c1d21`?`#3b3f46`:a.wheels),.75,0),g=zh(Hh.alu,.45,.3),_=zh(Hh.black,.6,.1),v=zh(Hh.motor,.45,.3),y=zh(Hh.motorCap,.4,.5),b=zh(Hh.tread,.9,0),x=zh(a.pan??Hh.wood,.85,0),S=zh(Hh.belt,.8,0),C=a.shooterPos*(o/2-.13),w=e.drive===`tank`,T=(e,t,n,r,i,a=1)=>{let o=2.6*Z,s=1.18*Z,c=i===`x`?Kh:i===`y`?qh:Jh,l=e=>i===`x`?[t+e*a,n,r]:i===`y`?[t,n+e*a,r]:[t,n,r+e*a];e.add(c(s,o),v,...l(0)),e.add(c(s*1.02,.3*Z),y,...l(.03683)),e.add(c(s*.55,.5*Z),y,...l(-.06604/2-.25*Z))},E=(e,t,n,r,i,a,o,s=2.3*Z,c=.8*Z)=>{e.add(Jh(.28*Z,t,8),g,r,i,a);let l=Math.max(2,Math.floor(t/s));for(let s=0;s<l;s++)e.add(Jh(n,c,12),o,r,i,a-t/2+t/l*(s+.5))},D=(e,t,n,r,i,a=f,o=2*Z,s=1*Z)=>e.add(Gh(t,o,s),a,n,r,i),O=(e,t,n,r,i,a=f,o=1*Z,s=1*Z)=>e.add(Gh(o,t,s),a,n,r+t/2,i),k=(e,t,n,r,i,a=f,o=2*Z,s=1*Z)=>e.add(Gh(s,o,t),a,n,r,i),A=2.2*Z;D(i,o,0,A,s/2-.5*Z),D(i,o,0,A,-s/2+.5*Z),k(i,s-2*Z,o/2-.5*Z,A,0),k(i,s-2*Z,-o/2+.5*Z,A,0),k(i,s-2*Z,o*.12,A,0,f,2*Z,1*Z),i.add(Gh(o-2*Z,.2*Z,s-2*Z),x,0,1.15*Z,0);let j=-Math.sign(C||1)*o*.18;i.add(Gh(6.6*Z,3*Z,7.1*Z),zh(Hh.battery,.7,0),-o/2+4.5*Z,2.8*Z,s/2-6*Z),i.add(Gh(6.7*Z,.4*Z,2*Z),zh(Hh.red,.6,0),-o/2+4.5*Z,4.4*Z,s/2-4.2*Z),i.add(Gh(7.4*Z,1.2*Z,5.4*Z),zh(Hh.rio,.5,0),j,1.9*Z,-s*.28),i.add(Gh(8*Z,1.6*Z,4*Z),_,j+(C>0?-1:1)*2.5*Z,2.1*Z,s*.12),i.add(Gh(4*Z,1*Z,3*Z),zh(`#f2f2f2`,.5,0),-o/2+3*Z,1.8*Z,-s/2+4*Z);let M=[];if(w)for(let e of[-1,1]){i.add(Gh(o,4.5*Z,1.2*Z),g,0,3.4*Z,e*(s/2-.6*Z));for(let t of[-1,0,1])i.add(Jh(3*Z,1.5*Z,18),b,t*(o/2-4*Z),3*Z,e*(s/2-2.2*Z)),i.add(Jh(1.4*Z,1.6*Z,12),zh(`#c9a227`,.6,0),t*(o/2-4*Z),3*Z,e*(s/2-2.2*Z));T(i,-o*.25,3.4*Z,e*(s/2-5*Z),`z`,-e)}else{let e=o/2-2.75*Z,t=s/2-2.75*Z,n=zh(a.accent===Hh.black?Hh.aluDark:a.accent,.5,.2);for(let[a,o]of[[1,1],[1,-1],[-1,1],[-1,-1]]){let s=a*e,c=o*t;i.add(Gh(5*Z,.3*Z,5*Z),f,s,4.3*Z,c),T(i,s-a*.9*Z,.14986,c+o*.9*Z,`y`),i.add(qh(.85*Z,1.8*Z),v,s+a*1.1*Z,5.4*Z,c-o*1.1*Z);let l=new Wh;l.add(Jh(2*Z,1.5*Z,20),b,0,2*Z,0),l.add(Jh(1.25*Z,1.62*Z,14),n,0,2*Z,0);for(let e of[-1,1])l.add(Gh(2.2*Z,2.6*Z,.2*Z),g,0,3*Z,e*1.05*Z);let u=new Qo;u.position.set(s,0,c),l.into(u),r.add(u),M.push(u)}}let N=zh(t===`blue`?`#1f3fd0`:`#c8161e`,.9,0),ee=Yh(o+2*l,s+2*l,1.4*Z),P=new El;P.moveTo(-o/2,-s/2),P.lineTo(o/2,-s/2),P.lineTo(o/2,s/2),P.lineTo(-o/2,s/2),P.closePath(),ee.holes.push(P),i.add(new du(ee,{depth:u,bevelEnabled:!1,curveSegments:6}),N,0,d,0,-Math.PI/2,0,0);let te=eg(e.team,a.numbers??`block`),ne=u*.86,re=e=>new mu(Math.min(e*.78,ne*4),ne),F=.07874;i.add(re(o),te,0,F,s/2+l+.01*Z,0,0,0),i.add(re(o),te,0,F,-(s/2+l+.01*Z),0,Math.PI,0),i.add(re(s),te,o/2+l+.01*Z,F,0,0,Math.PI/2,0),i.add(re(s),te,-(o/2+l+.01*Z),F,0,0,-Math.PI/2,0);let ie=s*.86,ae=e=>{let t=e*(o/2-1.2*Z);E(i,ie,1*Z,t,2.2*Z,0,h),E(i,ie,1*Z,t-e*3.4*Z,3.6*Z,0,h);for(let n of[-1,1])i.add(Zh(6*Z,3.4*Z,.19*Z,`round`),p,t-e*2*Z,3.2*Z,n*(ie/2+.3*Z));T(i,t-e*2*Z,3.2*Z,ie/2+2*Z,`z`)};if(a.intakeStyle===`utb`)ae(1),e.dualIntake&&ae(-1);else if(a.intakeStyle===`otb`){let e=o/2-4*Z,t=9*Z,n=o/2+l+5*Z,r=2*Z,a=Math.hypot(n-e,.1778),s=Math.atan2(-.1778,n-e);for(let t of[-1,1])i.add(Zh(a+2*Z,3*Z,.25*Z,`truss`),p,(e+n)/2,.2794/2,t*(ie/2+.4*Z),0,0,s);E(i,ie,1.15*Z,n,r,0,h,1.6*Z,1.2*Z),E(i,ie,1*Z,(e+n)/2+1*Z,.15239999999999998,0,h),k(i,ie,e,t,0,p,1*Z,1*Z),T(i,e,t,ie/2+2*Z,`z`)}if(a.intakeStyle!==`source`){let e=Math.min(o/2-6*Z,C+8*Z),t=C-2*Z;if(e>t+2*Z){let n=e-t,r=(e+t)/2;for(let e of[-1,1])i.add(Zh(n,3.2*Z,.19*Z,`round`),Vh,r,4*Z,e*6.5*Z);E(i,12*Z,.9*Z,r,5.2*Z,0,S,2*Z,1.4*Z)}}let I=new Qo,L=new Wh,R=15*Z,z=8.5*Z,oe=15*Z,B=m,V=(e,t)=>{for(let n of[-1,1])e.add(Zh(R,z,.25*Z,`truss`),f,t+R/2,.6*Z,n*.19431);let n=t+R*.78;for(let t of[3.2*Z,-2*Z]){e.add(Jh(1.9*Z,oe-.8*Z,20),B,n,t,0);for(let r of[-.32,0,.32])e.add(Jh(2.02*Z,.35*Z,20),_,n,t,r*oe)}E(e,oe-.6*Z,1*Z,t+R*.42,2*Z,0,h,2.2*Z,.8*Z),E(e,oe-.6*Z,1*Z,t+R*.42,-1.4*Z,0,h,2.2*Z,.8*Z);for(let n of[-3.8,4.8])k(e,oe,t+R*.12,n*Z,0,p,1*Z,1*Z);e.add(Gh(R*.7,.12*Z,oe),Vh,t+R*.55,5.3*Z,0),T(e,n,3.2*Z,.23621999999999999,`z`),T(e,n,-2*Z,.23621999999999999,`z`),T(e,t+R*.42,.3*Z,-.23621999999999999,`z`),e.add(Gh(R*.45,4.5*Z,.5*Z),S,n-1.5*Z,.6*Z,.20574)},se=null,H=[0,0,0];switch(a.shooter){case`turret`:{se=new Qo;let e=Math.max(9*Z,c-12*Z);se.position.set(C,e,0);for(let[t,n]of[[-1,-1],[-1,1],[1,-1],[1,1]])O(i,e-2*Z,C+t*6*Z,2*Z,n*6*Z,p);i.add(Gh(15*Z,.4*Z,15*Z),f,C,e-1.2*Z,0);let t=new Wh;t.add(new vu(7.5*Z,.6*Z,8,40).rotateX(Math.PI/2),p,0,-.4*Z,0),t.add(qh(7*Z,.35*Z,32),f,0,-.2*Z,0);for(let e of[-1,1])t.add(Qh(9*Z,6*Z),p,0,0,e*.20574);T(t,-6*Z,1.5*Z,0,`y`),t.into(se),I.position.set(0,6*Z,0),V(L,-.381*.45),H=[0,.4*Z,0],se.add(I),r.add(se);break}case`arm`:{let e=o*.62,t=Math.min(c*.62,15*Z);I.position.set(C-2*Z,t,0);for(let n of[-1,1])i.add(Qh(10*Z,t,0),p,C-2*Z,0,n*.23114),L.add(Zh(e,3.2*Z,.25*Z,`truss`),p,e/2,0,n*.21844);T(i,C-2*Z,t,-.2921,`z`),i.add(Jh(2.2*Z,1*Z,24),S,C-2*Z,t,-.25654),V(L,e-R*.95),H=[e-R*.5,.5*Z,0],r.add(I);break}case`elevator`:{let e=Math.max(c-1.5*Z,20*Z),t=C-3*Z;for(let n of[-1,1])O(i,e-3*Z,t,3*Z,n*.23621999999999999,a.towers?p:f,2*Z,1*Z),O(i,e*.82,t+1.6*Z,5*Z,n*.23621999999999999,g,1*Z,1*Z);k(i,.49784,t,e-.5*Z,0,a.towers?p:f,1*Z,2*Z),T(i,t-2*Z,6*Z,0,`x`,-1);let n=Math.min(e*.55,18*Z);I.position.set(C,n,0),L.add(Gh(1*Z,7*Z,.4572),f,-1.2*Z,0,0),V(L,-.13335),H=[R*.1,.4*Z,0],r.add(I);break}case`fixed`:{let e=Math.max(7*Z,c*.5);I.position.set(C,e,0),I.rotation.z=or;for(let t of[-1,1])i.add(Qh(13*Z,e,-2*Z),f,C,0,t*.20574);V(L,-.1905),H=[-.01905,.4*Z,0],r.add(I);break}default:{let e=Math.max(5.5*Z,Math.min(c*.5,15*Z));I.position.set(C,e,0);for(let t of[-1,1])i.add(Qh(Math.min(13*Z,o*.45),e,0),p,C,0,t*.20574);T(i,C,e,-.27686,`z`),i.add(Jh(2.6*Z,.8*Z,28),S,C,e,-.23114),V(L,-.1524),H=[R*.05,.4*Z,0],r.add(I)}}if(a.ampMech===`diverter`)L.add(Zh(6*Z,oe,.19*Z,`solid`),p,R*.62,6.2*Z,0,Math.PI/2,0,-.5);else if(a.ampMech===`elevator`&&a.shooter!==`elevator`){let e=Math.max(c-1.5*Z,18*Z),t=-C*.5-4*Z,n=-(s/2-4*Z);for(let r of[-1,1])O(i,e-3*Z,t+r*2.2*Z,3*Z,n,p,1*Z,2*Z);i.add(Gh(4.5*Z,4*Z,6*Z),zh(`#e8e8ea`,.5,0),t,e*.7,n+2.5*Z),E(i,5.5*Z,1*Z,t+2.4*Z,e*.7+1.5*Z,n+2.5*Z,h)}else if(a.ampMech===`arm`&&a.shooter!==`arm`){let e=Math.min(c*.75,20*Z);for(let t of[-1,1])i.add(Zh(o*.5,2.2*Z,.19*Z,`truss`),p,-o*.05,e,t*5*Z+s*.18,0,0,.3);E(i,10*Z,1*Z,o*.19,e+2.6*Z,s*.18,h)}else if(a.ampMech===`sideways`){let e=Math.min(c*.8,17*Z);k(i,s*.95,-o*.22,e,0,p,2*Z,1*Z),i.add(Gh(5*Z,4*Z,5*Z),f,-o*.22,e+2.5*Z,s*.22),E(i,4.6*Z,.9*Z,-o*.22+2.6*Z,e+3*Z,s*.22,h)}let ce=Math.max(c-1*Z,12*Z),le=(e,t,n)=>{O(i,n*.75,e,3*Z,t,f,2*Z,2*Z),O(i,n*.4,e,3*Z+n*.6,t,g,1.5*Z,1.5*Z);let r=3*Z+n;i.add(Gh(3.2*Z,.9*Z,1*Z),p,e+1.2*Z,r,t),i.add(Gh(.9*Z,2*Z,1*Z),p,e+2.4*Z,r-1*Z,t)};if(a.climber===`hooks`||a.climber===`winch`){for(let e of[-1,1])le(o*.2,e*(s/2-2.5*Z),ce-3*Z);a.climber===`winch`&&i.add(Jh(1.4*Z,s*.5,16),S,o*.2-2*Z,5*Z,0)}else if(a.climber===`arms`){let e=Math.min(o*.62,ce*1.2),t=.42,n=o*.3,r=4*Z,a=n-Math.cos(t)*e/2,c=r+Math.sin(t)*e/2;for(let o of[-1,1])i.add(Zh(e,2*Z,.25*Z,`truss`),p,a,c,o*(s/2-2*Z),0,0,-.42+Math.PI),i.add(Gh(1*Z,2.6*Z,1*Z),p,n-Math.cos(t)*e,r+Math.sin(t)*e+1*Z,o*(s/2-2*Z))}else a.climber===`telescope`&&le(o*.05,s/2-3*Z,ce-3*Z);let ue=(e,t,n,r)=>{for(let a of[-1,1])O(i,n,e+a*1.6*Z,3*Z,t,r,1*Z,1*Z);let a=Math.max(2,Math.floor(n/(5*Z)));for(let o=0;o<a;o++){let s=3*Z+n/a*(o+.5);i.add(Gh(4.4*Z,.5*Z,.5*Z),r,e,s,t,0,0,(o%2?1:-1)*.75)}};if(a.towers===`mast`&&ue(-o*.36,0,c-4*Z,f),a.towers===`twin`)for(let e of[-1,1])ue(C-7*Z,e*(s/2-3.5*Z),c-4*Z,p);if(a.towers===`box`){for(let[e,t]of[[-1,-1],[-1,1],[1,-1],[1,1]])O(i,c-4*Z,C+e*6*Z,3*Z,t*(s/2-4*Z),f,1.5*Z,1.5*Z);D(i,13*Z,C,c-1.5*Z,s/2-4*Z,p,1.5*Z,1.5*Z),D(i,13*Z,C,c-1.5*Z,-(s/2-4*Z),p,1.5*Z,1.5*Z)}if(a.panel){let e=Math.min(c-4*Z,22*Z);i.add(Zh(s*.6,e,.19*Z,`solid`),Uh(a.panel),-o/2+2.5*Z,3*Z+e/2,0,0,Math.PI/2,0)}if(a.intakeStyle===`source`){let e=Math.max(10*Z,c*.7);for(let t of[-1,1])i.add(Zh(14*Z,10*Z,.4*Z,`solid`),x,C-4*Z,e,t*7.5*Z,0,0,.5);i.add(Gh(14*Z,.4*Z,15*Z),x,C-4*Z,e-3*Z,0,0,0,.5)}if(a.lights){let e=Bh(a.lights);for(let t of[-1,1])i.add(Gh(o-3*Z,.35*Z,.35*Z),e,0,3.6*Z,t*(s/2-1.3*Z))}i.into(r),L.into(I),a.shooter!==`fixed`&&(I.rotation.z=c<15*Z?.12:.6);let de=Ih();de.position.set(...H),de.visible=!1,I.add(de);let fe=new Ec(new mu(o+2*l+.1,s+2*l+.1),new mc({color:Mh.note,transparent:!0,opacity:0,depthWrite:!1}));fe.rotation.x=-Math.PI/2,fe.position.y=.006,n.add(fe);let pe=[],me=Math.max(o,s)*.9+.2,U=new mu(.16,.06),he=new mc({color:16765498});for(let e=0;e<24;e++){let t=e/24*Math.PI*2,r=new Ec(U,he);r.rotation.x=-Math.PI/2,r.rotation.z=-t+Math.PI/2,r.position.set(Math.cos(t)*me,.02,-Math.sin(t)*me),r.visible=!1,n.add(r),pe.push(r)}return{group:n,body:r,turret:se,pivot:I,note:de,glow:fe,pinRing:pe,wheels:M}}function ng(e){e.group.traverse(t=>{let n=t;n.isMesh&&n!==e.note&&n.geometry.dispose()}),e.glow.material.dispose(),(e.pinRing[0]?.material)?.dispose(),e.group.removeFromParent()}var rg=[`driver`,`eye`,`follow`,`broadcast`,`top`],ig={driver:`DRIVER STATION`,eye:`DRIVER EYE LEVEL`,follow:`FOLLOW`,broadcast:`BROADCAST`,top:`TOP DOWN`},ag={blue:`#3d74ff`,red:`#ff3b43`},og=xt.filter(e=>e.kind===`ds`).map(e=>(e.y0+e.y1)/2),sg=class{hi;renderer;scene=new cs;camera=new dd(55,1,.05,200);field;robots=new Map;notes=new Map;notePool=[];match=null;mode=`driver`;viewAlliance=`blue`;followId=null;camPos=new Y;camLook=new Y;orbit=0;snapCamera=!0;constructor(e,t){this.hi=t,this.renderer=new $m({canvas:e,antialias:!0,powerPreference:`high-performance`}),this.renderer.setPixelRatio(t?Math.min(window.devicePixelRatio,2):1),this.renderer.toneMapping=4,this.renderer.toneMappingExposure=1.05,this.renderer.shadowMap.enabled=t,this.renderer.shadowMap.type=2,this.scene.background=new as(1118742),this.scene.fog=new ss(1118742,32,80);let n=new of(this.renderer);this.scene.environment=n.fromScene(new eh,.04).texture,this.scene.environmentIntensity=.42,this.scene.add(new $u(16054015,2763568,.55));let r=new gd(16774890,2.1);r.position.set(-4,16,6),r.castShadow=t,r.shadow.mapSize.set(2048,2048),Object.assign(r.shadow.camera,{left:-11,right:11,top:7,bottom:-7,near:1,far:40}),r.shadow.bias=-4e-4,r.shadow.normalBias=.02,this.scene.add(r);let i=new gd(14674175,.6);i.position.set(6,10,-8),this.scene.add(i),this.field=Oh(t),this.scene.add(this.field.group),this.resize()}resize(){let e=window.innerWidth,t=window.innerHeight;this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}setMatch(e){for(let e of this.robots.values())ng(e);this.robots.clear();for(let e of this.notes.values())this.scene.remove(e);if(this.notes.clear(),this.match=e,e){for(let t of e.robots){let e=tg(t.def,t.alliance);e.group.traverse(t=>{t.isMesh&&(t.castShadow=this.hi&&t!==e.glow&&!e.pinRing.includes(t))}),this.robots.set(t.id,e),this.scene.add(e.group)}e.player?(this.viewAlliance=e.player.alliance,this.followId=e.player.id):this.followId=e.robots[0]?.id??null,this.snapCamera=!0}}project(e,t,n){let r=Nh(e,t,n).project(this.camera);return r.z>1?null:{x:(r.x+1)/2*window.innerWidth,y:(1-r.y)/2*window.innerHeight}}render(e,t=!1){let n=this.match;n&&this.sync(n),this.updateCamera(e,t),this.renderer.render(this.scene,this.camera)}sync(e){for(let t of e.robots){let n=this.robots.get(t.id);n.group.position.copy(Nh(t.x,t.y,0)),n.group.rotation.y=t.heading,n.body.position.y=t.climbLift*.45,n.note.visible=t.hasNote;let r=t.hasNote&&e.time>=t.readyAt;if(n.glow.material.opacity=t.hasNote?r?.45:.2:0,n.turret&&(n.turret.rotation.y=t.turretYaw),t.def.look.shooter!==`fixed`&&(n.pivot.rotation.z+=(t.pivot-n.pivot.rotation.z)*.2),t.speed>.15){let e=Math.cos(t.heading),r=Math.sin(t.heading),i=t.vx*e+t.vy*r,a=t.vx*r-t.vy*e,o=Math.atan2(-a,i);for(let e of n.wheels)e.rotation.y=o}let i=e.pinProgress(t),a=Math.round(i*n.pinRing.length);n.pinRing.forEach((e,t)=>e.visible=i>.02&&t<a)}let t=new Set,n=new $a,r=new wo,i=new Y(0,1,0),a=new $a().setFromAxisAngle(new Y(1,0,0),-Math.PI/2);for(let o of e.notes){t.add(o.id);let e=this.notes.get(o.id);if(e||(e=this.notePool.pop()??Ih(),e.castShadow=this.hi,this.notes.set(o.id,e),this.scene.add(e)),e.position.copy(Nh(o.x,o.y,o.z)),o.air&&Math.hypot(o.vx,o.vy,o.vz)>.5){let t=new Y(o.vx,o.vz,-o.vy).normalize(),a=new Y().crossVectors(t,i);a.lengthSq()<1e-6&&a.set(1,0,0),a.normalize();let s=new Y().crossVectors(a,t).normalize();s.applyAxisAngle(t,Math.sin(o.spin)*.12);let c=new Y().crossVectors(s,t).normalize();r.makeBasis(t,c,s),n.setFromRotationMatrix(r),e.quaternion.copy(n)}else e.quaternion.setFromAxisAngle(i,o.yaw).multiply(a)}for(let[e,n]of this.notes)t.has(e)||(this.scene.remove(n),this.notes.delete(e),this.notePool.push(n));this.syncFieldLights(e)}syncFieldLights(e){let t=e.time,n=e=>Math.floor(t*e*2)%2==0,r=e.phase===`auto`||e.phase===`teleop`||e.phase===`transition`;for(let t of[`blue`,`red`]){let i=e.scores[t],a=t===`blue`?5078527:16728136,o=2105636,s=this.field.ampLights[t];s.bottom.color.setHex(i.bank>=1?a:o),s.top.color.setHex(i.amplified?n(2)?a:o:i.bank>=2?a:o);let c=e.phase===`auto`||e.phase===`teleop`&&e.teleopElapsed<=45||e.phase===`transition`,l=e.scores.blue.coop&&e.scores.red.coop,u=!1;c?u=i.coop||n(1):e.phase!==`pre`&&(u=l),s.coop.color.setHex(u?16756768:2761232),this.field.speakerLeds[t].color.setHex(i.amplified?a:o);let d=i.amplified?Math.ceil(i.amplifyLeft):0;this.field.subwoofers[t].setLit(d),this.field.mics[t].forEach((e,t)=>e.color.setHex(i.mics[t]?16773808:9409950));let f=e.robots.filter(e=>e.alliance===t);this.field.dsSigns[t].forEach((e,n)=>jh(e,f[n]?String(f[n].def.team):``,ag[t])),this.field.dsStacks[t].forEach(e=>e.color.setHex(r?a:o));let p=e.clock,m=e.phase===`pre`?String(p):isFinite(p)?`${Math.floor(Math.ceil(p)/60)}:${String(Math.ceil(p)%60).padStart(2,`0`)}`:`--`;jh(this.field.timers[t],m,`#ffffff`)}}updateCamera(e,t){let n=new Y,r=new Y,i=ce(this.viewAlliance);this.camera.up.set(0,1,0);let a=55;if(t)this.orbit+=e*.05,n.set(Math.cos(this.orbit)*11,5.2,Math.sin(this.orbit)*7.5),r.set(0,.4,0);else{let e=this.match?.robots.find(e=>e.id===this.followId);switch(this.mode){case`driver`:n.set(-i*(B/2+3.2),6.4,0),r.set(i*1.2,0,0);break;case`eye`:{let e=Nh(0,og[1],0).z;n.set(-i*(B/2+.75),1.78,e),r.set(i*2,.2,e*.3),a=62;break}case`follow`:{let t=e?Nh(e.x,e.y,0):new Y;n.set(t.x-i*3.6,3,t.z),r.set(t.x+i*2.2,.4,t.z);break}case`broadcast`:n.set(0,8.5,12.8),r.set(0,0,.6);break;case`top`:n.set(0,18.5,.001),r.set(0,0,0),this.camera.up.set(i,0,0)}}if(this.camera.fov!==a&&(this.camera.fov=a,this.camera.updateProjectionMatrix()),this.snapCamera)this.camPos.copy(n),this.camLook.copy(r),this.snapCamera=!1;else{let t=1-Math.exp(-e*(this.mode===`follow`?6:4));this.camPos.lerp(n,t),this.camLook.lerp(r,t)}this.camera.position.copy(this.camPos),this.camera.lookAt(this.camLook);for(let e of[`blue`,`red`]){let t=e===`blue`?this.camera.position.x<-B/2+.3:this.camera.position.x>B/2-.3,n=this.field.speakers[e];for(let e of n.materials){let n=t?.22:1;e.opacity!==n&&(e.transparent=n<1||e.userData.wasTransparent,e.opacity=n,e.depthWrite=n===1,e.needsUpdate=!0)}n.group.traverse(e=>e.castShadow=this.hi&&!t)}}cycleCamera(){let e=rg.indexOf(this.mode);return this.mode=rg[(e+1)%rg.length],this.snapCamera=!0,this.mode}},cg=[`shoot`,`intake`,`special`,`amplify`,`coop`,`highNote`,`climb`,`amp`,`separateAmp`];function lg(e,t){let n=0;return cg.forEach((e,r)=>{t[e]&&(n|=1<<r)}),[e,Math.round(t.mx*64),Math.round(t.my*64),Math.round(t.rot*64),n]}function ug(e){let t={...u,mx:e[1]/64,my:e[2]/64,rot:e[3]/64};return cg.forEach((n,r)=>{t[n]=!!(e[4]&1<<r)}),t}var dg=class{frames=[];last=``;record(e,t){let n=lg(e,t),r=n.slice(1).join(`,`);r!==this.last&&(this.frames.push(n),this.last=r)}finish(e){let t=e.player?.alliance??`blue`,n=e.robots.find(e=>e.alliance!==t);return{v:2,date:Date.now(),cfg:e.cfg,frames:this.frames,ticks:e.tick,blue:e.scores.blue.total,red:e.scores.red.total,player:e.player?.def.team??0,opponent:n?.def.team??0}}},fg=class{data;i=0;cur=u;constructor(e){this.data=e}inputFor(e){let t=this.data.frames;for(;this.i<t.length&&t[this.i][0]<=e;)this.cur=ug(t[this.i++]);return this.cur}},pg=e=>`crescendo.replay.${e}`,mg=e=>{let t=m(pg(e),null);return t&&t.v===2?t:null},hg=(e,t)=>h(pg(e),t),gg=e=>g(pg(e));function _g(){for(let e=0;e<10;e++)if(!mg(e))return e;return-1}function vg(e){let t=Zt(e),n=w.mods[e];return w.rules.modded&&n?{...t,stats:{...n}}:t}var yg=e=>w.rules.modded&&!!w.mods[e];function bg(e,t){let n=Lt.find(t=>t.key===e);if(e===`climbTime`&&t<=0)return`NO CLIMB`;let r=n.step<1?n.step<.1?2:1:0;return`${t.toFixed(r)} ${n.unit}`}function xg(e,t){let n=Lt.find(t=>t.key===e),r=(t-n.min)/(n.max-n.min);return n.lowerBetter&&(r=e===`climbTime`&&t<=0?0:1-r),Math.max(0,Math.min(1,r))}function Q(e,t={},...n){let r=document.createElement(e);for(let[e,n]of Object.entries(t))n!=null&&n!==!1&&(e===`class`?r.className=String(n):e===`style`?r.setAttribute(`style`,String(n)):e.startsWith(`on`)&&typeof n==`function`?r.addEventListener(e.slice(2),n):e in r?r[e]=n:r.setAttribute(e,String(n)));for(let e of n)e!=null&&e!==!1&&r.append(e instanceof Node?e:String(e));return r}function Sg(e,t,n=``,r=!1){let i=e.endsWith(`→`);return Q(`button`,{class:`btn ${n}`,disabled:r,onclick:()=>{A.click(),t()}},i?e.slice(0,-1).trim():e,i?Q(`span`,{class:`arrow`},`→`):null)}function Cg(e,t=``){let n=Q(`div`,{class:`content ${t}`}),r=Q(`div`,{class:`bottom-bar`});return{root:Q(`div`,{class:`screen`},Q(`div`,{class:`topbar`},wg(),Q(`h1`,{class:`page-title`},e),Tg()),n,r),content:n,bar:r}}var wg=()=>Q(`div`,{class:`brand`},Q(`b`,{},`CRESCENDO SIM`),Q(`span`,{},`2024 Crescendo`));function Tg(){return Q(`div`,{class:`chip-driver`},Q(`span`,{class:`avatar`},Eg(x.name)),x.name||`Driver`)}var Eg=e=>(e.trim()[0]??`D`).toUpperCase();function Dg(e,t,n,r,i=()=>!1){let a=Q(`div`,{class:`seg`}),o=()=>{a.replaceChildren(...e.map(e=>Q(`button`,{class:`${e===n()?`on`:``} ${i(e)?`hot`:``}`,onclick:()=>{e!==n()&&(A.click(),r(e),o())}},t(e))))};return o(),a}var Og=(e,t)=>Dg([!1,!0],e=>e?`On`:`Off`,e,t,e=>e);function kg(e,t,n,r){let i=Q(`div`,{class:`val`},t(n())),a=a=>{A.click();let o=e[(e.indexOf(n())+a+e.length)%e.length];r(o),i.textContent=t(o)};return Q(`div`,{class:`stepper`},Q(`button`,{onclick:()=>a(-1),"aria-label":`previous`},`‹`),i,Q(`button`,{onclick:()=>a(1),"aria-label":`next`},`›`))}function Ag(e,t,n,r,i,a){let o=Q(`output`,{},a(r())),s=Q(`input`,{type:`range`,min:e,max:t,step:n,value:r()}),c=()=>s.style.setProperty(`--p`,`${(Number(s.value)-e)/(t-e)*100}%`);return s.oninput=()=>{i(Number(s.value)),o.textContent=a(Number(s.value)),c()},c(),Q(`div`,{class:`slider`},s,o)}function jg(e,t,n,r=``,i=``){let a=Q(`span`,{class:`count`},t?`${e.length}/${t}`:``),o=Q(`input`,{value:e,maxLength:t||void 0,placeholder:r,spellcheck:!1});return o.oninput=()=>{t&&(a.textContent=`${o.value.length}/${t}`),n(o.value)},Q(`div`,{class:`field`},i?Q(`span`,{class:`icon`},i):null,o,t?a:null)}function Mg(e,t,n=``,r=``){return Q(`div`,{class:`rowx ${r}`},Q(`div`,{class:`k`},e,n?Q(`small`,{},n):null),t)}var Ng=(...e)=>Q(`div`,{class:`rows`},...e),Pg=e=>Q(`div`,{class:`section`},e),Fg=(e,t=``)=>Q(`span`,{class:`kbd ${t}`},e),Ig=e=>{if(!isFinite(e))return`∞`;let t=Math.ceil(e);return`${Math.floor(t/60)}:${String(t%60).padStart(2,`0`)}`},Lg=e=>Yr(x.keys[e]),Rg=class{root;m=null;r=null;side;clock;phase;status;feed;cam;replay=!1;constructor(e){this.root=e}detach(){this.m=null,this.root.replaceChildren()}attach(e,t,n){this.m=e,this.r=t,this.replay=n;let r=e=>{let t=Q(`div`,{class:`pts`},`0`),n=[Q(`span`,{class:`pip`}),Q(`span`,{class:`pip`})],r=Q(`span`,{}),i=Q(`div`,{class:`amp-bar`,style:`width:0`}),a=Q(`div`,{class:`sub`},Q(`span`,{},`AMP`),...n,r);return[Q(`div`,{class:`hud-score ${e}`},t,a,i),{pts:t,pips:n,ampBar:i,info:r}]},[i,a]=r(`blue`),[o,s]=r(`red`);this.side={blue:a,red:s},this.clock=Q(`div`,{class:`t`},`0:00`),this.phase=Q(`div`,{class:`ph`},``),this.status=Q(`div`,{class:`hud-status`}),this.feed=Q(`div`,{class:`hud-feed`}),this.cam=Q(`div`,{class:`hud-cam`},``),this.root.replaceChildren(Q(`div`,{class:`hud-top`},i,Q(`div`,{class:`hud-clock`},this.clock,this.phase),o),this.status,this.feed,this.cam),this.flashCamera(t.mode),n&&this.root.append(this.replayBar())}replayBar(){let e=[.5,1,2,4],t=Q(`button`,{class:`btn small`},`1X`);t.onclick=()=>{$.speed=e[(e.indexOf($.speed)+1)%e.length],t.textContent=`${$.speed}X`};let n=Q(`button`,{class:`btn small`,onclick:()=>$.setPaused(!$.paused)},`PAUSE`),r=Q(`button`,{class:`btn small`,onclick:()=>this.flashCamera($.renderer.cycleCamera())},`CAMERA`),i=Q(`button`,{class:`btn small`},`FOLLOW: ROBOT`);return i.onclick=()=>{let e=this.m.robots,t=e[(e.findIndex(e=>e.id===$.renderer.followId)+1)%e.length];$.renderer.followId=t.id,$.renderer.viewAlliance=t.alliance,i.textContent=`FOLLOW: ${t.def.team}`},Q(`div`,{class:`replay-bar`},Q(`span`,{class:`btn small`,style:`color:var(--yellow)`},`REPLAY`),n,t,r,i)}flashCamera(e){this.cam&&(this.cam.textContent=`${ig[e]} · ${Lg(`camera`)} TO SWITCH`)}banner(e,t=`#fff`){let n=Q(`div`,{class:`hud-banner`,style:`color:${t}`},e);this.root.append(n),setTimeout(()=>n.remove(),1700)}feedLine(e,t=``){let n=Q(`div`,{class:t},e);for(this.feed.prepend(n);this.feed.children.length>6;)this.feed.lastChild.remove();setTimeout(()=>n.remove(),4200)}update(){let e=this.m;if(!e)return;for(let t of e.events){let e=t.alliance===`blue`?`var(--blue-hi)`:t.alliance===`red`?`var(--red-hi)`:`#fff`;switch(t.kind){case`horn`:A.horn(),this.banner(t.text);break;case`shot`:A.shot();break;case`score`:A.score(),t.x!==void 0&&t.y!==void 0?this.popup(t.text,t.x,t.y,e):this.feedLine(t.text);break;case`amplify`:A.amplify(),this.banner(t.text,e);break;case`foul`:A.foul(),this.feedLine(t.text,`foul`);break;case`info`:t.text===`ENDGAME`||t.text===`AUTO COMPLETE`?this.banner(t.text,`var(--yellow)`):this.feedLine(t.text)}}e.events.length=0;for(let t of[`blue`,`red`]){let n=e.scores[t],r=this.side[t];r.pts.textContent=String(n.total),r.pips.forEach((e,t)=>e.classList.toggle(`on`,n.amplified||t<n.bank)),r.ampBar.style.width=n.amplified?`${n.amplifyLeft/10*100}%`:`0`;let i=[];n.amplified&&i.push(`AMPED ${Math.ceil(n.amplifyLeft)}s · ${n.amplifyNotes}`),n.coop&&i.push(`CO-OP`),i.push(`${n.notes} NOTES`),r.info.textContent=i.join(` · `)}this.clock.textContent=e.phase===`pre`?String(e.clock):Ig(e.clock);let t=e.phase===`pre`?`GET READY`:e.phase===`auto`?`AUTO`:e.phase===`transition`?`AUTO → TELEOP`:e.phase===`post`?`FINAL`:e.isEndgame?`ENDGAME`:e.rules.unlimited?`TELEOP · UNLIMITED`:`TELEOP`;this.phase.textContent=t,this.phase.classList.toggle(`end`,e.isEndgame),this.updateStatus(e)}popup(e,t,n,r){let i=this.r?.project(t,n,2.4);if(!i)return this.feedLine(e);let a=Q(`div`,{class:`popup`,style:`left:${i.x}px;top:${i.y}px;color:${r}`},e);this.root.append(a),setTimeout(()=>a.remove(),1200)}updateStatus(e){let t=e.player;if(!t||this.replay){this.status.style.display=`none`;return}this.status.style.display=``;let n=[];if(n.push(`${t.def.team} ${t.def.name.toUpperCase()}`),t.hasNote){let r=e.time>=t.readyAt;n.push(Q(`span`,{class:`note`},r?`● NOTE READY`:`◐ INDEXING…`))}else n.push(Q(`span`,{class:`dim`},`○ NO NOTE — DRIVE INTO ONE`));t.action&&n.push(`${t.action.kind.toUpperCase()}… ${Math.round(t.action.t/t.action.dur*100)}%`);let r=e.scores[t.alliance],i=[];e.phase===`auto`&&t.auto!==`drive`&&i.push(`AUTO RUNNING`);let a=M(t,Le(t.alliance))<.5&&t.def.amp;!t.hasNote&&!e.rules.autoIntake&&!t.busy&&i.push(`HOLD ${Lg(`intake`)}: INTAKE`),t.hasNote&&a&&i.push(`${Lg(`amp`)}${x.separateAmp?``:` OR ${Lg(`shoot`)}`}: SCORE AMP`),t.hasNote&&!t.onstage&&(!a||x.separateAmp)&&i.push(`${Lg(`shoot`)}: AIM + SHOOT`),e.phase===`teleop`&&e.rules.stage&&t.def.stats.climbTime>0&&!t.onstage&&e.isEndgame&&i.push(`${Lg(`climb`)} UNDER A CHAIN: CLIMB`),t.onstage&&t.hasNote&&t.def.trap?i.push(`${Lg(`special`)}: SCORE TRAP`):t.onstage&&i.push(`${Lg(`climb`)}: DROP OFF CHAIN`),e.rules.humanPlayer===`manual`&&e.phase===`teleop`&&(r.bank>=2&&!r.amplified&&i.push(`${Lg(`amplify`)}: AMPLIFY`),r.bank>=1&&!r.coop&&e.teleopElapsed<45&&i.push(`${Lg(`coop`)}: CO-OP`),e.isEndgame&&e.hpHighLeft[t.alliance]>0&&i.push(`${Lg(`highNote`)}: HIGH NOTE (${e.hpHighLeft[t.alliance]})`));for(let e of i)n.push(Q(`span`,{class:`dim`},e));this.status.replaceChildren(...n.map(e=>typeof e==`string`?Q(`div`,{},e):e))}},zg=[`A`,`B`,`X`,`Y`,`LB`,`RB`,`LT`,`RT`,`Back`,`Start`,`LS`,`RS`,`D-pad up`,`D-pad down`,`D-pad left`,`D-pad right`,`Home`],Bg={driver:`Driver station`,eye:`Eye level`,follow:`Chase`,broadcast:`Broadcast`,top:`Top`},Vg=[{title:`Driving`,rows:[[`up`,`Drive forward`],[`down`,`Drive back`],[`left`,`Strafe left`],[`right`,`Strafe right`],[`rotL`,`Turn left`],[`rotR`,`Turn right`]]},{title:`Scoring`,rows:[[`intake`,`Intake`],[`shoot`,`Shoot`],[`amp`,`Amp`],[`special`,`Special (amp / trap)`],[`climb`,`Climb`]]},{title:`Human player`,rows:[[`amplify`,`Amplify`],[`coop`,`Coopertition`],[`highNote`,`High note`]]},{title:`Game`,rows:[[`camera`,`Switch camera`],[`pause`,`Pause`],[`reset`,`Restart match`],[`fullscreen`,`Fullscreen`]]}],Hg={up:`L stick up`,down:`L stick down`,left:`L stick left`,right:`L stick right`,rotL:`R stick left`,rotR:`R stick right`,fullscreen:``};function Ug(e,t=`general`){let{root:n,content:r,bar:i}=Cg(`Settings`),a=t,o=x.graphics,s=(e,t)=>{x[e]=t,T()},c=Q(`div`,{class:`col`}),l=Q(`div`,{class:`settings-tabs`}),u=null;function d(){c.replaceChildren(Pg(`Driver`),Ng(Mg(`Name`,jg(x.name,16,e=>s(`name`,e||`Driver`)))),Pg(`Sound`),Ng(Mg(`Volume`,Ag(0,1,.05,()=>x.volume,e=>s(`volume`,e),e=>`${Math.round(e*100)}%`))),Pg(`Controls`),Ng(Mg(`Separate amp button`,Og(()=>x.separateAmp,e=>s(`separateAmp`,e)),x.separateAmp?``:`shoot scores the amp`)),Q(`p`,{class:`note-line`},`With a separate amp button, ${Yr(x.keys.amp)} scores the amp and shoot always aims at the speaker. Turn it off to let shoot score the amp when you're next to it.`))}function f(){c.replaceChildren(Pg(`Screen`),Ng(Mg(`Fullscreen`,Og(()=>!!document.fullscreenElement,()=>$.toggleFullscreen())),Mg(`Graphics`,Dg([`low`,`high`],e=>e===`low`?`Low`:`High`,()=>x.graphics,e=>s(`graphics`,e)),x.graphics===o?`${x.graphics} now`:`reloads when you leave`),Mg(`Frame rate`,kg([`vsync`,`60`,`30`],e=>e===`vsync`?`Monitor`:`${e} fps`,()=>x.frameRate,e=>s(`frameRate`,e)))),Pg(`Match`),Ng(Mg(`Default camera`,kg(rg,e=>Bg[e],()=>x.camera,e=>s(`camera`,e))),Mg(`Touch controls`,Dg([`auto`,`on`,`off`],e=>e[0].toUpperCase()+e.slice(1),()=>x.touch,e=>s(`touch`,e)))),Q(`p`,{class:`note-line`},`High adds shadows, reflections and a sharper field. Low is for phones and older laptops.`))}function p(){u?.();let e=null,t=t=>{if(!e)return;t.preventDefault(),t.stopPropagation();let r=e;if(n(),t.code===`Escape`&&r!==`pause`)return p();let i={...x.keys};for(let e of Object.keys(i))i[e]===t.code&&(i[e]=``);i[r]=t.code,s(`keys`,i),p()},n=()=>{e=null,window.removeEventListener(`keydown`,t,!0),u=null};u=n,c.replaceChildren(Q(`div`,{class:`split-line`},Q(`span`,{},`Click a key to change it.`),Q(`span`,{},`Changes save automatically.`)),...Vg.flatMap(r=>[Pg(r.title),Ng(...r.rows.map(([r,i])=>{let a=Fg(Yr(x.keys[r]),x.keys[r]?``:`none`);a.onclick=()=>{u?.(),e=r,u=n,a.classList.add(`listen`),a.textContent=`Press a key`,window.addEventListener(`keydown`,t,!0)};let o=Fg(`×`,`add`);return o.title=`Unbind`,o.onclick=()=>{s(`keys`,{...x.keys,[r]:``}),p()},Mg(i,Q(`div`,{class:`keys`},a,o),``,`compact`)}))]))}function m(){u?.();let e=Hr(),t=navigator.getGamepads?Array.from(navigator.getGamepads()).filter(Boolean):[];c.replaceChildren(Q(`div`,{class:`split-line`},Q(`span`,{},`Controller`),Q(`span`,{},e.connected?`● Connected`:`○ Not connected`)),Ng(Mg(`Device`,Q(`div`,{class:`stepper`,style:`grid-template-columns:1fr`},Q(`div`,{class:`val`},t.length?t[0].id.replace(/\(.*?\)/g,``).trim().slice(0,34):`No controller found`)),t.length?``:`press a button on it to connect`),Mg(`Stick deadzone`,Ag(0,.3,.01,()=>x.deadzone,e=>s(`deadzone`,e),e=>e.toFixed(2))),Mg(`Response curve`,Dg([1,1.5,2,3],e=>e===1?`Linear`:`${e}×`,()=>x.curve,e=>s(`curve`,e)))),Q(`div`,{class:`split-line`,style:`margin-top:18px`},Q(`span`,{},`Press a button on the controller to change it.`),Q(`span`,{},`Changes save automatically.`)),...Vg.flatMap(e=>[Pg(e.title),Ng(...e.rows.filter(([e])=>Hg[e]!==``).map(([e,t])=>{if(Hg[e])return Mg(t,Fg(Hg[e],`static`),``,`compact`);let n=e,r=x.pad[n],i=Fg(r<0?`Unbound`:zg[r]??`B${r}`,r<0?`none`:``);return i.onclick=async()=>{i.classList.add(`listen`),i.textContent=`Press a button`;let e=await Wr(),t={...x.pad};for(let n of Object.keys(t))t[n]===e&&(t[n]=-1);t[n]=e,s(`pad`,t),m()},Mg(t,Q(`div`,{class:`keys`},i),``,`compact`)}))]))}let h={general:d,display:f,keyboard:p,controller:m};return l.replaceChildren(Dg([`general`,`display`,`keyboard`,`controller`],e=>e,()=>a,e=>{a=e,u?.(),h[e]()})),l.firstChild.classList.add(`tabs`),h[a](),r.classList.add(`narrow`),r.append(l,c),i.append(Sg(`Back`,()=>{u?.(),x.graphics===o?e():location.reload()}),Sg(`Reset controls`,()=>{x.keys={..._},x.pad={...v},x.deadzone=y.deadzone,x.curve=y.curve,x.separateAmp=y.separateAmp,T(),h[a]()})),n}function Wg(){let e=$.match;return Q(`div`,{class:`screen overlay`},Q(`div`,{class:`panel pause-card`},Q(`h1`,{class:`page-title`},`Paused`),Sg(`Resume →`,()=>$.setPaused(!1),`primary`),$.mode===`match`?Sg(`Restart`,()=>$.rematch()):null,Sg(`End match`,()=>$.endMatchNow()),Sg(`Settings`,()=>$.show(Ug(()=>$.show(Wg())))),Sg(`Quit to title`,()=>$.toTitle()),Q(`div`,{class:`score`},`${e.phase[0].toUpperCase()}${e.phase.slice(1)} · Blue ${e.scores.blue.total} – Red ${e.scores.red.total}`)))}function Gg(e){return Q(`table`,{},...[[`Leave`,e.leave],[`Auto amp`,e.autoAmp],[`Auto speaker`,e.autoSpeaker],[`Amp`,e.amp],[`Speaker`,e.speaker],[`Amplified speaker`,e.ampSpeaker],[`Park`,e.park],[`Onstage`,e.onstage],[`Spotlit`,e.spotlit],[`Harmony`,e.harmony],[`Trap`,e.trap],[`Fouls (from opponent)`,e.foulPoints]].map(([e,t])=>Q(`tr`,{},Q(`td`,{},e),Q(`td`,{},t))))}function Kg(e,t){let{root:n,content:r,bar:i}=Cg(t?`Replay over`:`Results`),a=e.scores.blue.total,o=e.scores.red.total,s=a===o?`Tie`:a>o?`Blue wins`:`Red wins`,c=e.player?.alliance,l=e.scores.blue.coop&&e.scores.red.coop,u=t=>{let n=e.scores[t],r=e.robots.filter(e=>e.alliance===t&&e.onstage).length,i=(a===o?1:t===`blue`==a>o?2:0)+ +!!Sr(n,l)+ +!!Cr(n,r),s=e.robots.filter(e=>e.alliance===t).map(t=>{let n=e.robotStats.get(t.id);return Q(`div`,{},Q(`b`,{},`${t.def.team}${t.isPlayer?` · ${x.name}`:``}`),`  ${n.points} pts · ${n.speaker} speaker · ${n.amp} amp${n.fouls?` · ${n.fouls} fouls`:``}`)});return Q(`div`,{class:`panel col ${t}`},Q(`div`,{class:`label`},`${t===`blue`?`Blue`:`Red`} alliance${t===c?` · you`:``}`),Q(`div`,{class:`total`},n.total),Q(`div`,{class:`rp`},`${i} RP · melody ${n.notes}/${l?15:18}${Sr(n,l)?` ✓`:``} · ensemble ${n.stagePoints}/10${Cr(n,r)?` ✓`:``}`),Gg(n),Q(`div`,{class:`bots`},...s))},d=Q(`span`,{},``);if(!t&&$.lastReplay){let e=Sg(`Save replay`,()=>{let t=_g(),n=t>=0?t:9;d.textContent=hg(n,$.lastReplay)?` · saved to slot ${n+1}`:` · could not save (storage full?)`,e.disabled=!0});i.append(Sg(`Title`,()=>$.toTitle()),e,Sg(`Watch replay`,()=>$.watchReplay($.lastReplay)),Sg(`Rematch →`,()=>$.rematch(),`primary`))}else i.append(Sg(`Title`,()=>$.toTitle()),Sg(`Watch again →`,()=>$.watchReplay($.replayData),`primary`));let f=s===`Tie`?`var(--cream)`:s.startsWith(`Blue`)?`var(--blue-hi)`:`var(--red-hi)`;return r.append(Q(`div`,{class:`results-head`},Q(`div`,{class:`winner`,style:`color:${f}`},s),Q(`div`,{class:`sub`},`Blue ${a} – ${o} Red`,d)),Q(`div`,{class:`results`},...L.map(u))),n}function qg(e){let t=new cs;t.add(new $u(16777215,3421242,1.9));let n=new gd(16777215,2.1);n.position.set(2.5,4,3),t.add(n);let r=new gd(12571391,.7);r.position.set(-3,2,1.5),t.add(r);let i=new gd(16777215,1.1);i.position.set(-1,3,-4),t.add(i);let a=new Ec(new Yc(.78,96),new mc({color:e===`orange`?1381653:1579032,toneMapped:!1}));a.rotation.x=-Math.PI/2,a.position.y=-.002,t.add(a);let o=new Ec(new hu(.776,.784,128),new mc({color:e===`orange`?8010774:3815996,toneMapped:!1}));return o.rotation.x=-Math.PI/2,t.add(o),t}function Jg(e,t=.6){let n=new dd(26,e,.1,30);return Yg(n,e,t),n}function Yg(e,t,n){let r=Math.max(0,n-.66),i=(t<1.2?2.9/Math.max(.6,t)*.95:2.45)*(1+r*.55);e.aspect=t,e.position.set(0,i*.52,i),e.lookAt(0,.24+r*.45,0),e.updateProjectionMatrix()}var Xg=e=>e.look.height*.0254;function Zg(e,t){e.note.visible=!0,e.glow.visible=!1,e.group.rotation.y=t}var Qg=null,$g=new Map,e_=[],t_=!1;function n_(e,t,n,r){Qg||(Qg=new $m({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),Qg.outputColorSpace=Ea,Qg.toneMapping=4,Qg.toneMappingExposure=1.05),Qg.setSize(n,r,!1),Qg.setClearColor(0,0);let i=qg(`gray`),a=tg(e,t);Zg(a,-.55),i.add(a.group),Qg.render(i,Jg(n/r,Xg(e)));let o=Qg.domElement.toDataURL(`image/png`);return ng(a),o}function r_(e,t,n=360,r=260){let i=`${e.key}:${t}:${n}x${r}`,a=$g.get(i);return a||$g.set(i,a=n_(e,t,n,r)),a}function i_(e,t,n,r=360,i=260){let a=`${e.key}:${t}:${r}x${i}`,o=$g.get(a);if(o)return n(o);if(e_.push({key:a,def:e,alliance:t,w:r,h:i,done:n}),t_)return;t_=!0;let s=()=>{let e=performance.now();for(;e_.length&&performance.now()-e<14;){let e=e_.shift(),t=$g.get(e.key);t||$g.set(e.key,t=n_(e.def,e.alliance,e.w,e.h)),e.done(t)}e_.length?setTimeout(s,0):t_=!1};setTimeout(s,0)}var a_=class{canvas;renderer;scene;cam;view=null;yaw=-.55;last=performance.now();alive=!0;height=.6;speed=.32;constructor(e,t=`orange`){this.canvas=e,this.renderer=new $m({canvas:e,antialias:!0,alpha:!0}),this.renderer.outputColorSpace=Ea,this.renderer.toneMapping=4,this.renderer.toneMappingExposure=1.05,this.renderer.setClearColor(0,0),this.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),this.scene=qg(t),this.cam=Jg(1),requestAnimationFrame(()=>this.tick())}show(e,t){this.view&&(this.scene.remove(this.view.group),ng(this.view)),this.view=tg(e,t),Zg(this.view,this.yaw),this.scene.add(this.view.group),this.height=Xg(e),Yg(this.cam,this.cam.aspect,this.height)}tick(){if(!this.alive)return;if(!this.canvas.isConnected){requestAnimationFrame(()=>this.canvas.isConnected?this.tick():this.dispose());return}requestAnimationFrame(()=>this.tick());let e=performance.now(),t=Math.min(.05,(e-this.last)/1e3);this.last=e;let n=this.canvas.clientWidth,r=this.canvas.clientHeight;if(!n||!r)return;let i=this.renderer.getPixelRatio();(this.canvas.width!==Math.round(n*i)||this.canvas.height!==Math.round(r*i))&&(this.renderer.setSize(n,r,!1),Yg(this.cam,n/r,this.height)),this.yaw+=t*this.speed,this.view&&(this.view.group.rotation.y=this.yaw),this.renderer.render(this.scene,this.cam)}dispose(){this.alive&&(this.alive=!1,this.view&&ng(this.view),this.renderer.dispose(),this.renderer.forceContextLoss())}};function o_(){let{root:e,content:t,bar:n}=Cg(`Replays`),r=-1,i=Q(`div`,{class:`replay-list`}),a=Sg(`Watch →`,()=>{let e=mg(r);e&&$.watchReplay(e)},`primary`,!0),o=Sg(`Delete`,()=>{gg(r),r=-1,s()},``,!0);function s(){i.replaceChildren();for(let e=0;e<10;e++){let t=mg(e);if(!t){i.append(Q(`div`,{class:`panel replay empty`},`Slot ${e+1} · empty`));continue}let n=t.blue===t.red?`Tie`:t.blue>t.red?`Blue won`:`Red won`,a=Math.round(t.ticks/120);i.append(Q(`div`,{class:`panel replay ${e===r?`sel`:``}`,onclick:()=>{r=e,s()},ondblclick:()=>$.watchReplay(t)},Q(`div`,{class:`score`},Q(`span`,{class:`b`},t.blue),Q(`i`,{},`–`),Q(`span`,{class:`r`},t.red)),Q(`div`,{class:`info`},Q(`div`,{},`${t.player} vs ${t.opponent}`),Q(`span`,{},`${n} · ${Math.floor(a/60)}:${String(a%60).padStart(2,`0`)} · ${new Date(t.date).toLocaleString([],{month:`short`,day:`numeric`,hour:`numeric`,minute:`2-digit`})}`)),Q(`span`,{class:`faint`,style:`font:500 12px var(--sans)`},`Slot ${e+1}`)))}a.disabled=o.disabled=r<0}return s(),t.append(i,Q(`p`,{class:`note-line`,style:`text-align:center`},`Replays are saved on this device. Big updates can change how old replays play back.`)),n.append(Sg(`Back`,()=>$.show(b_())),o,a),e}var s_=12;function c_(e){let t=e.behavior,n=t.role===`defender`?`Scorer, defends on strong alliances`:t.role===`feeder`?`Feeder`:t.passer?`Scorer, can feed`:`Scorer`,r=Math.floor(t.autoNotes),i=t.autoNotes-r,a=[n,`${i<.2?`${r}`:i>.8?`${r+1}`:`${r}–${r+1}`}-note auto${t.centerAuto?` (center line)`:``}`,`amps ${Math.round(t.ampShare*100)}%`];return a.push(t.climbRate>.05?`climbs ${Math.round(t.climbRate*100)}%`:`no climb`),e.trap&&a.push(`trap ${Math.round(t.trapRate*100)}%`),a.join(` · `)}function l_(e,t,n,r,i=`you`){let{root:a,content:o,bar:s}=Cg(`Choose your robot`);a.style.setProperty(`--side`,t===`blue`?`var(--blue)`:`var(--red)`);let c=e,l=``,u=`ALL`,d=Q(`div`,{class:`rgrid`}),f=Q(`div`,{class:`detail`}),p=new Map,m=new Map,h=Q(`canvas`),g=new a_(h,`gray`);g.speed=.5;let _=Q(`span`,{class:`count`},Xt.length),v=e=>u!==`ALL`&&!Qt(e).includes(u)?!1:!l||`${e.team} ${e.name} ${e.robotName??``} ${e.place}`.toLowerCase().includes(l);function y(e){let r=Q(`img`,{alt:``});m.set(e.key,r),i_(vg(e.key),t,e=>r.src=e);let i=vg(e.key),a=Q(`div`,{class:`rcard`,tabIndex:0,role:`button`,onkeydown:e=>e.key===`Enter`&&e.currentTarget.click(),onclick:()=>{c!==e.key&&(A.click(),S(e.key))},ondblclick:()=>n(e.key)},Q(`div`,{class:`art`},r),Q(`div`,{class:`flags`},Q(`span`,{class:`pill`},nn(tn(i,yg(e.key)))),e.champion?Q(`span`,{class:`pill champ`},`Champion`):null,yg(e.key)?Q(`span`,{class:`pill mod`},`Modded`):null),Q(`div`,{class:`foot`},Q(`div`,{class:`num`},e.team),Q(`div`,{},Q(`div`,{class:`nm`},e.name),Q(`div`,{class:`mt`},y_(e)))));return p.set(e.key,a),a}function b(){let e=Xt.filter(v);_.textContent=String(e.length),d.replaceChildren(...e.map(e=>p.get(e.key)??y(e))),x()}function x(){for(let[e,t]of p){t.classList.toggle(`sel`,e===c);let n=t.querySelector(`.art`),r=m.get(e);e===c?h.parentElement!==n&&n.replaceChildren(h):r.parentElement!==n&&n.replaceChildren(r)}}function S(e){c=e,g.show(vg(e),t),x(),O(),j.replaceWith(j=k())}function C(e,t){let n=Zt(c),r={...vg(c).stats},i=Lt.find(t=>t.key===e);r[e]=Math.round(Math.min(i.max,Math.max(e===`climbTime`?0:i.min,t))/i.step)*i.step,rn(r,n.stats)?delete w.mods[c]:(w.mods[c]=r,w.rules={...w.rules,modded:!0}),E()}function T(){let e=Zt(c);vg(c);let t=Q(`div`,{class:`specs`});for(let n of Lt){let r=Q(`div`,{class:`segbar`}),i=Q(`span`,{class:`v`}),a=Q(`div`,{class:`spec`},Q(`span`,{},n.label[0]+n.label.slice(1).toLowerCase()),i,r),o=()=>{let t=vg(c).stats[n.key],o=Math.round(xg(n.key,t)*s_),s=Math.round(xg(n.key,e.stats[n.key])*s_),l=t!==e.stats[n.key];r.replaceChildren(...Array.from({length:s_},(e,t)=>Q(`i`,{class:`${t<o?`on`:``} ${l&&t===s-1?`stock`:``}`}))),i.textContent=bg(n.key,t).toLowerCase().replace(`no climb`,`—`),a.classList.toggle(`changed`,l)};o();let s=!1,l=e=>{let t=r.getBoundingClientRect(),i=Math.min(1,Math.max(0,(e.clientX-t.left)/t.width));n.lowerBetter&&(i=1-i),C(n.key,n.min+i*(n.max-n.min)),o()};r.addEventListener(`pointerdown`,e=>{s=!0,r.setPointerCapture(e.pointerId),l(e)}),r.addEventListener(`pointermove`,e=>s&&l(e)),r.addEventListener(`pointerup`,()=>{s=!1,O(),D(c)}),t.append(a)}return t}function D(e){let t=p.get(e);if(!t)return;p.delete(e);let n=y(Zt(e));t.replaceWith(n),x()}function O(){let e=vg(c),n=e.real,r=Qt(e);f.replaceChildren(Q(`div`,{class:`panel top`},Q(`div`,{class:`ph`},Q(`span`,{},i===`you`?`Robot`:`Robot · ${i}`),Q(`span`,{class:`side-dot`},`${t===`blue`?`Blue`:`Red`} alliance`)),Q(`div`,{class:`ident`},Q(`div`,{class:`num`},e.team),Q(`div`,{},Q(`div`,{class:`nm`},e.name),Q(`div`,{class:`mt`},y_(e))))),Q(`div`,{class:`panel`},Q(`div`,{class:`ph`},Q(`span`,{},`Spec`),yg(c)?Sg(`Revert`,()=>{delete w.mods[c],E(),O(),D(c)},`link`):Q(`span`,{class:`faint`,style:`font-size:12px`},`drag a bar to mod it`)),T()),n?Q(`div`,{class:`panel`},Q(`div`,{class:`ph`},Q(`span`,{},`2024 season`),Q(`span`,{class:`faint`,style:`font-size:12px`},`Statbotics`)),Q(`div`,{class:`facts`},Q(`div`,{class:`fact`},Q(`div`,{class:`k`},`EPA`),Q(`div`,{class:`v`},n.epa.toFixed(1),Q(`small`,{},`#${n.rank}`))),Q(`div`,{class:`fact`},Q(`div`,{class:`k`},`Record`),Q(`div`,{class:`v`},`${n.wins}–${n.losses}`)),Q(`div`,{class:`fact`},Q(`div`,{class:`k`},`Rating`),Q(`div`,{class:`v`},nn(tn(e,yg(c))))),Q(`div`,{class:`fact`},Q(`div`,{class:`k`},`Auto`),Q(`div`,{class:`v`},n.auto.toFixed(1))),Q(`div`,{class:`fact`},Q(`div`,{class:`k`},`Teleop`),Q(`div`,{class:`v`},n.teleop.toFixed(1))),Q(`div`,{class:`fact`},Q(`div`,{class:`k`},`Endgame`),Q(`div`,{class:`v`},n.endgame.toFixed(1))))):``,Q(`div`,{class:`panel`,style:`display:flex;flex-direction:column;gap:10px`},r.length?Q(`div`,{class:`taglist`},...r.map(e=>Q(`span`,{class:`pill`},e))):null,Q(`p`,{class:`about`},e.notes),Q(`div`,{class:`plays`},c_(e)),Q(`p`,{class:`fine`},`EPA and record from Statbotics. Speeds, ranges and other stats are researched estimates, not official team data; bot behavior is calibrated to each team's EPA breakdown.`)))}let k=()=>Sg(`${i===`you`?`Drive`:`Pick`} ${Zt(c).team} →`,()=>n(c),`primary`),j=k(),M=jg(``,0,e=>{l=e.trim().toLowerCase(),b()},`Number, team or place`,`⌕`),N=kg($t,e=>e===`ALL`?`All robots`:e[0]+e.slice(1).toLowerCase(),()=>u,e=>{u=e,b()});return o.className=`picker`,o.append(Q(`div`,{class:`picker-left`},Q(`div`,{class:`picker-tools`},Q(`div`,{class:`roster`},`Roster`,_),M,N),d),f),g.show(vg(c),t),b(),O(),requestAnimationFrame(()=>p.get(c)?.scrollIntoView({block:`nearest`})),s.append(Sg(`Back`,r),Sg(`Random`,()=>{let e=Xt.filter(e=>e.key!==`9999`&&v(e));if(!e.length)return;let t=e[Math.floor(Math.random()*e.length)].key;S(t),p.get(t)?.scrollIntoView({block:`nearest`,behavior:`smooth`})}),j),a}function u_(e){let{root:t,content:n,bar:r}=Cg(`Teams`),i=()=>$.show(u_(e)),a=w.alliance,o=a===`blue`?`red`:`blue`,s=(e,t,n,r)=>{let a=vg(e),o=Q(`img`,{alt:``});i_(a,n,e=>o.src=e);let s=Q(`div`,{class:`rcard`,tabIndex:0,role:`button`,onkeydown:e=>e.key===`Enter`&&e.currentTarget.click(),style:`--side:var(--${n})`,"aria-disabled":r?void 0:`true`,onclick:r?()=>$.show(l_(e,n,e=>{r(e),i()},i,t)):null},Q(`div`,{class:`art`},o),Q(`div`,{class:`flags`},Q(`span`,{class:`pill`},nn(tn(a))),Q(`span`,{class:`pill`},t)),Q(`div`,{class:`foot`},Q(`div`,{class:`num`},a.team),Q(`div`,{},Q(`div`,{class:`nm`},a.name),Q(`div`,{class:`mt`},y_(a)))));return r||s.classList.add(`sel`),s},c=e=>t=>{w.bots[e]=t,E()},l=e=>Math.round(e.reduce((e,t)=>e+tn(vg(t)),0)/e.length),u=l([w.robot,w.bots[0],w.bots[1]]),d=l(w.bots.slice(2)),f=e=>e[0].toUpperCase()+e.slice(1);return n.append(Q(`div`,{class:`lineup`},Pg(`${f(a)} alliance (you) · average ${nn(u)}`),Q(`div`,{class:`rgrid`},s(w.robot,x.name,a,null),s(w.bots[0],`Partner 1`,a,c(0)),s(w.bots[1],`Partner 2`,a,c(1))),Pg(`${f(o)} alliance · average ${nn(d)} · ${u===d?`even match`:u>d?`you're +${u-d}`:`they're +${d-u}`}`),Q(`div`,{class:`rgrid`},s(w.bots[2],`Opponent 1`,o,c(2)),s(w.bots[3],`Opponent 2`,o,c(3)),s(w.bots[4],`Opponent 3`,o,c(4))),Q(`p`,{class:`note-line`},`Click a robot to swap it. Your own robot is set on the single player screen.`))),r.append(Sg(`Back`,e),Sg(`Randomize`,()=>{w.bots=sn(Math.random()*1e9|0),E(),i()})),t}var d_=e=>`${Math.floor(e/60)}:${String(e%60).padStart(2,`0`)}`;function f_(e){let{root:t,content:n,bar:r}=Cg(`Rules`,`narrow`),i=(e,t)=>{w.rules={...w.rules,[e]:t},E()},a=e=>()=>w.rules[e],o=e=>Og(a(e),t=>i(e,t)),s=()=>n.replaceChildren(Pg(`Match`),Ng(Mg(`Match length`,Dg([60,90,135,180],e=>d_(e+15),a(`teleopTime`),e=>i(`teleopTime`,e)),`teleop + 0:15 auto`),Mg(`Autonomous`,o(`auto`),`15 s, leave points`),Mg(`Unlimited time`,o(`unlimited`),`end it from pause`),Mg(`Fouls`,o(`fouls`),`pins, stage, source`),Mg(`Pin limit`,Dg([3,5,8],e=>`${e} s`,a(`pinLimit`),e=>i(`pinLimit`,e)))),Pg(`Field`),Ng(Mg(`Bots`,o(`bots`),`off: drive alone`),Mg(`Bot skill`,Dg([`easy`,`normal`,`hard`],e=>e[0].toUpperCase()+e.slice(1),a(`aiLevel`),e=>i(`aiLevel`,e))),Mg(`Human player`,Dg([`auto`,`manual`,`off`],e=>e[0].toUpperCase()+e.slice(1),a(`humanPlayer`),e=>i(`humanPlayer`,e)),`manual: you press amplify`),Mg(`Stage`,o(`stage`),`climb, harmony, trap`)),Pg(`Robot`),Ng(Mg(`Auto intake`,o(`autoIntake`),`no need to hold intake`),Mg(`Modded robots`,o(`modded`),`use your edited stats`)));return s(),r.append(Sg(`Back`,e),Sg(`Reset rules`,()=>{w.rules={...p},E(),s()})),t}var p_=.0254;function m_(e,t,n){let r=vg(e);return Q(`div`,{class:`panel robot-card`},Q(`img`,{src:r_(r,t,312,256),alt:``}),Q(`div`,{class:`grow`},Q(`div`,{class:`rc-num`},r.team,yg(e)?Q(`span`,{class:`pill mod`,style:`margin-left:8px;vertical-align:3px`},`Modded`):null),Q(`div`,{class:`rc-name`},r.name),Q(`div`,{class:`rc-meta`},y_(r))),n)}function h_(){let e=()=>$.show(h_()),{root:t,content:n,bar:r}=Cg(`Single Player`),i=w.alliance,a=Sg(`Change`,()=>$.show(l_(w.robot,i,t=>{w.robot=t,E(),e()},e)),`small outline`),o=Q(`div`,{class:`alliance-pick`},...[`blue`,`red`].map(t=>Q(`button`,{class:`${t} ${t===i?`on`:``}`,onclick:()=>{t!==i&&(w.alliance=t,w.pos={x:H(t,H(i,w.pos.x)),y:w.pos.y,heading:on(t)},E(),e())}},Q(`i`),t))),s=kg([`robot`,`four`,`two`,`leave`,`none`,`drive`],e=>f[e],()=>w.auto,e=>{w.auto=e,E()}),c=e=>e.map(e=>vg(e).team).join(` · `),l=Q(`div`,{class:`panel teams-card`},Q(`div`,{class:`grow`},Q(`div`,{},Q(`span`,{},`Partners  `),c(w.bots.slice(0,2))),Q(`div`,{},Q(`span`,{},`Opponents  `),c(w.bots.slice(2)))),Sg(`Edit`,()=>$.show(u_(e)),`small outline`)),u=Q(`div`,{class:`sp-left`},Q(`div`,{class:`label`},`Robot`),m_(w.robot,i,a),Q(`div`,{class:`label`},`Alliance`),o,Q(`div`,{class:`label`},`Auto`),s,Q(`div`,{class:`label`},`Teams`),l),d=Q(`canvas`,{class:`fieldmap`}),p=Sg(`↺  Reset spot`,()=>{w.pos={x:H(i,1.37),y:5.55,heading:on(i)},E(),h()},`link`),m=Q(`div`,{class:`sp-right`},Q(`div`,{class:`head`},Q(`div`,{class:`label`},`Starting spot`),p),Q(`div`,{class:`panel map-wrap`},d),Q(`div`,{class:`legend`},Q(`span`,{},Q(`i`,{class:`sq ${i}`}),`Your robot`),Q(`span`,{},Q(`i`,{class:`tri`}),`Shooter`),Q(`span`,{},Q(`i`,{class:`zone ${i}`}),`Starting zone`),Q(`span`,{class:`hint`},`Drag to place it, hold`,Fg(Yr(x.keys.rotL),`mini`),`or`,Fg(Yr(x.keys.rotR),`mini`),`to turn it.`))),h=g_(d);return n.className=`sp`,n.append(u,m),r.append(Sg(`Back`,()=>$.show(b_())),Sg(`Rules`,()=>$.show(f_(e))),Sg(`Settings`,()=>$.show(Ug(e))),Sg(`Start match →`,()=>$.startMatch(),`primary`)),t}function g_(e){let t=e.getContext(`2d`),n=1,r=0,i=0,a=(e,t)=>[r+e*n,i+(V-t)*n],o=e=>{t.beginPath(),e.forEach((e,n)=>n?t.lineTo(...a(e.x,e.y)):t.moveTo(...a(e.x,e.y))),t.closePath()},s=(e,n,r=[],i=1)=>{t.save(),t.strokeStyle=n,t.lineWidth=i,t.setLineDash(r.map(e=>e*devicePixelRatio)),t.beginPath(),t.moveTo(...a(e,0)),t.lineTo(...a(e,V)),t.stroke(),t.restore()},c={blue:{line:`rgba(96,146,255,0.75)`,fill:`rgba(59,130,246,0.10)`,zone:`rgba(59,130,246,0.16)`,solid:`#3b82f6`},red:{line:`rgba(255,98,98,0.7)`,fill:`rgba(239,68,68,0.08)`,zone:`rgba(239,68,68,0.14)`,solid:`#ef4444`}},l=()=>{let e=vg(w.robot);return[e.frame[0]*p_/2+3.5*p_,e.frame[1]*p_/2+3.5*p_]};function u(){let l=e.clientWidth,u=e.clientHeight;if(!l||!u)return;let d=devicePixelRatio;e.width=l*d,e.height=u*d;let f=4*d;n=Math.min((e.width-2*f)/B,(e.height-2*f)/V),r=(e.width-B*n)/2,i=(e.height-V*n)/2,t.clearRect(0,0,e.width,e.height),t.fillStyle=`#121212`,t.fillRect(r,i,B*n,V*n);let p=w.alliance;for(let e of[`blue`,`red`]){let r=c[e];t.fillStyle=r.fill,t.fillRect(...a(e===`blue`?0:B-fe,V),fe*n,V*n),t.fillStyle=r.zone,t.fillRect(...a(e===`blue`?0:B-de,V),de*n,V*n),s(H(e,de),r.line,[],d),s(H(e,fe),r.line,[4,4],d),t.strokeStyle=r.line,t.lineWidth=d,o(yt(e)),t.fillStyle=r.fill,t.fill(),t.stroke(),o(Ae(e)),t.fillStyle=e===`blue`?`rgba(59,130,246,0.32)`:`rgba(239,68,68,0.28)`,t.fill(),t.stroke(),o(Ke(e)),t.fillStyle=e===`blue`?`rgba(59,130,246,0.25)`:`rgba(239,68,68,0.22)`,t.fill(),t.stroke();let i=Ie(e);t.strokeRect(...a(i.x-.38,V),.76*n,.1*n)}s(B/2,`rgba(255,255,255,0.22)`,[],d),t.strokeStyle=`rgba(255,255,255,0.32)`,t.lineWidth=1.2*d;let m=(e,r)=>{t.beginPath(),t.arc(...a(e,r),Cn*n*.8,0,Math.PI*2),t.stroke()};for(let e of At)m(Ot,e),m(B-Ot,e);for(let e of jt)m(kt,e);t.strokeStyle=`rgba(235,231,222,0.75)`,t.lineWidth=1.2*d,t.strokeRect(r,i,B*n,V*n);let h=cn({playerAlliance:p,playerRobot:vg(w.robot),playerPos:w.pos,playerAuto:w.auto,botKeys:w.bots},w.rules,0);for(let e of h.slots){if(!e.isPlayer&&!w.rules.bots)continue;let r=e.robot.frame[0]*p_/2+3.5*p_,i=e.robot.frame[1]*p_/2+3.5*p_,s=c[e.alliance];if(o(P(e.x,e.y,r,i,e.heading)),e.isPlayer){t.fillStyle=s.solid,t.fill(),t.strokeStyle=`rgba(255,255,255,0.55)`,t.lineWidth=d,t.stroke();let n=Math.cos(e.heading),i=Math.sin(e.heading),o=a(e.x+n*(r+.24),e.y+i*(r+.24)),c=a(e.x+n*(r+.04)-i*.14,e.y+i*(r+.04)+n*.14),l=a(e.x+n*(r+.04)+i*.14,e.y+i*(r+.04)-n*.14);t.beginPath(),t.moveTo(...o),t.lineTo(...c),t.lineTo(...l),t.closePath(),t.fillStyle=`#ff7f2a`,t.fill()}else t.strokeStyle=s.line,t.lineWidth=d,t.setLineDash([3*d,3*d]),t.stroke(),t.setLineDash([]);t.font=`${e.isPlayer?700:500} ${.22*n}px Inter, sans-serif`,t.textAlign=`center`,t.textBaseline=`middle`,t.fillStyle=e.isPlayer?`#0c0c0c`:`rgba(255,255,255,0.45)`,t.fillText(String(e.robot.team),...a(e.x,e.y))}}function d(e,t){let n=w.alliance,[r,i]=l(),a=Math.max(r,i),o=H(n,Math.min(Math.max(H(n,e),a),de+.2)),s=Math.min(Math.max(t,a),V-a);for(let e=0;e<4;e++)for(let e of[Ae(n),Ke(n===`blue`?`red`:`blue`)]){let t=F(P(o,s,r,i,w.pos.heading),e);t&&(o+=t.nx*t.depth,s+=t.ny*t.depth)}return{x:o,y:s}}let f=!1,p=t=>{let a=e.getBoundingClientRect(),o=devicePixelRatio;return{x:((t.clientX-a.left)*o-r)/n,y:V-((t.clientY-a.top)*o-i)/n}};e.addEventListener(`pointerdown`,t=>{f=!0,e.setPointerCapture(t.pointerId);let n=p(t);w.pos={...w.pos,...d(n.x,n.y)},u()}),e.addEventListener(`pointermove`,e=>{if(!f)return;let t=p(e);w.pos={...w.pos,...d(t.x,t.y)},u()}),e.addEventListener(`pointerup`,()=>{f=!1,E()});let m=new Set,h=()=>[x.keys.rotL,x.keys.rotR,`BracketLeft`,`BracketRight`],g=t=>{if(!e.isConnected)return v();h().includes(t.code)&&m.add(t.code)},_=e=>{m.delete(e.code)&&E()},v=()=>{window.removeEventListener(`keydown`,g),window.removeEventListener(`keyup`,_)};window.addEventListener(`keydown`,g),window.addEventListener(`keyup`,_);let y=()=>{if(!e.isConnected)return v();if(m.size){let e=m.has(x.keys.rotL)||m.has(`BracketLeft`),t=m.has(x.keys.rotR)||m.has(`BracketRight`),n=!!e-+!!t;w.pos={...w.pos,heading:w.pos.heading+n*.05},w.pos={...w.pos,...d(w.pos.x,w.pos.y)},u()}requestAnimationFrame(y)};return requestAnimationFrame(()=>{u(),y()}),new ResizeObserver(()=>u()).observe(e),u}var __=[`254`,`1678`,`1690`,`5940`,`2056`,`6328`,`1323`,`2910`,`4414`,`1756`,`3005`],v_=7e3,y_=e=>[e.robotName,e.place].filter(Boolean).join(` · `)||`Kit of Parts`;function b_(){let e=[{label:`Singleplayer`,go:()=>$.show(h_())},{label:`Multiplayer`,go:()=>$.show(x_())},{label:`Replays`,go:()=>$.show(o_())},{label:`Settings`,go:()=>$.show(Ug(()=>$.show(b_())))}],t=0,n=Q(`div`,{class:`menu`}),r=()=>{n.replaceChildren(...e.map((e,n)=>Q(`button`,{class:`menu-item ${n===t?`on`:``}`,disabled:e.off,onmouseenter:()=>{t!==n&&(t=n,r())},onclick:()=>{A.click(),e.go()}},e.label,Fg(`Enter`,`mini`))))};r();let i=Q(`span`,{class:`avatar big`},Eg(x.name)),a=jg(x.name,16,e=>{x.name=e||`Driver`,i.textContent=Eg(x.name),T()}),o=Q(`canvas`),s=Q(`div`,{class:`num`}),c=Q(`div`,{class:`nm`}),l=Q(`div`,{class:`meta`}),u=Q(`b`,{style:`width:0`}),d=Q(`span`,{}),f=new a_(o,`orange`),p=Math.floor(Math.random()*__.length),m=performance.now(),h=()=>{let e=Zt(__[p]),t=p%2?`red`:`blue`;f.show(e,t),s.textContent=String(e.team),c.textContent=e.name,l.textContent=y_(e),d.textContent=`${p+1}/${__.length}`,m=performance.now()};h();let g=()=>{if(!o.isConnected)return;let e=(performance.now()-m)/v_;e>=1&&(p=(p+1)%__.length,h()),u.style.width=`${Math.min(1,e)*100}%`,requestAnimationFrame(g)};requestAnimationFrame(g);let _=Q(`div`,{class:`screen title`},Q(`div`,{class:`topbar`},wg(),Q(`div`,{class:`version`},`v0.3`)),Q(`div`,{class:`title-grid`},Q(`div`,{class:`title-left`},Q(`div`,{class:`season`},`2024 season`),Q(`div`,{class:`logo`},`CRESCENDO`),n,Q(`div`,{class:`panel driver-card`},i,Q(`div`,{class:`grow`},Q(`div`,{class:`label`},`Driver name`),a))),Q(`div`,{class:`showcase`},o,Q(`div`,{class:`who`},Q(`div`,{class:`line`},s,Q(`div`,{},c,l)),Q(`div`,{class:`prog`},Q(`i`,{},u),d)))),Q(`div`,{class:`title-foot`},Q(`span`,{},Fg(`↑↓`,`mini`),`Move`),Q(`span`,{},Fg(`Enter`,`mini`),`Select`),Q(`span`,{class:`faint`},`Fan-made · not affiliated with FIRST®`))),v=n=>{if(!_.isConnected)return window.removeEventListener(`keydown`,v);if(n.target?.tagName!==`INPUT`){if(n.code===`ArrowDown`||n.code===`ArrowUp`){let i=n.code===`ArrowDown`?1:-1;do t=(t+i+e.length)%e.length;while(e[t].off);A.click(),r(),n.preventDefault()}else n.code===`Enter`&&(n.preventDefault(),window.removeEventListener(`keydown`,v),A.click(),e[t].go())}};return window.addEventListener(`keydown`,v),_}function x_(){let{root:e,content:t,bar:n}=Cg(`Multiplayer`);return t.append(Q(`div`,{class:`mp`},Q(`div`,{class:`section`},`Driver`),Ng(Mg(`Name`,jg(x.name,16,e=>{x.name=e||`Driver`,T()}))),Q(`div`,{class:`section`},`Rooms`),Ng(Mg(`Create a room`,Sg(`Create`,()=>{},`small outline`,!0),`up to 6 drivers`),Mg(`Join a room`,jg(``,6,()=>{},`Room code`))),Q(`p`,{class:`note-line`},`Online rooms (six drivers, human player, referee and spectators) are the next phase. Single player works offline today.`))),n.append(Sg(`Back`,()=>$.show(b_()))),e}var S_=class{renderer;ui=document.getElementById(`ui`);touchRoot=document.getElementById(`touch`);hud=new Rg(document.getElementById(`hud`));mode=`menu`;match=null;recorder=null;playback=null;replayData=null;lastReplay=null;paused=!1;speed=1;acc=0;last=0;lastRender=0;overAt=-1;constructor(){this.renderer=new sg(document.getElementById(`game`),x.graphics===`high`),window.addEventListener(`resize`,()=>this.renderer.resize()),$r(this.touchRoot),window.addEventListener(`pointerdown`,()=>A.unlock(),{once:!0}),requestAnimationFrame(e=>this.loop(e))}show(e){this.ui.replaceChildren(...e?[e]:[])}toTitle(){this.paused=!1,this.mode=`menu`,this.match=null,this.renderer.setMatch(null),this.hud.detach(),this.setTouch(!1),this.show(b_())}startMatch(){let e=Math.random()*2**31|0,t=cn({playerAlliance:w.alliance,playerRobot:vg(w.robot),playerPos:w.pos,playerAuto:w.auto,botKeys:w.bots},w.rules,e);for(let e of t.slots)e.isPlayer||(e.robot=vg(e.robot.key));this.begin(new Br(t),`match`),this.recorder=new dg}rematch(){this.startMatch()}watchReplay(e){this.replayData=e,this.begin(new Br(e.cfg),`replay`),this.playback=new fg(e),this.recorder=null}begin(e,t){this.mode=t,this.match=e,this.paused=!1,this.speed=1,this.acc=0,this.overAt=-1,this.renderer.setMatch(e),this.renderer.mode=x.camera,this.hud.attach(e,this.renderer,t===`replay`),this.show(null),this.setTouch(t===`match`)}toggleFullscreen(){try{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()}catch{}}setTouch(e){let t=x.touch===`on`||x.touch===`auto`&&Zr();this.touchRoot.classList.toggle(`on`,e&&t)}setPaused(e){this.mode!==`menu`&&(this.paused=e,this.show(e?Wg():null),this.setTouch(!e&&this.mode===`match`))}endMatchNow(){this.match?.endMatch(),this.setPaused(!1)}finish(){let e=this.match;this.mode===`match`&&this.recorder&&(this.lastReplay=this.recorder.finish(e)),this.setTouch(!1),this.show(Kg(e,this.mode===`replay`))}loop(e){requestAnimationFrame(e=>this.loop(e)),this.frame(e)}frame(e){let t=Math.max(0,Math.min(.1,(e-this.last)/1e3||0));this.last=e;let n=this.match,r=ri();if(n&&(r.pause&&!n.over&&this.setPaused(!this.paused),r.camera&&this.hud.flashCamera(this.renderer.cycleCamera()),r.reset&&this.mode===`match`&&!this.paused&&this.rematch()),r.fullscreen&&this.toggleFullscreen(),this.mode===`menu`)return;if(n&&!this.paused){this.acc+=t*(this.mode===`replay`?this.speed:1);let i=0;for(;this.acc>=.008333333333333333&&i++<60;){let e=u;if(this.mode===`match`?e=r.player:this.mode===`replay`&&(e=this.playback.inputFor(n.tick)),this.recorder?.record(n.tick,e),n.step(e),this.acc-=Er,n.over)break}this.acc>.03333333333333333&&(this.acc=0),n.over&&this.overAt<0&&(this.overAt=e),this.overAt>0&&e-this.overAt>2500&&(this.overAt=1/0,this.finish())}this.hud.update();let i=x.frameRate===`vsync`?0:Number(x.frameRate);i&&e-this.lastRender<1e3/i-2||(this.renderer.render(i?(e-this.lastRender)/1e3:t,!1),this.lastRender=e)}},$;function C_(){if($=new S_,$.toTitle(),new URLSearchParams(location.search).has(`dev`)){let e=performance.now()+1e8;Object.assign(window,{__app:$,__dev:{app:$,adv(t){for(let n=0;n<Math.max(1,t*60);n++)$.frame(e+=1e3/60)},shot(e,t,n,r,i,a,o=50){let s=$.renderer;s.updateCamera=()=>{s.camera.fov=o,s.camera.updateProjectionMatrix(),s.camera.up.set(0,1,0),s.camera.position.set(e,t,n),s.camera.lookAt(r,i,a)},$.renderer.render(.016)}}})}}Promise.all([`38px Silkscreen`,`40px Anton`,`900 40px Inter`,`italic 900 40px Inter`,`16px Inter`].map(e=>document.fonts.load(e))).finally(C_),l({immediate:!0});