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



A simple PQ

class PriorityQueue {
  constructor(){
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({val, priority});
    this.sort();
  };
  dequeue() {
    return this.values.shift();
  };
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  };
}

Notice we are sorting which is O(N * log(N))
ソートしているので、O(N * log(N))であることに注意してください。


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

var q = new PriorityQueue();

q.enqueue('B', 3);
q.enqueue('C', 5);
q.enqueue('D', 2);
q.enqueue('Q', 20);
q.enqueue('P', 1.5);

console.log('q.value: ', q.values);
// q.value:  [
//   { val: 'P', priority: 1.5 },
//   { val: 'D', priority: 2 },
//   { val: 'B', priority: 3 },
//   { val: 'C', priority: 5 },
//   { val: 'Q', priority: 20 }
// ]
console.log('q.dequeue: ', q.dequeue());
console.log('q.dequeue: ', q.dequeue());
console.log('q.dequeue: ', q.dequeue());
console.log('q.dequeue: ', q.dequeue());
console.log('q.dequeue: ', q.dequeue());
// q.dequeue:  { val: 'P', priority: 1.5 }
// q.dequeue:  { val: 'D', priority: 2 }
// q.dequeue:  { val: 'B', priority: 3 }
// q.dequeue:  { val: 'C', priority: 5 }
// q.dequeue:  { val: 'Q', priority: 20 }
