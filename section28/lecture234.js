/*


HOW DOES GPS WORK?

Find the shortest path from Santiago to Antigua
GPSの仕組みは？

アンティグアからサンティアゴまでの最短経路を求めよ。 

OUR GRAPH CAN'T DO THIS YET!
うちのグラフはまだできない

Let's Write A Weighted Graph
重み付きグラフを書こう
*/
class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
}

var graph = new WeightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('A', 'B', 9);
graph.addEdge('A', 'C', 5);
graph.addEdge('B', 'C', 7);

console.log('graph: ', graph);
// graph:  WeightedGraph {
//   adjacencyList: {
//     A: [ [Object], [Object] ],
//     B: [ [Object], [Object] ],
//     C: [ [Object], [Object] ]
//   }
// }

console.log('graph.adjacencyList: ', graph.adjacencyList);
// graph.adjacencyList:  {
//   A: [ { node: 'B', weight: 9 }, { node: 'C', weight: 5 } ],
//   B: [ { node: 'A', weight: 9 }, { node: 'C', weight: 7 } ],
//   C: [ { node: 'A', weight: 5 }, { node: 'B', weight: 7 } ]
// }
