import { interval } from "./intervals.js";

export default function () {
  let interval1 = [
    [1, 3],
    [9, 12],
    [2, 4],
    [6, 8],
  ];

  console.log("Intervals: ", interval1);
  let res = interval(interval1);
  console.log("Non-overlapping intervals:", res);

  let interval2 = [
    [1, 3],
    [2, 4],
    [3, 5],
    [7, 9],
  ];
  console.log("Intervals: ", interval2);
  let res2 = interval(interval2);
  console.log("Non-overlapping intervals:", res2);
}
