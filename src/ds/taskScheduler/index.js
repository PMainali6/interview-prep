import { scheduler } from "./scheduler.js";

export default function () {
  let tasks = ["A", "A", "A", "B", "B", "B"];
  let n = 2;

  console.log(scheduler(tasks, n));
}
