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

Dijkstra's Pseudocode

    This function should accept a starting and ending vertex
    Create an object (we'll call it distances) and set each key to be every vertex in the adjacency list with a value of infinity, except for the starting vertex which should have a value of 0.
    After setting a value in the distances object, add each vertex with a priority of Infinity to the priority queue, except the starting vertex, which should have a priority of 0 because that's where we begin.
    Create another object called previous and set each key to be every vertex in the adjacency list with a value of null
    Start looping as long as there is anything in the priority queue
        dequeue a vertex from the priority queue
        If that vertex is the same as the ending vertex - we are done!
        Otherwise loop through each value in the adjacency list at that vertex
            Calculate the distance to that vertex from the starting vertex
            if the distance is less than what is currently stored in our distances object
                update the distances object with new lower distance
                update the previous object to contain that vertex
                enqueue the vertex with the total distance from the start node
ダイクストラの擬似コード
この関数は、始点と終点の頂点を受け取る必要があります。
オブジェクトを作り（distancesと呼ぶことにする）、それぞれのキーに、隣接リストのすべての頂点の値をinfinityに設定する。ただし、開始頂点は値0でなければならない。
distances オブジェクトに値を設定した後、優先順位が Infinity の各頂点を優先順位キューに追加します。
previousというオブジェクトを作成し、それぞれのキーに隣接リストのすべての頂点を設定し、値をnullとする
優先度キューに何かある限り、ループを開始する。
優先度キューから頂点をデキューします。
その頂点が終了頂点と同じであれば、終了。
そうでなければ、その頂点にある隣接リストの各値をループします。
開始頂点からその頂点までの距離を計算します。
その距離が、現在 distances オブジェクトに格納されている値より小さい場合
distances オブジェクトを新しい距離で更新します。
その頂点を含むように、前のオブジェクトを更新します。
開始ノードからの総距離を持つ頂点を待ちます。
*/
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
        // console.log('distances: ', distances);
        // console.log('previous: ', previous);
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
    // .concat() は 2 つの配列をつなげる
    // https://www.w3schools.com/jsref/jsref_concat_array.asp
    // .reverse() は配列の順序を逆にする
    // https://www.w3schools.com/jsref/jsref_reverse.asp
    return path.concat(smallest).reverse();
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

// 最短距離のルートを表示
// ["A", "C", "D", "F", "E"]
console.log('graph.Dijkstra(): ', graph.Dijkstra('A', 'E'));
// graph.Dijkstra():  [ 'A', 'C', 'D', 'F', 'E' ]
console.log('graph.Dijkstra(): ', graph.Dijkstra('A', 'C'));
// graph.Dijkstra():  [ 'A', 'C' ]
console.log('graph.Dijkstra(): ', graph.Dijkstra('A', 'F'));
// graph.Dijkstra():  [ 'A', 'C', 'D', 'F' ]
console.log('graph.Dijkstra(): ', graph.Dijkstra('A', 'D'));
// graph.Dijkstra():  [ 'A', 'C', 'D' ]
