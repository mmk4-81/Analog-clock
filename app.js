let sec = document.querySelector('.sec');
let min = document.querySelector('.min');
let hour = document.querySelector('.hour');

let deg = 6;

setInterval(ClockHandler,1000);

function ClockHandler(){
    let d = new Date();
    let h = d.getHours()*30;
    let m = d.getMinutes()*deg;
    let s = d.getSeconds()*deg;
    sec.style.transform = `rotateZ(${s}deg)`;
    min.style.transform = `rotateZ(${m}deg)`;
    hour.style.transform = `rotateZ(${h + (m/12)}deg)`;
}


