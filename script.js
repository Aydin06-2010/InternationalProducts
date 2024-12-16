const eventDateUTC = new Date("2024-12-16T15:40:00+06:00").getTime();
function updateCountdown() {
const nowUTC = new Date().getTime();
const distance = eventDateUTC - nowUTC;

if (distance <= 0) {
HideTimerDiv(); 
clearInterval(interval);
return;
}
else if(distance > 0){
ShowTimerDiv(); 
}

const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("countdown").textContent = `Time Left Till Event: ${days}d ${hours}h ${minutes}m ${seconds}s`;
}

const interval = setInterval(updateCountdown, 10);

function HideTimerDiv(){
document.getElementById("TimerDiv").style.display = "none";
document.body.pointerEvents = "auto";
}

function ShowTimerDiv(){
document.getElementById("TimerDiv").style.display = "flex";
document.body.pointerEvents = "none";
}


function getLocalTime() {
const now = new Date();

let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

hours = hours < 10 ? '0' + hours : hours;
minutes = minutes < 10 ? '0' + minutes : minutes;
seconds = seconds < 10 ? '0' + seconds : seconds;

return `${hours}:${minutes}:${seconds}`;
}

function updateTime() {
document.getElementById("Time").textContent = ` Local Time: ${getLocalTime()}`;
}

setInterval(updateTime, 10);
