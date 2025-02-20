var tasks = [];

function addTask() {
    var input = document.querySelector("#taskInput");
    var taskText = input.value.trim();
    if (taskText === "") return;

    var task = { text: taskText, completed: false };
    tasks.push(task);
    input.value = "";
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function editTask(index) {
    var newText = prompt("Editar tarea: ", tasks[index].text);
    if (newText !== null && newText.trim() !== "") {
        tasks[index].text = newText.trim();
        renderTasks();
    }
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function renderTasks() {
    var list = document.querySelector("#taskList");
    list.innerHTML = "";
    var completedCount = 0;

    tasks.forEach((task, index) => {
        var li = document.createElement("li");
        li.className = "task";

        var span = document.createElement("span");
        span.textContent = task.text;
        if (task.completed) {
            span.classList.add("completed"); 
        }
        span.onclick = () => toggleTask(index); 

        var editBtn = document.createElement("button");
        editBtn.textContent = "Editar";
        editBtn.className = "edit-btn";
        editBtn.onclick = () => editTask(index);

        var deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Eliminar";
        deleteBtn.className = "delete-btn";
        deleteBtn.onclick = () => deleteTask(index);

        li.appendChild(span);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        list.appendChild(li);

        if (task.completed) completedCount++;
    });

    document.querySelector("#completedCount").textContent = completedCount; 
    document.querySelector("#incompleteCount").textContent = tasks.length - completedCount;
}
