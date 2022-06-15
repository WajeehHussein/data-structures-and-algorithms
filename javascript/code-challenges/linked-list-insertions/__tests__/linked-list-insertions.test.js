'use strict';

const LinkedLilst = require('../lib/linkedlist');

describe('Linked List', () => {
    it('works', () => {
        expect(true).toBeTruthy();
    });
    test(' an empty linked list', () => {
        let list = new LinkedLilst();
        expect(list.head).toBeNull()
    })

    test('add a node to the end of the linked list', () => {
        let list = new LinkedLilst();
        list.append(1)
        list.append(2)

        expect(list.append(3)).toEqual({ "head": { "next": { "next": { "next": null, "value": 3 }, "value": 2 }, "value": 1 } })
    })

    test('insert multiple nodes into the linked list', () => {
        let list = new LinkedLilst();
        list.append(1)
        list.append(2)
        list.append(3)

        expect(list).toEqual({ "head": { "next": { "next": { "next": null, "value": 3 }, "value": 2 }, "value": 1 } })
    })

    test('insert a node before a node located i the middle of a linked list', () => {
        let list = new LinkedLilst();
        list.append(1)
        list.append(2)
        list.insertBefore(2, 0)

        expect(list).toEqual({ "head": { "next": { "next": { "next": null, "value": 2 }, "value": 0 }, "value": 1 } })

    })
    test('insert after a node in the middle of the linked list', () => {
        let list = new LinkedLilst();
        list.append(1)
        list.append(2)
        list.insertAfter(1, 0)

        expect(list).toEqual({ "head": { "next": { "next": { "next": null, "value": 2 }, "value": 0 }, "value": 1 } })

    })
    test('insert after a node in the middle of the linked list', () => {
        let list = new LinkedLilst();
        list.append(1)
        list.append(2)
        list.insertAfter(2, 0)

        expect(list).toEqual({ "head": { "next": { "next": { "next": null, "value": 0 }, "value": 2 }, "value": 1 } })

    })


});