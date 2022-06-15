'use strict';
const LinkedList = require('./lib/linkedlist');
const ll = new LinkedList();
ll.append(1)
ll.append(2)
ll.append(5)
ll.append(0)

ll.printList();

ll.insertAfter(5, 3)
console.log('---------------------------------------------------------------------------------------------------------');
console.log('insert After 5');
ll.printList();
console.log('---------------------------------------------------------------------------------------------------------');
console.log('insert Before 2');
ll.insertBefore(2, 4);
ll.printList();
console.log('---------------------------------------------------------------------------------------------------------');


