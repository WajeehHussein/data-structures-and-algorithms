'use strict';
const LinkedList1 = require('./lib/linkedlist');

const linked1 = new LinkedList1();
const linked2 = new LinkedList1();
const linked3 = new LinkedList1();


linked1.append(1)
linked1.append(2)
linked1.append(3)
linked1.append(4)

linked2.append(9)
linked2.append(8)
linked2.append(7)
linked2.append(6)


linked3.merge(linked1, linked2)



// console.log('linked1', linked1);
// console.log('linked2', linked2);


console.log('linked list 1');
linked1.printList();

console.log('----------------------------------------------------------------------------------------------');
console.log('linked list 2');
linked2.printList();


console.log('----------------------------------------------------------------------------------------------');
console.log('merged');
linked3.printList();
// console.log('linked 333333333333333333', linked3);







