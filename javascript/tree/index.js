'use strict';
// const BinaryTree = require('./binary-tree');
const BinarySearchTree = require('./binary-search-tree');
const newBST = new BinarySearchTree();
const Node = require('./Node');

// let tree = null;

// let one = new Node(1);
// let two = new Node(2);
// let three = new Node(3);
// let four = new Node(4);
// let five = new Node(5);
// let six = new Node(6);
// let seven = new Node(7);
// let eight = new Node(8);
// let nine = new Node(9);

// one.left = two;
// one.right = three;
// two.left = six;
// six.right = seven;
// seven.left = eight;
// seven.right = nine;
// three.left = four;
// three.right = five;

// tree = new BinaryTree(one);

// let preOrder = tree.preOrder();
// console.log('pre order: ', preOrder);
// //pre order >> 1 , 2 , 6 , 7 , 8 , 9 , 3 , 4 , 5

// let inOrder = tree.inOrder();
// console.log('in order: ', inOrder);
// //pre order >> 6 , 8 , 7 , 9 , 2 , 1 , 4 , 3 , 5


// let postOrder = tree.postOrder();
// console.log('post order: ', postOrder);
//pre order >> 8 , 9 , 7 , 6 , 2 , 4 , 5 , 3 , 1

newBST.insert(15);
newBST.insert(25);
newBST.insert(10);
newBST.insert(7);
newBST.insert(22);
newBST.insert(17);
newBST.insert(13);
newBST.insert(5);
newBST.insert(9);
newBST.insert(27);
console.log(newBST.contains(5));