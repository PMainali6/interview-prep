class MaxPriorityQueue {
  constructor(comparator) {
    this.comparator = comparator;
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  heapifyUp(idx) {
    let parentIdx = this.parentIdx(idx);
    let parentValue = this.heap[parentIdx];
    let currValue = this.heap[idx];

    if (parentIdx >= 0 && this.comparator(currValue, parentValue) > 0) {
      this.swap(parentIdx, idx);
      this.heapifyUp(parentIdx);
    }
  }

  extractMax() {
    if (this.heap.length === 0) {
      return;
    }

    let max = this.heap[0];
    let lastElem = this.heap.pop();

    if (this.heap.length > 0 && lastElem != undefined) {
      this.heap[0] = lastElem;
      this.heapifyDown(0);
    }

    return max;
  }

  heapifyDown(idx) {
    let leftIdx = this.leftChildIdx(idx);
    let rightIdx = this.rightChildIdx(idx);

    let largest = idx;

    if (
      leftIdx < this.heap.length &&
      this.comparator(this.heap[leftIdx], this.heap[largest]) > 0
    ) {
      largest = leftIdx;
    }

    if (
      rightIdx < this.heap.length &&
      this.comparator(this.heap[rightIdx], this.heap[largest]) > 0
    ) {
      largest = rightIdx;
    }

    if (largest !== idx) {
      this.swap(largest, idx);
      this.heapifyDown(largest);
    }
  }

  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
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

  print() {
    console.log(this.heap);
  }

  peek() {
    this.heap[0];
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  size() {
    return this.heap.length;
  }

  remove(value) {
    let idx = 0;

    for (let i = 0; i < this.heap.length; i++) {
      if (value === this.heap[i]) {
        idx = i;
        break;
      }
    }

    this.swap(idx, this.heap.length - 1);
    this.heap.pop();
    this.heapifyUp(idx);
  }
}

export default MaxPriorityQueue;
