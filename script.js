const eventDateUTC = new Date(Date.UTC(2024, 11, 16, 10, 20, 0)); // new Date("2024-12-16T07:00:00+06:00").getTime();
// Note: Month is 0-indexed, so 11 = December

function updateCountdown() {
// Get the current UTC time
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

// Update the countdown every second
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

// Get hours, minutes, and seconds
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

// Add leading zeros to single-digit numbers (e.g., 08 instead of 8)
hours = hours < 10 ? '0' + hours : hours;
minutes = minutes < 10 ? '0' + minutes : minutes;
seconds = seconds < 10 ? '0' + seconds : seconds;

// Return the time in hh:mm:ss format
return `${hours}:${minutes}:${seconds}`;
}

// Function to update the Time element
function updateTime() {
document.getElementById("Time").textContent = ` Local Time: ${getLocalTime()}`;
}

// Update the time every second
setInterval(updateTime, 10);
