var todo_item = document.getElementById("todo-item");
var ul = document.getElementById("list");

function addNewTodo() {
  var li = document.createElement("li");

  let label = document.createElement("label");
  label.textContent = todo_item.value;

  let input = document.createElement("input");
  input.classList = "edity";

  let del = document.createElement("button");
  var delText =
    "<span  onclick='deleteTodo(this)'><i class='fa fa-trash'></i></span>";
  let edit = document.createElement("button");
  var editText = "<span><i class='fa fa-pencil'></i></span>";

  del.innerHTML = delText;
  edit.innerHTML = editText;

  del.setAttribute("onclick", "deleteTodo(this)");
  edit.setAttribute("onclick", "editTodo(this)");

  li.appendChild(label);
  li.appendChild(input);

  li.appendChild(del);
  li.appendChild(edit);

  ul.appendChild(li);
  todo_item.value = "";
  console.log(li);
  console.log(todo_item.value);
}

function deleteAllTodos() {
  ul.innerHTML = "";
}

var count = 0;
function editTodo(e) {
  if (count == 0) {
    e.parentNode.classList = "editMode";

    // e.parentNode.firstChild.innerHTML = "bison";
    count = 1;
  } else {
    e.parentNode.classList.remove("editMode");
    count = 0;
  }
  console.log(e.parentNode);
}

function deleteTodo(e) {
  e.parentNode.remove();
}

function completedTodo() {}
