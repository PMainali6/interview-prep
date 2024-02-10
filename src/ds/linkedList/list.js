function createNode(value) {
  return { value, next: undefined };
}

class LinkedList {
  constructor() {
    this.head = undefined;
  }

  insert(value) {
    const newNode = createNode(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    const head = this.head;
    newNode.next = head;
    this.head = newNode;
  }

  print() {
    let temp = this.head;

    console.log("Linked List: ");
    while (temp !== undefined) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  getHead() {
    return this.head;
  }
}

export default LinkedList;
