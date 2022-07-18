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

    breadthFirst() {
        let result = [];
        let trackArr = [];

        trackArr.push(this.root);
        // if exist element in array keep in loop
        while (trackArr.length) {
            // go to node push left and right then go deeply
            let node = trackArr.shift();
            result.push(node.value);
            if (node.left) trackArr.push(node.left);
            if (node.right) trackArr.push(node.right);
        };

        return result;
    }

    fizzBuzz() {
        let currNode = (val) => {
            if (val % 3 == 0 && val % 5 == 0) return "fizz buzz";
            else if (val % 3 == 0) return "fizz";
            else if (val % 5 == 0) return "buzz";
            else return val;
        };
        let reverse = (node) => {
            if (node.right) {
                node.right.value = currNode(node.right.value);
                reverse(node.right);
            }
            if (node.left) {
                node.left.value = currNode(node.left.value);
                reverse(node.left);
            }
            node.value = currNode(node.value);
        };
        reverse(this.root);
        return this;
    }

    fizzBuzz() {
        let currNode = (val) => {
            if (val % 3 == 0 && val % 5 == 0) return "fizz buzz";
            else if (val % 3 == 0) return "fizz";
            else if (val % 5 == 0) return "buzz";
            else return val;
        };
        let reverse = (node) => {
            if (node.right) {
                node.right.value = currNode(node.right.value);
                reverse(node.right);
            }
            if (node.left) {
                node.left.value = currNode(node.left.value);
                reverse(node.left);
            }
            node.value = currNode(node.value);
        };
        reverse(this.root);
        return this;
    }


    sumOfAllOdd() {
        let sumOdd = (node, sum = 0) => {
            if (node === null) {
                return 0;
            } else {
                if (node.value % 2 != 0) {
                    sum += node.value;
                }
            }
            return sum + sumOdd(node.left) + sumOdd(node.right);
        }
        return sumOdd(this.root);
    }


    treeAsArray() {
        let result = [];
        let traverse = (node) => {
            if (node.left) traverse(node.left);
            result.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(this.root)
        return result;
    }

    compare(treeOne, treeTwo) {
        let sumOne = 0, sumTwo = 0, value = "";

        let reverse = (node) => {
            if (node.right) {
                value = String(node.right.value);
                if (value.includes('.')) sumOne++;
                reverse(node.right);
            }
            if (node.left) {
                value = String(node.left.value);
                if (value.includes('.')) sumOne++;
                reverse(node.left);
            }
        };
        reverse(treeOne.root);
        sumTwo = sumOne;
        reverse(treeTwo.root);
        if (sumOne == sumTwo) {
            return `Both trees contain ${sumOne} files.// true`
        } else {
            return `The first tree has ${sumOne} files, while the second only has ${sumTwo}. //false`
        }
    }

    compareDirectories(treeOne, treeTwo) {
        let arr1 = treeOne.treeAsArray();
        let arr2 = treeTwo.treeAsArray();
        let counterOne = 0, counterTwo = 0;
        arr1.filter(a => {
            if (a.includes('.')) counterOne++;
        });
        arr2.filter(a => {
            if (a.includes('.')) counterTwo++;
        });
        if (counterOne === counterTwo) return true;
        else return false;
    }
}

module.exports = BinarySearchTree