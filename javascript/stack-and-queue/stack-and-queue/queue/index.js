'use strict';
const Queue = require('./lib/Queue');
const newQueue = new Queue();

// console.log(newQueue.isEmpty());
newQueue.enqueue(10);
newQueue.enqueue(20);
newQueue.enqueue(30);
// console.log(newQueue.isEmpty());
console.log(newQueue.peek());

newQueue.dequeue();
console.log(newQueue.peek());