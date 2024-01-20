class MinHeap {
  constructor() {
    this.heap = [];
    this.heapIdx = 0;
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp(this.heapIdx);
    this.heapIdx++;
  }

  heapifyUp(idx) {
    if (idx === 0) {
      return;
    }
    let parentIdx = this.parentIdx(idx);
    let parentValue = this.heap[parentIdx];
    let currValue = this.heap[idx];

    if (parentValue > currValue) {
      this.swap(parentIdx, idx);
      this.heapifyUp(parentIdx);
    }
  }

  extractMin() {
    if (this.heapIdx === 0) {
      return -1;
    }

    let min = this.heap[0];
    this.heapIdx--;
    if (this.heapIdx === 0) {
      this.heap = [];
      return min;
    }

    this.heap[0] = this.heap[this.heapIdx];
    this.heapifyDown(0);
    return min;
  }

  heapifyDown(idx) {
    let leftIdx = this.leftChildIdx(idx);
    let rightIdx = this.rightChildIdx(idx);

    if (leftIdx >= this.heapIdx || idx >= this.heapIdx) {
      return;
    }

    const leftValue = this.heap[leftIdx];
    const rightValue = this.heap[rightIdx];
    const currValue = this.heap[idx];

    const min = Math.min(leftValue, rightValue, currValue);

    if (min === leftValue) {
      this.swap(idx, leftIdx);
      this.heapifyDown(leftIdx);
    } else if (min === rightValue) {
      this.swap(idx, rightIdx);
      this.heapifyDown(rightIdx);
    }
  }

  leftChildIdx(idx) {
    return 2 * idx + 1;
  }

  rightChildIdx(idx) {
    return 2 * idx + 2;
  }

  parentIdx(idx) {
    return Math.floor((idx - 1) / 2);
  }

  swap(idx1, idx2) {
    let temp = this.heap[idx1];
    this.heap[idx1] = this.heap[idx2];
    this.heap[idx2] = temp;
  }
}

export default MinHeap;
