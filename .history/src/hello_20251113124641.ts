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