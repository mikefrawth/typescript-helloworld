// Main entry point for the tiny browser app
import { Task } from "./models.js";
import { toggleTask } from "./logic.js";

// Sample tasks
const tasks: Task[] = [
  { id: 1, title: "Learn TypeScript", completed: false },
  { id: 2, title: "Build a tiny browser app", completed: true }
];

// Get the task list element
const list = document.querySelector<HTMLUListElement>("#task-list");

// Render tasks to the DOM
function renderTasks() {
  if (!list) return;

  // clear old items;
  list.innerHTML = "";

  // add current items
  for (const task of tasks) {
    const li = document.createElement("li");
    li.textContent = task.title + (task.completed ? " ✔️" : " ❌");

    // Toggle task completion on click
    li.addEventListener("click", () => {
      const index = tasks.findIndex(t => t.id === task.id);
      if (index !== -1) {
        tasks[index] = toggleTask(tasks[index]);
        renderTasks();
      }
    });

    // Append to list
    list.appendChild(li);
  }
}

renderTasks();


