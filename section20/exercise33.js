/*
Doubly Linked Lists insert / remove - Exercise

Implement the following on the DoublyLinkedList class

insert

This internal/helper function should insert a node at a specified index in a DoublyLinkedList. It should return true if the index is valid, and false if the index is invalid (less than 0 or greater than the length of the list).

remove

This function should remove a node at a specified index in a DoublyLinkedList. It should return the removed node. if the index is valid, or undefined if the index is invalid.
DoublyLinkedList クラスに以下を実装します。

挿入

この内部/ヘルパー関数は、DoublyLinkedListの指定されたインデックスにノードを挿入しなければならない。インデックスが有効な場合はtrueを、インデックスが無効な場合（0より小さいかリストの長さより大きい場合）はfalseを返す必要があります。

削除

この関数は、DoublyLinkedListの指定されたインデックスにあるノードを削除しなければならない。インデックスが有効な場合は削除されたノードを、インデックスが無効な場合はundefinedを返すべきである。




    var doublyLinkedList = new DoublyLinkedList;
    doublyLinkedList.push(5).push(10).push(15).push(20);
    doublyLinkedList.insert(2,12); // true
    doublyLinkedList.insert(100,12); // false
    doublyLinkedList.length // 5
    doublyLinkedList.head.val // 5
    doublyLinkedList.head.next.val // 10
    doublyLinkedList.head.next.next.val // 12
    doublyLinkedList.head.next.next.next.val // 15
    doublyLinkedList.head.next.next.next.next.val // 20
     
    var doublyLinkedList = new DoublyLinkedList;
    doublyLinkedList.push(5).push(10).push(15).push(20);
    doublyLinkedList.remove(2).val; // 15
    doublyLinkedList.remove(100); // undefined
    doublyLinkedList.length // 3
    doublyLinkedList.head.val // 5
    doublyLinkedList.head.next.val // 10
    doublyLinkedList.head.next.next.val // 20
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
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  // これは書き換えが必要
  // constructor(val) {
  //   this.val = val;
  //   this.next = null;
  // }

  // ここだけ修正されている
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var node = new Node(val);
    // constructor() がここだけ修正されている　if (this.head === null)　でも可能
    if (this.head === null) {
      this.head = node;
      this.tail = this.head;
      this.length++;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
      this.length++;
    }
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

var doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push(5).push(10).push(15).push(20);
console.log('true: ', doublyLinkedList.insert(2, 12)); // true
console.log('false: ', doublyLinkedList.insert(100, 12)); // false
console.log('5: ', doublyLinkedList.length); // 5
console.log('5: ', doublyLinkedList.head.val); // 5
console.log('10: ', doublyLinkedList.head.next.val); // 10
console.log('12: ', doublyLinkedList.head.next.next.val); // 12
console.log('15: ', doublyLinkedList.head.next.next.next.val); // 15
console.log('20: ', doublyLinkedList.head.next.next.next.next.val); // 20

var doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push(5).push(10).push(15).push(20);
console.log('15: ', doublyLinkedList.remove(2).val); // 15
console.log('undefined: ', doublyLinkedList.remove(100)); // undefined
console.log('3: ', doublyLinkedList.length); // 3
console.log('5: ', doublyLinkedList.head.val); // 5
console.log('10: ', doublyLinkedList.head.next.val); // 10
console.log('20: ', doublyLinkedList.head.next.next.val); // 20
