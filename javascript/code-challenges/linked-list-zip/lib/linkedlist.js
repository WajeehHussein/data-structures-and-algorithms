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
}

class LinkedList2 {
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
}

class ZipLinkedList {
    constructor() {
        this.head = null
    }

    printList() {
        let currentNode = this.head;
        while (currentNode != null) {
            console.log(`{ ${currentNode.value} } ->`);
            currentNode = currentNode.next;
        }
    }
}


module.exports = {
    LinkedList1,
    LinkedList2,
    ZipLinkedList

}








