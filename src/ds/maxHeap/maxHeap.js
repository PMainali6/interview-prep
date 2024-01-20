class MaxHeap {
  constructor() {
    this.heap = [];
    this.length = 0;
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp(this.length);
    this.length++;
  }

  heapifyUp(idx) {
    if (idx === 0) {
      return;
    }
    const parentIdx = this.parentIdx(idx);
    const parentValue = this.heap[parentIdx];
    const currValue = this.heap[idx];

    if (parentValue < currValue) {
      this.swap(idx, parentIdx);
      this.heapifyUp(parentIdx);
    }
  }

  extractMax() {
    console.log("Heap: ", this.heap);
    if (this.length === 0) {
      return -1;
    }

    let max = this.heap[0];
    this.length--;

    if (this.length === 0) {
      this.heap = [];
      return max;
    }

    this.heap[0] = this.heap[this.length];
    this.heapifyDown(0);
    return max;
  }

  heapifyDown(idx) {
    const leftIdx = this.leftChildIdx(idx);
    const rightIdx = this.rightChildIdx(idx);

    if (leftIdx >= this.length || idx >= this.length) {
      return;
    }

    const currValue = this.heap[idx];
    const left = this.heap[leftIdx];
    const right = this.heap[rightIdx];

    let largest = Math.max(currValue, left, right);

    if (largest === left) {
      this.swap(leftIdx, idx);
      this.heapifyDown(leftIdx);
    } else if (largest === right) {
      this.swap(rightIdx, idx);
      this.heapifyDown(rightIdx);
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
    const temp = this.heap[idx1];
    this.heap[idx1] = this.heap[idx2];
    this.heap[idx2] = temp;
  }
}

export default MaxHeap;
