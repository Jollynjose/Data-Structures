export interface node {
  data?: any;
  next?: any;
  previous?: any;
}

export interface Tail extends Omit<node, 'data'> {
  current: node;
}

export interface ILinkedList {
  head: node | null;
  Node: node | null;
  tail: Tail | null;
}
