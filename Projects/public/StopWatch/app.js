var min = 0;
var sec = 0;
var msec = 0;
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");

var interval;

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
  }
}

function start() {
  interval = setInterval(timer, 10);
  document.getElementById("start").disabled = true;
}

function stop() {
  clearInterval(interval);
  document.getElementById("start").disabled = false;
}

function reset() {
  stop();
  min = 0;
  msec = 0;
  sec = 0;
  minHeading.innerHTML = "0" + min;
  secHeading.innerHTML = "0" + sec;
  msecHeading.innerHTML = "0" + msec;
  document.getElementById("start").disabled = false;
}
