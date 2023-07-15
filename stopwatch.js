let startButton = document.getElementById('startButton');
let stopButton = document.getElementById('stopButton');
let resetButton = document.getElementById('resetButton');

let hourCount = document.getElementById('hour');
let minuteCount = document.getElementById('minute');
let secondsCount = document.getElementById('second');
let counts = document.getElementById('count');

let hour = 0;
let minute = 0;
let seconds = 0;
let count = 0;
let timer;

function formatTime(value) {
  return value.toString().padStart(2, '0');
}

function updateStopwatch() {
  count++;

  if (count === 100) {
    count = 0;
    seconds++;

    if (seconds === 60) {
      seconds = 0;
      minute++;

      if (minute === 60) {
        minute = 0;
        hour++;
      }
    }
  }

  hourCount.innerHTML = formatTime(hour);
  minuteCount.innerHTML = formatTime(minute);
  secondsCount.innerHTML = formatTime(seconds);
  counts.innerHTML = count;

  if (timer) {
    setTimeout(updateStopwatch, 10);
  }
}

startButton.addEventListener('click', () => {
  timer = true;
  updateStopwatch();
});

stopButton.addEventListener('click', () => {
  timer = false;
});

resetButton.addEventListener('click', () => {
  timer = false;
  hour = 0;
  minute = 0;
  seconds = 0;
  count = 0;
  hourCount.innerHTML = "00";
  minuteCount.innerHTML = "00";
  secondsCount.innerHTML = "00";
  counts.innerHTML = "0";
});
