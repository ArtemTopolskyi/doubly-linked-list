class Node<T> {
  next: Node<T> | null = null;
  prev: Node<T> | null = null;
  _value: T;

  constructor(value: T) {
    this._value = value;
  }

  get value() {
    return this._value;
  }
}

export default Node;
