/*

Insert

Adding a node to the Linked List at a specific position
インサート
リンクリストに特定の 位置のノードを追加する機能



Insert pseudocode


    If the index is less than zero or greater than the length, return false
    If the index is the same as the length, push a new node to the end of the list
    If the index is 0, unshift a new node to the start of the list
    Otherwise, using the get method, access the node at the index - 1
    Set the next property on that node to be the new node
    Set the next property on the new node to be the previous next
    Increment the length
    Return true
Let's visualize this!
https://visualgo.net/en/list?slide=1
擬似コードを挿入する
可視化しよう

インデックスが0より小さいか、または長さより大きい場合、falseを返す
インデックスと長さが同じ場合，新しいノードをリストの末尾にプッシュする
インデックスが0の場合、新しいノードをリストの先頭にアンシフトする
それ以外の場合は，getメソッドで index - 1 のノードにアクセスします．
そのノードの次のプロパティを新しいノードに設定する
新しいノードのnextプロパティを前のnextに設定する
長さを増加させる
真を返す



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
    // !! は return で true を返す // "hi" is "hi", !"hi" is false, !!"hi" is true, !!2 is true, !!0 is false
    // if (index === this.length) {
    //   this.push(val);
    //   return true;
    // }
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

list.insert(0, 'First');

console.log('list:', list);
// list: SinglyLinkedList {
//   head: Node { val: 'First', next: Node { val: 100, next: [Node] } },
//   tail: Node { val: 350, next: null },
//   length: 5
// }

console.log('list.get(): ', list.get(5));
// list.get():  null

list.insert(5, 'Last');

console.log('list.get(): ', list.get(5));
// list.get():  Node { val: 'Last', next: null }

console.log('list.insert(): ', list.insert(1, 37));
// list.insert():  true

console.log('list.insert(): ', list.insert(-2, 'ADS'));
// list.insert():  false

console.log('list.insert(): ', list.insert(100, 'ADS'));
// list.insert():  false
