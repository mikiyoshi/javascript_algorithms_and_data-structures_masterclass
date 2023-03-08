/*
DLL pop - Exercise

Implement the following on the DoublyLinkedList class

pop

This function should remove a node at the end of the DoublyLinkedList. It should return the node removed.
DoublyLinkedList クラスに以下を実装します。

ポップ

この関数は、DoublyLinkedListの末尾にあるノードを削除する必要があります。削除されたノードを返す必要があります。



Examples

    var doublyLinkedList = new DoublyLinkedList;
    doublyLinkedList.push(5); // doublyLinkedList
    doublyLinkedList.length; // 1
    doublyLinkedList.head.val; // 5
    doublyLinkedList.tail.val; // 5
    doublyLinkedList.head.prev // null
    doublyLinkedList.push(10); doublyLinkedList 
    doublyLinkedList.length; // 2
    doublyLinkedList.head.val; // 5
    doublyLinkedList.head.next.val; // 10
    doublyLinkedList.tail.val; // 10
    doublyLinkedList.head.next.prev.val // 10
    doublyLinkedList.push(15); doublyLinkedList
    doublyLinkedList.length; // 3
    doublyLinkedList.head.val; // 5
    doublyLinkedList.tail.val; // 15
    doublyLinkedList.tail.prev.val; // 10
    doublyLinkedList.head.next.next.val; // 15
     
    doublyLinkedList.pop().val; // 15
    doublyLinkedList.length; // 2
    doublyLinkedList.pop().val; // 10
    doublyLinkedList.length; // 1
    doublyLinkedList.pop().val; // 5
    doublyLinkedList.length; // 0
    doublyLinkedList.pop(); // undefined
    doublyLinkedList.length; // 0
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
}

var doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push(5); // doublyLinkedList
console.log('1: ', doublyLinkedList.length); // 1
console.log('5: ', doublyLinkedList.head.val); // 5
console.log('5: ', doublyLinkedList.tail.val); // 5
console.log('null: ', doublyLinkedList.head.prev); // null
doublyLinkedList.push(10); // doublyLinkedList
console.log('2: ', doublyLinkedList.length); // 2
console.log('5: ', doublyLinkedList.head.val); // 5
console.log('10: ', doublyLinkedList.head.next.val); // 10
console.log('10: ', doublyLinkedList.tail.val); // 10
console.log('10? Is that true? 5: ', doublyLinkedList.head.next.prev.val); // 10 // 5 の間違いでは？
doublyLinkedList.push(15); // doublyLinkedList
console.log('3: ', doublyLinkedList.length); // 3
console.log('5: ', doublyLinkedList.head.val); // 5
console.log('15: ', doublyLinkedList.tail.val); // 15
console.log('10: ', doublyLinkedList.tail.prev.val); // 10
console.log('15: ', doublyLinkedList.head.next.next.val); // 15

console.log('15: ', doublyLinkedList.pop().val); // 15
console.log('2: ', doublyLinkedList.length); // 2
console.log('10: ', doublyLinkedList.pop().val); // 10
console.log('1: ', doublyLinkedList.length); // 1
console.log('5: ', doublyLinkedList.pop().val); // 5
console.log('0: ', doublyLinkedList.length); // 0
console.log('undefined: ', doublyLinkedList.pop()); // undefined
console.log('0: ', doublyLinkedList.length); // 0
