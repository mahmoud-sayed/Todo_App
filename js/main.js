// selctors
const todoInput = document.querySelector('.todo-input');
const addButton = document.querySelector('.todo-button');
const addList = document.querySelector('.todo-list');
const filterOptions = document.querySelector('#filter-todo');

// event listener
addButton.addEventListener('click', addTodo);
addList.addEventListener('click', deleteCheck);
filterOptions.addEventListener('click', filterTodo);



// add function

function addTodo() {
    //prevent form from submitting
    event.preventDefault();

    // add new todo to the page
    const todoDiv = document.createElement('div'); // create new element
    todoDiv.classList.add('todo'); // create class

    // create list
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');

    // here we refafe 'newTodo' element to be chiled of 'todoDiv' element
    todoDiv.appendChild(newTodo);

    // create check button
    const compleatedButton = document.createElement('button');
    compleatedButton.innerHTML = '<i class="fas fa-check"></i>';
    compleatedButton.classList.add('complete-btn');
    todoDiv.appendChild(compleatedButton);

    // create trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    // append to list
    addList.appendChild(todoDiv);

    // clear todo input value
    todoInput.value = "";

}

function deleteCheck(e) {
    const item = e.target;

    if (item.classList[0] === "trash-btn") {
        const parent = item.parentElement;
        parent.addEventListener('transitionend', function() {
            parent.remove();
        });

        parent.classList.add('fall')
        if (parent.classList.add('fall')) {
            parent.remove();
        }


    }

    // check mark
    if (item.classList[0] === "complete-btn") {
        const parent = item.parentElement;
        parent.classList.toggle('completed');
    }

}

function filterTodo(e) {

    const todos = addList.childNodes;

    todos.forEach(function(todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = 'block';
                break;

            case "completed":
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }

        }
    });


}