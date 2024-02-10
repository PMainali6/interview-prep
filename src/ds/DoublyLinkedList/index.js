export default function () {
  const dlist = new DoublyLinkedList();

  dlist.insert(1);
  dlist.insert(2);
  dlist.insert(3);
  dlist.insert(4);
  dlist.insert(5);
  dlist.insert(6);
  dlist.print();

  console.log(dlist.head);
  console.log(dlist.tail);
}

class Node {
  constructor(value) {
    this.value = value;
    this.prev = this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = this.tail = null;
    this.size = 0;
  }

  insert(value) {
    const newNode = new Node(value);

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
    if (this.size === 0) {
      return null;
    }

    if (this.size === 1) {
      const lastNode = this.tail;
      this.head = this.tail = null;
      this.size = 0;
      lastNode.next = lastNode.prev = null;
      return lastNode;
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

    const prevNode = node.prev;
    const nextNode = node.next;

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

  print() {
    let res = [];
    let temp = this.head;

    while (temp) {
      res.push(temp.value);
      temp = temp.next;
    }

    console.log(res);
  }
}
