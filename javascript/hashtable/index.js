class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    append(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }


    values() {
        let values = [];
        let current = this.head;
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        return values;
    }
}

class Hashmap {
    constructor(size) {
        this.size = size;
        this.map = new Array(size);
    }
    hash(key) {
        const asciicodeSum = key.split("").reduce((acc, cur) => {
            return acc + cur.charCodeAt(0);
        }, 0);
        const multiPrime = asciicodeSum * 599;
        const theIndex = multiPrime % this.size;
        // console.log(theIndex)
        return theIndex;
    }
    set(key, value) {
        const hash = this.hash(key);

        if (!this.map[hash]) {
            this.map[hash] = new LinkedList();
        }
        this.map[hash].append({ [key]: value });
    }

    get(key) {
        const index = this.hash(key);
        let value;
        if (this.map[index]) {
            let current = this.map[index].head;

            while (current) {
                if (current.value[key]) value = current.value[key];
                current = current.next;
                // console.log("....", value);

            }
        }
        return value;
    }

    contain(key) {
        const index = this.hash(key);
        let bolleanValue = false;

        if (this.map[index]) {
            // console.log(this.map[index].head);
            let current = this.map[index].head;

            while (current) { // if I have a collision
                if (Object.keys(current.value) == key) {
                    return bolleanValue = true;
                }
                current = current.next;
            }
        }
        return bolleanValue;
    }

    keys() {
        let keys = [];

        this.map.map(e => {
            let current = e.head;
            while (current) {

                keys.push(Object.keys(current.value))
                current = current.next;
            }
        });


        return keys;
    }

    repeated(str) {

        let arr = str.toLowerCase().split(" ");
        // console.log(arr);
        let hash = new Hashmap();
        let isHere = false;
        let result;
        for (let i = 0; i < arr.length; i++) {
            isHere = hash.contain(arr[i]);
            hash.set(arr[i]);
            result = arr[i];
            // console.log(result);

            if (isHere) break;
        }
        return result;
    }

}

const myhashmap = new Hashmap();
myhashmap.set('a', 'AAAAAA');
myhashmap.set('b', 'BBBBBBB');
console.log(myhashmap.repeated('a b c d a a '));
// myhashmap.set('c', 'CCCCCCC');
// myhashmap.set('d', 'DDDDDDD');
// myhashmap.set('e', 'EEEEEEE');
// myhashmap.set('f', 'FFFFFFF');
// myhashmap.set('c', 'CCCCCC');

// console.log(myhashmap.map[8]);
// console.log(myhashmap.map[8].head.next);

// console.log(myhashmap);
// myhashmap.map.forEach((ll) => {
//     console.log(ll.values());
// })
// console.log(myhashmap.hash('a'));

module.exports = Hashmap;