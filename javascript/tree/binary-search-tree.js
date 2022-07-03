'use strict';
const Node = require('./Node');

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // add(value) {
    //     const node = this.root;
    //     if (node === null) {
    //         this.root = new Node(value)
    //         return;
    //     } else {
    //         const searchTree = function (node) {
    //             if (value < node.value) {
    //                 if (node.left === null) {
    //                     node.left = new Node(value);
    //                     return;
    //                 }
    //                 else if (node.left !== null) {
    //                     return searchTree(node.left)
    //                 }
    //             } else if (value > node.value) {
    //                 if (node.right === null) {
    //                     node.right = new Node(value);
    //                     return;
    //                 } else if (node.right !== null) {
    //                     return searchTree(node.right)
    //                 }
    //             } else { return null }
    //         }
    //     };
    //     return searchTree(node)
    // }

    insert(data) {
        var newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        };
    };
    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            };
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            };
        };
    };

    contains(value) {
        let currentNode = this.root;
        while (currentNode) {
            if (value === currentNode.value) return true;
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }
        return false
    }
    getRootNode() {
        return this.root;
    }
}

module.exports = BinarySearchTree