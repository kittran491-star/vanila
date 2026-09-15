<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Tem Phiếu Bí Mật</title>

<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap" rel="stylesheet">

<style>
*{margin:0;padding:0;box-sizing:border-box}
body{
  font-family:Nunito,sans-serif;
  background:linear-gradient(#FFE8F0,#FFF7F3);
  color:#6b4b4b;
  overflow:hidden;
}
.screen{
  display:none;
  min-height:100vh;
  padding:24px;
  align-items:center;
  justify-content:center;
  flex-direction:column;
}
.active{display:flex}

h1{
  font-size:38px;
  color:#E75480;
  text-align:center;
  font-weight:900;
}
.sub{margin:12px 0 30px;color:#8d6b6b;text-align:center}
button{
  border:none;
  cursor:pointer;
  font-family:inherit;
}
.mainBtn{
  background:#FF9FBE;
  color:white;
  padding:14px 30px;
  border-radius:999px;
  font-size:18px;
  font-weight:700;
  box-shadow:0 8px 18px rgba(255,159,190,.35);
}
.grid{
  display:grid;
  grid-template-columns:repeat(2,140px);
  gap:14px;
}
.card{
  background:white;
  border-radius:20px;
  padding:14px;
  box-shadow:0 8px 18px rgba(0,0,0,.08);
}
.card img{
  width:100%;
  aspect-ratio:1;
  object-fit:cover;
  border-radius:14px;
}
.card p{
  text-align:center;
  margin-top:8px;
  font-weight:700;
}

.flipBox{
  width:min(86vw,330px);
  aspect-ratio:4/5;
  perspective:1200px;
}
.flip{
  width:100%;
  height:100%;
  position:relative;
  transform-style:preserve-3d;
  transition:.8s;
}
.flip.active{
  transform:rotateY(180deg);
}
.face{
  position:absolute;
  inset:0;
  border-radius:26px;
  overflow:hidden;
  backface-visibility:hidden;
  box-shadow:0 12px 28px rgba(0,0,0,.15);
}
.front,.back{
  background:white;
}
.back{
  transform:rotateY(180deg);
}
.face img{
  width:100%;
  height:100%;
  object-fit:cover;
}

.frame{
  width:min(88vw,340px);
  aspect-ratio:4/5;
  position:relative;
  border-radius:26px;
  overflow:hidden;
  background:white;
  box-shadow:0 12px 28px rgba(0,0,0,.15);
}
#realImg{
  position:absolute;
  inset:0;
  width:100%;
  height:100%;
  object-fit:contain;
  background:white;
  padding:10px;
}

#cover{
  position:absolute;
  inset:0;
  z-index:2;
}
#cover img{
  width:100%;
  height:100%;
  object-fit:cover;
}

canvas{
  position:absolute;
  inset:0;
  width:100%;
  height:100%;
  z-index:3;
  touch-action:none;
}

.progress{
  width:min(88vw,340px);
  height:10px;
  background:#F4D8E2;
  border-radius:999px;
  margin-top:18px;
}
.fill{
  height:100%;
  width:0%;
  background:#FF88AF;
  border-radius:999px;
}

.letter{
  width:min(88vw,340px);
  background:white;
  border-radius:28px;
  padding:22px;
  text-align:center;
  box-shadow:0 12px 28px rgba(0,0,0,.15);
}
.letter img{
  width:100%;
  border-radius:18px;
  margin:16px 0;
  object-fit:contain;
}
#msg{
  min-height:72px;
  line-height:1.6;
}
.small{
  color:#9b7b7b;
  margin-bottom:18px;
}
</style>
</head>

<body>

<section id="home" class="screen active">
  <h1>🎟️ TEM PHIẾU BÍ MẬT</h1>
  <p class="sub">Một chiếc tem nhỏ dành riêng cho bé ✨</p>
  <button class="mainBtn" onclick="show('choose')">Bắt đầu</button>
</section>

<section id="choose" class="screen">
  <h1 style="font-size:30px">Chọn một chiếc tem</h1>
  <p class="small">Bé chỉ được chọn một chiếc nha 🌷</p>

  <div class="grid">
    <button class="card" onclick="pick(1)"><img src="assets/cover.jpg"><p>Tem 01</p></button>
    <button class="card" onclick="pick(2)"><img src="assets/cover.jpg"><p>Tem 02</p></button>
    <button class="card" onclick="pick(3)"><img src="assets/cover.jpg"><p>Tem 03</p></button>
    <button class="card" onclick="pick(4)"><img src="assets/cover.jpg"><p>Tem 04</p></button>
    <button class="card" onclick="pick(5)"><img src="assets/cover.jpg"><p>Tem 05</p></button>
  </div>
</section>

<section id="flip" class="screen">
  <p class="small">Chạm vào chiếc tem để lật ✨</p>

  <div class="flipBox">
    <div class="flip" id="flipCard" onclick="flipCard()">
      <div class="face front">
        <img src="assets/cover.jpg">
      </div>
      <div class="face back">
        <img src="assets/cover.jpg">
      </div>
    </div>
  </div>
</section>

<section id="scratch" class="screen">
  <p class="small">Cào lớp bạc để mở quà 💖</p>

  <div class="frame">

    <img id="realImg">

    <div id="cover">
      <img src="assets/cover.jpg">
    </div>

    <canvas id="cv"></canvas>

  </div>

  <div class="progress">
    <div class="fill" id="bar"></div>
  </div>
</section>

<section id="letter" class="screen">
  <div class="letter">
    <h2>🌸 Bé mở được rồi!</h2>
    <img id="letterImg">
    <p id="msg"></p>
    <br>
    <button class="mainBtn" onclick="restart()">Chơi lại</button>
  </div>
</section>

<script>
const DATA={
1:["assets/1.jpg","Dán trái nhưng rẽ phải vào tim 💘"],
2:["assets/2.jpg","Mỗi mặt trời đều có hoa hướng dương 🌻"],
3:["assets/3.jpg","Nếu em là lá, tớ đứng dưới tán 🍀"],
4:["assets/4.jpg","Hoa đẹp nhất vẫn là em 🌸"],
5:["assets/5.jpg","Không thích đồ ngọt, trừ emm 🍦"]
}

let chosen=1

function show(id){
 document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"))
 document.getElementById(id).classList.add("active")
}

function pick(id){
 chosen=id
 document.getElementById("flipCard").classList.remove("active")
 show("flip")
}

function flipCard(){
 document.getElementById("flipCard").classList.add("active")
 setTimeout(()=>{
   document.getElementById("realImg").src=DATA[chosen][0]
   document.getElementById("cover").style.display="block"
   show("scratch")
   setupScratch()
 },700)
}

const canvas=document.getElementById("cv")
const ctx=canvas.getContext("2d",{willReadFrequently:true})
const bar=document.getElementById("bar")

function setupScratch(){

 const rect=canvas.getBoundingClientRect()
 const dpr=window.devicePixelRatio||1

 canvas.width=rect.width*dpr
 canvas.height=rect.height*dpr

 ctx.setTransform(dpr,0,0,dpr,0,0)

 const g=ctx.createLinearGradient(0,0,rect.width,rect.height)
 g.addColorStop(0,"#D9D9D9")
 g.addColorStop(.5,"#F4F4F4")
 g.addColorStop(1,"#B8B8B8")

 ctx.globalCompositeOperation="source-over"
 ctx.fillStyle=g
 ctx.fillRect(0,0,rect.width,rect.height)

 ctx.fillStyle="rgba(255,255,255,.22)"
 for(let i=0;i<220;i++){
   ctx.beginPath()
   ctx.arc(Math.random()*rect.width,Math.random()*rect.height,Math.random()*2+1,0,7)
   ctx.fill()
 }

 ctx.fillStyle="rgba(90,90,90,.35)"
 ctx.font="bold 24px sans-serif"
 ctx.textAlign="center"
 ctx.fillText("CÀO ĐI ✨",rect.width/2,rect.height/2)

 bar.style.width="0%"
}

let drawing=false
let last=null

function pos(e){
 const r=canvas.getBoundingClientRect()
 const t=e.touches?e.touches[0]:e
 return {x:t.clientX-r.left,y:t.clientY-r.top}
}

canvas.onpointerdown=e=>{
 drawing=true
 last=pos(e)
 erase(last)
}

canvas.onpointermove=e=>{
 if(!drawing) return
 const p=pos(e)

 ctx.save()
 ctx.globalCompositeOperation="destination-out"
 ctx.lineCap="round"
 ctx.lineJoin="round"
 ctx.lineWidth=82
 ctx.beginPath()
 ctx.moveTo(last.x,last.y)
 ctx.lineTo(p.x,p.y)
 ctx.stroke()
 ctx.restore()

 last=p
 check()
}

window.onpointerup=()=>drawing=false

function erase(p){
 ctx.globalCompositeOperation="destination-out"
 ctx.beginPath()
 ctx.arc(p.x,p.y,42,0,Math.PI*2)
 ctx.fill()
 check()
}

function check(){

 const data=ctx.getImageData(0,0,canvas.width,canvas.height).data

 let clear=0
 for(let i=3;i<data.length;i+=4){
   if(data[i]==0) clear++
 }

 const pct=Math.round(clear/(canvas.width*canvas.height)*100)
 bar.style.width=pct+"%"

 if(pct>=45){

   ctx.clearRect(0,0,canvas.width,canvas.height)
   document.getElementById("cover").style.display="none"

   document.getElementById("letterImg").src=DATA[chosen][0]

   type(DATA[chosen][1])

   setTimeout(()=>show("letter"),300)
 }
}

function type(text){
 const el=document.getElementById("msg")
 el.innerHTML=""
 let i=0
 const timer=setInterval(()=>{
   el.innerHTML+=text[i]
   i++
   if(i>=text.length) clearInterval(timer)
 },35)
}

function restart(){
 show("home")
}
</script>

</body>
</html>
