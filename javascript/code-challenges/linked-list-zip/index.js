'use strict';
const { LinkedList1, LinkedList2 } = require('./lib/linkedlist');

const linked1 = new LinkedList1();
const linked2 = new LinkedList2();
// const zipped = new merge();


linked1.append(1)
linked1.append(2)
linked1.append(3)
linked1.append(4)

linked2.append(9)
linked2.append(8)
linked2.append(7)
linked2.append(6)





console.log('linked list 1');
linked1.printList();

console.log('----------------------------------------------------------------------------------------------');
console.log('linked list 2');
linked2.printList();


console.log('----------------------------------------------------------------------------------------------');
console.log('merged');
// console.log(zipped);
// zipped.printList();







