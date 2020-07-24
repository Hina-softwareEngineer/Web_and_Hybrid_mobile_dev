var todo_item = document.getElementById("todo-item");
var ul = document.getElementById("list");

function addTodo() {
  var li = document.createElement("li");
  li.textContent = todo_item.value;

  let del = document.createElement("button");
  var delText = document.createTextNode("Delete");
  let edit = document.createElement("button");
  var editText = document.createTextNode("Edit");

  del.setAttribute("class", "btn");
  edit.setAttribute("class", "edit");

  del.setAttribute("onclick", "deleteItem(this)");
  edit.setAttribute("onclick", "editItem(this)");
  del.appendChild(delText);
  edit.appendChild(editText);

  li.appendChild(del);
  li.appendChild(edit);

  ul.appendChild(li);
  todo_item.value = "";
  console.log(li);
  console.log(todo_item.value);
}

function deleteItem(e) {
  e.parentNode.remove();
}

function deleteAll() {
  ul.innerHTML = "";
}

function editItem(e) {
  var editValue = prompt("Enter edit value", e.parentNode.firstChild.nodeValue);
  console.log(e.parentNode.firstChild);

  e.parentNode.firstChild.nodeValue = editValue;
}

var webCourse = {
  t1: "hina",
  t2: "basit",
  t3: "ali",
};

var course = {};
course.market = "Karachi";

var myQuestions = [
  {
    question: "What is your name?",
    answer: {
      a: "ali",
      b: "gous",
      c: "basit",
    },
  },
];

var abc = "t3" in webCourse;

console.log(abc);

function Course(t1, t2, t3) {
  this.t1 = t1;
  this.t2 = t2;
  this.t3 = t3;
}

var xyz = new Course("hina", "basit", "ghous");
