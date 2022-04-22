const timeDisplay = document.getElementById('time');
const dateDisplay = document.getElementById('date');

function refreshTime() {
    let currentTime = new Date().toLocaleTimeString();
    let currentDate = new Date().toLocaleDateString();
    
    timeDisplay.textContent = currentTime;
    dateDisplay.textContent = currentDate;
}

setInterval(refreshTime, 1000);