import Node from './Node';

class LinkedList<T> {
  private _head: Node<T> | null = null;
  private _tail: Node<T> | null = null;
  private _length: number = 0;

  get size() {
    return this._length;
  }

  insertAt(value: T, index: number) {
    if (index < 0 || index > this._length) {
      throw new Error('Index out of list range')
    }

    if (index === 0) {
      return this.insertFirst(value);
    }

    if (index === this._length) {
      return this.insertLast(value);
    }

    const node = new Node(value);
    let current = this._head;
    let counter = index;

    while (counter > 0) {
      current = current.next;
      counter -= 1;
    }

    node.prev = current.prev;
    node.next = current;
    current.prev.next = node;
    current.prev = node;

    this._length += 1;

    return this;
  }

  insertLast(value: T) {
    const node = new Node(value);

    if (this._length === 0) {
      this._head = node;
      this._tail = node;
    } else {
      this._tail.next = node;
      node.prev = this._tail;
      this._tail = node;
    }

    this._length += 1;

    return this;
  }

  insertFirst(value: T) {
    const node = new Node(value);

    if (this._length === 0) {
      this._head = node;
      this._tail = node;
    } else {
      this._head.prev = node;
      node.next = this._head;
      this._head = node;
    }

    this._length += 1;

    return this;
  }

  removeFrom(index: number) {
    if (index < 0 || index > this._length) {
      throw new Error('Index out of list range')
    }

    if (index === 0) {
      return this.removeFirst();
    }

    if (index === this._length) {
      return this.removeLast();
    }

    let current = this._head;
    let counter = index;

    while (counter > 0) {
      current = current.next;
      counter -= 1;
    }

    current.prev.next = current.next;
    current.next.prev = current.prev;

    this._length -= 1;

    return this;
  }

  removeLast() {
    if (this._length === 1) {
      this._head = null;
      this._tail = null;
    } else {
      this._tail = this._tail.prev;
      this._tail.next = null;
    }

    this._length -= 1;

    return this;
  }

  removeFirst() {
    if (this._length === 1) {
      this._head = null;
      this._tail = null;
    } else {
      this._head = this._head.next;
      this._head.prev = null;
    }

    this._length -= 1;

    return this;
  }

  isEmpty() {
    return this._length === 0;
  }

  clear() {
    this._head = null;
    this._tail = null;
    this._length = 0;
  }

  indexOf(value: T) {
    let index = 0;
    let current = this._head;

    while (current) {
      if (current.value === value) {
        return index;
      }

      index += 1;
      current = current.next;
    }

    return -1;
  }

  get(index: number) {
    if (index < 0 || index > this._length) {
      throw new Error('Index out of list range')
    }

    if (index === 0) {
      return this._head;
    }

    if (index === this._length) {
      return this._tail;
    }

    let current = this._head;
    let counter = index;

    while (counter > 0) {
      current = current.next;

      counter -= 1;
    }

    return current;
  }

  toString = () => {
    let current = this._head;
    let result = '';

    while (current) {
      result += `=[${current.value}]=`;

      current = current.next;
    }

    return result;
  }
}

export default LinkedList;
