import MaxHeap from "./maxHeap.js";

export default function () {
  const heap = new MaxHeap();

  const list = [5, 16, 22, 90, 2, 7];
  list.forEach((num) => {
    heap.insert(num);
  });

  console.log("list: ", list);
  console.log("Max: ", heap.extractMax());
  console.log("Max: ", heap.extractMax());
  console.log("Max: ", heap.extractMax());
  console.log("Max: ", heap.extractMax());
  console.log("Max: ", heap.extractMax());
  console.log("Max: ", heap.extractMax());
  console.log("Max: ", heap.extractMax());
}
