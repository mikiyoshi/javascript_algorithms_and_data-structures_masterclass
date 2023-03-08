/*


DEPTH FIRST TRAVERSAL

    The function should accept a starting node
    Create an object to store visited nodes and an array to store the result
    Create a helper function which accepts a vertex
    The helper function should place the vertex it accepts into the visited object and push that vertex into the results
    Loop over all of the values in the adjacencyList for that vertex
    If any of those values have not been visited, invoke the helper function with that vertex
    return the array of results
深さ優先探索
この関数は，開始ノードを受け入れる必要があります
訪問したノードを格納するオブジェクトと、結果を格納する配列を作成する
頂点を受け取るヘルパー関数を作成します。
ヘルパー関数は、受け取った頂点を訪問したオブジェクトに配置し、その頂点を結果にプッシュする必要があります。
その頂点の adjacencyList にあるすべての値をループする。
これらの値のいずれかが訪問されていない場合、その頂点を指定してヘルパー関数を呼び出す
結果の配列を返す
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
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
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
      console.log('stack: ', stack);
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

let g = new Graph();

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

console.log('g: ', g);
// g:  Graph {
//   adjacencyList: {
//     A: [ 'B', 'C' ],
//     B: [ 'A', 'D' ],
//     C: [ 'A', 'E' ],
//     D: [ 'B', 'E', 'F' ],
//     E: [ 'C', 'D', 'F' ],
//     F: [ 'D', 'E' ]
//   }
// }

console.log('g.depthFirstIterative(): ', g.depthFirstIterative('A'));
// stack:  [ 'A' ]
// stack:  [ 'B', 'C' ]
// stack:  [ 'B', 'E' ]
// stack:  [ 'B', 'D', 'F' ]
// stack:  [ 'B', 'D' ]
// stack:  [ 'B' ]
// g.depthFirstIterative():  [ 'A', 'C', 'E', 'F', 'D', 'B' ]
