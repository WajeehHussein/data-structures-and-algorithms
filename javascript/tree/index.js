'use strict';
// const BinaryTree = require('./binary-tree');
const BinarySearchTree = require('./binary-search-tree');
// const BST = new BinarySearchTree();
const Node = require('./Node');
const treeify = require("treeify")

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

// let tree2=new BTS(one);
// tree.contains(1);
// tree2.add(10);
// console.log(tree.preOrder());//pre order > 1 , 2 , 6 , 7 , 8 , 9 , 3 , 4 , 5
// console.log(tree.inOrder());
// console.log(tree.postOrder());//pre order > 8 , 9 , 7 , 6 , 2 , 4 , 5 , 3 , 1

let one = new Node(4);
let two = new Node(2);
let three = new Node(5);
let four = new Node(1);
let five = new Node(3);
let six = new Node(6);

let tree2 = new BinarySearchTree(one);
one.left = two;
one.right = three;
two.left = four;
two.right = five;
three.right = six;

// console.log({ tree2 });
tree2.add(20)
console.log(treeify.asTree(tree2, true))
console.log(tree2.contains(50));
console.log(tree2.contains(5));
