'use strict';
const LinkedList = require('./lib/linkedlist');
const ll = new LinkedList();
ll.insert(1);
ll.insert(2);
ll.insert(5);



console.log(ll);
console.log(ll.includes(7));
console.log(ll.insert(5));
// console.log(ll.toString());
