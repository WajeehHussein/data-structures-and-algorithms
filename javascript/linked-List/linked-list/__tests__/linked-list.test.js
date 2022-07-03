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
  test('insert into the linked list', () => {
    let list = new LinkedLilst();
    list.insert("value")
    expect(list.head.value).toEqual("value")
  })
  test('the head the first node in the linked list', () => {
    let list = new LinkedLilst();
    list.insert("value")
    list.insert("one")
    list.insert("two")
    list.insert("three")
    expect(list.head.value).toEqual("value")
  })
  test('insert multiple nodes into the linked list', () => {
    let list = new LinkedLilst();
    list.insert(1)
    list.insert(2)

    expect(list.insert(3)).toEqual({ "head": { "next": { "next": { "next": null, "value": 3 }, "value": 2 }, "value": 1 } })
  })
  test(' finding a value within the linked list that exists', () => {
    let list = new LinkedLilst();
    list.insert(1)
    list.insert(2)

    expect(list.includes(2)).toEqual(true)
  })
  test.skip('searching for a value in the linked list that does not exist', () => {
    let list = new LinkedLilst();
    list.insert(1)
    list.insert(2)

    expect(list.includes(3)).toEqual(true)
  })
  test('insert multiple nodes into the linked list', () => {
    let list = new LinkedLilst();
    list.insert(1)
    list.insert(2)
    list.insert(3)

    expect(list).toEqual({ "head": { "next": { "next": { "next": null, "value": 3 }, "value": 2 }, "value": 1 } })
  })

});
