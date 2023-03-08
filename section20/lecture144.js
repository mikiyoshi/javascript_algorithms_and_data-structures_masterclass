/*

SET

Replacing the value of a node to the in a Doubly Linked List
セット
ダブリーリンクリストのノードの値をtheに置き換える

Set pseudocode

Let's visualize this!

    Create a variable which is the result of the get method at the index passed to the function
        If the get method returns a valid node, set the value of that node to be the value passed to the function
        Return true
    Otherwise, return false
セット疑似コード
可視化しよう

関数に渡されたインデックスのget メソッドの結果を変数として作成する。
get メソッドが有効なノードを返した場合、そのノードの値を関数に渡された値に設定します。
真を返す
それ以外の場合はfalseを返す
*/

/*
.push() // 134 ダブリーリンクリストの末尾にノードを 追加
.pop() // 136 ダブリーリンクリストの末尾からノードを削除する
.shift() // 136 ダブリーリンクリストの先頭からノードを削除すること
.unshift(val) // 140 ダブリーリンクリストの先頭にノード
.get(index) // 142 ダブリーリンクリストのノードに位置からアクセスする方法
.set(index, val) // 144 ダブリーリンクリストのノードの値をtheに置き換える
.insert(index, val) // 146 ダブルリンクリストのノードをある位置で追加する
.remove(index) // 148 ダブルリンクリストのノードをある位置から削除すること
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    var poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  shift() {
    if (this.length === 0) return undefined;
    var oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  unshift(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    var count, current;
    if (index <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }
  set(index, val) {
    var foundNode = this.get(index);
    if (foundNode != null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
}

var list = new DoublyLinkedList();
list.push('Harry');
list.push('Ron');
list.push('Hermione');
console.log('list: ', list);
// list:  DoublyLinkedList {
//   head: <ref *1> Node {
//     val: 'Harry',
//     next: Node { val: 'Ron', next: [Node], prev: [Circular *1] },
//     prev: null
//   },
//   tail: <ref *2> Node {
//     val: 'Hermione',
//     next: null,
//     prev: Node { val: 'Ron', next: [Circular *2], prev: [Node] }
//   },
//   length: 3
// }
console.log('list.set(): ', list.set(-10, 'Kjashd'));
// list.set():  false
console.log('list.set(): ', list.set(10, 'Kjashd'));
// list.set():  false
console.log('list.set(): ', list.set(0, 'Robbie'));
console.log('list: ', list);
// list.set():  true
// list:  DoublyLinkedList {
//   head: <ref *1> Node {
//     val: 'Robbie',
//     next: Node { val: 'Ron', next: [Node], prev: [Circular *1] },
//     prev: null
//   },
//   tail: <ref *2> Node {
//     val: 'Hermione',
//     next: null,
//     prev: Node { val: 'Ron', next: [Circular *2], prev: [Node] }
//   },
//   length: 3
// }
console.log('list.set(): ', list.set(2, 'HERMIONE'));
console.log('list: ', list);
// list.set():  true
// list:  DoublyLinkedList {
//   head: <ref *1> Node {
//     val: 'Robbie',
//     next: Node { val: 'Ron', next: [Node], prev: [Circular *1] },
//     prev: null
//   },
//   tail: <ref *2> Node {
//     val: 'HERMIONE',
//     next: null,
//     prev: Node { val: 'Ron', next: [Circular *2], prev: [Node] }
//   },
//   length: 3
// }
