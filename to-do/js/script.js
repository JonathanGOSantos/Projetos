// Seleção de elementos
const todoForm = document.querySelector("#todoForm");
const todoInput = document.querySelector("#todoInput");
const todoList = document.querySelector("#todoList");
const editForm = document.querySelector("#editForm");
const editInput = document.querySelector("#editInput");
const cancelEditBtn = document.querySelector("#cancelEditBtn");
const filterSelect = document.querySelector("#filterSelect");
const todoContainer = document.querySelector(".todoContainer")
const toggleBg = document.querySelector("#toggleBg")


let oldInputValue;

// Funções
// Salva a Tarefa
const saveTodo = (text) => {
  const todo = document.createElement("div");
  todo.classList.add("todo");
  todo.setAttribute("data-status", "todo")

  const todoTitle = document.createElement("h3");
  todoTitle.innerText = text;
  todo.appendChild(todoTitle);

  const doneBtn = document.createElement("button");
  doneBtn.classList.add("finishTodo");
  doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
  todo.appendChild(doneBtn);
  const editBtn = document.createElement("button");
  editBtn.classList.add("editTodo");
  editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
  todo.appendChild(editBtn);
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("removeTodo");
  deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  todo.appendChild(deleteBtn);

  todoList.appendChild(todo);

  // limpa o input
  todoInput.value = "";
  // Foca no input
  todoInput.focus();
};

filterSelect.addEventListener("change", () => {
  const selectedValue = filterSelect.value;
  const todos = document.querySelectorAll(".todo");

  todos.forEach((todo) => {
    const todoClass = todo.getAttribute("data-status");
    if (selectedValue === "all" || selectedValue === todoClass) {
      todo.style.display = "flex";
    } else {
      todo.style.display = "none";
    } 
  });
});

const toggleForms = () => {
  editForm.classList.toggle("hide");
  todoForm.classList.toggle("hide");
  todoList.classList.toggle("hide");
};

const updateTodo = (text) => {
  const todos = document.querySelectorAll(".todo");
  todos.forEach((todo) => {
    let todoTitle = todo.querySelector("h3")

    if(todoTitle.innerText === oldInputValue) {
      todoTitle.innerText = text;
    }
  })
};



// Eventos
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = todoInput.value;

  if (inputValue) {
    // Salvar To-Do
    saveTodo(inputValue);
  }
});

document.addEventListener("click", (e) => {
  const targetEl = e.target;
  const parentEl = targetEl.closest("div");
  let todoTitle;

  if (parentEl && parentEl.querySelector("h3")) {
    todoTitle = parentEl.querySelector("h3").innerText;
  }

  if (targetEl.classList.contains("finishTodo")) {
    parentEl.classList.toggle("done");
    parentEl.setAttribute("data-status", "done");
  }

  if (targetEl.classList.contains("editTodo")) {
    toggleForms();

    editInput.value = todoTitle;
    oldInputValue = todoTitle;
  }

  if (targetEl.classList.contains("removeTodo")) {
    parentEl.remove();
  }
});

cancelEditBtn.addEventListener("click", (e) => {
  e.preventDefault();

  toggleForms();
});

editForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const editInputValue = editInput.value;

  if (editInputValue) {
    updateTodo(editInputValue);
  }

  toggleForms();
});

toggleBg.addEventListener("click", (e) => {
  e.preventDefault;

  todoContainer.classList.toggle("dark")
  toggleBg.classList.toggle("dark");
})