/*const eventDateUTC = new Date(Date.UTC(2024, 11, 16, 10, 20, 0)); // new Date("2024-12-16T07:00:00+06:00").getTime();
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
}*/


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

function startCountdown() {
    // Event time in GMT+6 (January 19, 2025 at 7:00 AM)
    const eventTime = new Date('2025-01-19T07:00:00+06:00');

    // Get current time and convert it to GMT+6
    const currentTime = new Date();
    const userTimeInGMTPlus6 = new Date(currentTime.toLocaleString('en-US', { timeZone: 'Asia/Dhaka' }));

    // Calculate the difference in milliseconds
    const timeLeft = eventTime - userTimeInGMTPlus6;

    // If the event time is in the future
    if (timeLeft > 0) {
        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        // Display the countdown in the "Time" element
        document.getElementById("Time").innerHTML = `Time Left Till Event: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
        document.getElementById("Time").innerHTML = "Event Started!";
    }
}

// Update the countdown every second
setInterval(startCountdown, 1000);
