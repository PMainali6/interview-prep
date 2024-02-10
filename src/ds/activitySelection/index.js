export default function () {
  const arr = [
    [3, 8],
    [2, 4],
    [1, 3],
    [10, 11],
  ];

  console.log("list: ", arr);
  console.log(activitySelection(arr));
}

/*
    [
        [1,3]
        [2,4]
        [3,8]
        [10,11]
    ]
*/

function activitySelection(arr) {
  arr.sort((a, b) => a[1] - b[1]);

  let res = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    let nextActivityStartTime = arr[i][0];
    let lastActivityEndTime = res[res.length - 1][1];

    if (lastActivityEndTime <= nextActivityStartTime) {
      res.push(arr[i]);
    }
  }

  return res;
}
