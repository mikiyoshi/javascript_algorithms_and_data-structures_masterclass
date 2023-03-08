/*

POPPING

Removing a node from the end of the Doubly Linked List
ポッピング
ダブリーリンクリストの末尾からノードを削除する


Popping pseudocode

    If there is no head, return undefined
    Store the current tail in a variable to return later
    If the length is 1, set the head and tail to be null
    Update the tail to be the previous Node.
    Set the newTail's next to null
    Decrement the length
    Return the value removed
ポッピングの疑似コード
headがない場合は未定義を返す
現在のテールを変数に格納し、後で返す
長さが1の場合、headとtailにnullを設定する
tail を前の Node に更新する。
newTail の next を null に設定する。
長さを減少させる
削除した値を返す
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
}
var list = new DoublyLinkedList();
list.pop();
list.pop();
console.log('list: ', list);
// list:  DoublyLinkedList { head: null, tail: null, length: 0 }
list.push(1);
list.push(2);
list.push(3);
list.pop();
console.log('list: ', list);
// list:  DoublyLinkedList {
//   head: <ref *1> Node {
//     val: 1,
//     next: Node { val: 2, next: null, prev: [Circular *1] },
//     prev: null
//   },
//   tail: <ref *2> Node {
//     val: 2,
//     next: null,
//     prev: <ref *1> Node { val: 1, next: [Circular *2], prev: null }
//   },
//   length: 2
// }
list.pop();
console.log('list: ', list);
// list:  DoublyLinkedList {
//   head: Node { val: 1, next: null, prev: null },
//   tail: Node { val: 1, next: null, prev: null },
//   length: 1
// }
list.pop();
console.log('list: ', list);
// list:  DoublyLinkedList { head: null, tail: null, length: 0 }
