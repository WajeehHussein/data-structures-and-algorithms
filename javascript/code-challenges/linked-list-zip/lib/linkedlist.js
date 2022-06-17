'use strict';

const Node = require('./node')
class LinkedList1 {
    constructor() {
        this.head = null
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return this
        } else {
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next
            }
            currentNode.next = newNode
            return this
        }
    }

    printList() {
        let currentNode = this.head;
        while (currentNode != null) {
            console.log(`{ ${currentNode.value} } ->`);
            currentNode = currentNode.next;
        }
    }

    merge(L1, L2) {
        let lNext1, lNext2
        this.head = L1.head
        let currentNode = this.head
        // this.head = L1
        while (L1 != null && L2 != null) {
            lNext1 = L1.next;
            L1.next = L2
            L1 = lNext1

            lNext2 = L2.next;
            L2.next = lNext1
            L2 = lNext2
            currentNode = currentNode.next
        }
        return currentNode
    }
}


module.exports = LinkedList1








