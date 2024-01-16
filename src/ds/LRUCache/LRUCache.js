function createNode(value) {
  return { value, next: undefined, prev: undefined };
}

class LRUCache {
  constructor(capacity) {
    this.head = undefined;
    this.tail = undefined;
    this.capacity = capacity;
    this.length = 0;
    this.lookup = new Map();
    this.reverseLookup = new Map();
  }

  get(key) {
    let node = this.lookup.get(key);

    if (!node) {
      return;
    }

    this.prepend(node);
    this.detach(node);

    return node.value;
  }

  set(key, value) {
    let node = this.lookup.get(key);

    if (!node) {
      let node = createNode(value);
      this.length++;

      this.prepend(node);
      this.trimCache();

      this.lookup.set(key, node);
      this.reverseLookup.set(node, key);
    } else {
      this.detach(node);
      this.prepend(node);
      node.value = value;
    }
  }

  prepend(node) {
    if (!this.head) {
      this.head = this.tail = node;
      return;
    }

    const head = this.head;

    node.next = head;
    head.prev = node;
    this.head = node;
  }

  detach(node) {
    if (this.length === 0) {
      return;
    }

    if (this.head === node) {
      this.head = node.next;
    }

    if (this.tail === node) {
      this.tail = node.prev;
    }

    if (node.prev) {
      node.prev.next = node.next;
    }

    if (node.next) {
      node.next.prev = node.prev;
    }

    node.next = node.prev = undefined;
  }

  trimCache() {
    if (this.length <= this.capacity) {
      return;
    }

    const tailNode = this.tail;
    const tailKey = this.reverseLookup.get(tailNode);

    this.detach(tailNode);
    this.lookup.delete(tailKey);
    this.reverseLookup.delete(tailNode);
    this.length--;
  }

  print() {
    console.log("====================");
    this.lookup.forEach((node, key) => {
      console.log(`${key}: ${node.value}`);
    });
  }
}

export default LRUCache;
