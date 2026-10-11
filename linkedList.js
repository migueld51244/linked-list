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

  tail() {
    let currentNode = this.headNode;
    if (!currentNode) return undefined;
    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }
    return currentNode.value;
  }

  at(index) {
    let currentNode = this.headNode;
    if (!currentNode || index < 0) return undefined;

    let i = 0;
    while (currentNode) {
      if (i >= index) {
        return currentNode.value;
      }
      currentNode = currentNode.nextNode;
      i++;
    }
    return undefined;
  }
}

const list = new LinkedList();
