import LinkedList from './LinkedList';

const linkedList = new LinkedList<number>();

linkedList.insertAt(8, 0).insertLast(9).insertFirst(7).insertAt(322, 3);

console.log(linkedList.toString());

linkedList.removeFrom(linkedList.indexOf(9));

console.log(linkedList.toString());
