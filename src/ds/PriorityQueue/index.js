import PriorityQueue from "./priorityQueue.js";

class Node {
  constructor(key, value, priority, expiry) {
    this.key = key;
    this.value = value;
    this.expiry = expiry;
    this.priority = priority;
  }
}

export default function () {
  // const pq = new PriorityQueue((a, b) => a - b);

  // const list = [5, 16, 22, 90, 2, 7];
  // list.forEach((num) => {
  //   pq.insert(num);
  // });

  // console.log("list: ", list);
  // console.log("Min: ", pq.extract());
  // pq.remove(16);
  // console.log("removed 16");
  // console.log("Min: ", pq.extract());
  // console.log("Min: ", pq.extract());
  // console.log("Min: ", pq.extract());

  const pq = new PriorityQueue((a, b) => a.priority - b.priority);
  const node = new Node("D", "val4", 1, 15);
  pq.insert(new Node("A", "val1", 5, 100));
  pq.insert(new Node("B", "val2", 15, 3));
  pq.insert(new Node("C", "val3", 5, 10));
  pq.insert(node);
  pq.insert(new Node("E", "val5", 5, 150));
  pq.print();

  pq.remove(node);
  pq.print();
}
