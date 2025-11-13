import { Task } from "./models";
// import { toggleTask } from "./logic";

const tasks: Task[] = [
  { id: 1, title: "Learn TypeScript", completed: false },
  { id: 2, title: "Build a tiny browser app", completed: true }
];

const list = document.querySelector<HTMLUListElement>("#task-list");

function renderTasks() {
  if (!list) return;

  // clear old items;
  list.innerHTML = "";

  for (const task of tasks) {
    const li = document.createElement("li");
    li.textContent = task.title + (task.completed ? " ✔️" : " ❌");

    li.addEventListener("click", () => {
      const index = tasks.findIndex(t => t.id === task.id);
      if (index !== -1) {
        // tasks[index] = toggleTask(tasks[index]);
        const current = tasks[index];
        tasks[index] = {
          ...current,
          completed: !current.completed,
        };
        renderTasks();
      }
    });

    list.appendChild(li);
  }
}

renderTasks();


