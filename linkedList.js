class Node {
  constructor() {
    this.value = null;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.headNode = null;
  }

  append(value) {
    const newNode = new Node();
    newNode.value = value;

    if (!this.headNode) {
      this.headNode = newNode;
      return;
    }

    let currentNode = this.headNode;
    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = newNode;
  }

  prepend(value) {
    const newNode = new Node();
    newNode.value = value;

    if (!this.headNode) {
      this.headNode = newNode;
      return;
    }

    const nextNode = this.headNode;
    this.headNode = newNode;
    this.headNode.nextNode = nextNode;
  }

  size() {
    let length = 0;
    let currentNode = this.headNode;
    while (currentNode) {
      length++;
      currentNode = currentNode.nextNode;
    }
    return length;
  }

  head() {
    return this.headNode ? this.headNode.value : undefined;
  }
}

const list = new LinkedList();
list.append(10);
list.prepend(1);
console.log(list.head());
