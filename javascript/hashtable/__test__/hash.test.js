'use strict';

const Hashmap = require("../index")

const myhashmap = new Hashmap(10);

describe("Hash Table", () => {
    beforeAll(() => {

        myhashmap.set("ali", "aaa");
        myhashmap.set("ahmad", "bbb");
        myhashmap.set("mohammad", "ccc");
        myhashmap.set("wajeeh", "ddd");
        myhashmap.set("issam", "eee");
    })

    test("Retrieving based on a key returns the value stored", () => {

        expect(myhashmap.get("wajeeh")).toBe("ddd")
    })

    test("Successfully returns null for a key that does not exist in the hashtable", () => {

        expect(myhashmap.get("wajeeeeh")).toBe(undefined)
    })

    test("Successfully returns a list of all unique keys that exist in the hashtable", () => {

        expect(myhashmap.keys()).toStrictEqual([
            ["ali"],
            ['wajeeh'],
            ['ahmad'],
            ['mohammad'],
            ['issam'],
        ])
    })
    test("Successfully handle a collision within the hashtable", () => {
        myhashmap.set("issam", "mmm");
        expect(myhashmap.keys()).toStrictEqual([
            ["ali"],
            ['wajeeh'],
            ['ahmad'],
            ['mohammad'],
            ['issam'],
            ['issam'],
        ])
    })
    test("Successfully retrieve a value from a bucket within the hashtable that has a collision", () => {

        expect(myhashmap.get("issam")).toBe("mmm")
    })

})