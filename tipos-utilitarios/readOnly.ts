/**
 * readonly (KeyWord) e ReadOnly (type utility)
 */

interface Todo {
  title: string;
  description: string;
  done: boolean;
}

const task: Todo = {
  title: "Learn React",
  description: "learn the best web framework",
  done: false,
};

console.log(task);

// vai acontecer um erro em tempo de execução
// Object.freeze(task);

task.title = "Learn TypeScript";
console.log(task);

const taskCopy: Readonly<Todo> = task;
taskCopy.title = "Learn TypeScript";
