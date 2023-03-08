/*


REVERSE

Reversing the Linked List
リバース
リンクリストの反転

を配置！
in place!


Reverse pseudocode

    Swap the head and tail
    Create a variable called next
    Create a variable called prev
    Create a variable called node and initialize it to the head property
    Loop through the list
    Set next to be the next property on whatever node is
    Set the next property on the node to be whatever prev is
    Set prev to be the value of the node variable
    Set the node variable to be the value of the next variable
    Once you have finished looping, return the list

Let's visualize this!
https://visualgo.net/en/list?slide=1
逆の疑似コード
可視化しよう

ヘッドとテールを交換する
nextという変数を作成します。
prevという変数を作成します。
nodeという変数を作成し、headプロパティに初期化します。
リストをループする
nextを、どのノードであれ、次のプロパティに設定する。
ノードの次のプロパティをprevが何であれ設定します。
ノード変数の値をprevに設定する
ノード変数に次の変数の値を設定する
ループが終了したら、リストを返します。


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
  reverse() {
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    var next;
    var prev = null;
    for (var i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
  print() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.val); // SinglyLinkedList 内の .push()
      current = current.next;
    }
    console.log(arr);
  }
}

var list = new SinglyLinkedList();

list.push(100);
list.push(201);
list.push(250);
list.push(350);
list.push(999);

// console.log('list:', list); // 配列で確認できた方が簡単
list.print(); // 配列で表示してくれる
// [ 100, 201, 250, 350, 999 ]
/*
[   100,  201,   250,  350,   999   ]
    NODE  NEXT
   100 -> null
    PREV  NODE   NEXT
   201 -> 100 -> null
          PREV  NODE   NEXT
   250 -> 201 -> 100 -> null
                PREV  NODE   NEXT
   350 -> 250 -> 201 -> 100 -> null
                        PREV  NODE   NEXT
   999 -> 350 -> 250 -> 201 -> 100 -> null
*/

list.reverse();

list.print(); // 配列で表示してくれる
// [ 999, 350, 250, 201, 100 ]
console.log('list.head: ', list.head);
// list.head:  Node {
//   val: 999,
//   next: Node { val: 350, next: Node { val: 250, next: [Node] } }
// }
console.log('list.tail: ', list.tail);
// list.tail:  Node { val: 100, next: null }
