export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export interface TimedTask extends Task {
  dueDate: Date;
  priority: "low" | "medium" | "high";
}
