const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addTask();
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.innerHTML = `
    <span>${taskText}</span>
    <button onclick="removeTask(this)">delete</button>
  `;

  taskList.appendChild(li);
  taskInput.value = '';
  taskInput.focus();
}

function removeTask(button) {
  const li = button.parentElement;
  li.style.animation = 'slideOut 0.3s forwards';
  li.addEventListener('animationend', () => {
    li.remove();
  });
}
