export default function () {
  let list1 = [10, 1, 2, 7, 6, 1, 5];
  // [1,1,2,5,6,7,10]
  let target1 = 8;

  let list2 = [2, 5, 2, 1, 2];
  let target2 = 5;

  console.log("List: ", list1);
  console.log("Target: ", target1);

  console.log(combinationSum2(list1, target1));
}

function combinationSum2(arr, target) {
  let res = [];
  arr.sort((a, b) => a - b);
  backtrack(0, arr, target, [], res);
  return res;
}

function backtrack(idx, arr, target, curr, res) {
  // base condition
  if (target === 0) {
    res.push(Array.from(curr));
    return;
  }

  if (idx >= arr.length) {
    return;
  }

  if (target < 0) {
    return;
  }

  // pre
  let prev = -1;
  // skipping over the repeated elem in the array
  for (let i = idx; i < arr.length; i++) {
    if (arr[i] === prev) {
      continue;
    }

    curr.push(arr[i]);
    backtrack(i + 1, arr, target - arr[i], curr, res);

    // post
    curr.pop();
    prev = arr[i];
  }
}
