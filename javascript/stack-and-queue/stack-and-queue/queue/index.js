'use strict';
const PseudoQueue = require('./lib/pseudo-queue');
const pseudoQueue = new PseudoQueue();

pseudoQueue.enqueue(10);
pseudoQueue.enqueue(20);
pseudoQueue.enqueue(30);
pseudoQueue.enqueue(40);
// pseudoQueue.dequeue(102);

// pseudoQueue.printList()

console.log('in stack -> ', pseudoQueue.pushStack.top);
console.log('--------------------------------------------------------------');
console.log('out stack -> ', pseudoQueue.popStack.top);



