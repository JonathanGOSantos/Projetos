const inputElement = document.querySelector(".new-task-input");
const addTaskButton = document.querySelector(".new-task-button");

const validateInput = () => inputElement.value.trim().length > 0;

const handleAddTask = () => {
  const inputIsValid = validateInput();

  if (!inputIsValid) {
    inputElement.classList.add("error");
    document.getElementsByClassName('.new-task-input')[0].placeholder='teste'
  }
};

addTaskButton.addEventListener("click", () => handleAddTask());
