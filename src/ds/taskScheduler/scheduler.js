import MinHeap from "../MinHeap/minHeap.js";

export function scheduler(tasks, n) {
  let map = new Map();

  for (let i = 0; i < tasks.length; i++) {
    let key = tasks[i];
    if (!map.has(key)) {
      map.set(key, 1);
    } else {
      let count = map.get(key) + 1;
      map.set(key, count);
    }
  }

  const heap = new MinHeap();
  map.forEach((value, key) => {
    heap.insert(value * -1);
  });

  console.log(heap.heap);
}
