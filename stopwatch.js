let stopwatch;
let isRunning = false;
let seconds = 0, minutes = 0, hours = 0;

function startStopwatch() {
  if (!isRunning) {
    isRunning = true;
    stopwatch = setInterval(updateStopwatch, 1000);
  }
}

function stopStopwatch() {
  if (isRunning) {
    isRunning = false;
    clearInterval(stopwatch);
  }
}

function resetStopwatch() {
  stopStopwatch();
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
}

function updateStopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  updateDisplay();
}

function updateDisplay() {
  const timeString = padNumber(hours) + ':' + padNumber(minutes) + ':' + padNumber(seconds);
  document.getElementById('stopwatch').innerText = timeString;
}

function padNumber(number) {
  return (number < 10) ? '0' + number : number;
}