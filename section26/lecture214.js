/*

ADDING A VERTEX

g.addVertex("Tokyo")

        ⬇

{
    "Tokyo": []
}
*/

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
}

var g = new Graph();
g.addVertex('Tokyo');
g.addVertex('San Francisco');

console.log('g: ', g);
console.log('g.adjacencyList: ', g.adjacencyList);
g.adjacencyList['Tokyo'].push('SOMETHING');
console.log('g.adjacencyList: ', g.adjacencyList);
g.addVertex('Tokyo');
console.log('g.adjacencyList: ', g.adjacencyList);
// g:  Graph { adjacencyList: { Tokyo: [], 'San Francisco': [] } }
// g.adjacencyList:  { Tokyo: [], 'San Francisco': [] }
// g.adjacencyList:  { Tokyo: [ 'SOMETHING' ], 'San Francisco': [] }
// g.adjacencyList:  { Tokyo: [ 'SOMETHING' ], 'San Francisco': [] }
