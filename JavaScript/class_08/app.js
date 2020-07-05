// var count = 0;
// var interval;
// console.log("1st interval");
// interval = setInterval(function () {
//   console.log("setInterval");
//   count++;
//   console.log(count, " count");
// }, 1000);
// console.log("2nd interval");

// setTimeout(function () {
//   clearInterval(interval);
//   console.log("setTimeout");
// }, 60000);

// var min = 0;
// var sec = 0;
// var msec = 0;
// var minHeading = document.getElementById("min");
// var secHeading = document.getElementById("sec");
// var msecHeading = document.getElementById("msec");

// var interval;

// function timer() {
//   msec++;
//   msecHeading.innerHTML = msec;

//   if (msec >= 100) {
//     sec++;
//     secHeading.innerHTML = sec;
//     msec = 0;
//   } else if (sec >= 60) {
//     min++;
//     sec = 0;
//     minHeading.innerHTML = min;
//   }
// }

// function start() {
//   interval = setInterval(timer, 10);
//   document.getElementById("start").disabled = true;
// }

// function stop() {
//   console.log("stopped");
//   clearInterval(interval);
//   document.getElementById("start").disabled = false;
// }

// function reset() {
//   stop();
//   min = 0;
//   msec = 0;
//   sec = 0;
//   minHeading.innerHTML = min;
//   secHeading.innerHTML = sec;
//   msecHeading.innerHTML = msec;
//   document.getElementById("start").disabled = false;
// }

console.log(document.childNodes[1].childNodes[1]);
