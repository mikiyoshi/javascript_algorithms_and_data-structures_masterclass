/*
Graphs Exercise - removeEdge

Implement the following methods on the Graph class, addEdge and addVertex have been implemented for you.

removeEdge - this function should accept two nodes and remove the edge between them. It should modify the adjacency list to ensure that both values are not in each array for the two nodes which no longer contain the edge.

    var graph = new Graph();
     
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
     
    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('B', 'D');
    graph.addEdge('C', 'D');
     
    graph.removeEdge('B', 'A');
    graph.removeEdge('C', 'D');
     
    graph.adjacencyList['A']; //  // contains 'C'
    graph.adjacencyList['B']; // contains 'D'
    graph.adjacencyList['C']; // contains 'A'
    graph.adjacencyList['D']; // contains 'B'
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
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
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
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
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

graph.removeEdge('B', 'A');
graph.removeEdge('C', 'D');

console.log('C: ', graph.adjacencyList['A']); //  // contains 'C'
console.log('D: ', graph.adjacencyList['B']); // contains 'D'
console.log('A: ', graph.adjacencyList['C']); // contains 'A'
console.log('B: ', graph.adjacencyList['D']); // contains 'B'
