import { merge } from "./mergeIntervals.js";

export default function () {
  const arr = [
    [5, 10],
    [3, 15],
    [18, 30],
    [2, 7],
  ];

  console.log("Intervals : ", arr);
  console.log(merge(arr));
}
