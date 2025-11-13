import { Task } from "./models";

const tasks: Task[] = [
  { id: 1, title: "Learn TypeScript", completed: false },
  { id: 2, title: "Build a tiny browser app", completed: true }
];

const list = document.querySelector<HTMLUListElement>("#task-list");

if (list) {
  for (const task of tasks) {
    const li = document.createElement("li");
    li.textContent = task.title + (task.completed ? " ✔️" : " ❌");
    list.appendChild(li);
  }
}
