/*


REMOVING A VERTEX // 削除頂点
除籍

"Hong Kong" は key なので削除すると、影響する箇所が多いので注意！！！！

{
  "Tokyo": ["Dallas", "Hong Kong"],                           　// "Hong Kong"
  "Dallas": ["Tokyo", "Aspen", "Hong Kong", "Los Angeles"],     // "Hong Kong"
  "Aspen": ["Dallas"],
  "Hong Kong": ["Tokyo", "Dallas", "Los Angeles"],              // "Hong Kong": ["Tokyo", "Dallas", "Los Angeles"]
  "Los Angeles": ["Hong Kong", "Dallas"]                        // "Hong Kong"
}

            ⬇

g.removeVertex("Hong Kong")

            ⬇

{
  "Tokyo": ["Dallas"],
  "Dallas": ["Tokyo", "Aspen","Los Angeles"],
  "Aspen": ["Dallas"],
  "Los Angeles": ["Dallas"]
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
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      // .pop() 配列の最後を削除 // while(arr.length) で処理すると、配列を全て削除
      // https://www.w3schools.com/jsref/jsref_pop.asp
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
}

let g = new Graph();
g.addVertex('Dallas');
g.addVertex('Tokyo');
g.addVertex('Aspen');
g.addVertex('Los Angeles');
g.addVertex('Hong Kong');
g.addEdge('Dallas', 'Tokyo');
g.addEdge('Dallas', 'Aspen');
g.addEdge('Hong Kong', 'Tokyo');
g.addEdge('Hong Kong', 'Dallas');
g.addEdge('Los Angeles', 'Hong Kong');
g.addEdge('Los Angeles', 'Aspen');

console.log('g: ', g);
// g:  Graph {
//     adjacencyList: {
//       Dallas: [ 'Tokyo', 'Aspen', 'Hong Kong' ],
//       Tokyo: [ 'Dallas', 'Hong Kong' ],
//       Aspen: [ 'Dallas', 'Los Angeles' ],
//       'Los Angeles': [ 'Hong Kong', 'Aspen' ],
//       'Hong Kong': [ 'Tokyo', 'Dallas', 'Los Angeles' ]
//     }
//   }

g.removeVertex('Hong Kong');

console.log('g: ', g);
//   g:  Graph {
//     adjacencyList: {
//       Dallas: [ 'Tokyo', 'Aspen' ],
//       Tokyo: [ 'Dallas' ],
//       Aspen: [ 'Dallas', 'Los Angeles' ],
//       'Los Angeles': [ 'Aspen' ]
//     }
//   }

g.removeVertex('Aspen');

console.log('g: ', g);
//   g:  Graph {
//     adjacencyList: { Dallas: [ 'Tokyo' ], Tokyo: [ 'Dallas' ], 'Los Angeles': [] }
//   }
