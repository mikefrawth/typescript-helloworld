import { Task, TimedTask } from "./models.js";

export function toggleTask(t: Task): Task {
  return { ...t, completed: !t.completed };
}

export function isOverdue(t: TimedTask): boolean {
  return t.dueDate < new Date();
}
