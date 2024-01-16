export function qs(arr, low, high) {
  if (low < high) {
    const partitionIndex = partition(arr, low, high);
    qs(arr, low, partitionIndex - 1);
    qs(arr, partitionIndex + 1, high);
  }
}

function partition(arr, low, high) {
  let pivot = arr[high];
  let start = low - 1;

  for (let i = low; i < high; i++) {
    if (arr[i] < pivot) {
      start++;
      //swap start & i
      let temp = arr[i];
      arr[i] = arr[start];
      arr[start] = temp;
    }
  }

  start++;
  let temp = arr[high];
  arr[high] = arr[start];
  arr[start] = temp;
  return start;
}
