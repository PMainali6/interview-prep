import TaskRunner from "./taskRunner.js";

export default function () {
  const task1 = () => {
    return new Promise((resolve) => setTimeout(() => resolve("Task1"), 1000));
  };

  const task2 = () => {
    return new Promise((resolve) => setTimeout(() => resolve("Task2"), 1000));
  };

  const task3 = () => {
    return new Promise((resolve) => setTimeout(() => resolve("Task3"), 1000));
  };

  const task4 = () => {
    return new Promise((resolve) => setTimeout(() => resolve("Task4"), 3000));
  };

  const runner = new TaskRunner(3);

  runner.push(task1);
  runner.push(task2);
  runner.push(task3);
  runner.push(task4);
}
