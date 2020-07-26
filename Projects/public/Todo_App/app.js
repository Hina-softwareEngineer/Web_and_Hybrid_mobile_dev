var todo_item = document.getElementById("todo-item");
var ul = document.getElementById("list");
var alert = document.querySelector("p");

alert.style.display = "none";

todo_item.focus();
checkLis();

function addNewTodo() {
  if (todo_item.value != "") {
    var li = document.createElement("li");

    let label = document.createElement("label");
    label.textContent = todo_item.value;

    let input = document.createElement("input");
    input.classList = "edity";

    let del = document.createElement("button");
    var delText = "<span'><i class='fa fa-trash'></i></span>";
    let edit = document.createElement("button");
    var editText = "<span><i class='fa fa-pencil'></i></span>";

    del.innerHTML = delText;
    edit.innerHTML = editText;

    del.setAttribute("onclick", "deleteTodo(this)");
    edit.setAttribute("onclick", "editTodo(this)");

    label.setAttribute("onclick", "completedTodo(this)");

    li.appendChild(label);
    li.appendChild(input);

    li.appendChild(del);
    li.appendChild(edit);

    ul.appendChild(li);
    todo_item.value = "";
    checkLis();
  } else {
    alert.style.display = "block";

    setTimeout(function () {
      alert.style.display = "none";
    }, 3000);
  }
}

function deleteAllTodos() {
  ul.innerHTML = "";
  checkLis();
}

function editTodo(e) {
  if (e.parentNode.classList == "editMode") {
    e.parentNode.classList.remove("editMode");
    e.parentNode.firstChild.textContent = e.parentNode.children[1].value;
  } else {
    e.parentNode.classList = "editMode";
    e.parentNode.children[1].focus();
    e.parentNode.children[1].value = e.parentNode.firstChild.textContent;
  }
}

function deleteTodo(e) {
  e.parentNode.remove();
  checkLis();
}

function completedTodo(e) {
  if (e.classList[0] == "completed") {
    e.classList.remove("completed");
  } else {
    e.classList = "completed";
  }
}

function checkLis() {
  if (ul.childNodes.length < 1) {
    ul.innerHTML = "<li class='no-tasks'><label>No Tasks yet.</label></li>";
  } else {
    let noTask = document.querySelector(".no-tasks");
    noTask.remove();
  }
}
