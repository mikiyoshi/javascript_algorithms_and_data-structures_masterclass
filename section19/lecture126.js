/*

Remove

Removing a node from the Linked List at a specific position
削除
リンクリストの特定 位置のノードを削除する機能



Remove pseudocode
    If the index is less than zero or greater than the length, return undefined
    If the index is the same as the length-1, pop
    If the index is 0, shift
    Otherwise, using the get method, access the node at the index - 1
    Set the next property on that node to be the next of the next node
    Decrement the length
    Return the value of the node removed

Let's visualize this!
https://visualgo.net/en/list?slide=1
疑似コードを削除する
可視化しよう

インデックスが0より小さいか，または長さより大きい場合，未定義を返す。
インデックスがlength-1と同じであれば，pop
インデックスが0の場合、シフト
それ以外の場合は，getメソッドで index - 1 のノードにアクセスします．
そのノードのnextプロパティを次のノードのnextに設定する
長さを減少させる
削除されたノードの値を返す

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
  set(index, val) {
    var foundNode = this.get(index); // SinglyLinkedList 内の .get()
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val); // SinglyLinkedList 内の .push()
    if (index === 0) return !!this.unshift(val); // SinglyLinkedList 内の .unshift()

    var newNode = new Node(val);
    var prev = this.get(index - 1); // SinglyLinkedList 内の .get()
    var temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift(); // SinglyLinkedList 内の .shift()
    if (index === this.length - 1) return this.pop(); // SinglyLinkedList 内の .pop()
    var previousNode = this.get(index - 1); // SinglyLinkedList 内の .get()
    var removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }
}

var list = new SinglyLinkedList();

list.push(100);
list.push(201);
list.push(250);
list.push(350);

console.log('list:', list);
// list: SinglyLinkedList {
//   head: Node { val: 100, next: Node { val: 201, next: [Node] } },
//   tail: Node { val: 350, next: null },
//   length: 4
// }

list.remove(0);
console.log('list:', list);
// list: SinglyLinkedList {
//   head: Node { val: 201, next: Node { val: 250, next: [Node] } },
//   tail: Node { val: 350, next: null },
//   length: 3
// }

list.remove(1);
console.log('list:', list);
// list: SinglyLinkedList {
//   head: Node { val: 201, next: Node { val: 350, next: null } },
//   tail: Node { val: 350, next: null },
//   length: 2
// }

list.remove(1);
console.log('list:', list);
// list: SinglyLinkedList {
//   head: Node { val: 201, next: null },
//   tail: Node { val: 201, next: null },
//   length: 1
// }

list.remove(0);
console.log('list:', list);
// list: SinglyLinkedList { head: null, tail: null, length: 0 }

console.log('list.remove(): ', list.remove(-1));
// list.remove():  undefined
console.log('list.remove(): ', list.remove(100));
// list.remove():  undefined
