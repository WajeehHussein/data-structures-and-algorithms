'use strict';

const Queue = require('../lib/Queue');

describe('queue', () => {
    it('works', () => {
        expect(true).toBeTruthy();
    });

    test('enqueue into a queue1', () => {
        let queue = new Queue()
        queue.enqueue("value")
        expect(queue.front.value).toEqual("value")
    })
    test('enqueue multiple values into a queue', () => {
        let queue = new Queue()
        queue.enqueue("value 1")
        queue.enqueue("value 2")
        queue.enqueue("value 3")
        expect(queue.rear.value).toEqual("value 3")
    })
    test('dequeue out of a queue the expected value', () => {
        let queue = new Queue()
        queue.enqueue("value 1")
        queue.enqueue("value 2")
        queue.enqueue("value 3")
        queue.dequeue()
        expect(queue.front.value).toEqual("value 2")
    })
    test('peek into a queue, seeing the expected value', () => {
        let queue = new Queue()
        queue.enqueue("value 1")
        queue.enqueue("value 2")
        queue.peek()
        expect(queue.peek()).toEqual("value 1")
    })
    test('empty a queue after multiple dequeues', () => {
        let queue = new Queue()
        queue.enqueue("value 1")
        queue.enqueue("value 2")
        queue.enqueue("value 3")
        queue.dequeue()
        queue.dequeue()
        queue.dequeue()
        expect(queue.front).toEqual(null)
    })
    test('instantiate an empty queue', () => {
        let queue = new Queue()
        queue.peek()
        expect(queue.peek()).toEqual("queue is empty")
    })
    test('peek on empty queue raises exception', () => {
        let queue = new Queue()
        queue.enqueue("value 1")
        queue.enqueue("value 2")
        queue.dequeue()
        queue.dequeue()
        expect(queue.peek()).toEqual("queue is empty")
    })
});
