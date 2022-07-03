'use strict';
const Node = require('./node')

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode
            return this;
        } else {
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode
            return this;
        }
    }


    includes(value) {
        let currentNode = this.head
        while (currentNode) {
            if (value === currentNode.value) {
                return true
            }
            currentNode = currentNode.next;
        }
        return false
    }

    toString() {
        let currentNode = this.head;
        while (currentNode) {
            currentNode = currentNode.next;
        }
        return `${this.head} -> ${this.currentNode}`;
    }

}


module.exports = LinkedList;
