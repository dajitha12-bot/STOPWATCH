let timer;
let isRunning = false;
let seconds = 0, minutes = 0, hours = 0;

function updateDisplay() {
  let display = document.getElementById("display");
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  display.innerHTML = ${h}:${m}:${s};
}

function startStop() {
  if (!isRunning) {
    timer = setInterval(() => {
      seconds++;
      if (seconds == 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
      updateDisplay();
    }, 1000);
    isRunning = true;
  } else {
    clearInterval(timer);
    isRunning = false;
  }
}

function reset() {
  clearInterval(timer);
  isRunning = false;
  seconds = 0; minutes = 0; hours = 0;
  updateDisplay();
}

// Initialize display
updateDisplay();