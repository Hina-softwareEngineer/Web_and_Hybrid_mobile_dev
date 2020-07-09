let input = document.getElementsByTagName("input");
let result = "0";
let op = "";
let show = "";
input.form.value = result;

function getValue(value) {
  switch (value) {
    case "+":
    case "-":
    case "*":
    case "/":
      console.log("show m sub", show.substr(show.length - 1, show.length));
      if (
        show.substr(show.length - 1, show.length) == "+" ||
        show.substr(show.length - 1, show.length) == "-" ||
        show.substr(show.length - 1, show.length) == "*" ||
        show.substr(show.length - 1, show.length) == "/"
      ) {
        result = "";
        show = "";
        input.form.value = "Syntax Error";
      } else {
        op = value;
        show = show + op;
        console.log("show : ", show, result);
        result = "";
      }

      break;
    default:
      result = result + value;
      show = show + value;
      console.log(show, result);
      input.form.value = result;
      break;
  }
}

function Result() {
  let finalResult = eval(show);
  if (finalResult === undefined || finalResult === NaN) {
    input.form.value = "0";
  } else {
    console.log("final result : ", finalResult);
    input.form.value = finalResult;
  }
  console.log(show, result);
  result = "";
  show = "";
  console.log("result funct", result, show);
}

function Clear() {
  result = "0";
  show = "";
  input.form.value = result;
}

function backspace() {
  result = result.substr(0, result.length - 1);
  show = show.substr(0, show.length - 1);
  input.form.value = result;
}

let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", function playSound() {
    document.getElementById("play").play();
  });
});
