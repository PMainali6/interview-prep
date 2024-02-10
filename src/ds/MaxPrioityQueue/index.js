import MaxPriorityQueue from "./queue.js";

class Node {
  constructor(key, value, priority, expiry) {
    this.key = key;
    this.value = value;
    this.expiry = expiry;
    this.priority = priority;
  }
}

export default function () {
  const pq = new MaxPriorityQueue((a, b) => a - b);

  const list = [5, 16, 22, 90, 2, 7];
  list.forEach((num) => {
    pq.insert(num);
  });

  console.log("list: ", list);
  console.log("Min: ", pq.extractMax());
  pq.remove(16);
  console.log("removed 16");
  console.log("Min: ", pq.extractMax());
  console.log("Min: ", pq.extractMax());
  console.log("Min: ", pq.extractMax());

  // const pq = new PriorityQueue((a, b) => a.priority - b.priority);

  // pq.insert(new Node("A", "1", 2, 100));
  // const delNode = new Node("B", "2", 3, 300);
  // pq.insert(delNode);
  // pq.insert(new Node("C", "3", 2, 100));
  // pq.insert(new Node("D", "4", 2, 100));
  // pq.insert(new Node("E", "5", 1, 400));
  // pq.print();
  // pq.remove(delNode);
  // pq.print();

  // pq.insert(new Node("B", "2", 3, 300));
  // pq.print();
}
