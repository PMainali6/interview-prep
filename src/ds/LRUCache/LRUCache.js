class Node {
  constructor(val) {
    this.value = val;
    this.next = this.prev = null;
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

  removeNode(node) {
    if (this.size === 0) {
      return null;
    }

    if (this.size === 1) {
      this.head = this.tail = null;
      this.size = 0;
      node.next = node.prev = null;
      return node;
    }

    const nextNode = node.next;
    const prevNode = node.prev;

    if (nextNode) {
      nextNode.prev = prevNode;
    }

    if (prevNode) {
      prevNode.next = nextNode;
    }

    this.size--;
    node.next = node.prev = null;
    return node;
  }

  removeTail() {
    const tail = this.tail;
    const tailNode = this.removeNode(tail);
    return tailNode;
  }
}

class LRUCache {
  constructor(max) {
    this.maxSize = max;
    this.lookup = new Map();
    this.reverseLookup = new Map();
    this.dlist = new DoublyLinkedList();
  }

  set(key, value) {
    if (this.maxSize === this.dlist.size) {
      this.evict();
    }

    if (this.lookup.has(key)) {
      const existingNode = this.lookup.get(key);
      this.dlist.removeNode(existingNode);
    }

    const newNode = this.dlist.insert(value);
    this.lookup.set(key, newNode);
    this.reverseLookup.set(newNode, key);
  }

  get(key) {
    if (!this.lookup.has(key)) {
      return null;
    }

    const node = this.lookup.get(key);
    this.dlist.removeNode(node);
    this.dlist.insert(node.value);
    return node.value;
  }

  evict() {
    if (this.dlist.size === 0) {
      return null;
    }

    const evictNode = this.dlist.removeTail();
    const key = this.reverseLookup.get(evictNode);
    this.lookup.delete(key);
    this.reverseLookup.delete(evictNode);
  }

  print() {
    return this.lookup.keys();
  }
}

export default LRUCache;
