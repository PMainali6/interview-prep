export function search(list, value) {
  let low = 0;
  let high = list.length;

  while (low < high) {
    let mid = Math.floor((high - low) / 2) + low;

    if (list[mid] === value) {
      return mid;
    } else if (list[mid] < value) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}
