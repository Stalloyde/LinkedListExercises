#!/usr/bin/node

function nodeFactory(value = null, next = null) {
  return { value, next };
}

function linkedList() {
  const head = nodeFactory(1);

  function append(value) {
    let node = head;
    while (node.next !== null) {
      node = node.next;
    }
    node.next = nodeFactory(value);
  }

  function prepend(value) {
    let newNode = nodeFactory(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  function size() {
    let node = this.head;
    let size = 1;
    while (node.next !== null) {
      size += 1;
      node = node.next;
    }
    return size;
  }

  function tail() {
    let node = this.head;
    while (node.next !== null) {
      node = node.next;

      if (node.next === null) {
        return node;
      }
    }
  }

  function at(index) {
    let node = this.head;
    let i = 0;
    while (node.next !== null) {
      if (index === i) {
        return node;
      }

      node = node.next;
      i += 1;
    }
  }

  function pop() {
    let node = this.head;
    while (node.next !== null) {
      node = node.next;

      if (node.next.next == null) {
        node.next = null;
      }
    }
  }

  function contains(value) {
    let node = this.head;
    while (node.next !== null) {
      node = node.next;
      if (node.value === value) return true;
    }
    return false;
  }

  function find(value) {
    let node = this.head;
    let i = 0;
    while (node.next !== null) {
      if (value === node.value) {
        return i;
      }

      node = node.next;
      i += 1;
    }
    return null;
  }

  function nodeToString() {
    let node = this.head;
    let string = '';
    while (node.next !== null) {
      string += `${node.value.toString()} -> `;
      node = node.next;
    }
    string += 'null';
    return string;
  }

  function insertAt(value, index) {
    const newNode = nodeFactory(value);
    let node = this.head;
    let i = 0;
    while (node.next !== null) {
      if (index - 1 === i) {
        newNode.next = node.next;
        node.next = newNode;
      }
      node = node.next;
      i += 1;
    }
  }

  function removeAt(index) {
    let node = this.head;
    let i = 0;
    while (node.next !== null) {
      if (index - 1 === i) {
        node.next = node.next.next;
      }
      node = node.next;
      i += 1;
    }
  }

  return {
    head,
    append,
    prepend,
    size,
    tail,
    at,
    pop,
    contains,
    find,
    nodeToString,
    insertAt,
    removeAt,
  };
}

const list = linkedList();
console.log(list.head);
