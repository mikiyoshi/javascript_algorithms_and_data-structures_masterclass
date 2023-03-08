/*
DLL unshift - Exercise

Implement the following on the DoublyLinkedList class

unshift

This function should accept a value and add a node to the beginning of the DoublyLinkedList with the given value. It should return the DoublyLinkedList.
DoublyLinkedList クラスに以下を実装します。

アンシフト

この関数は、値を受け取り、与えられた値を持つDoublyLinkedListの先頭にノードを追加する必要があります。
DoublyLinkedListを返すこと。



Examples

    var doublyLinkedList = new DoublyLinkedList;
    doublyLinkedList.unshift(5); // doublyLinkedList
    doublyLinkedList.length; // 1
    doublyLinkedList.head.val; // 5
    doublyLinkedList.tail.val; // 5
    doublyLinkedList.unshift(10); doublyLinkedList 
    doublyLinkedList.length; // 2
    doublyLinkedList.head.val; // 10
    doublyLinkedList.head.next.val; // 5
    doublyLinkedList.tail.val; // 5
    doublyLinkedList.unshift(15); doublyLinkedList
    doublyLinkedList.length; // 3
    doublyLinkedList.head.val; // 15
    doublyLinkedList.tail.val; // 5
    doublyLinkedList.head.next.next.val; // 5
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
  /*
  constructor(val) {
    this.val = val;
    this.next = null;
  }
  push(val) {
    var node = new Node(val);
    if (this.head === null) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  */

  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
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
}

var doublyLinkedList = new DoublyLinkedList();

// doublyLinkedList.push(5); // doublyLinkedList
// console.log('1: ', doublyLinkedList.length); // 1
// console.log('5: ', doublyLinkedList.head.val); // 5
// console.log('5: ', doublyLinkedList.tail.val); // 5
// console.log('null: ', doublyLinkedList.head.prev); // null
// doublyLinkedList.push(10); //doublyLinkedList
// console.log('2: ', doublyLinkedList.length); // 2
// console.log('5: ', doublyLinkedList.head.val); // 5
// console.log('10: ', doublyLinkedList.head.next.val); // 10
// console.log('10: ', doublyLinkedList.tail.val); // 10
// console.log('10: ', doublyLinkedList.head.next.prev.val); // 10
// doublyLinkedList.push(15); //doublyLinkedList
// console.log('3: ', doublyLinkedList.length); // 3
// console.log('5: ', doublyLinkedList.head.val); // 5
// console.log('15: ', doublyLinkedList.tail.val); // 15
// console.log('10: ', doublyLinkedList.tail.prev.val); // 10
// console.log('15: ', doublyLinkedList.head.next.next.val); // 15
// console.log(doublyLinkedList);

doublyLinkedList.unshift(5); // doublyLinkedList
console.log('1: ', doublyLinkedList.length); // 1
console.log('5: ', doublyLinkedList.head.val); // 5
console.log('5: ', doublyLinkedList.tail.val); // 5
doublyLinkedList.unshift(10); // doublyLinkedList
console.log('2: ', doublyLinkedList.length); // 2
console.log('10: ', doublyLinkedList.head.val); // 10
console.log('5: ', doublyLinkedList.head.next.val); // 5
console.log('5: ', doublyLinkedList.tail.val); // 5
doublyLinkedList.unshift(15); // doublyLinkedList
console.log('3: ', doublyLinkedList.length); // 3
console.log('15: ', doublyLinkedList.head.val); // 15
console.log('5: ', doublyLinkedList.tail.val); // 5
console.log('5: ', doublyLinkedList.head.next.next.val); // 5
console.log(doublyLinkedList);
