/*

Get

Retrieving a node by it's position in the Linked List!
ゲット
リンクリスト内の位置でノードを 取り出す！？


Get pseudocode

Let's visualize this!

    This function should accept an index
    If the index is less than zero or greater than or equal to the length of the list, return null
    Loop through the list until you reach the index and return the node at that specific index
擬似コードを取得する
可視化しよう

この関数はインデックスを受け取る必要があります。
インデックスが 0 より小さいか，リストの長さ以上の場合は，null を返す。
インデックスに到達するまでリストをループし、その特定のインデックスにあるノードを返す



*/

/*
.push() // 112 リンクリストの "末尾" に新しいノードを 追加
.pop() // 114 リンクリストの "末尾" からノードを 削除
.shift() // 116 リンクリストの "先頭" から新しいノードを 削除
.unshift(val) // 118 リンクリストの先頭に新しいノードを 追加
.get(index) // 120 リンクリスト内の位置でノードを 取り出す
.set(index, val) // 122 リンクリスト内の位置に基づいてノードの値を変更する
.insert(index, val) // 124 リンクリストに特定の 位置のノードを追加する機能
.remove(index) // 126 リンクリストの特定 位置のノードを削除する機能
.reverse() // 128 リンクリストの反転
.print()  // 128 おまけ: リンクリストを配列で表示
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    var counter = 0;
    var current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
}

var list = new SinglyLinkedList();

list.push('HELLO');
list.push('GOODBYE');
list.push('!');
list.push('<3');
list.push(':)');

console.log('list:', list);
// list: SinglyLinkedList {
//   head: Node { val: 'HELLO', next: Node { val: 'GOODBYE', next: [Node] } },
//   tail: Node { val: ':)', next: null },
//   length: 5
// }

console.log('list.get(): ', list.get(0));
// list.get():  Node {
//   val: 'HELLO',
//   next: Node { val: 'GOODBYE', next: Node { val: '!', next: [Node] } }
// }
console.log('list.get(): ', list.get(-1));
// list.get():  null
console.log('list.get(): ', list.get(100));
// list.get():  null
console.log('list.get(): ', list.get(3));
// list.get():  Node { val: '<3', next: Node { val: ':)', next: null } }

list.push('$');
console.log('list.get(): ', list.get(5));
// list.get():  Node { val: '$', next: null }
console.log('list.get(): ', list.get(6));
// list.get():  null
