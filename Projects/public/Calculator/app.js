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
  let finalResult = eval(show);
  input.form.value = finalResult;
  result = "";
}

function Clear() {
  result = "";
  input.form.value = result;
}
