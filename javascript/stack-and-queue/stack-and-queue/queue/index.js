'use strict';
const Queue = require('./lib/Queue');
const newQueue = new Queue();

newQueue.enqueue(10);
newQueue.enqueue(20);
newQueue.enqueue(30);

newQueue.printList()
newQueue.dequeue();
console.log('--------------------------------------------------------------');
newQueue.printList()
