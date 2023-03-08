/*
Graphs - DFS Exercise

Implement the following method on the Graph class:

depthFirstSearch - this function should return an array of nodes visited using DFS. You can do this iteratively (using a stack) or recursively, but note the order of the results will be different. The test cases should accommodate this.
Graphクラスで以下のメソッドを実装します。

depthFirstSearch - この関数は、DFSを使用して訪問したノードの配列を返す必要があります。この関数は、DFSを使用して訪問したノードの配列を返す必要があり、反復的（スタックを使用）または再帰的に行うことができます。テストケースはこれに対応する必要があります。

    var graph = new Graph();
     
    graph.addVertex('S');
    graph.addVertex('P');
    graph.addVertex('U');
    graph.addVertex('X');
    graph.addVertex('Q');
    graph.addVertex('Y');
    graph.addVertex('V');
    graph.addVertex('R');
    graph.addVertex('W');
    graph.addVertex('T');
     
    graph.addEdge('S','P');
    graph.addEdge('S','U');
     
    graph.addEdge('P','X');
    graph.addEdge('U','X');
     
    graph.addEdge('P','Q');
    graph.addEdge('U','V');
     
    graph.addEdge('X','Q');
    graph.addEdge('X','Y');
    graph.addEdge('X','V');
     
    graph.addEdge('Q','R');
    graph.addEdge('Y','R');
     
    graph.addEdge('Y','W');
    graph.addEdge('V','W');
     
    graph.addEdge('R','T');
    graph.addEdge('W','T');
     
    graph.depthFirstSearch('S');
     
    **
     * results:
     *
     * ["S", "P", "X", "U", "V", "W", "Y", "R", "Q", "T"] // recursive version
     * ["S", "U", "V", "W", "T", "R", "Q", "Y", "X", "P"] // iterative (stack) version
     *
     **
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
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }
  // depthFirstSearch(start) {}
  depthFirstRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start);

    return result;
  }
  depthFirstIterative(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }
}

// console.log(': ');
var graph = new Graph();

graph.addVertex('S');
graph.addVertex('P');
graph.addVertex('U');
graph.addVertex('X');
graph.addVertex('Q');
graph.addVertex('Y');
graph.addVertex('V');
graph.addVertex('R');
graph.addVertex('W');
graph.addVertex('T');

graph.addEdge('S', 'P');
graph.addEdge('S', 'U');

graph.addEdge('P', 'X');
graph.addEdge('U', 'X');

graph.addEdge('P', 'Q');
graph.addEdge('U', 'V');

graph.addEdge('X', 'Q');
graph.addEdge('X', 'Y');
graph.addEdge('X', 'V');

graph.addEdge('Q', 'R');
graph.addEdge('Y', 'R');

graph.addEdge('Y', 'W');
graph.addEdge('V', 'W');

graph.addEdge('R', 'T');
graph.addEdge('W', 'T');

console.log(
  '["S", "P", "X", "U", "V", "W", "Y", "R", "Q", "T"]: ',
  graph.depthFirstRecursive('S')
);
// results:
// ["S", "P", "X", "U", "V", "W", "Y", "R", "Q", "T"] // recursive version

console.log(
  '["S", "U", "V", "W", "T", "R", "Q", "Y", "X", "P"]: ',
  graph.depthFirstIterative('S')
);
// ["S", "U", "V", "W", "T", "R", "Q", "Y", "X", "P"] // iterative (stack) version
