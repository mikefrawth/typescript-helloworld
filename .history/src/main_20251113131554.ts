import { Task, TimedTask } from "./models";
import { toggleTask, isOverdue } from "./logic";

const t1: Task = {
  id: 1,
  title: "Learn TypeScript",
  completed: false
};

const t2: TimedTask = {
  id: 2,
  title: "Finish project",
  completed: false,
  dueDate: new Date("2025-01-01"),
  priority: "high"
};

console.log("Before:", t1);
console.log("After:", toggleTask(t1));

console.log("Is overdue?", isOverdue(t2));
