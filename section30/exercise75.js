/*
Graphs - Dijkstra Exercise

Create a constructor function for a WeightedGraph. It should inherit from the Graph constructor and have all the same methods except for adding an edge. Since weights will now be added with edges, the adjacency list should not only store the nodes which are connected to it but also the corresponding weight of the edge.

A PriorityQueue has been implemented for you. The PriorityQueue adds the LOWEST priority first (this is helpful for Dijkstra).

Implement the following method on the WeightedGraph.prototype

Dijkstra - this function should return an array with two values, the first being the total distance and the second an array of nodes which create the shortest path.
WeightedGraphのコンストラクタ関数を作成する。
Graphのコンストラクタを継承し、エッジを追加する以外はすべて同じメソッドを持つようにする。
重みはエッジと一緒に追加されるので、隣接リストには、それに接続されているノードだけでなく、
エッジの対応する重みも格納する必要があります。

PriorityQueueが実装されています。
PriorityQueueは優先度の低いものから順に追加していく（これはDijkstraに役立つ）。

WeightedGraph.prototypeに次のメソッドを実装する。

Dijkstra - この関数は2つの値を持つ配列を返す必要があります。
1つ目は総距離、2つ目は最短経路を作成するノードの配列です。

    var g = new WeightedGraph()
     
    g.addVertex('A');
    g.addVertex('Z');
    g.addVertex('C');
    g.addVertex('D');
    g.addVertex('E');
    g.addVertex('H');
    g.addVertex('Q');
    g.addVertex('G');
     
    g.addEdge('A', 'Z', 7)
    g.addEdge('A', 'C', 8)
     
    g.addEdge('Z', 'Q', 2)
     
    g.addEdge('C', 'G', 4)
     
    g.addEdge('D', 'Q', 8)
     
    g.addEdge('E', 'H', 1)
     
    g.addEdge('H', 'Q', 3)
     
    g.addEdge('Q', 'C', 6)
     
    g.addEdge('G', 'Q', 9)
     
    g.Dijkstra('A','E') // ["A", "Z", "Q", "H", "E"]
    g.Dijkstra('A','Q') // ["A", "Z", "Q"]
    g.Dijkstra('A','G') // ["A", "C", "G"]
    g.Dijkstra('A','D') // ["A", "Z", "Q", "D"]
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
  Dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = []; //to return at end
    let smallest;
    //build up initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    // as long as there is something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        //WE ARE DONE
        //BUILD UP PATH TO RETURN AT END
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          //find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor];
          //calculate new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            //updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            //updating previous - How we got to neighbor
            previous[nextNeighbor] = smallest;
            //enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

/***
 *** Use Graph as a constructor for WeightedGraph to inherit from!
 ***
 ***/

function Graph() {
  this.adjacencyList = {};
}

Graph.prototype.numEdges = function () {
  let total = 0;

  Object.values(this.adjacencyList).forEach((list) => {
    total += list.length;
  });

  // note that we've double-counted up til now since we've looked at
  // the adjacencyList for every node.
  return total / 2;
};

Graph.prototype.addVertex = function (vertex) {
  this.adjacencyList[vertex] = [];
};

Graph.prototype.addEdge = function (vertex1, vertex2) {
  this.adjacencyList[vertex1].push(vertex2);
  this.adjacencyList[vertex2].push(vertex1);
};

Graph.prototype.removeVertex = function (vertex) {
  while (this.adjacencyList[vertex].length) {
    const adjacentVertex = this.adjacencyList[vertex].pop();
    this.removeEdge(adjacentVertex, vertex);
  }
  delete this.adjacencyList[vertex];
};

Graph.prototype.removeEdge = function (vertex1, vertex2) {
  this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
    (v) => v !== vertex2
  );
  this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
    (v) => v !== vertex1
  );
};

/***
 *** Use the following as a PriorityQueue (it's a min heap)!
 ***
 ***/
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

var g = new WeightedGraph();

g.addVertex('A');
g.addVertex('Z');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('H');
g.addVertex('Q');
g.addVertex('G');

g.addEdge('A', 'Z', 7);
g.addEdge('A', 'C', 8);

g.addEdge('Z', 'Q', 2);

g.addEdge('C', 'G', 4);

g.addEdge('D', 'Q', 8);

g.addEdge('E', 'H', 1);

g.addEdge('H', 'Q', 3);

g.addEdge('Q', 'C', 6);

g.addEdge('G', 'Q', 9);

console.log('["A", "Z", "Q", "H", "E"]: ', g.Dijkstra('A', 'E')); // ["A", "Z", "Q", "H", "E"]
console.log('["A", "Z", "Q"]: ', g.Dijkstra('A', 'Q')); // ["A", "Z", "Q"]
console.log('["A", "C", "G"]: ', g.Dijkstra('A', 'G')); // ["A", "C", "G"]
console.log('["A", "Z", "Q", "D"]: ', g.Dijkstra('A', 'D')); // ["A", "Z", "Q", "D"]
