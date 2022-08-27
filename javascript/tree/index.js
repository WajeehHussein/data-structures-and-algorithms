'use strict';
const BinaryTree = require('./binary-tree');
// const BinarySearchTree = require('./binary-search-tree');
// const BST = new BinarySearchTree();
const Node = require('./Node');
// const treeify = require("treeify");
const treeIntersection = require('./treeIntersection');
// const Hashmap = require('./hashTable')


let one = new Node(4);
let two = new Node(2);
let three = new Node(5);
let four = new Node(1);
let five = new Node(3);

let f1 = new Node(1);
let f2 = new Node(2);
let f3 = new Node(3);
let f4 = new Node(4);
let f5 = new Node(6);
// let f6 = new Node("folder");

// let f10 = new Node("folder");
// let f20 = new Node(".js");
// let f30 = new Node(".sql");
// let f40 = new Node("folder");
// let f50 = new Node(".java");
// let f60 = new Node("folder");

one.left = two;
one.right = three;
two.left = four;
two.right = five;
let binaryTree1 = new BinaryTree(one);

f1.left = f2;
f1.right = f3;
f2.left = f4;
f2.right = f5;
// f3.right = f6;
let binaryTree2 = new BinaryTree(f1);

treeIntersection(binaryTree1, binaryTree2)

// let folderTree2 = new BinarySearchTree(f10);
// f10.left = f20;
// f10.right = f30;
// f20.left = f40;
// f20.right = f50;
// f30.right = f60;

// console.log({ binaryTree });
// binaryTree.add(20)
// console.log(treeify.asTree(binaryTree, true))
// console.log(binaryTree.contains(50));
// console.log(binaryTree.contains(5));
// console.log('/////max', binaryTree.findMax());
// console.log(binaryTree.breadthFirst());
// console.log("$$$$$$$", binaryTree.sumOfAllOdd());
// console.log('///////////////////////////////////////////////////////////////////////////////////////');
// console.log("fooooolder", folderTree1.compareDirectories(folderTree1, folderTree2));
// console.log(folderTree1.treeAsArray());

// console.log("/********************", folderTree1.isSameStructure(folderTree1, folderTree1));
