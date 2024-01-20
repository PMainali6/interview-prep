import MinHeap from "./minHeap.js";

export default function () {
  const heap = new MinHeap();

  const list = [5, 16, 22, 90, 2, 7];
  list.forEach((num) => {
    heap.insert(num);
  });

  console.log("list: ", list);
  console.log("Min: ", heap.extractMin());
  console.log("Min: ", heap.extractMin());
  console.log("Min: ", heap.extractMin());
  console.log("Min: ", heap.extractMin());
  console.log("Min: ", heap.extractMin());
  console.log("Min: ", heap.extractMin());
  console.log("Min: ", heap.extractMin());
}
