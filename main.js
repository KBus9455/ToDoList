const form = document.querySelector('form');
const tasksList = document.querySelector('ul');
const taskNumber = document.querySelector('div.tasksNumber span');
const tasks = document.getElementsByClassName('toDo');
const toDoList = [...document.querySelectorAll('li')];

const inputAdd = document.querySelector('form input');
const inputSearch = document.querySelector('input.search');

const removeTask = (e) => {
    e.target.parentNode.remove();
    const index = e.target.parentNode.dataset.key;
    console.log(index)
    toDoList.splice(index, 1);
    tasksList.textContent = "";
    toDoList.forEach((toDoElement, key) => {
        toDoElement.dataset.key = key;
        tasksList.appendChild(toDoElement)
    })
    taskNumber.textContent = toDoList.length;
}

const addTask = (e) => {
    e.preventDefault();
    const input = inputAdd.value;
    if (input == "") return;
    const task = document.createElement('li');
    task.className = "toDo";
    task.dataset = "key";
    task.innerHTML = input + "<button>Usuń</button>";
    toDoList.push(task);
    tasksList.textContent = "";
    toDoList.forEach((toDoElement, key) => {
        toDoElement.dataset.key = key;
        tasksList.appendChild(toDoElement)
    })
    inputAdd.value = "";
    const deleteBtn = task.querySelector('button');
    deleteBtn.addEventListener('click', removeTask);
    taskNumber.textContent = tasks.length;
}

const searchTask = (e) => {
    const searchInput = e.target.value.toLowerCase();

    let toDoSearch = toDoList.filter(item =>
        item.textContent.toLowerCase().includes(searchInput)
    );
    console.log(toDoSearch);
    tasksList.textContent = "";
    toDoSearch.forEach(item => tasksList.appendChild(item));

}



form.addEventListener('submit', addTask);
inputSearch.addEventListener('input', searchTask)