function addTask(event) {
  event.preventDefault();
  let task = document.getElementById("task").value;
  if (task) {
    let ul = document.getElementById("tasks");
    let li = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("click", removeTask);
    checkbox.classList.add("ml-4");
    li.appendChild(document.createTextNode(task));
    li.appendChild(checkbox);
    ul.appendChild(li);
  }
  document.getElementById("task").value = "";
}

function removeTask() {
  let ul = document.getElementById("tasks");
  let items = ul.getElementsByTagName("li");
  for (let i = 0; i < items.length; i++) {
    while (items[i] && items[i].children[0].checked) {
      alert(`Task "${items[i].innerText}" completed!`);
      ul.removeChild(items[i]);
    }
  }
}
