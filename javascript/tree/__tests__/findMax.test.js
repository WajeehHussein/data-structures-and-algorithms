'use strict';
const Node = require('../Node')
const BST = require('../binary-search-tree')

describe("Find max", () => {
    let binaryTree = null;
    beforeAll(() => {
        let one = new Node(4);
        let two = new Node(2);
        let three = new Node(5);
        let four = new Node(1);
        let five = new Node(3);
        let six = new Node(6);

        one.left = two;
        one.right = three;
        two.left = four;
        two.right = five;
        three.right = six;

        binaryTree = new BST(one);
    })
    test("Find Max", () => {
        expect(binaryTree.findMax()).toBe(6);

    })
})