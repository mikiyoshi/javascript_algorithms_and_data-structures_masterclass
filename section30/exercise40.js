/*
SLL - set Exercise

Implement the following on the SinglyLinkedList class

set

This function should accept an index and a value and update the value of the node in the SinglyLinkedList at the index with the new value. It should return true if the node is updated successfully, or false if an invalid index is passed in.
この関数は、インデックスと値を受け取り、そのインデックスにあるSinglyLinkedListのノードの値を新しい値で更新する。
ノードの更新に成功した場合はtrueを、無効なインデックスが渡された場合はfalseを返す必要があります。



Examples

(Note: you don't need to re-implement push, the tests will be provided with it)
注：pushを再実装する必要はありません、テストは一緒に提供されます

    var singlyLinkedList = new SinglyLinkedList();
     
    singlyLinkedList.set(0,10) // true
    singlyLinkedList.set(1,2) // true
    singlyLinkedList.length // 2
    singlyLinkedList.head.val // 10
     
    singlyLinkedList.set(10,10) // false
     
    singlyLinkedList.set(3,100) // true
    singlyLinkedList.head.next.next.next.val; // 10
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
    var foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    var newNode = new Node(val);
    var prev = this.get(index - 1);
    var temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    var previousNode = this.get(index - 1);
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
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

var singlyLinkedList = new SinglyLinkedList();
// singlyLinkedList.push(5).push(10);
singlyLinkedList.push(5).push(10);

console.log('true: ', singlyLinkedList.set(0, 10)); // true
console.log('true: ', singlyLinkedList.set(1, 2)); // true
console.log('2: ', singlyLinkedList.length); // 2
console.log('10: ', singlyLinkedList.head.val); // 10

console.log('false: ', singlyLinkedList.set(10, 10)); // false

singlyLinkedList.push(15).push(20).push(25);
// singlyLinkedList.push(15);
console.log(singlyLinkedList);
console.log('true: ', singlyLinkedList.set(3, 100)); // true
console.log('10 100じゃないのか？: ', singlyLinkedList.head.next.next.next.val); // 10 // 100じゃないのか？
