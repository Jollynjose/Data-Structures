import { ILinkedList, node, Tail } from '../types';

export class SinglyLinkedList implements ILinkedList {
  public head: node;
  public Node: node;
  public tail: Tail | null;
  constructor() {
    this.head = { data: null };
    this.tail = null;
    this.Node = {};
  }
  add(value: unknown) {
    if (this.head.data !== null) {
      const node: node = { data: value };
      if (!(this.Node === this.tail?.current)) {
        const lastNode = this.tail?.current;
        lastNode!.next = node;
      } else {
        this.Node.next = node;
      }
      this.tail = { current: node, next: null };
      this.Node = {...node, next: this.tail.next};
    } else {
      this.Node = { data: value, next: this.tail };
      this.head = this.Node;
      this.tail = { current: this.Node, next: null };
    }
  }

  search(value: unknown) {
    let node = this.head;
    while (true) {
      if (node.data === value) {
        return node.data;
      } else if (this.tail?.current === node) {
        return 'No existe';
      } else {
        node = node.next;
      }
    }
  }

  remove(value: unknown) {
    let node = this.head;
    let previousNode: node = this.head;
    while (true) {
      if (node.data === value) {
        if (previousNode === node) {
          delete node.data;
          return;
        } else {
          previousNode.next = node.next;
          if (this.tail?.current === node) {
            this.tail = { current: this.Node, next: null };
            this.Node = this.tail.current;
            console.log('working');
          } else {
            this.Node = node.next;
          }
          delete node.data;
          return;
        }
      } else if (this.tail?.current === node) {
        return 'No existe';
      } else {
        previousNode = node;
        node = node.next;
      }
    }
  }
}
