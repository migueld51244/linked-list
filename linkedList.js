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

  pop() {
    let currentNode = this.headNode;
    if (!currentNode) return undefined;
    const nextNode = currentNode.nextNode;
    this.headNode = nextNode;
    return currentNode.value;
  }

  contains(value) {
    let currentNode = this.headNode;

    while (currentNode) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  findIndex(value) {
    let index = 0;
    let currentNode = this.headNode;

    while (currentNode) {
      if (currentNode.value === value) {
        return index;
      }
      currentNode = currentNode.nextNode;
      index++;
    }
    return -1;
  }

  toString() {
    let currentNode = this.headNode;
    let result = "";
    if (!currentNode) return result;
    while (currentNode) {
      result += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }
    return result + "null";
  }

  insertAt(index, ...values) {
    if (index < 0) throw new RangeError("The index must be at least 0");
    if (index > this.size())
      throw new RangeError("The index exceeds the list size");
    if (values.length === 0) return;

    let firstInserted = null;
    let lastInserted = null;
    for (const value of values) {
      const newNode = new Node();
      newNode.value = value;
      if (!firstInserted) {
        firstInserted = newNode;
      } else {
        lastInserted.nextNode = newNode;
      }
      lastInserted = newNode;
    }

    if (index === 0) {
      lastInserted.nextNode = this.headNode;
      this.headNode = firstInserted;
      return;
    }

    let currentNode = this.headNode;
    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.nextNode;
    }

    lastInserted.nextNode = currentNode.nextNode;
    currentNode.nextNode = firstInserted;
  }
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.insertAt(1, 1.5, 1.6, 1.7);
console.log(list.toString());
