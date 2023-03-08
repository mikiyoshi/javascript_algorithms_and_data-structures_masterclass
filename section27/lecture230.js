/*

BREADTH FIRST

    This function should accept a starting vertex
    Create a queue (you can use an array) and place the starting vertex in it
    Create an array to store the nodes visited
    Create an object to store nodes visited
    Mark the starting vertex as visited
    Loop as long as there is anything in the queue
    Remove the first vertex from the queue and push it into the array that stores nodes visited
    Loop over each vertex in the adjacency list for the vertex you are visiting.
    If it is not inside the object that stores nodes visited, mark it as visited and enqueue that vertex
    Once you have finished looping, return the array of visited nodes
ブレッドファースト
この関数は、開始頂点を受け取る必要があります。
キューを作成し（配列でも可）、開始頂点をそこに配置する
訪問したノードを格納するための配列を作成する
訪問したノードを格納するオブジェクトを作成する
開始頂点を訪問済みとしてマークする
キューに何かある限りループする
キューから最初の頂点を取り除き、訪問したノードを格納する配列にプッシュします。
訪問している頂点の隣接リストの各頂点に対してループをかける。
訪問したノードを保存するオブジェクトの中にない場合は、訪問済みとしてマークし、その頂点を待ち行列に入れます。
ループが終了したら、訪問したノードの配列を返します。
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
  breadthFirst(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;

    while (queue.length) {
      // console.log('queue: ', queue);
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
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

// QUEUE: [B, C]
// RESULT: [A]
// QUEUE: [C, D]
// RESULT: [A, B]
// QUEUE: [D, E]
// RESULT: [A, B, C]
// QUEUE: [E, F]
// RESULT: [A, B, C, D]
// QUEUE: [F]
// RESULT: [A, B, C, D, E]
// QUEUE: []
// RESULT: [A, B, C, D, E, F]
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
console.log('g.breadthFirst(): ', g.breadthFirst('A'));
// queue:  [ 'A' ]
// queue:  [ 'B', 'C' ]
// queue:  [ 'C', 'D' ]
// queue:  [ 'D', 'E' ]
// queue:  [ 'E', 'F' ]
// queue:  [ 'F' ]
// g.breadthFirst():  [ 'A', 'B', 'C', 'D', 'E', 'F' ]
