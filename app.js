let sec = document.querySelector('.sec');
let deg = 6;

setInterval(ClockHandler,1000);

function ClockHandler(){
    sec.style.transform = `rotateZ(${deg}deg)`;
    deg+=6;
}