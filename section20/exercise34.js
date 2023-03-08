/*
DLL reverse - Exercise

reverse

This function should reverse all of the nodes in a DoublyLinkedList, and should return the list.
リバース

この関数は、DoublyLinkedListのすべてのノードを反転させ、そのリストを返す必要があります。


    let doublyLinkedList = new DoublyLinkedList;
    doublyLinkedList.push(5).push(10).push(15).push(20)
    doublyLinkedList.reverse(); // singlyLinkedList;
    doublyLinkedList.length; // 4
    doublyLinkedList.head.val); // 20
    doublyLinkedList.head.next.val; // 15
    doublyLinkedList.head.next.next.val; // 10
    doublyLinkedList.head.next.next.next.val; // 5
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
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var node = new Node(val);
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
  // ???? Does it same as Single Linked List Reverse?
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
}

let doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push(5).push(10).push(15).push(20);
console.log('doublyLinkedList: ', doublyLinkedList);
console.log('20: ', doublyLinkedList.tail.val); // 20
console.log('15: ', doublyLinkedList.tail.prev.val); // 15
console.log('10: ', doublyLinkedList.tail.prev.prev.val); // 10
console.log('5: ', doublyLinkedList.tail.prev.prev.prev.val); // 5
console.log('singlyLinkedList: ', doublyLinkedList.reverse()); // singlyLinkedList;
console.log('4: ', doublyLinkedList.length); // 4
console.log('20: ', doublyLinkedList.head.val); // 20
console.log('15: ', doublyLinkedList.head.next.val); // 15
console.log('10: ', doublyLinkedList.head.next.next.val); // 10
console.log('5: ', doublyLinkedList.head.next.next.next.val); // 5
