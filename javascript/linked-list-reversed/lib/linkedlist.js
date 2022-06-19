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



    reverse(n) {
        if (n === null) return;
        let prev = null
        let next = null
        let current = n
        while (current !== null) {
            next = current.next
            current.next = prev
            prev = current
            current = next
        }
        return prev
    }
}


module.exports = LinkedList1