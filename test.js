// A small task tracker demonstrating objects, arrays, and functions.

const tasks = [];

function addTask(title) {
  const task = {
    id: tasks.length + 1,
    title,
    completed: false,
  };

  tasks.push(task);
  return task;
}

function completeTask(id) {
  const task = tasks.find((item) => item.id === id);

  if (!task) {
    console.log(`Task ${id} was not found.`);
    return;
  }

  task.completed = true;
}

function showTasks() {
  console.log("\nYour tasks:");

  for (const task of tasks) {
    const status = task.completed ? "done" : "pending";
    console.log(`${task.id}. [${status}] ${task.title}`);
  }
}

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}

// Example: the array must be sorted
console.log(binarySearch([1, 3, 5, 7, 9], 7)); // 3

addTask("Learn JavaScript variables");
addTask("Practice array methods");
addTask("Build a small project");

const scores = [55, 82, 39, 96, 70];
const passingScores = scores.filter((score) => score >= 60);

console.log(passingScores); // [82, 96, 70]

completeTask(1);
showTasks();

const completedCount = tasks.filter((task) => task.completed).length;
console.log(`\nCompleted ${completedCount} of ${tasks.length} tasks.`);

function isEven(number) {
  return number % 2 === 0;
}

console.log(isEven(8)); // true
console.log(isEven(5)); // false
