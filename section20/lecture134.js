/*

PUSHING

Adding a node to the end of the Doubly Linked List
プッシング
ダブリーリンクリストの末尾にノードを

Pushing pseudocode

Let's visualize this!

    Create a new node with the value passed to the function
    If the head property is null set the head and tail to be the newly created node 
    If not, set the next property on the tail to be that node
    Set the previous property on the newly created node to be the tail
    Set the tail to be the newly created node
    Increment the length
    Return the Doubly Linked List
プッシュの疑似コード
可視化しよう

関数に渡された値で新しいノードを作成します。
headがNULLの場合、headとtailを新しく作成されたノードに設定します。
そうでない場合は、末尾の次のプロパティをそのノードに設定する
新しく作成されたノードの前プロパティをtailに設定する
新たに作成したノードをtailに設定する
長さを増加させる
ダブリーリンクリストを返す

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
}

// 99 -> 100
//    <-

var list = new DoublyLinkedList();

list.push(99);
list.push(100);
list.push('LAST ITEM');

console.log('list: ', list);
// list:  DoublyLinkedList {
//   head: <ref *1> Node {
//     val: 99,
//     next: Node { val: 100, next: [Node], prev: [Circular *1] },
//     prev: null
//   },
//   tail: <ref *2> Node {
//     val: 'LAST ITEM',
//     next: null,
//     prev: Node { val: 100, next: [Circular *2], prev: [Node] }
//   },
//   length: 3
// }
