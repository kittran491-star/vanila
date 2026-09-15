
const DATA={
  1:{img:'assets/1.jpg',msg:'Dán trái nhưng rẽ phải vào tim 💘'},
  2:{img:'assets/2.jpg',msg:'Mỗi mặt trời đều có hoa hướng dương 🌻'},
  3:{img:'assets/3.jpg',msg:'Nếu em là lá, tớ đứng dưới tán 🍀'},
  4:{img:'assets/4.jpg',msg:'Hoa đẹp nhất vẫn là em 🌸'},
  5:{img:'assets/5.jpg',msg:'Không thích đồ ngọt, trừ emm 🍦'}
};

let chosen=1;

const $=id=>document.getElementById(id);
const screens=['welcome','choose','flip','scratch','letter'];

function show(id){
  screens.forEach(s=>$(s).classList.remove('active'));
  $(id).classList.add('active');
}

$('startBtn').onclick=()=>show('choose');

document.querySelectorAll('.card-choice').forEach(btn=>{
  btn.onclick=()=>{
  chosen = +btn.dataset.id;

// Luôn hiện ảnh bìa, không lộ kết quả

$('flipCard').classList.remove('flipped');
show('flip');
  };
});

$('flipCard').onclick=()=>{
  $('flipCard').classList.add('flipped');
  setTimeout(()=>{
    $('rewardImage').src=DATA[chosen].img;
    show('scratch');
    setupScratch();
  },650);
};

$('backBtn').onclick=()=>show('choose');
$('restartBtn').onclick=()=>show('welcome');

const canvas=$('scratchCanvas');
const ctx=canvas.getContext('2d',{willReadFrequently:true});
let drawing=false;

function setupScratch(){
  const rect=canvas.getBoundingClientRect();
  const dpr=window.devicePixelRatio||1;

  canvas.width=rect.width*dpr;
  canvas.height=rect.height*dpr;

  ctx.setTransform(dpr,0,0,dpr,0,0);

  const g=ctx.createLinearGradient(0,0,rect.width,rect.height);
  g.addColorStop(0,'#d4d4d4');
  g.addColorStop(.5,'#f6f6f6');
  g.addColorStop(1,'#a8a8a8');

  ctx.globalCompositeOperation='source-over';
  ctx.fillStyle=g;
  ctx.fillRect(0,0,rect.width,rect.height);

  ctx.fillStyle='rgba(255,255,255,.22)';
  for(let i=0;i<180;i++){
    ctx.beginPath();
    ctx.arc(
      Math.random()*rect.width,
      Math.random()*rect.height,
      Math.random()*2+1,
      0,
      Math.PI*2
    );
    ctx.fill();
  }

  ctx.fillStyle='rgba(80,80,80,.35)';
  ctx.font='bold 26px sans-serif';
  ctx.textAlign='center';
  ctx.fillText('CÀO ĐI ✨',rect.width/2,rect.height/2);

  $('progressBar').style.width='0%';
}

function getPos(e){
  const rect=canvas.getBoundingClientRect();
  const t=e.touches?e.touches[0]:e;
  return{
    x:t.clientX-rect.left,
    y:t.clientY-rect.top
  };
}

function erase(x, y){

    ctx.globalCompositeOperation = "destination-out";

    ctx.beginPath();
    ctx.arc(x, y, 42, 0, Math.PI * 2);
    ctx.fill();

    checkProgress();
}

let lastPoint = null;

canvas.onpointerdown = (e) => {
    drawing = true;
    lastPoint = getPos(e);
    erase(lastPoint.x, lastPoint.y);
};

canvas.onpointermove = (e) => {

    if (!drawing) return;

    const p = getPos(e);

    ctx.save();
    ctx.globalCompositeOperation = "destination-out";
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = 84;

    ctx.beginPath();
    ctx.moveTo(lastPoint.x, lastPoint.y);
    ctx.lineTo(p.x, p.y);
    ctx.stroke();

    ctx.restore();

    lastPoint = p;

    checkProgress();
};

window.onpointerup = () => {
    drawing = false;
    lastPoint = null;
};

  let cleared=0;

  for(let i=3;i<pixels.length;i+=4){
    if(pixels[i]===0) cleared++;
  }

  const percent=Math.round(
    cleared/(canvas.width*canvas.height)*100
  );

  $('progressBar').style.width=percent+'%';

if (percent >= 45) {

    // Xóa lớp bạc
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Ẩn ảnh bìa
    document.getElementById("coverCard").style.display = "none";

    // Hiện ảnh thật
    document.getElementById("rewardImage").src = DATA[chosen].img;

    // Sang màn hình kết quả
    document.getElementById("letterImage").src = DATA[chosen].img;

    typeWriter(DATA[chosen].msg);

    show("letter");
}

function typeWriter(text){
  const el=$('typewriter');
  el.textContent='';
  let i=0;

  const timer=setInterval(()=>{
    el.textContent+=text[i];
    i++;
    if(i>=text.length) clearInterval(timer);
  },35);
}
