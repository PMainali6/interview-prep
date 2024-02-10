export default function () {
  const arr = [[1, [2, [3], [4, [5, 6]]], [7]]];

  console.log("Original array: ", arr);
  console.log("Flatten array: ", flattenArray(arr));
}

function flattenArray(arr) {
  if (!Array.isArray(arr)) {
    return [arr];
  }

  let finalArray = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    finalArray = [...finalArray, ...flattenArray(item)];
  }

  return finalArray;
}
