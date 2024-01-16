import { qs } from "./quickSort.js";

export default function () {
  let arr = [5, 3, 8, 4, 1, 2, 7];
  console.log("Orginal Array: ", arr);
  let low = 0;
  let high = arr.length - 1;

  qs(arr, low, high);
  console.log("Sorted Array: ", arr);
}
