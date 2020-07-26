var todo_item = document.getElementById("todo-item");
var ul = document.getElementById("list");

function addNewTodo() {
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

  // todo_item.value = "";
}

function deleteAllTodos() {
  ul.innerHTML = "";
}

function editTodo(e) {
  if (e.parentNode.classList !== "editMode") {
    e.parentNode.classList = "editMode";
    e.parentNode.children[1].value = e.parentNode.firstChild.textContent;
  } else {
    e.parentNode.classList.remove("editMode");
    e.parentNode.firstChild.textContent = e.parentNode.children[1].value;
  }
}

function deleteTodo(e) {
  e.stopPropagation();
  e.parentNode.remove();
}

function completedTodo(e) {
  if (e.classList[0] == "completed") {
    e.classList.remove("completed");
  } else {
    e.classList = "completed";
  }
}
