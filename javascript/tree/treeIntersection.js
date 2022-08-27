const Hashmap = require("./hashTable");

const treeIntersection = (treeOne, treeTwo) => {
    const firstTree = treeOne.preOrder();
    const secondeTree = treeTwo.preOrder();

    const myhashmap = new Hashmap(2);

    firstTree.map(e => myhashmap.set("ele", e));
    secondeTree.map(e => myhashmap.set("ele", e));

    myhashmap.map.forEach(e => console.log(e.values()));

    return myhashmap;
};

module.exports = treeIntersection; 