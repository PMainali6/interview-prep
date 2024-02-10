class PriorityQueue {
  constructor(comparator) {
    this.comparator = comparator;
    this.heap = [];
    this.map = new Map();
  }

  insert(value) {
    this.heap.push(value);

    // if (!this.map.has(value)) {
    //   this.map.set(value, [this.heap.length - 1]);
    // } else {
    //   const idxList = this.map.get(value);
    //   this.map.set(value, [...idxList, this.heap.length - 1]);
    // }

    this.heapifyUp(this.heap.length - 1);
  }

  heapifyUp(idx) {
    let parentIdx = this.parentIdx(idx);
    let parentValue = this.heap[parentIdx];
    let currValue = this.heap[idx];

    if (parentIdx >= 0 && this.comparator(parentValue, currValue) > 0) {
      this.swap(parentIdx, idx);
      this.heapifyUp(parentIdx);
    }
  }

  extract() {
    let result = this.heap[0];
    let lastElem = this.heap.pop();

    if (this.heap.length > 0 && lastElem != undefined) {
      this.heap[0] = lastElem;
      this.heapifyDown(0);
    }

    return result;
  }

  heapifyDown(idx) {
    let leftIdx = this.leftChildIdx(idx);
    let rightIdx = this.rightChildIdx(idx);

    let leftChild = this.heap[leftIdx];
    let rightChild = this.heap[rightIdx];

    let smallestIdx = idx;

    if (
      leftIdx < this.heap.length &&
      this.comparator(this.heap[smallestIdx], leftChild) > 0
    ) {
      smallestIdx = leftIdx;
    }

    if (
      rightIdx < this.heap.length &&
      this.comparator(this.heap[smallestIdx], rightChild) > 0
    ) {
      smallestIdx = rightIdx;
    }

    if (smallestIdx !== idx) {
      this.swap(smallestIdx, idx);
      this.heapifyDown(smallestIdx);
    }
  }

  parentIdx(idx) {
    return Math.floor((idx - 1) / 2);
  }

  leftChildIdx(idx) {
    return 2 * idx + 1;
  }

  rightChildIdx(idx) {
    return 2 * idx + 2;
  }

  swap(idx1, idx2) {
    // this.updateMap(idx1, this.heap[idx1], idx2, this.heap[idx2]);
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  updateMap(pos1, val1, pos2, val2) {
    const list1 = this.map.get(val1);
    console.log("list1: ", list1);
    const fitleredList1 = list1.filter((pos) => pos !== pos1);

    const list2 = this.map.get(val2);
    const fitleredList2 = list2.filter((pos) => pos !== pos2);

    this.map.set(val1, [...fitleredList1, pos2]);
    this.map.set(val2, [...fitleredList2, pos1]);
  }

  peek() {
    return this.heap[0];
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  size() {
    return this.heap.length;
  }

  print() {
    console.log(this.heap);
  }

  remove(value) {
    let idx = 0;
    for (let i = 0; i < this.heap.length; i++) {
      if (value === this.heap[i]) {
        idx = i;
        break;
      }
    }

    // let idx = this.map.get(value)[0];

    this.swap(idx, this.heap.length - 1);
    this.heap.pop();

    this.heapifyDown(idx);
  }
}

export default PriorityQueue;
