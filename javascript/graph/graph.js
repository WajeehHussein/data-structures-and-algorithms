'use strict';
const Vertex = require('./vertex');
const Edge = require('./edge');
const Queue = require('./Queue/queue')

class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
        this.adjacencyList.set(vertex, []);
    }
    addDirectedEdge(start, end, weight) {
        if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
            console.log('VERTEX DOES NOT EXIST');
            return;
        }
        else {
            const adjacentVertex = this.adjacencyList.get(start);
            adjacentVertex.push(new Edge(end, weight));

            // let edge = new Edge(end, weight);
            // adjacentVertex.push(edge);
        }

    }
    get(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            console.log("Vertex dose not exist or invalid vertex");
            return;
        }
        return this.adjacencyList.get(vertex);
    }


    BFS(vertex) {
        let arr = new Array();
        let visited = new Set();
        let search = new Queue();
        visited.add(vertex)
        search.enqueue(vertex)
        while (search.length) {
            let start = search.dequeue()
            arr.push(start.value)
            const graph = this.adjacencyList.get(start)
            if (graph) {
                for (const node of graph) {
                    if (visited.has(node.vertex)) continue
                    else {
                        visited.add(node.Vertex)
                        search.enqueue(node.vertex)
                    }
                }
            }
        }
        return arr;
    }
}

const myGraph = new Graph();

const zero = new Vertex(0);
const one = new Vertex(1);
const two = new Vertex(2);
const three = new Vertex(3);
const four = new Vertex(4);
const five = new Vertex(5);
// const seven = new Vertex(5);


myGraph.addVertex(zero)
myGraph.addVertex(one)
myGraph.addVertex(two)
myGraph.addVertex(three)
myGraph.addVertex(four)
myGraph.addVertex(five)

myGraph.addDirectedEdge(zero, two);
myGraph.addDirectedEdge(two, four);
myGraph.addDirectedEdge(two, three);
myGraph.addDirectedEdge(four, five);
myGraph.addDirectedEdge(zero, zero);
console.log(myGraph.BFS(zero))
// myGraph.addDirectedEdge(seven, two);



// for (const [k, v] of myGraph.adjacencyList.entries()) {
//     console.log(k, v);
// }
// console.log(myGraph);