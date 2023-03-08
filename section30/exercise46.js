/*
SLL - remove Exercise

Implement the following on the SinglyLinkedList class

remove

This function should remove a node at a specified index in a SinglyLinkedList. It should return the removed node. if the index is valid, or undefined if the index is invalid.

Examples

(Note: you don't need to re-implement push, the tests will be provided with it)
SinglyLinkedListクラスで以下を実装します。

取り除く

この関数は、SinglyLinkedList の指定されたインデックスにあるノードを削除するものである。インデックスが有効な場合は削除されたノードを、インデックスが無効な場合はundefinedを返す。

例

(注：pushを再実装する必要はありません。テストは一緒に提供されます)

    var singlyLinkedList = new SinglyLinkedList;
    singlyLinkedList.push(5).push(10).push(15).push(20);
    singlyLinkedList.remove(2).val; // 15
    singlyLinkedList.remove(100); // undefined
    singlyLinkedList.length // 3
    singlyLinkedList.head.val // 5
    singlyLinkedList.head.next.val // 10
    singlyLinkedList.head.next.next.val // 20
*/
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  // これは書き換えが必要
  // constructor(val) {
  //   this.val = val;
  //   this.next = null;
  // }
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

var singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(5).push(10).push(15).push(20);
console.log('15: ', singlyLinkedList.remove(2).val); // 15
console.log('undefined: ', singlyLinkedList.remove(100)); // undefined
console.log('3: ', singlyLinkedList.length); // 3
console.log('5: ', singlyLinkedList.head.val); // 5
console.log('10: ', singlyLinkedList.head.next.val); // 10
console.log('20: ', singlyLinkedList.head.next.next.val); // 20
