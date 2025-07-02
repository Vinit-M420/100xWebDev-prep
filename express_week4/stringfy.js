let todos = [
  { todo: "go gym" },
  { todo: "call mom" }
];

const json = JSON.stringify(todos, null, 2);
console.log(json);
