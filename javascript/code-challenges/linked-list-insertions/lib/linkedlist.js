'use strict';
const Node = require('./node')

class LinkedList {
    constructor() {
        this.head = null
    }

    append(value) {
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


    insertAfter(value, newValue) {
        let node = this.head;
        while (node) {
            if (node.value === value) {
                let newNode = new Node(newValue);
                newNode.next = node.next
                node.next = newNode
                node = null;
            } else {
                node = node.next;
            }
        }
    }


    printList() {
        let tnode = this.head;
        while (tnode != null) {
            console.log(tnode.value + " ");
            tnode = tnode.next;
        }
    }

}


module.exports = LinkedList;