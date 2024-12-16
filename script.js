/*const eventDateUTC = new Date("2024-12-16T15:40:00+06:00").getTime();
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
}*/

// Event time fixed at 4 PM GMT+6 (this is the desired event time)
const eventDateGMTPlus6 = new Date('2024-12-16T16:00:00+06:00').getTime();

function updateCountdown() {
  // Get current time in UTC (we'll use this to calculate the time left)
  const nowUTC = new Date().getTime();

  // Calculate the distance from the event time (in GMT+6)
  const distance = eventDateGMTPlus6 - nowUTC;

  // If the event has passed
  if (distance <= 0) {
    HideTimerDiv(); // Hide the countdown timer
    clearInterval(interval); // Stop the interval
    return;
  } else {
    ShowTimerDiv(); // Show the countdown timer
  }

  // Calculate days, hours, minutes, and seconds from the distance
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById("countdown").textContent =
    `Time Left Till Event: ${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Set up the interval to update the countdown every second
const interval = setInterval(updateCountdown, 1000);

// Function to hide the timer
function HideTimerDiv() {
  document.getElementById("TimerDiv").style.display = "none";
}

// Function to show the timer
function ShowTimerDiv() {
  document.getElementById("TimerDiv").style.display = "flex";
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
