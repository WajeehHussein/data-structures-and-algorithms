
'use strict';
const Node = require('./node')

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0
        this.tail = this.length;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode
            this.length++;
            return this;
        } else {
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode
            this.length++;
            return this;
        }
    }

    kthFromEnd(k) {
        let i = 1;
        let find = this.length - k - i;
        let current = this.head;
        if (k < this.length && k >= 0) {
            while (i <= find) {
                current = current.next;
                i++;
            }
            return current.value;
        } else return 'Exception'
    }

    printList() {
        let tnode = this.head;
        while (tnode != null) {
            console.log(`{ ${tnode.value} } ->`);
            tnode = tnode.next;
        }
    }
}

module.exports = LinkedList;


