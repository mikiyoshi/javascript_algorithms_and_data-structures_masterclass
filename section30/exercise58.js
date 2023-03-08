/*
Stack with 2 Queues

Implement a stack using two queues:

You should implement the following functions:

- push (returns the stack)

- pop (returns the value popped)

Comment on your time complexity for all of these operations:
2つのキューを使用したスタックを実装する。

以下の関数を実装する必要があります。

- push (スタックを返す)

- pop (飛び出した値を返す)

これらすべての操作の時間的複雑さについてコメントしてください。


    var s = new Stack()
    s.push(10).push(20).push(30)
    s.pop() // 30
    s.pop() // 20
    s.pop() // 10
    s.pop() // null
    s.push(30).push(40).push(50)
    s.pop() // 50
    s.push(60)
    s.pop() // 60
*/

class Stack {
  constructor() {
    this.main = new Queue();
    this.helper = new Queue();
  }

  // Time complexity - O(n), space complexity - O(n)
  push(data) {
    while (this.main.size > 0) {
      this.helper.enqueue(this.main.dequeue());
    }

    this.main.enqueue(data);

    while (this.helper.size > 0) {
      this.main.enqueue(this.helper.dequeue());
    }

    return this;
  }

  // Time complexity - O(1), space complexity - O(1)
  pop() {
    return this.main.dequeue();
  }
}

// QUEUE AND NODE HAVE BEEN IMPLEMENTED FOR YOU

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(data) {
    var node = new Node(data);

    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }

    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;

    var temp = this.first;
    if (this.first == this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

var s = new Stack();
s.push(10).push(20).push(30);
console.log('30: ', s.pop()); // 30
console.log('20: ', s.pop()); // 20
console.log('10: ', s.pop()); // 10
console.log('null: ', s.pop()); // null
s.push(30).push(40).push(50);
console.log('50: ', s.pop()); // 50
s.push(60);
console.log('60: ', s.pop()); // 60
