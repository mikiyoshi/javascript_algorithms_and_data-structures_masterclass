/*
DLL- remove Exercise

Implement the following on the DoublyLinkedList class

remove

This function should remove a node at a specified index in a DoublyLinkedList. It should return the removed node. if the index is valid, or undefined if the index is invalid.

reverse

This function should reverse all of the nodes in a DoublyLinkedList, and should return the list.
DoublyLinkedList クラスに以下を実装します。

削除

この関数は、DoublyLinkedList の指定されたインデックスにあるノードを削除しなければならない。インデックスが有効な場合は削除されたノードを、 インデックスが無効な場合は未定義を返さなければならない。

リバース

この関数は DoublyLinkedList のすべてのノードを反転し、そのリストを返す。



Examples

(Note: you don't need to re-implement push, the tests will be provided with it)

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
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  // これは書き換えが必要
  // constructor(val) {
  //   this.val = val;
  //   this.next = null;
  // }
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
    var node = new Node(val);
    // これは書き換えが必要
    // if (this.head === null) {
    if (this.length === 0) {
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
// doublyLinkedList.push(5);
// console.log('doublyLinkedList: ', doublyLinkedList);
doublyLinkedList.push(5).push(10).push(15).push(20);
// console.log('doublyLinkedList: ', doublyLinkedList);
console.log('15: ', doublyLinkedList.remove(2).val); // 15
console.log('undefined: ', doublyLinkedList.remove(100)); // undefined
console.log('3: ', doublyLinkedList.length); // 3
console.log('5: ', doublyLinkedList.head.val); // 5
console.log('10: ', doublyLinkedList.head.next.val); // 10
console.log('20: ', doublyLinkedList.head.next.next.val); // 20
