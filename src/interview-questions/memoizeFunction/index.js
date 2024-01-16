import { memoize } from "./memo.js";

export default function () {
  function sum(a, b, c) {
    console.log("Sum func called");
    return a + b + c;
  }

  const memoSum = memoize(sum);
  console.log(memoSum(1, 2, 3));
  console.log(memoSum(1, 2, 3));
  console.log(memoSum(3, 4, 5));

  memoSum.cleanup();

  console.log(memoSum(1, 2, 3));
}
