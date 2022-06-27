'use strict';
// const PseudoQueue = require('./lib/pseudo-queue');
// const pseudoQueue = new PseudoQueue();
// const Queue = require('./lib/Queue')
const Queue = require('./lib/AnimalShelter')

const shelter = new Queue()

shelter.enqueue("bird")
shelter.enqueue("cat")
shelter.enqueue("dog")
shelter.enqueue("bird")

// shelter.dequeue()

console.log('#################', shelter.front.value);
console.log('///////////////////', shelter.dequeue("bird"));


// console.log('///////////////////', shelter.dequeue());
// console.log('///////////////////', shelter.dequeue());
// console.log('///////////////////', shelter.dequeue());

shelter.printList()





