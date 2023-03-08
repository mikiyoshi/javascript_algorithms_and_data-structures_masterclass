/*
DLL set - Exercise

Implement the following on the DoublyLinkedList.prototype

set

This function should accept an index and a value and update the value of the node in the DoublyLinkedList at the index with the new value. It should return true if the node is updated successfully, or false if an invalid index is passed in.
DoublyLinkedList.prototype に以下を実装する。

セット

この関数は、インデックスと値を受け取り、DoublyLinkedList 内のインデックスのノードの値を新しい値で更新する必要がある。この関数は、ノードの更新に成功した場合は true を、無効なインデックスが渡された場合は false を返す必要がある。


Examples

(Note: you don't need to re-implement push, the tests will be provided with it.)

    var doublyLinkedList = new DoublyLinkedList();
     
    doublyLinkedList.push(5).push(10).push(15).push(20);
    doublyLinkedList.set(0,10) // true
    doublyLinkedList.length // 4
    doublyLinkedList.head.val // 10
     
    doublyLinkedList.set(10,10) // false
     
    doublyLinkedList.set(2,100) // true
    doublyLinkedList.head.next.next.val; // 100
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
}

var doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.push(5).push(10).push(15).push(20);
console.log('true: ', doublyLinkedList.set(0, 10)); // true
console.log('4: ', doublyLinkedList.length); // 4
console.log('10: ', doublyLinkedList.head.val); // 10

console.log('false: ', doublyLinkedList.set(10, 10)); // false

console.log('true: ', doublyLinkedList.set(2, 100)); // true
console.log('100: ', doublyLinkedList.head.next.next.val); // 100
