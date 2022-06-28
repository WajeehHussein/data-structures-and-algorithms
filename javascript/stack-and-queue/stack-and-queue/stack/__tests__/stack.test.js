'use strict';

const Stack = require('../lib/Stack');

describe('stack', () => {
    it('works', () => {
        expect(true).toBeTruthy();
    });
    test('push onto a stack', () => {
        let stack = new Stack()
        stack.push("value")
        expect(stack.top.value).toEqual("value")
    })
    test('push multiple values onto a stack', () => {
        let stack = new Stack()
        stack.push("value 1")
        stack.push("value 2")
        stack.push("value 3")
        expect(stack.top.value).toEqual("value 3")
    })
    test('pop off the stack', () => {
        let stack = new Stack()
        stack.push("value 1")
        stack.push("value 2")
        stack.push("value 3")
        stack.pop()
        expect(stack.top.value).toEqual("value 2")
    })
    test('empty a stack after multiple pops', () => {
        let stack = new Stack()
        stack.push("value 1")
        stack.push("value 2")
        stack.push("value 3")
        stack.pop()
        stack.pop()
        stack.pop()
        expect(stack.top).toEqual(null)
    })
    test('peek the next item on the stack', () => {
        let stack = new Stack()
        stack.push("value 1")
        stack.push("value 2")
        stack.peek()
        expect(stack.peek()).toEqual("value 2")
    })
    test('instantiate an empty stack', () => {
        let stack = new Stack()
        stack.peek()
        expect(stack.peek()).toEqual("stack is empty")
    })
    test('peek on empty stack raises exception', () => {
        let stack = new Stack()
        stack.push("value 1")
        stack.push("value 2")
        stack.pop()
        stack.pop()
        expect(stack.peek()).toEqual("stack is empty")
    })
});
