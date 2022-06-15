'use strict';
const LinkedList = require('./lib/linkedlist');
const ll = new LinkedList();
ll.append(1)
ll.append(2)
ll.append(5)
ll.append(9)
ll.append(3)
ll.append(0)


ll.printList();


console.log('---------------------------------------------------------------------------------------------------------');
console.log('kthFromEnd');
console.log(ll.kthFromEnd(6));
console.log('---------------------------------------------------------------------------------------------------------');
