/*
Stacks - push Exercise

Implement the following methods on the Stack class

push - takes in a node and puts it at the top of the stack. Should return the new size of the stack.
Stack クラスに以下のメソッドを実装します。

push - ノードを取り込み、スタックの一番上に置く。
スタックの新しいサイズを返す必要があります。



    var stack = new Stack();
     
    stack.push(10) // 1
    stack.first.value // 10
    stack.last.value // 10
    stack.push(100);
    stack.first.value // 100
    stack.last.value // 10
    stack.push(1000);
    stack.first.value // 1000
    stack.last.value // 10
     
    var stack = new Stack();
     
    stack.push(10) // 1
    stack.size // 1
    stack.push(100) // 2
    stack.size // 2
    stack.push(1000) // 3
    stack.size // 3
*/
class Node {
  // これは書き換えが必要
  // constructor(val) {
  //   this.val = val;
  // }
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(val) {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
}

var stack = new Stack();

console.log('1: ', stack.push(10)); // 1
console.log('10: ', stack.first.value); // 10
console.log('10: ', stack.last.value); // 10
console.log(': ', stack.push(100));
console.log('100: ', stack.first.value); // 100
console.log('10: ', stack.last.value); // 10
console.log(': ', stack.push(1000));
console.log('1000: ', stack.first.value); // 1000
console.log('10: ', stack.last.value); // 10

var stack = new Stack();

console.log('1: ', stack.push(10)); // 1
console.log('1: ', stack.size); // 1
console.log('2: ', stack.push(100)); // 2
console.log('2: ', stack.size); // 2
console.log('3: ', stack.push(1000)); // 3
console.log('3: ', stack.size); // 3
