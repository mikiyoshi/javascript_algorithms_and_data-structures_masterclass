/*

FIND THE SHORTEST PATH

FROM A TO E
最短経路を探す

Aから Eまで

//          A
//        /   \
//       |     B
//       |     |
//       C -D- E
//        \ | /
//          F

Vertex      Shortest Dist From A
  A                   0
  B                Infinity -> 4(A B)
  C                Infinity -> 2(A C)
  D                Infinity -> 4(A C D)
  E                Infinity -> 7(A B) -> 6(A C D F E)
  F                Infinity -> 6(A C F) -> 5(A C D F)

Visited:
[] -> [A] -> [A, C] -> [A, C, B] -> [A, C, B, D]

Previous:
{
  A: null,
  B: null, -> A
  C: null, -> A
  D: null, -> C
  E: null, -> B -> F
  F: null  -> C -> D
}


Improving Dijkstra's

Dijkstra's algorithm is greedy! That can cause problems!

We can improve this algorithm by adding a heuristics (a best guess)
ダイクストラの改善
Dijkstraのアルゴリズムは貪欲だ!それが問題を引き起こすこともある!

ヒューリスティック（最良の推測）を追加することで、このアルゴリズムを改良することができます。



Recap

    Graphs are collections of vertices connected by edges
    Graphs can be represented using adjacency lists, adjacency matrices and quite a few other forms.
    Graphs can contain weights and directions as well as cycles
    Just like trees, graphs can be traversed using BFS and DFS
    Shortest path algorithms like Dijkstra can be altered using a heuristic to achieve better results like those with A*

まとめ
グラフはエッジで結ばれた頂点の集合体
グラフは、隣接リストや隣接行列など、さまざまな形式で表現することができます。
グラフには、サイクルだけでなく、ウェイトや方向性を含めることができる
木と同じように、グラフもBFSやDFSでトラバースすることができる
Dijkstraのような最短経路のアルゴリズムは、ヒューリスティックを使って変更することで、A*のような良い結果を得ることができます。
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

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

var graph = new WeightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);

// graph.Dijkstra('A', 'E');

console.log('graph.Dijkstra(): ', graph.Dijkstra('A', 'E'));
// graph.Dijkstra():  [ 'A', 'C', 'D', 'F', 'E' ]
