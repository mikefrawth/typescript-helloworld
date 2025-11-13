function greet(name: string = "world"): string {
    return `Hello, ${name}!`;
}

console.log(greet());

interface Person {
  id: number,
  name: string,
  age?: number //optional property
}

function printPerson(p:Person): void {
  console.log(`ID: ${p.id}, Name: ${p.name}, Age: ${p.age ?? 'N/A'}`);
}

const mike : Person = {
  id: 1,
  name: "Mike",
  age: 34,
}

printPerson(mike);

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

function toggleTask(t: Task): Task {
  return { ...t, completed: !t.completed };
}

const t1: Task = {
  id: 1,
  title: "Learn TypeScript",
  completed: false,
};

console.log(toggleTask(t1));

interface TimedTask extends Task {
  dueDate: Date;
  priority: 'low' | 'medium' | 'high';
}

const homework: TimedTask = {
  id: 2,
  title: "Math Homework",
  completed: false,
  dueDate: new Date('2025-12-31'),
  priority: 'high',
};

function isOverdue(task: TimedTask): boolean {
  return new Date() < task.dueDate;
}

console.log(isOverdue(homework));

function identity<T>(value: T): T {
  return value;
}

let x = identity(123);
// x.toUpperCase();

function wrapInArray<T>(item: T): T[] {
  return [item];
}

const n = wrapInArray(42);
const s = wrapInArray("TypeScript");

console.log(n, s);

interface ApiResponse<T> {
  success: boolean;
  data: T;
}

const userResponse: ApiResponse<string> = {
  success: true,
  data: "Mike",
}

const countResponse: ApiResponse<number> = {
  success: true,
  data: 42,
}

const taskResponse: ApiResponse<Task> = {
  success: true,
  data: t1,
}

interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
}

const taskPage: PaginatedResponse<Task> = {
  items : [id: 3, title: "Read a book", completed: false],
  total: 50,
  page: 1,
  pageSize: 10,
}