const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  // Adding new elements
  var text = prompt("Enter your task: ");
  const li = document.createElement("li");
  const span = document.createElement("span");

  const check = document.createElement("input");
  check.type = "checkbox";
  check.name = "task"

  span.textContent = text;

  li.appendChild(check);
  li.appendChild(span);
  list.appendChild(li);


  // Keeping track of TODOS (count)
  count = itemCountSpan.textContent;
  count = parseInt(count);
  count = count + 1;
  itemCountSpan.textContent = count;


  // Keeping track of unchecked items
  showChecked();
  function showChecked(){
    uncheckedCountSpan.textContent = parseInt(count) - document.querySelectorAll("input:checked").length;
  }
  document.querySelectorAll("input[name=task]").forEach(i=>{
   i.onclick = function(){
    showChecked();
    console.log(typeof document.querySelectorAll("input:checked").length)
   }
  });


  // Creating delete functionality
  const button = document.createElement("button");
  button.innerHTML = "Delete";

  button.addEventListener ("click", function() {
    list.removeChild(li)
    count = count - 1;
    itemCountSpan.textContent = count;
    uncheckedCountSpan.textContent = parseInt(count) - document.querySelectorAll("input:checked").length;
  });

  li.appendChild(button);

}
