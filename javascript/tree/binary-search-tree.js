'use strict';
const Node = require('./Node');

class BinarySearchTree {
    constructor(root) {
        this.root = root;
    }

    add(value) {
        let newNode = new Node(value);
        // if tree empty
        if (!this.root) {
            return this.root = newNode;
        }
        let node = this.root;
        let insert = () => {
            if (value < node.value) {
                if (!node.left) {
                    return node.left = newNode;
                }
                // like go left
                node = node.left;
                insert();  // recirsion
            } else {
                if (!node.right) {
                    return node.right = newNode;
                }
                // like go right
                node = node.right;
                insert();  // recirsion
            }
        };
        insert();   // call function
    }

    contains(value) {
        let found = false;
        let search = (node) => {
            if (node.value === value) found = true;
            if (node.right) search(node.right);
            if (node.left) search(node.left);
        };
        search(this.root);
        return found;
    }
    findMax() {
        let max = this.root.value;
        let search = (node) => {
            if (node.value > max)
                return max = node.value;
            // search in right side 
            if (node.right) {
                if (node.right.value > max) max = node.right.value;
                // recursion (do right in deeply)
                search(node.right);
            }
            // search in left side
            if (node.left) {
                if (node.left.value > max) max = node.left.value;
                // go left
                search(node.left);
            }
        };
        search(this.root);
        return max;
    }

    getRootNode() {
        return this.root;
    }
}

module.exports = BinarySearchTree