let input = document.getElementsByTagName("input");
let result = "";
let op = "";
let show = "";

function getValue(value) {
  switch (value) {
    case "+":
    case "-":
    case "*":
    case "/":
      op = value;
      show = result + op;
      result = "";
      break;
    default:
      console.log(show);
      result = result + value;
      show = show + value;
      input.form.value = result;
      break;
  }
}

function Result() {
  console.log(show, result);
  let finalResult = eval(show);
  input.form.value = finalResult;
  result = "";
  show = "";
}

function Clear() {
  result = "";
  input.form.value = result;
}

function backspace() {
  result = result.substr(0, result.length - 1);
  show = show.substr(0, show.length - 1);
  input.form.value = result;
}
