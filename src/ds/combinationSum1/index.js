export default function () {
  const arr = [2, 3, 6, 7];
  const target = 7;
  const res = [];

  combinationSum(0, arr, 0, target, [], res);
  console.log("Candidates: ", arr);
  console.log(res);
}

function combinationSum(idx, arr, sum, target, curr, res) {
  // base conditon
  if (sum === target) {
    res.push(Array.from(curr));
    return;
  }

  if (sum > target) {
    return;
  }

  if (idx >= arr.length) {
    return;
  }

  // pre
  curr.push(arr[idx]);
  combinationSum(idx, arr, sum + arr[idx], target, curr, res);

  curr.pop();
  combinationSum(idx + 1, arr, sum, target, curr, res);
}
