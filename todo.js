document.addEventListener('DOMContentLoaded', renderTasks);

function addTask() {
  const inp = document.getElementById('taskInput');
  const task = inp.value.trim();
  if (!task) return;
  const arr = JSON.parse(localStorage.getItem('tasks')) || [];
  arr.push(task);
  localStorage.setItem('tasks', JSON.stringify(arr));
  inp.value = '';
  renderTasks();
}

function renderTasks() {
  const arr = JSON.parse(localStorage.getItem('tasks')) || [];
  const ul = document.getElementById('taskList');
  ul.innerHTML = '';
  arr.forEach((t, i) => {
    const li = document.createElement('li');
    li.textContent = t;
    li.onclick = () => deleteTask(i);
    ul.appendChild(li);
  });
}

function deleteTask(idx) {
  const arr = JSON.parse(localStorage.getItem('tasks')) || [];
  arr.splice(idx, 1);
  localStorage.setItem('tasks', JSON.stringify(arr));
  renderTasks();
}
