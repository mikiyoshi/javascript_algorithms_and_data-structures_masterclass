/*
ADDING AN EDGE

{
  "Tokyo": [],
  "Dallas": [],
  "Aspen": []
}

        ⬇

g.addEdge("Tokyo", "Dallas")

        ⬇

{
  "Tokyo": ["Dallas"],
  "Dallas": ["Tokyo"],
  "Aspen": []
}

        ⬇

g.addEdge("Dallas", "Aspen")

        ⬇

{
  "Tokyo": ["Dallas"],
  "Dallas": ["Tokyo", "Aspen"],
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
}

let g = new Graph();
g.addVertex('Dallas');
g.addVertex('Tokyo');
g.addVertex('Aspen');

console.log('g: ', g);
// g:  Graph { adjacencyList: { Dallas: [], Tokyo: [], Aspen: [] } }

g.addEdge('Dallas', 'Tokyo');

console.log('g: ', g);
// g:  Graph {
//   adjacencyList: { Dallas: [ 'Tokyo' ], Tokyo: [ 'Dallas' ], Aspen: [] }
// }

g.addEdge('Dallas', 'Aspen');

console.log('g: ', g);
// g:  Graph {
//   adjacencyList: {
//     Dallas: [ 'Tokyo', 'Aspen' ],
//     Tokyo: [ 'Dallas' ],
//     Aspen: [ 'Dallas' ]
//   }
// }
