var todo_item = document.getElementById("todo-item");
var ul = document.getElementById("list");

function addNewTodo() {
  var li = document.createElement("li");
  li.textContent = todo_item.value;

  let del = document.createElement("button");
  var delText =
    "<span  onclick='deleteTodo(this)'><i class='fa fa-trash'></i></span>";
  let edit = document.createElement("button");
  var editText = "<span><i class='fa fa-pencil'></i></span>";

  del.innerHTML = delText;
  edit.innerHTML = editText;

  del.setAttribute("onclick", "deleteTodo(this)");
  edit.setAttribute("onclick", "editTodo(this)");

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

function editTodo(e) {
  console.log(e.parentNode);
  e.parentNode.firstChild.innerHTML = "<input type='text' />";
}

function deleteTodo(e) {
  e.parentNode.remove();
}

function completedTodo() {}
