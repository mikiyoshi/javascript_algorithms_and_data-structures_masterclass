/*
Queues - enqueue Exercise

Implement the following methods on the Queue class.

enqueue

This function adds the value to the end of the queue. This should be an O(1) operation and return the new size of the queue.
Queueクラスに以下のメソッドを実装します。

エンキュー

この関数は、キューの末尾に値を追加する。
これはO(1)演算であり、キューの新しいサイズを返すはずである。



    var queue = new Queue();
    queue.enqueue(10) // 1
    queue.size // 1
    queue.enqueue(100) // 2
    queue.size // 2
    queue.enqueue(1000) // 3
    queue.size // 3
*/
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  // これは書き換えが必要
  // constructor() {
  //   this.first = null;
  //   this.last = null;
  // }
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(data) {
    const newNode = new Node(data);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.size++;
    return this.size;
  }
}

var queue = new Queue();
console.log('1: ', queue.enqueue(10)); // 1
console.log('1: ', queue.size); // 1
console.log('2: ', queue.enqueue(100)); // 2
console.log('2: ', queue.size); // 2
console.log('3: ', queue.enqueue(1000)); // 3
console.log('3: ', queue.size); // 3
