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
    let parentIdx = this.parentIdx(idx);

    if (
      parentIdx >= 0 &&
      this.comparator(this.heap[parentIdx], this.heap[idx]) > 0
    ) {
      this.swap(parentIdx, idx);
      this.heapifyUp(parentIdx);
    }
  }

  extract() {
    if (this.heap.length === 0) {
      return null;
    }

    let node = this.heap[0];

    if (this.heap.length === 1) {
      return node;
    }

    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapifyDown(0);
    return node;
  }

  heapifyDown(idx) {
    let leftChildIdx = this.leftChildIdx(idx);
    let rightChildIdx = this.rightChildIdx(idx);

    let smallestIdx = idx;

    if (
      leftChildIdx < this.heap.length &&
      this.comparator(this.heap[smallestIdx], this.heap[leftChildIdx]) > 0
    ) {
      smallestIdx = leftChildIdx;
    }

    if (
      rightChildIdx < this.heap.length &&
      this.comparator(this.heap[smallestIdx], this.heap[rightChildIdx]) > 0
    ) {
      smallestIdx = rightChildIdx;
    }

    if (smallestIdx != idx) {
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
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  peek() {
    if (this.heap.length === 0) {
      return null;
    }
    return this.heap[0];
  }

  remove(item) {
    let idx = -1;
    for (let i = 0; i < this.heap.length; i++) {
      if (item === this.heap[i]) {
        idx = i;
        break;
      }
    }

    if (idx !== -1) {
      this.swap(idx, this.heap.length - 1);
      this.heap.pop();
      this.heapifyDown(idx);
    } else {
      return null;
    }
  }

  print() {
    console.log(this.heap);
  }
}

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
    this.next = this.prev = null;
    this.value = value;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = this.tail = null;
    this.size = 0;
  }

  insert(val) {
    const newNode = new Node(val);

    if (this.head === null) {
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

  removeLast() {
    if (this.tail === null) {
      return null;
    }

    if (this.size === 1) {
      const removeNode = this.tail;
      this.head = this.tail = null;
      this.size = 0;
      removeNode.next = removeNode.prev = null;
      return removeNode;
    }

    const tailNode = this.tail;
    this.tail = tailNode.prev;
    this.size--;
    tailNode.next = tailNode.prev = null;
    return tailNode;
  }

  removeNode(node) {
    if (this.size === 0) {
      return null;
    }

    if (this.head === node) {
      this.head = node.next;
    }

    if (this.tail === node) {
      this.tail = node.prev;
    }

    const nextNode = node.next;
    const prevNode = node.prev;

    if (prevNode) {
      prevNode.next = nextNode;
    }

    if (nextNode) {
      nextNode.prev = prevNode;
    }

    this.size--;
    node.next = node.prev = null;
    return node;
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

    if (this.priorityToList.has(item.priority)) {
      dlist = this.priorityToList.get(item.priority);
    } else {
      dlist = new DoublyLinkedList();
      this.priorityToList.set(item.priority, dlist);
    }

    let newNode = dlist.insert(item);
    this.keyToNode.set(item.key, newNode);

    this.pqExpiry.insert(newNode);
    this.pqPriority.insert(newNode);
  }

  getItem(key) {
    if (!this.keyToNode.has(key)) {
      return null;
    }

    let node = this.keyToNode.get(key);
    // remove this node from all place
    this.keyToNode.delete(key);
    this.pqExpiry.remove(node);
    this.pqPriority.remove(node);
    let dlist = this.priorityToList.get(node.value.priority);
    dlist.removeNode(node);
    // add the new node from the value
    const newNode = dlist.insert(node.value);
    this.keyToNode.set(key, newNode);
    this.pqExpiry.insert(newNode);
    this.pqPriority.insert(newNode);
  }

  evictItem(currentTime) {
    if (this.pqExpiry.peek().value.expiry < currentTime) {
      const expiryNode = this.pqExpiry.extract();
      // remove this node from all place
      this.keyToNode.delete(expiryNode.value.key);
      this.pqExpiry.remove(expiryNode);
      this.pqPriority.remove(expiryNode);
      let dlist = this.priorityToList.get(expiryNode.value.priority);
      dlist.removeNode(expiryNode);

      if (dlist.size === 0) {
        this.priorityToList.delete(expiryNode.value.priority);
      }
    } else {
      const priority = this.pqPriority.extract().value.priority;
      // const priority = extractNode.value.priority;
      // console.log("pro: ", priority);
      const dlist = this.priorityToList.get(priority);
      // console.log("dlist: ", dlist);
      const priorityNode = dlist.removeLast();
      if (dlist.size === 0) {
        this.priorityToList.delete(priority);
      }

      this.keyToNode.delete(priorityNode.value.key);
      this.pqExpiry.remove(priorityNode);
    }
    this.currSize--;
  }

  getKeys() {
    return this.keyToNode.keys();
  }
}

export default PriorityExpiryCache;
