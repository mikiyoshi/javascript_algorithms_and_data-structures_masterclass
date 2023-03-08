/*
SLL - Rotate Exercise

Implement the following on the SinglyLinkedList class

rotate

This function should rotate all the nodes in the list by some number passed in. For instance, if your list looks like 1 -> 2 -> 3 -> 4 -> 5 and you rotate by 2, the list should be modified to 3 -> 4 -> 5 -> 1 -> 2. The number passed in to rotate can be any integer.

SinglyLinkedList クラスに以下を実装します。

回転

この関数は、リストに含まれるすべてのノードを、渡された数値によって回転させる必要があります。
例えば、リストが 1 -> 2 -> 3 -> 4 -> 5 のように見えるとき、2だけ回転させれば、リストは 3 -> 4 -> 5 -> 1 -> 2 のように修正されるはずです。
rotateに渡される数値は任意の整数である。


Time Complexity: O(N), where N is the length of the list.

Space Complexity: O(1)

Examples

(Note: push is implemented to help you test your rotate function)

    var singlyLinkedList = new SinglyLinkedList;
    singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
    singlyLinkedList.head.val; // 5
    singlyLinkedList.tail.val; // 25;
     
    singlyLinkedList.rotate(3);
    singlyLinkedList.head.val; // 20
    singlyLinkedList.head.next.val; // 25
    singlyLinkedList.head.next.next.val; // 5
    singlyLinkedList.head.next.next.next.val; // 10
    singlyLinkedList.head.next.next.next.next.val; // 15
    singlyLinkedList.tail.val; // 15
    singlyLinkedList.tail.next; // null

    var singlyLinkedList = new SinglyLinkedList;
    singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
    singlyLinkedList.head.val; // 5
    singlyLinkedList.tail.val; // 25;
     
    singlyLinkedList.rotate(-1);
    singlyLinkedList.head.val; // 25
    singlyLinkedList.head.next.val; // 5
    singlyLinkedList.head.next.next.val; // 10
    singlyLinkedList.head.next.next.next.val; // 15
    singlyLinkedList.head.next.next.next.next.val; // 20
    singlyLinkedList.tail.val; // 20
    singlyLinkedList.tail.next // null

    var singlyLinkedList = new SinglyLinkedList;
    singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
    singlyLinkedList.head.val; // 5
    singlyLinkedList.tail.val; // 25;
     
    singlyLinkedList.rotate(1000);
    singlyLinkedList.head.val; // 5
    singlyLinkedList.head.next.val; // 10
    singlyLinkedList.head.next.next.val; // 15
    singlyLinkedList.head.next.next.next.val; // 20
    singlyLinkedList.head.next.next.next.next.val; // 25
    singlyLinkedList.tail.val; // 25
    singlyLinkedList.tail.next // null
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
    let newNode = new Node(val);
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
  /*
- Rotate
This function should rotate all the nodes in the list by some number passed in.
For instance, if your list looks like 1 -> 2 -> 3 -> 4 -> 5 and you rotate by 2,
the list should be modified to 3 -> 4 -> 5 -> 1 -> 2.
The number passed in to rotate can be any integer (should work with negative indexes).
Time Complexity: O(N), where N is the length of the list. Space Complexity: O(1)
*/
  rotate(number) {
    const index = number < 0 ? number + this.length : number;

    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this;

    const prevNode = this.get(index - 1);

    if (!prevNode) return undefined;

    this.tail.next = this.head;
    this.head = prevNode.next;
    this.tail = prevNode;
    prevNode.next = null;

    return this;
  }
}

var singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(5).push(10).push(15).push(20).push(25);

console.log('get: ', singlyLinkedList.get(3));
console.log('5: ', singlyLinkedList.head.val); // 5
console.log('25: ', singlyLinkedList.tail.val); // 25;

singlyLinkedList.rotate(3);
console.log('20: ', singlyLinkedList.head.val); // 20
console.log('25: ', singlyLinkedList.head.next.val); // 25
console.log('5: ', singlyLinkedList.head.next.next.val); // 5
console.log('10: ', singlyLinkedList.head.next.next.next.val); // 10
console.log('15: ', singlyLinkedList.head.next.next.next.next.val); // 15
console.log('15: ', singlyLinkedList.tail.val); // 15
console.log('null: ', singlyLinkedList.tail.next); // null

var singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
console.log('5: ', singlyLinkedList.head.val); // 5
console.log('25: ', singlyLinkedList.tail.val); // 25;

singlyLinkedList.rotate(-1);
console.log('25: ', singlyLinkedList.head.val); // 25
console.log('5: ', singlyLinkedList.head.next.val); // 5
console.log('10: ', singlyLinkedList.head.next.next.val); // 10
console.log('15: ', singlyLinkedList.head.next.next.next.val); // 15
console.log('20: ', singlyLinkedList.head.next.next.next.next.val); // 20
console.log('20: ', singlyLinkedList.tail.val); // 20
console.log('null: ', singlyLinkedList.tail.next); // null

var singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
console.log('5: ', singlyLinkedList.head.val); // 5
console.log('25: ', singlyLinkedList.tail.val); // 25;

singlyLinkedList.rotate(1000);
console.log('5: ', singlyLinkedList.head.val); // 5
console.log('10: ', singlyLinkedList.head.next.val); // 10
console.log('15: ', singlyLinkedList.head.next.next.val); // 15
console.log('20: ', singlyLinkedList.head.next.next.next.val); // 20
console.log('25: ', singlyLinkedList.head.next.next.next.next.val); // 25
console.log('25: ', singlyLinkedList.tail.val); // 25
console.log('null: ', singlyLinkedList.tail.next); // null
