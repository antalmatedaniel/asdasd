
/* ======== ITT ÁLLÍTHATÓ MINDEN ======== */
const PIN = "0214";                         // a jelszó (4 számjegy)
const HINT = "Tipp: a mi napunk 💕";        // kis segítség a PIN-hez
const NAME = "Édesem";                      // a neve
const LETTER = `Nagyon boldog születésnapot kívánok Neked, édesem! 💖
"Boldog születésnapot!" Rengeteget gondolkoztam azon, hogy ez mit is jelenthet valójában. Vajon már csak megszokásból mondják az emberek egymásnak, vagy tényleg valós jelentése van? Mit is jelent számunkra hogy születésnapunk van? Tettünk egy kört a nap körül?
Én is így gondolkoztam egy ideig... Viszont rájöttem, hogy ez a nap az, amikor 19 éve a világ megváltozott, mert életem szerelme világrajött. Ez a világ nem lenne ugyanolyan nélküled Drágám. Te vagy a leggyönyörűbb lelkű ember akit ismerek, és egyszerűen páratlan amit a szeretteidért megteszel. Páratlan az amit a kapcsolatunkért megteszel. 
Végtelenül tisztellek téged. Tisztelem azt, hogy minden egyes nap te felkelsz, nyakadba veszed a világot és megpróbálod a legjobbat kihozni a napból, annak ellenére, hogy mennyi rossz dolgon mentél keresztül. Elképesztő számomra, egyszerűen elképesztő.
Nem fér a fejembe, hogy hogyan lehetséges az, hogy mindenkiért megteszed a lehető legtöbbet még akkor is, hogyha semmit sem kapsz belőle vissza. Nagyon jó lelked van, még ha néha nem is hiszed el nekem.
Szerintem te egy igazi szuperhős vagy, még ha nem is látod magad annak akkor is. Egy szuperhős, akiből egyszer kiváló anyuka lesz, majd nagyszülő, de ne rohanjunk ennyire, élvezzük ki az együtt töltött időnket.
Végtelenül hálás vagyok érted, és az egész világ nevében szeretném megköszönni azt amit értünk teszel, immár 19 éve.
Remélem még rengeteg ilyen napot fogunk együtt megélni, végtelenül szeretlek kicsi kincsem.

Csodálód és szerető jövőbeli férjed,
Máté💖
`;
/* Képek: ide kerülnek a közös fotók, pl.
   {src:"data:image/jpeg;base64,....", cap:"Balaton 2025"} */
const PHOTOS = [
  {src:"img/IMG_4750.JPEG", cap:"Az első csók után! Mennyire izgultunk..."},
  {src:"img/78D225DC-78BE-4CC3-BFDD-4C3D1651C64C.JPEG", cap:"Az első hazaút"},
  {src:"img/IMG_4891.JPEG", cap:"Először nálad!"},
  {src:"img/3B3D6D54-2093-461F-BEE7-774B9C08D5A6.JPEG", cap:"Első síelésünk, hányszor elestem..."},
  {src:"img/IMG_5047.JPEG", cap:"Először alszom nálaaaaad!!"},
  {src:"img/IMG_5129.JPEG", cap:"Először nálaam! Ugye nem féltél nagyon?"},
  {src:"img/IMG_5378.JPEG", cap:"Somoskői vár... Mindig különleges helye lesz a szívemben"},
  {src:"img/IMG_5712.JPEG", cap:"Salgói vár"},
  {src:"img/IMG_6053.JPEG", cap:"Miskooolc"},
  {src:"img/IMG_6092.JPEG", cap:"Intim, imádtam!"},
  {src:"img/IMG_6218.JPEG", cap:"Bányamúzeum, hányszor is vertem be a fejem?"},
  {src:"img/IMG_6382.JPEG", cap:"Kis tánci után"},
  {src:"img/IMG_6391.JPEG", cap:"'Komolyan eljegyezted?!'"},
  {src:"img/IMG_6564.JPEG", cap:"Imádtam ezt a golfot"},
  {src:"img/IMG_6775.JPEG", cap:"Vezet a szerelmeeem!!!"},
  {src:"img/IMG_6914.JPEG", cap:"EFOTT, amúgy szerintem jó volt"},
  {src:"img/IMG_7940.JPEG", cap:"Első közös nyaralásunk!"},
  {src:"img/IMG_8371.JPEG", cap:"És a második!"},
  {src:"img/1AE54A3D-0639-4EB3-93A0-704D0FBF69D0.JPEG", cap:"Hat hónaposok vagyunk!"},
  {src:"img/IMG_9215.JPEG", cap:"Ruhapróba! 'Gyönyörű a mennyasszony!'"},
  {src:"", cap:"And to many moreeeee"},
  

];
/* ====================================== */
const SINCE = "2026-02-14T20:10:00";   

const $=s=>document.querySelector(s), S=[...document.querySelectorAll('.scr')];
const rnd=(a,b)=>a+Math.random()*(b-a);

/* --- képernyők közti váltás --- */
function go(i){
 const c=document.querySelector('.scr.on'); c.classList.remove('show');
 setTimeout(()=>{c.classList.remove('on');S[i].classList.add('on');
  requestAnimationFrame(()=>requestAnimationFrame(()=>{S[i].classList.add('show');if(i==2)enter3()}))},600);
}
S[0].classList.add('on');requestAnimationFrame(()=>S[0].classList.add('show'));

/* --- effektek: konfetti, szívek, szikrák --- */
const cv=$('#cf'),cx=cv.getContext('2d');let P=[],run=false;
function fit(){cv.width=innerWidth;cv.height=innerHeight}fit();addEventListener('resize',fit);
function confetti(n=150,x=innerWidth/2,y=innerHeight*.45){
 const col=['#ff6b9d','#ffd166','#6bf0c0','#7aa8ff','#fff','#c58bff'];
 for(let i=0;i<n;i++){const a=rnd(0,6.28),v=rnd(4,14);P.push({x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v-6,w:rnd(6,11),h:rnd(4,7),r:rnd(0,6),vr:rnd(-.3,.3),c:col[i%6],l:1})}
 if(!run){run=true;tick()}
}
function tick(){
 cx.clearRect(0,0,cv.width,cv.height);
 P=P.filter(p=>p.l>0&&p.y<cv.height+20);
 P.forEach(p=>{p.vy+=.28;p.vx*=.985;p.x+=p.vx;p.y+=p.vy;p.r+=p.vr;p.l-=.004;cx.save();cx.translate(p.x,p.y);cx.rotate(p.r);cx.fillStyle=p.c;cx.globalAlpha=Math.min(1,p.l*3);cx.fillRect(-p.w/2,-p.h/2,p.w,p.h);cx.restore()});
 P.length?requestAnimationFrame(tick):(run=false,cx.clearRect(0,0,cv.width,cv.height));
}
const E=['💖','✨','💗','🌸','💫','🎈'];
function heart(x=rnd(0,innerWidth),y=innerHeight+10){
 const h=document.createElement('div');h.className='hr';h.textContent=E[Math.floor(rnd(0,6))];
 h.style.cssText=`left:${x}px;top:${y}px;font-size:${rnd(16,30)}px`;document.body.appendChild(h);setTimeout(()=>h.remove(),3300);
}
setInterval(()=>heart(),700);
addEventListener('pointerdown',e=>{
 if(e.target.closest('.k,#lb'))return;
 for(let i=0;i<6;i++){const s=document.createElement('div');s.className='sp';s.textContent='✦';
  s.style.cssText=`left:${e.clientX}px;top:${e.clientY}px;color:#ffd166;--x:${rnd(-40,40)}px;--y:${rnd(-50,20)}px`;document.body.appendChild(s);setTimeout(()=>s.remove(),900)}
});

/* --- 1. PIN --- */
$('#hint').textContent=HINT;
const L={2:'ABC',3:'DEF',4:'GHI',5:'JKL',6:'MNO',7:'PQRS',8:'TUV',9:'WXYZ'};
let buf='';const pad=$('#pad'),dots=[...document.querySelectorAll('#dots i')];
[1,2,3,4,5,6,7,8,9,'',0,'⌫'].forEach(k=>{
 const b=document.createElement('button');b.className='k'+(k===''?' n hid':k==='⌫'?' n hid':'');
 b.innerHTML=k===''||k==='⌫'?k:`${k}<small>${L[k]||''}</small>`;
 if(k==='⌫')b.id='del',b.textContent='Törlés';
 b.onclick=()=>{ if(k==='')return; if(k==='⌫')buf=buf.slice(0,-1);else if(buf.length<4)buf+=k; draw(); navigator.vibrate?.(8); if(buf.length==4)check()};
 pad.appendChild(b);
});
function draw(){dots.forEach((d,i)=>d.classList.toggle('f',i<buf.length));$('#del').classList.toggle('hid',!buf.length)}
function check(){
 if(buf===PIN){setTimeout(()=>{confetti(80);go(1)},250)}
 else{const d=$('#dots');d.classList.add('shake');navigator.vibrate?.([80,40,80]);setTimeout(()=>{d.classList.remove('shake');buf='';draw()},500)}
}

/* --- 2. TORTA --- */
(function(){
 const fr=(x,y,w)=>{let s=`<rect x="${x}" y="${y}" width="${w}" height="13" rx="6.5" fill="#fff"/>`;
  for(let d=x+10;d<x+w-12;d+=22)s+=`<rect x="${d}" y="${y+5}" width="11" height="${rnd(10,22)}" rx="5.5" fill="#fff"/>`;return s};
 let h=fr(45,175,210)+fr(80,118,140);
  $('#dec').innerHTML=h;
 let c='';[105,127.5,150,172.5,195].forEach((x,i)=>{
  c+=`<rect x="${x-4}" y="82" width="8" height="38" rx="2" fill="${['#7aa8ff','#ffd166','#6bf0c0','#ffd166','#7aa8ff'][i]}"/>
  <rect x="${x-4}" y="92" width="8" height="5" fill="rgba(255,255,255,.55)"/><rect x="${x-4}" y="104" width="8" height="5" fill="rgba(255,255,255,.55)"/>
  <g transform="translate(${x} 80)"><circle class="flame glow" r="18" cy="-16"/><path class="flame" d="M0 0Q-9-14 0-30Q9-14 0 0Z" fill="url(#fg)"/><circle class="sm" r="5" cy="-24"/></g>`});
 $('#cd').innerHTML=c;
})();
const cake=$('#cake');let lit=false,out=false;
$('#ct').textContent=`Boldog születésnapot, ${NAME}!`;
$('#cb').onclick=()=>{
 if(!lit){lit=true;cake.classList.add('lit');confetti(40);$('#msg').textContent='Most kívánj valamit, aztán fújd el a gyertyákat! 🌬️ (fújj a telefonba, vagy koppints a lángokra)';$('#cb').classList.add('hid');listen()}
 else go(2);
};
cake.onpointerdown=()=>{if(lit)blow()};
async function listen(){
 try{
  const st=await navigator.mediaDevices.getUserMedia({audio:true}),ac=new (window.AudioContext||webkitAudioContext)(),an=ac.createAnalyser();
  an.fftSize=512;ac.createMediaStreamSource(st).connect(an);const d=new Uint8Array(an.fftSize);let n=0;
  (function t(){ if(out){st.getTracks().forEach(x=>x.stop());return}
   an.getByteTimeDomainData(d);let m=0;for(const v of d)m+=Math.abs(v-128);m/=d.length;
   n=m>13?n+1:0;if(n>7)return blow();requestAnimationFrame(t)})();
 }catch(e){}
}
function blow(){
 if(out)return;out=true;cake.classList.add('out');navigator.vibrate?.(120);
 setTimeout(()=>{confetti(220);$('#msg').textContent='Teljesüljön minden kívánságod! ✨💖'},500);
 setTimeout(()=>confetti(120,innerWidth*.2,innerHeight*.6),1100);setTimeout(()=>confetti(120,innerWidth*.8,innerHeight*.6),1500);
 setTimeout(()=>{const b=$('#cb');b.textContent='💌 Tovább a meglepetésre';b.classList.remove('hid')},2600);
}

/* --- 3. LEVÉL + KÉPEK --- */
let typed=false;
function enter3(){
 confetti(100);if(typed)return;typed=true;
 const el=$('#paper');let i=0,skip=false;el.onclick=()=>skip=true;
 (function t(){i=skip?LETTER.length:i+1;el.innerHTML='';el.append(LETTER.slice(0,i));
  if(i<LETTER.length){const c=document.createElement('span');c.className='cur';el.append(c);setTimeout(t,/[\n.,!]/.test(LETTER[i-1])?150:32)}})();
}
const split=$('#split'),tb=[...document.querySelectorAll('.tabs button')];
tb.forEach((b,i)=>b.onclick=()=>split.scrollTo({left:i*split.clientWidth,behavior:'smooth'}));
split.onscroll=()=>{const i=Math.round(split.scrollLeft/split.clientWidth);tb.forEach((b,j)=>b.classList.toggle('a',i==j))};

const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('v');io.unobserve(e.target)}}),{threshold:.1});
const PH=['Ide jön egy közös kép','A mi nyarunk','Kedvenc pillanatunk','Együtt a világ szebb','Egy nevetős nap','Még egy emlék'];
const GR=['#ff9ec0,#ffd0a0','#a8c8ff,#d9b8ff','#ffd29e,#ff9eb5','#9ee8d0,#a8c8ff'];
const items=PHOTOS.length?PHOTOS:PH.map((c,i)=>({cap:c,ph:i}));
items.forEach((p,i)=>{
 const f=document.createElement('figure');f.className='po';
 f.style.cssText=`--r:${(i%2?1:-1)*rnd(1,3.5)}deg;--t:${rnd(-6,6)}deg`;
 f.innerHTML=(p.src?`<img src="${p.src}" loading="lazy" alt="">`:`<div class="ph" style="height:${[150,200,170,230][i%4]}px;background:linear-gradient(135deg,${GR[i%4]})">💕</div>`)+`<figcaption>${p.cap||''}</figcaption>`;
 if(p.src)f.onclick=()=>open(i);
 $('#gal').appendChild(f);io.observe(f);
});
let cur=0;
function open(i){cur=(i+PHOTOS.length)%PHOTOS.length;$('#li').src=PHOTOS[cur].src;$('#lb').classList.add('on')}
$('#lx').onclick=()=>$('#lb').classList.remove('on');
$('#lp').onclick=()=>open(cur-1);$('#ln').onclick=()=>open(cur+1);
let tx=0;$('#lb').ontouchstart=e=>tx=e.touches[0].clientX;
$('#lb').ontouchend=e=>{const d=e.changedTouches[0].clientX-tx;if(Math.abs(d)>50)open(cur+(d<0?1:-1))};

/* --- időszámláló --- */
const cg=$('#cg'),LB=['éve','hónapja','napja','órája','perce','másodperce'];
cg.innerHTML=LB.map(l=>`<div><b>0</b><small>${l}</small></div>`).join('');
const cb=[...cg.querySelectorAll('b')];
function since(){
 const a=new Date(SINCE),b=new Date();
 let y=b.getFullYear()-a.getFullYear(),m=b.getMonth()-a.getMonth(),d=b.getDate()-a.getDate(),
     h=b.getHours()-a.getHours(),mi=b.getMinutes()-a.getMinutes(),s=b.getSeconds()-a.getSeconds();
 if(s<0){s+=60;mi--}if(mi<0){mi+=60;h--}if(h<0){h+=24;d--}
 if(d<0){d+=new Date(b.getFullYear(),b.getMonth(),0).getDate();m--}
 if(m<0){m+=12;y--}
 return [y,m,d,h,mi,s];
}
function upd(){
 since().forEach((v,i)=>{
  if(cb[i].textContent!=v){cb[i].textContent=v;cb[i].classList.remove('t');void cb[i].offsetWidth;cb[i].classList.add('t')}
 });
}
upd();setInterval(upd,1000);