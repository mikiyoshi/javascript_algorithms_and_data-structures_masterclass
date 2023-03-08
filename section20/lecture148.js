/*

REMOVE

Removing a node in a Doubly Linked List by a certain position
リムーブ
ダブルリンクリストのノードをある位置から削除すること

Remove pseudocode

Let's visualize this!

    If the index is less than zero or greater than or equal to the length return undefined
    If the index is 0, shift
    If the index is the same as the length-1, pop
    Use the get method to retrieve the item to be removed
    Update the next and prev properties to remove the found node from the list
    Set next and prev to null on the found node
    Decrement the length
    Return the removed node.
疑似コードを削除する
可視化しよう

インデックスが0より小さいか，または長さ以上の場合 return undefined
インデックスが0の場合、シフト
インデックスがlength-1と同じであれば，pop
削除する項目を取得する場合は、get メソッドを使用します。
見つかったノードをリストから削除するためにnextとprevのプロパティを更新する
見つかったノードのnextとprevをnullに設定する
長さを減少させる
削除されたノードを返す。
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
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    var newNode = new Node(val);
    var beforeNode = this.get(index - 1);
    var afterNode = beforeNode.next;

    (beforeNode.next = newNode), (newNode.prev = beforeNode);
    (newNode.next = afterNode), (afterNode.prev = newNode);
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    var removedNode = this.get(index);

    // 下に書き換え
    // removedNode.prev.next = removedNode.next;
    // removedNode.next.prev = removedNode.prev;

    // 上の書き換え
    var beforeNode = removedNode.prev;
    var afterNode = removedNode.next;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;

    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;
  }
}

var list = new DoublyLinkedList();
list.push('Harry');
list.push('Ron');
list.push('Hermione');
console.log('list: ', list);
console.log('list.remove(): ', list.remove(0));
console.log('list.remove(): ', list.remove(-1));
console.log('list.remove(): ', list.remove(10));
console.log('list.remove(): ', list.push('Hi'));
console.log('list.remove(): ', list.push('hello'));
console.log('list.remove(): ', list.push('Ha ha ha'));
console.log('list.remove(): ', list.remove(5));
console.log('list.remove(): ', list.remove(4));
console.log('list: ', list.tail);
// console.log('list.remove(): ', list.remove(0));
// console.log('list: ', list);
// console.log('list.remove(): ', list.remove(1));
// console.log('list: ', list);
// console.log('list.remove(): ', list.remove(1));
// console.log('list: ', list);
// console.log('list.remove(): ', list.remove(0));
// console.log('list: ', list);
