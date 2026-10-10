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
}
