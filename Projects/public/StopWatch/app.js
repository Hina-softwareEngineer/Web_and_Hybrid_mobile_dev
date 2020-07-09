var min = 0;
var sec = 0;
var msec = 0;
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");

var interval;

let controls = document.querySelector(".control");
let resetBtn = document.querySelector("#reset");

controls.addEventListener("click", function () {
  count = 0;
  if (this.innerText === "timer") {
    this.innerText = "pause_circle_outline";
    resetBtn.classList.remove("disabled");
    start();
  } else {
    this.innerText = "timer";
    resetBtn.classList.remove("disabled");
    stop();
  }
});

var count = 1;

resetBtn.addEventListener("click", function () {
  if (count == 0) {
    reset();
    resetBtn.className += " disabled";
    controls.innerText = "timer";
    count = 1;
  }
});

function timer() {
  msec++;
  if (msec <= 9) {
    msecHeading.innerHTML = "0" + msec;
  } else {
    msecHeading.innerHTML = msec;
  }

  if (msec > 98) {
    sec++;
    if (sec <= 9) {
      secHeading.innerHTML = "0" + sec;
    } else {
      secHeading.innerHTML = sec;
    }
    msec = 0;
  }
  if (sec > 58) {
    min++;
    sec = 0;
    if (min <= 9) {
      minHeading.innerHTML = "0" + min;
    } else {
      minHeading.innerHTML = min;
    }
    document.getElementById("play").play();
  }
}

function start() {
  interval = setInterval(timer, 10);
}

function stop() {
  clearInterval(interval);
}

function reset() {
  stop();
  min = 0;
  msec = 0;
  sec = 0;
  minHeading.innerHTML = "0" + min;
  secHeading.innerHTML = "0" + sec;
  msecHeading.innerHTML = "0" + msec;
}
