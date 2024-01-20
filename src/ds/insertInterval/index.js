import { insert } from "./insert.js";

export default function () {
  const interval = [
    [1, 2],
    [3, 5],
    [6, 7],
    [8, 9],
    [12, 16],
  ];
  const newInterval = [4, 8];

  console.log("Inerval List: ", interval);
  console.log("New Interval: ", newInterval);
  console.log(insert(interval, newInterval));
}
