import MinHeap from "../MinHeap/minHeap.js";

export default function () {
  const arr = [200, 5, 12, 1, 111];
  let sum = 10;
  const pq = new MinHeap();

  arr.forEach((val) => {
    pq.insert(val);
  });

  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    let min = pq.extractMin();
    if (sum - min >= 0) {
      res++;
    } else {
      break;
    }
  }

  console.log("Max items: ", res);
}
