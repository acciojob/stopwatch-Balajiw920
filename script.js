//your code here
let startTime, timerInterval;
const timerEl = document.getElementById("timer");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const stopBtn = document.getElementById("stop");

function startTimer() {
  startTime = Date.now();
  timerInterval = setInterval(updateTimer, 100);
  startBtn.disabled = true;
  pauseBtn.disabled = false;
  stopBtn.disabled = false;
}

function updateTimer() {
  const elapsedTime = Date.now() - startTime;
  const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  timerEl.innerText = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function pauseTimer() {
  clearInterval(timerInterval);
  pauseBtn.innerText = "Continue";
  pauseBtn.onclick = continueTimer;
}

function continueTimer() {
  startTime = Date.now() - (Date.now() - startTime);
  timerInterval = setInterval(updateTimer, 100);
  pauseBtn.innerText = "Pause";
  pauseBtn.onclick = pauseTimer;
}

function stopTimer() {
  clearInterval(timerInterval);
  timerEl.innerText = "00:00:00";
  startBtn.disabled = false;
  pauseBtn.disabled = true;
  stopBtn.disabled = true;
}

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
stopBtn.addEventListener("click", stopTimer);
