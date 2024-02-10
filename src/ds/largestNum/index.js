export default function () {
  const n = 5;
  const sum = 12;

  console.log("largest num: ", largestNumber(n, sum));
}

function largestNumber(n, sum) {
  let res = new Array(n).fill(-1);
  let tempSum = sum;
  let max = 9;
  let flag = 1;

  for (let i = 0; i < n; i++) {
    if (tempSum === 0) {
      flag = -1;
      break;
    }

    if (tempSum >= max) {
      res[i] = max;
      tempSum -= max;
    } else {
      max--;
    }
  }

  if (flag) {
    return -1;
  }

  return res.join("");
}
