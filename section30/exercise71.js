/*
Graphs Exercise - removeVertex

Implement the following methods on the Graph class, removeEdge has been implemented for you.

removeVertex - this function should remove the node in the array of nodes and also remove all edges that the removed node previously contained.
Graphクラスに以下のメソッドを実装します。removeEdgeはすでに実装されています。

removeVertex - この関数は、ノードの配列からノードを削除し、
削除されたノードが以前に含んでいたすべてのエッジも削除する必要があります。

    var graph = new Graph();
     
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
     
    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('B', 'D');
    graph.addEdge('C', 'D');
     
    graph.removeVertex('C');
    graph.removeVertex('B');
     
    graph.adjacencyList['A']; // still exists
    graph.adjacencyList['D']; // still exists
*/
class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  // addVertex(vertex) {
  //   this.adjacencyList[vertex] = [];
  // }
  // addEdge(vertex1, vertex2) {
  //   this.adjacencyList[vertex1].push(vertex2);
  //   this.adjacencyList[vertex2].push(vertex1);
  // }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  // removeEdge(vertex1, vertex2) {
  //   while (this.adjacencyList[vertex].length) {
  //     const adjacentVertex = this.adjacencyList[vertex].pop();
  //     this.removeEdge(adjacentVertex, vertex);
  //   }
  //   delete this.adjacencyList[vertex];
  // }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
}

var graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');

console.log('adjacency list: ', graph.adjacencyList);
graph.removeVertex('C');
console.log('adjacency list: ', graph.adjacencyList);
graph.removeVertex('B');

console.log('adjacency list: ', graph.adjacencyList); // still exists
console.log('still exists: ', graph.adjacencyList['A']); // still exists
console.log('still exists: ', graph.adjacencyList['D']); // still exists
console.log('undefined: ', graph.adjacencyList['B']); // undefined
console.log('undefined: ', graph.adjacencyList['C']); // undefined
// adjacency list:  { A: [ 'B', 'C' ], B: [ 'A', 'D' ], C: [ 'A', 'D' ], D: [ 'B', 'C' ] }
// adjacency list:  { A: [ 'B' ], B: [ 'A', 'D' ], D: [ 'B' ] }
// adjacency list:  { A: [], D: [] }
// still exists:  []
// still exists:  []
// still exists:  undefined
// still exists:  undefined
