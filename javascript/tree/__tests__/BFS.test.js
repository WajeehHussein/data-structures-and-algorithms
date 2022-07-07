'use strict';
const Node = require('../Node')
const BST = require('../binary-search-tree')

describe("Breadth First", () => {
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
    test("breadth first", () => {
        expect(binaryTree.breadthFirst()).toStrictEqual([4, 2, 5, 1, 3, 6])
    })
})