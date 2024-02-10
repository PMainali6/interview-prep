export class Item {
  constructor(key, value, priority, expiry) {
    this.key = key;
    this.value = value;
    this.priority = priority;
    this.expiry = expiry;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = this.tail = null;
    this.size = 0;
  }

  addNodeFront(newNode) {
    if (this.size === 0) {
      this.head = this.tail = newNode;
    } else {
      const head = this.head;
      newNode.next = head;
      head.prev = newNode;
      this.head = newNode;
    }

    this.size++;
    return newNode;
  }

  removeNode(node) {
    if (this.size === 0) {
      return null;
    }

    if (this.tail === node) {
      this.tail = node.prev;
    }

    if (this.head === node) {
      this.head = node.next;
    }

    let prevNode = node.prev;
    let nextNode = node.next;

    if (prevNode) {
      prevNode.next = nextNode;
    }

    if (nextNode) {
      nextNode.prev = prevNode;
    }

    this.size--;
    node.prev = node.next = null;
    return node;
  }

  removeLast() {
    if (this.size === 0) {
      return null;
    }

    if (this.size === 1) {
      const node = this.head;
      this.head = this.tail = null;
      this.size = 0;
      return node;
    }

    const tailNode = this.tail;
    this.tail = tailNode.prev;
    this.size--;
    tailNode.prev = tailNode.next = null;
    return tailNode;
  }
}

class PriorityQueue {
  constructor(comparator) {
    this.comparator = comparator;
    this.heap = [];
  }

  insert(val) {
    this.heap.push(val);
    this.heapifyUp(this.heap.length - 1);
  }

  heapifyUp(idx) {
    const parentIdx = this.parent(idx);
    const parentValue = this.heap[parentIdx];
    const currentValue = this.heap[idx];

    if (parentIdx >= 0 && this.comparator(parentValue, currentValue) > 0) {
      this.swap(idx, parentIdx);
      this.heapifyUp(parentIdx);
    }
  }

  extract() {
    if (this.heap.length === 0) {
      return null;
    }

    if (this.heap.length === 1) {
      const min = this.heap[0];
      return min;
    }

    const min = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapifyDown(0);
    return min;
  }

  heapifyDown(idx) {
    const leftIdx = this.leftChildIdx(idx);
    const rightIdx = this.rightChildIdx(idx);

    let smallestIdx = idx;

    if (
      leftIdx < this.heap.length &&
      this.comparator(this.heap[smallestIdx], this.heap[leftIdx]) > 0
    ) {
      smallestIdx = leftIdx;
    }

    if (
      rightIdx < this.heap.length &&
      this.comparator(this.heap[smallestIdx], this.heap[rightIdx]) > 0
    ) {
      smallestIdx = rightIdx;
    }

    if (smallestIdx !== idx) {
      this.swap(idx, smallestIdx);
      this.heapifyDown(smallestIdx);
    }
  }

  print() {
    console.log(this.heap);
  }

  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  peek() {
    if (this.heap.length === 0) {
      return null;
    }

    return this.heap[0];
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  size() {
    return this.heap.length;
  }

  parent(idx) {
    return Math.floor((idx - 1) / 2);
  }

  leftChildIdx(idx) {
    return 2 * idx + 1;
  }

  rightChildIdx(idx) {
    return 2 * idx + 2;
  }

  remove(val) {
    let idx = 0;

    for (let i = 0; i < this.heap.length; i++) {
      if (this.heap[i] === val) {
        idx = i;
        break;
      }
    }

    this.swap(idx, this.heap.length - 1);
    this.heap.pop();
    this.heapifyDown(idx);
  }
}

class PriorityExpiryCache {
  constructor(max) {
    this.maxSize = max;
    this.currSize = 0;
    this.pqExpiry = new PriorityQueue(
      (a, b) => a.value.expiry - b.value.expiry
    );
    this.pqPriority = new PriorityQueue(
      (a, b) => a.value.priority - b.value.priority
    );
    this.keyToNode = new Map();
    this.priorityToList = new Map();
  }

  setItem(item, currentTime) {
    if (this.maxSize === this.currSize) {
      this.evictItem(currentTime);
    }

    this.currSize++;
    let dlist = null;

    if (!this.priorityToList.has(item.priority)) {
      dlist = new DoublyLinkedList();
      this.priorityToList.set(item.priority, dlist);
    } else {
      dlist = this.priorityToList.get(item.priority);
    }

    const newNode = new Node(item);
    dlist.addNodeFront(newNode);
    this.keyToNode.set(item.key, newNode);

    this.pqExpiry.insert(newNode);
    this.pqPriority.insert(newNode);
  }

  getItem(key) {
    if (!this.keyToNode.has(key)) {
      return null;
    }

    let node = this.keyToNode.get(key);
    let dlist = this.priorityToList.get(node.value.priority);
    let dNode = dlist.removeNode(node);
    dlist.addNodeFront(dNode);
  }

  evictItem(currentTime) {
    if (this.pqExpiry.peek().value.expiry < currentTime) {
      let evictNode = this.pqExpiry.extract();
      // remove from everywhere
      this.keyToNode.delete(evictNode.value.key);
      this.pqPriority.remove(evictNode);
      let dlist = this.priorityToList.get(evictNode.value.priority);
      dlist.removeNode(evictNode);

      if (dlist.size === 0) {
        this.priorityToList.delete(evictNode.value.priority);
      }
    } else {
      // remvove the LRU priority
      let priority = this.pqPriority.extract().value.priority;
      let dlist = this.priorityToList.get(priority);

      let priorityNode = dlist.removeLast();
      if (dlist.size === 0) {
        this.priorityToList.delete(priorityNode.value.priority);
      }
      this.keyToNode.delete(priorityNode.value.key);
      this.pqExpiry.remove(priorityNode);
    }
  }

  getKeys() {
    return this.keyToNode.keys();
  }
}

export default PriorityExpiryCache;
