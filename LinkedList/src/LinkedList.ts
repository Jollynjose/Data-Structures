import { SinglyLinkedList } from './lists/Singly';

const singlyLinkedList = new SinglyLinkedList();

singlyLinkedList.add([1,5,6]);
console.log(singlyLinkedList.Node);
singlyLinkedList.add('Nodo1');
console.log(singlyLinkedList.Node);
singlyLinkedList.add('Nodo2');
console.log(singlyLinkedList.Node);
singlyLinkedList.add('Cola');
console.log(singlyLinkedList.Node);
singlyLinkedList.remove('Nodo1');
console.log(singlyLinkedList.Node);
singlyLinkedList.add('Nodo3');
console.log();
