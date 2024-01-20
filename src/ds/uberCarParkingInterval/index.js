import { interval } from "./interval.js";

export default function () {
  let intervals = [
    [1, 6],
    [7, 9],
  ];
  let newInterval = [6, 9];

  console.log(interval(intervals, newInterval));
}
