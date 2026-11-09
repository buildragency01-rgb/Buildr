var wl = "https://wa.me/" + CONFIG.whatsapp + "?text=";
document.getElementById("wa").href = wl + encodeURIComponent("Hi Buildr, I want a website.");

/* Rotating quotes */
var Q=["“A great website is a salesman that never sleeps.”","“Go online. Grow big.”","“Start small. Think big.”","“Design is not just how it looks, it is how it works.”"];
var qi=0,qe=document.getElementById("q");
function nq(){qe.style.animation="none";void qe.offsetWidth;qe.style.animation="";qe.textContent=Q[qi++%Q.length]}
nq();setInterval(nq,4000);

/* Scroll reveal */
var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}})},{threshold:.12});
function obs(){document.querySelectorAll(".rv:not(.in)").forEach(function(e){io.observe(e)})}

/* Template gallery */
function esc(s){return String(s==null?"":s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function card(t){
  var thumb = t.image
    ? '<img src="'+esc(t.image)+'" alt="'+esc(t.name)+'" style="width:100%;height:100%;object-fit: contain">'
    : '<div class="bar"><i></i><i></i><i></i></div><div class="h">'+esc(t.name)+'</div><div class="l" style="top:66px;width:90px"></div><div class="l" style="top:82px;width:60px;opacity:.5"></div><div class="b"></div><div class="e">'+esc(t.emoji||"🌐")+'</div>';
  var msg = "Hi Buildr, I like the "+t.name+" template ("+t.category+"), priced "+t.price+".";
  return '<div class="card tpl rv">'+
    '<a class="mock" style="display:block;background:'+esc(t.color||"#222")+'" href="'+esc(t.link||"#")+'" target="_blank" rel="noopener" title="Open live preview">'+thumb+'</a>'+
    '<div class="body"><span class="tag">'+esc(t.category)+'</span><h3>'+esc(t.name)+'</h3><p>'+esc(t.desc)+'</p>'+
    '<div class="tprice">'+esc(t.price)+'</div>'+
    '<a class="btn o" target="_blank" rel="noopener" href="'+esc(t.link||"#")+'">Live Preview</a>'+
    '<a class="btn" target="_blank" rel="noopener" href="'+wl+encodeURIComponent(msg)+'">Get this design</a></div></div>';
}
function fill(el,cat){
  var list=TEMPLATES.filter(function(t){return !cat||cat==="All"||t.category===cat}).slice(0,+el.dataset.n||999);
  el.innerHTML=list.map(card).join("");obs();
}
document.querySelectorAll(".tg").forEach(function(e){fill(e)});
var cats=["All"];TEMPLATES.forEach(function(t){if(cats.indexOf(t.category)<0)cats.push(t.category)});
var tb=document.getElementById("tabs");
tb.innerHTML=cats.map(function(c,i){return '<button class="'+(i?"":"on")+'">'+esc(c)+'</button>'}).join("");
tb.addEventListener("click",function(e){
  if(e.target.tagName!=="BUTTON")return;
  tb.querySelectorAll("button").forEach(function(b){b.classList.remove("on")});
  e.target.classList.add("on");fill(document.getElementById("tg-all"),e.target.textContent);
});

/* Page routing */
function route(){
  var h=(location.hash||"#home").slice(1);if(!document.getElementById("p-"+h))h="home";
  document.querySelectorAll(".page").forEach(function(p){p.classList.toggle("on",p.id==="p-"+h)});
  document.querySelectorAll("nav a").forEach(function(a){a.classList.toggle("on",a.getAttribute("href")==="#"+h)});
  window.scrollTo(0,0);setTimeout(obs,50);
}
window.addEventListener("hashchange",route);route();

/* Contact form -> WhatsApp */
document.getElementById("cf").addEventListener("submit",function(e){
  e.preventDefault();
  var g=function(id){return document.getElementById(id).value.trim()};
  var ok=true;
  ["n","br","t","m"].forEach(function(id){var el=document.getElementById(id);var bad=!g(id);el.classList.toggle("bad",bad);if(bad)ok=false});
  var er=document.getElementById("ferr");
  if(!ok){er.textContent="Please fill the required fields marked *";return}
  er.textContent="";
  var t="Hi Buildr, I want a website.\n\n"+
    "*Name:* "+g("n")+"\n"+
    "*Brand:* "+g("br")+"\n"+
    (g("ph")?"*Phone:* "+g("ph")+"\n":"")+
    "*Service:* "+g("t")+"\n"+
    "*Budget:* "+(g("bg")||"Not specified")+"\n"+
    "*Timeline:* "+(g("dl")||"Not specified")+"\n"+
    "*Details:* "+g("m");
  window.open(wl+encodeURIComponent(t),"_blank");
});
