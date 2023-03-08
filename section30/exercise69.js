/*
Graphs Exercise - addVertex

Implement the following methods on the Graph class

addVertex- this function should add a node to the graph and place a new key in the adjacency list with the value of an empty array.
Graphクラスに以下のメソッドを実装します。

addVertex- この関数は、グラフにノードを追加し、隣接リストに空の配列の値で新しいキーを配置する必要があります。

    var graph = new Graph;
     
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.adjacencyList['A']; // []
    graph.adjacencyList['B']; // []
    graph.adjacencyList['C']; // []
*/
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
}
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    let newNode = new PriorityQueueNode(value, priority);
    this.values.push(newNode);
    this.bubbleUp();
    return this;
  }
  bubbleUp(idx = this.values.length - 1) {
    let index = idx;
    const element = this.values[index];

    while (index > 0) {
      const parentIndex = Math.floor((childIndex - 1) / 2);
      const parent = this.values[parentIndex];
      if (element.priority <= parent.priority) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  dequeue() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      // trickle down
      this.sinkDown();
    } else {
    }

    return max;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    // find left and right
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority > element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority > element.priority) ||
          (swap !== null && rightChild.priority > leftChild.priority)
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

class Graph {
  // constructor() {
  //   this.adjacencyList = {};
  // }
  constructor() {
    // if (new.target === Graph) {
    //   throw new TypeError('You cannot instantiate Graph class directly');
    // }

    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
}

var graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
console.log('[]: ', graph.adjacencyList['A']); // []
console.log('[]: ', graph.adjacencyList['B']); // []
console.log('[]: ', graph.adjacencyList['C']); // []
