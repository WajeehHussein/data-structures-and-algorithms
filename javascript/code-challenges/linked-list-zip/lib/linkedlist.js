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



    zipLists(L1, L2) {
        let merged = new LinkedList1(); // new ll merged
        while (L1.head || L2.head) {    // or because if two ll not equal length
            if (L1.head.value) {
                merged.append(L1.head.value);   // append in merged array
                L1.head = L1.head.next;         // next pointer in ll
            }
            if (L2.head.value) {
                merged.append(L2.head.value);   // append in merged array
                L2.head = L2.head.next;         // next pointer in ll
            }
        }
        return merged;
    }
}


module.exports = LinkedList1