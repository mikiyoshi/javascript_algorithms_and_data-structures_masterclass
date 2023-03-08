/*
SLL - insert Exercise

Implement the following on the SinglyLinkedList class

insert

This should insert a node at a specified index in a SinglyLinkedList. It should return true if the index is valid, and false if the index is invalid (less than 0 or greater than the length of the list).

Examples

(Note: you don't need to re-implement push, the tests will be provided with it)

    var singlyLinkedList = new SinglyLinkedList;
    singlyLinkedList.push(5).push(10).push(15).push(20);
    singlyLinkedList.insert(2,12); // true
    singlyLinkedList.insert(100,12); // false
    singlyLinkedList.length // 5
    singlyLinkedList.head.val // 5
    singlyLinkedList.head.next.val // 10
    singlyLinkedList.head.next.next.val // 12
    singlyLinkedList.head.next.next.next.val // 15
    singlyLinkedList.head.next.next.next.next.val // 20
     
    singlyLinkedList.insert(5,25); // true
    singlyLinkedList.head.next.next.next.next.next.val //25
    singlyLinkedList.tail.val // 25
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
}
var singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(5).push(10).push(15).push(20);

console.log('true: ', singlyLinkedList.insert(2, 12)); // true
console.log('false: ', singlyLinkedList.insert(100, 12)); // false
console.log('5: ', singlyLinkedList.length); // 5
console.log('5: ', singlyLinkedList.head.val); // 5
console.log('10: ', singlyLinkedList.head.next.val); // 10
console.log('12: ', singlyLinkedList.head.next.next.val); // 12
console.log('15: ', singlyLinkedList.head.next.next.next.val); // 15
console.log('20: ', singlyLinkedList.head.next.next.next.next.val); // 20

console.log('true: ', singlyLinkedList.insert(5, 25)); // true
console.log('25: ', singlyLinkedList.head.next.next.next.next.next.val); //25
console.log('25: ', singlyLinkedList.tail.val); // 25
