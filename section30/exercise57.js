/*
Stacks - pop Exercise

Implement the following methods on the Stack class

pop - removes the node at the top of the stack and returns the value of that node.

Note: The tests for pop rely on push working (it has been implemented for you)
Stack クラスに以下のメソッドを実装します。

pop - スタックの一番上にあるノードを削除し、そのノードの値を返します。

注：popのテストはpushが動作することに依存しています（あなたのために実装されています）。



    var stack = new Stack();
     
    stack.push(10);
    stack.push(100);
    stack.push(1000);
    var removed = stack.pop();
    removed // 1000
    stack.size // 2
    stack.pop();
    stack.pop();
    stack.size // 0
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
    var node = new Node(val);

    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      var tmp = this.first;
      this.first = node;
      this.first.next = tmp;
    }

    return ++this.size;
  }
  pop() {
    if (!this.first) return null;
    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

var stack = new Stack();

stack.push(10);
stack.push(100);
stack.push(1000);
var removed = stack.pop();
console.log('1000: ', removed); // 1000
console.log('2: ', stack.size); // 2
stack.pop();
stack.pop();
console.log('0: ', stack.size); // 0
