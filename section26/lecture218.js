/*

REMOVING AN EDGE
端折り

{
  "Tokyo": ["Dallas"],
  "Dallas": ["Tokyo", "Aspen"],
  "Aspen": ["Dallas"]
}

            ⬇

g.removeEdge("Tokyo", "Dallas")

            ⬇

{
  "Tokyo": [],
  "Dallas": ["Aspen"],
  "Aspen": ["Dallas"]
}
*/
class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }
}

let g = new Graph();
g.addVertex('Dallas');
g.addVertex('Tokyo');
g.addVertex('Aspen');
g.addEdge('Dallas', 'Tokyo');
g.addEdge('Dallas', 'Aspen');

console.log('g: ', g);

g.removeEdge('Dallas', 'Aspen');

console.log('g: ', g);

g.removeEdge('Dallas', 'Tokyo');

console.log('g: ', g);

// g.removeEdge('LA', 'SF'); // これはデータがないのでエラー
