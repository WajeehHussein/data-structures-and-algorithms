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

// let binaryTree=new BTS(one);
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

let f1 = new Node("folder");
let f2 = new Node(".js");
let f3 = new Node(".sql");
let f4 = new Node("folder");
let f5 = new Node(".java");
let f6 = new Node("folder");

let f10 = new Node("folder");
let f20 = new Node(".js");
let f30 = new Node(".sql");
let f40 = new Node("folder");
let f50 = new Node(".java");
let f60 = new Node("folder");

let binaryTree = new BinarySearchTree(one);
one.left = two;
one.right = three;
two.left = four;
two.right = five;
three.right = six;

let folderTree1 = new BinarySearchTree(f1);
f1.left = f2;
f1.right = f3;
f2.left = f4;
f2.right = f5;
f3.right = f6;

let folderTree2 = new BinarySearchTree(f10);
f10.left = f20;
f10.right = f30;
f20.left = f40;
f20.right = f50;
f30.right = f60;

// console.log({ binaryTree });
// binaryTree.add(20)
// console.log(treeify.asTree(binaryTree, true))
console.log(binaryTree.contains(50));
console.log(binaryTree.contains(5));
console.log('/////max', binaryTree.findMax());
console.log(binaryTree.breadthFirst());
console.log("$$$$$$$", binaryTree.sumOfAllOdd());
console.log('///////////////////////////////////////////////////////////////////////////////////////');
console.log("fooooolder", folderTree1.compareDirectories(folderTree1, folderTree2));
console.log(folderTree1.treeAsArray());

// console.log("/********************", folderTree1.isSameStructure(folderTree1, folderTree1));
