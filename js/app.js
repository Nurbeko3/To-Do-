function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;
    if (task.trim() === "") {
        alert("Please enter a task!");
        return;
    }
    let ul = document.getElementById("taskList");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(task));
    ul.appendChild(li);
    input.value = "";
}
