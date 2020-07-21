// Assignment 39-47------------------------------------------------------

function power(a, b) {
  return Math.pow(a, b);
}

function leapyear(year) {
  if (year % 4 && (year % 400 || year % 100)) {
    return "Leap year";
  }
  return "Not a Leap year";
}

let year = prompt("Enter year");
leapyear(year);

function areaTriangle(a, b, c) {
  let s = (a + b + c) / 2;
  area = s * (s - a) * (s - b) * (s - c);
  return area;
}

function mainFunction(obtained_marks) {
  let m = 0;
  obtained_marks.forEach((marks) => {
    m += marks;
  });
  let average = average(m);
  let percent = percentage(m);
}

function average() {
  return obtained_marks / 3;
}

function percentage(marks) {
  return (marks * 100) / 300;
}

function indexOf(char, searchLetter) {
  let findElement = null;
  for (var i = 0; i < char.length; i++) {
    if (char[i] === searchLetter) {
      findElement = i;
      break;
    }
  }

  console.log(findElement);
}

function deleteVowels(name) {
  return name.replace(/[aeiou]/g, "");
}

function countVowels(name) {
  let count = 0;
  for (var i = 0; i < name.length - 1; i++) {
    if (
      ["a", "e", "i", "o", "u"].includes(name[i]) &&
      ["a", "e", "i", "o", "u"].includes(name[i + 1])
    ) {
      count = count + 1;
    }
  }

  console.log("Number of occurences", count);
}

function distancecity(d) {
  meteres(d);
  feet(d);
  inches(d);
  centimeters(d);
}

function meteres(d) {
  console.log(d / 1000);
}
function feet(d) {
  console.log(d / (100000 * 30));
}
function inches(d) {
  console.log(d / (100000 / 2.5));
}
function centimeters(d) {
  console.log(d / 100000);
}

function overtime(hours) {
  if (hours > 40) {
    console.log("Rs.", hours * 12);
  }
}

function currency(rupees) {
  let hund = Math.floor(rupees / 100);
  let fifty = Math.floor((rupees % 100) / 50);

  let ten = Math.floor(((rupees % 100) % 50) / 10);
  console.log(
    "You will have ",
    hund,
    " hundred notes",
    fifty,
    " fifty notes ",
    ten,
    " ten notes"
  );
}

//  Assignment 43-48-----------------------------------------------

let images = document.querySelectorAll("img");

for (var i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function () {
    alert("Thanks for purchasing a phone from us.");
  });
}

var name = "hina";
var classes = 8;
for (var i = 0; i < 4; i++) {
  let row = document.createElement("tr");
  row.id = "row" + i;
  let text = `<td>${i}</td><td>${name + i}</td><td>${
    classes + i
  }</td><td><button id="buttons">Delete</button></td>`;
  row.innerHTML = text;
  document.querySelector("table").appendChild(row);
}

let button = document.querySelectorAll("#buttons");

for (var i = 0; i < 4; i++) {
  button[i].addEventListener("click", function (e) {
    var r = document.querySelector(
      `#${e.target.parentElement.parentElement.id}`
    );
    r.remove();
  });
}

let chan = document.getElementById("images");
chan.addEventListener("mouseenter", function () {
  chan.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ3b4Gl9TVUv6ehAIYGinLXvR1lwMfY86w2dA&usqp=CAU";
});

chan.addEventListener("mouseleave", function () {
  chan.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqJboX8qeAbhLH4UEfmpKia6CiMW85YbWRQg&usqp=CAU";
});

var count = 0;
let h2 = document.querySelector("h2");

document.querySelector(".inc").addEventListener("click", function () {
  count += 1;
  h2.innerText = count;
});

document.querySelector(".dec").addEventListener("click", function () {
  count -= 1;
  h2.innerText = count;
});

let array = [];
let obj = {};
obj.firstName = "John";
obj.lastName = "Doe";
obj.age = 90;

if (true) {
  obj.hobby = "table tennis";
  console.log(obj.hobby);
  array.push(obj);
  console.log(array);
  console.log("1st trye");
}

if (true) {
  obj.hobby = "marshal arts";
  console.log(obj.hobby);
  array.push(obj);
  console.log(array);
  console.log("2nd arrat");
}

// Assignemnt 49-52--------------------------------------------------------

let submit = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let ol = document.createElement("ol");
submit.addEventListener("submit", function (e) {
  e.preventDefault();

  let li = document.createElement("li");
  let li1 = document.createElement("li");
  let li2 = document.createElement("li");
  li.innerText = inputs[0].value;
  ol.appendChild(li);
  li1.innerText = inputs[1].value;
  ol.appendChild(li1);
  li2.innerText = inputs[2].value;
  ol.appendChild(li2);

  document.body.appendChild(ol);
});

let more = document.getElementById("more");
let read = document.getElementById("read");

more.style.display = "none";

read.addEventListener("click", function () {
  more.style.display = "block";
});

var name = "hina";
var classes = 8;
for (var i = 0; i < 4; i++) {
  let row = document.createElement("tr");
  row.id = "row" + i;
  let text = `<td>${i}</td><td>${name + i}</td><td>${
    classes + i
  }</td><td><button id="edit">Edit</button></td><button id="buttons">Delete</button></td>`;
  row.innerHTML = text;
  document.querySelector("table").appendChild(row);
}

let button = document.querySelectorAll("#buttons");

for (var i = 0; i < 4; i++) {
  button[i].addEventListener("click", function (e) {
    var r = document.querySelector(`#${e.target.parentElement.id}`);
    console.log(e.target.parentElement.id);
    // r.remove();
  });
}

let hide = document.querySelector("#hidden");
hide.style.display = "none";
let edit = document.querySelectorAll("#edit");
for (var i = 0; i < 4; i++) {
  edit[i].addEventListener("click", function (e) {
    var r = document.querySelector(
      `#${e.target.parentElement.parentElement.id}`
    );
    let td = r;
    let childs = td.childNodes;
    let id = childs[0].textContent;
    let name = childs[1].textContent;
    let classes = childs[2].textContent;

    let inputShowing = hide.childNodes;
    inputShowing[1].value = id;
    inputShowing[3].value = name;
    inputShowing[5].value = classes;

    hide.style.display = "block";
  });
}

// Assignment 58-67---------------------------------------------------------

let main_content = document.getElementById("main-content");

//console.log(main_content.childNodes);

let render = document.querySelectorAll(".render");
for (var i = 0; i < render.length; i++) {
  console.log(render[i].innerHTML);
}

let full_name, last_name, email;
full_name = document.querySelector("#first-name");
last_name = document.querySelector("#last-name");
email = document.querySelector(".email");

full_name.value = "Hina";
last_name.value = "Khadim";
email.value = "email@example.com";

//----------

let form_content = document.querySelector(".form-content");
// div type
console.log(form_content.nodeType);
let lastName = document.querySelector("#lastName");
console.log(lastName.nodeType, lastName.childNodes);

// by inserting a child node

console.log(main_content.firstChild, main_content.lastChild);
console.log(lastName.previousSibling, lastName.nextSibling);

console.log(email.parentNode, email.nodeType);
