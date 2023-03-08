/*

Doubly
Linked Lists

https://visualgo.net/en/list?slide=1


OBJECTIVES

    Construct a Doubly Linked List
    Compare and contrast Doubly and Singly Linked Lists
    Implement basic operations on a Doubly Linked List
目的
ダブリーリンクリストの構築
ダブルリンクリストとシングルリンクリストの比較と対比
ダブリーリンクリストの基本操作の実装


We know what lists are...
but doubly?

Almost identical to Singly Linked Lists, except every node has another pointer, to the previous node!
リストとは何かというと...
が、二重に？
Singly Linked Listsとほぼ同じだが、各ノードが直前のノードへのポインタを持つ。


Comparisons with
Singly Linked Lists

More memory === More Flexibility

It's almost always a tradeoff!


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
}

var first = new Node(12);
first.next = new Node(13);
first.next.prev = first;

console.log('first: ', first);
console.log('first.next: ', first.next);
console.log('first.next.prev: ', first.next.prev);
// first:  <ref *1> Node {
//   val: 12,
//   next: Node { val: 13, next: null, prev: [Circular *1] },
//   prev: null
// }
// first.next:  <ref *1> Node {
//   val: 13,
//   next: null,
//   prev: Node { val: 12, next: [Circular *1], prev: null }
// }
// first.next.prev:  <ref *1> Node {
//   val: 12,
//   next: Node { val: 13, next: null, prev: [Circular *1] },
//   prev: null
// }
