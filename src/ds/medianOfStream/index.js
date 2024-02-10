import MinHeap from "../MinHeap/minHeap.js";
import MaxHeap from "../maxHeap/maxHeap.js";

export default function () {
  const l1 = new MaxHeap();
  const l2 = new MinHeap();

  const list = [25, 7, 10, 15, 20];
  console.log("List: ", list);

  l1.insert(list[0]);
  console.log("Median: ", list[0]);

  for (let i = 1; i < list.length; i++) {
    const newItem = list[i];

    // list1 is greater
    if (l1.size() > l2.size()) {
      if (l1.peek() > newItem) {
        l2.insert(l1.extractMax());
        l1.insert(newItem);
      } else {
        l2.insert(newItem);
      }

      console.log("Median: ", (l1.peek() + l2.peek()) / 2);
    } else {
      // list2 is larger
      if (l1.peek() >= newItem) {
        l1.insert(newItem);
      } else {
        l2.insert(newItem);
        l1.insert(l2.extractMin());
      }
    }

    console.log("Median: ", l1.peek());
  }
}
