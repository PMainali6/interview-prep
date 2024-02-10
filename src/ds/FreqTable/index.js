export default function () {
  const arr = [1, 4, 1, 2, 4, 4, 5];

  console.log("List: ", arr);
  console.log(calcFreq(arr));
}

function calcFreq(arr) {
  let max = -1;
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }

    if (!map.has(arr[i])) {
      map.set(arr[i], 1);
    } else {
      let count = map.get(arr[i]);
      count++;
      map.set(arr[i], count);
    }
  }

  for (let i = 1; i < max; i++) {
    if (!map.has(i)) {
      map.set(i, 0);
    }
  }

  return new Map([...map.entries()].sort((a, b) => a[0] - b[0]));
}
