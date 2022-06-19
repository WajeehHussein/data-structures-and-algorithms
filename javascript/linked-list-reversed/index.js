'use strict';
const LinkedList1 = require('./lib/linkedlist');

const linked = new LinkedList1();



linked.append(1)
linked.append(2)
linked.append(3)
linked.append(4)










console.log('linked list');
linked.printList();


console.log('----------------------------------------------------------------------------------------------');
console.log('reversed');
let res = linked.reverse(linked.head)
console.log(res);
console.log(linked);
linked.printList()







