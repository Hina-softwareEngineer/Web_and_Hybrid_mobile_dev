var list = document.getElementsByTagName("li");

console.log(list, list[2]);

console.log(list[0].hasAttribute("class"));

console.log(list[0].getAttribute("class"));

console.log(list[0].setAttribute("class", "blue"));

console.log(
  list[0].attributes,
  list[0].attributes[0].nodeName,
  list[0].attributes[1].nodeValue
);

var h1 = document.createElement("h1");
console.log(h1);

var text = document.createTextNode("Hello World");

h1.appendChild(text);

var main = document.getElementById("main");
main.appendChild(h1);

console.log(h1);

function addMessage() {
  var val = document.getElementById("val");
  var p = document.createElement("p");
  var textNode = document.createTextNode("Heoo Wrold again.");
}
