'use strict';
const LinkedList = require('./lib/linkedlist');
const ll = new LinkedList();
ll.append(1)
ll.append(2)
ll.append(5)
ll.append(0)
ll.append(9)
ll.append(7)
ll.append(6)
ll.printList();

ll.insertAfter(0, 3)

console.log('---------------------------------------------------------------------------------------------------------');
ll.printList();
console.log(ll);