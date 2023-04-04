//your code here
let time = 0;
let interval;
let running = false;

function start() {
  if (!running) {
    running = true;
    interval = setInterval(increment, 10);
    document.getElementById("start").disabled = true;
    document.getElementById("pause").disabled = false;
    document.getElementById("stop").disabled = false;
  }
}

function pause() {
  if (running) {
    running = false;
    clearInterval(interval);
    document.getElementById("pause").innerText = "Continue";
  } else {
    running = true;
    interval = setInterval(increment, 10);
    document.getElementById("pause").innerText = "Pause";
  }
}

function stop() {
  running = false;
  clearInterval(interval);
  time = 0;
  document.getElementById("time").innerText = "00:00:00";
  document.getElementById("start").disabled = false;
  document.getElementById("pause").disabled = true;
  document.getElementById("stop").disabled = true;
  document.getElementById("pause").innerText = "Pause";
}

function increment() {
  time += 10;
  let date = new Date(time);
  let hours = date.getUTCHours().toString().padStart(2, "0");
  let minutes = date.getUTCMinutes().toString().padStart(2, "0");
  let seconds = date.getUTCSeconds().toString().padStart(2, "0");
  let milliseconds = date.getUTCMilliseconds().toString().padStart(3, "0");
  document.getElementById("time").innerText = `${hours}:${minutes}:${seconds}.${milliseconds}`;
}
