
const slides=document.querySelectorAll('.slide');
let current=0;

function nextSlide(){
 if(current<slides.length-1){
   slides[current].classList.remove('active');
   current++;
   slides[current].classList.add('active');
 }
}
window.nextSlide=nextSlide;

const hearts=document.getElementById('hearts');
for(let i=0;i<35;i++){
 const h=document.createElement('div');
 h.className='heart';
 h.innerHTML=['<span style="color:lightblue;">❤</span>','<span style="color:lightblue;">❤</span>','<span style="color:lightblue;">❤</span>','<span style="color:lightblue;">❤</span>'][Math.floor(Math.random()*4)];
 h.style.left=Math.random()*100+'vw';
 h.style.animationDuration=(6+Math.random()*8)+'s';
 h.style.animationDelay=(Math.random()*5)+'s';
 hearts.appendChild(h);
}


