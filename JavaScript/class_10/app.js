var todo_item = document.getElementById("todo-item");
var ul = document.getElementById("list");

function addTodo() {
  var li = document.createElement("li");
  li.textContent = todo_item.value;

  let del = document.createElement("button");
  var delText = document.createTextNode("Delete");

  del.setAttribute("class", "btn");

  del.setAttribute("onclick", "deleteItem(this)");
  del.appendChild(delText);

  li.appendChild(del);

  ul.appendChild(li);
  todo_item.value = "";
  console.log(li);
  console.log(todo_item.value);
}

function deleteItem(e) {
  console.log(e.parentNode);
  e.parentNode.remove();
}

function deleteAll() {
  ul.innerHTML = "";
}
