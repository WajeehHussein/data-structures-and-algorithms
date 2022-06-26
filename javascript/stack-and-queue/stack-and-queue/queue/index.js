'use strict';
// const PseudoQueue = require('./lib/pseudo-queue');
// const pseudoQueue = new PseudoQueue();
// const Queue = require('./lib/Queue')
const Queue = require('./lib/AnimalShelter')

const shelter = new Queue()

shelter.enqueue("dog")
shelter.enqueue("cat")
shelter.enqueue("dog")
shelter.enqueue(5)

// console.log('#################', shelter.front.value);
// console.log('///////////////////', shelter.dequeue());
// console.log('///////////////////', shelter.dequeue());
// console.log('///////////////////', shelter.dequeue());
// console.log('///////////////////', shelter.dequeue());

shelter.printList()





