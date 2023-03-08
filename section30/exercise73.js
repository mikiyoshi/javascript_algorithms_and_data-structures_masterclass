/*
Graphs Exercise - addEdge

Implement the following methods on the Graph class - addVertex has been implemented for you

addEdge - this function should add an edge between two nodes in the graph and place each value of the nodes in each array for the value of the node in the adjacency list.
Graphクラスに以下のメソッドを実装する - addVertexは実装済みです。

addEdge - この関数は，グラフ内の2つのノード間にエッジを追加し，各配列のノードの値を隣接リストのノードの値として配置する必要があります．

    var graph = new Graph();
     
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
     
    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('B', 'D');
    graph.addEdge('C', 'D');
     
    graph.adjacencyList['A']; // contains both ('B', 'C')
    graph.adjacencyList['B']; // contains both ('A', 'D')
    graph.adjacencyList['C']; // contains both ('A', 'D')
    graph.adjacencyList['D']; // contains both ('C', 'B')
*/
class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
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

console.log("('B', 'C'): ", graph.adjacencyList['A']); // contains both ('B', 'C')
console.log("('A', 'D'): ", graph.adjacencyList['B']); // contains both ('A', 'D')
console.log("('A', 'D'): ", graph.adjacencyList['C']); // contains both ('A', 'D')
console.log("('C', 'B'): ", graph.adjacencyList['D']); // contains both ('C', 'B')
