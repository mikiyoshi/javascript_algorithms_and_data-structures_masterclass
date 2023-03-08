/*
DLL get - Exercise

Implement the following on the DoublyLinkedList.prototype

get

This internal/helper function should find a node at a specified index in a DoublyLinkedList. It should return the found node.
DoublyLinkedList.prototype に以下を実装する。

取得

この内部関数/ヘルパー関数は、DoublyLinkedList 内の指定されたインデックスにあるノードを 探し出す必要がある。見つかったノードを返す。



Examples

(Note: you don't need to re-implement push, the tests will be provided with it.)

    var doublyLinkedList = new DoublyLinkedList();
     
    doublyLinkedList.push(5).push(10).push(15).push(20);
    doublyLinkedList.get(0).val // 5
    doublyLinkedList.get(1).val // 10
    doublyLinkedList.get(2).val // 15
    doublyLinkedList.get(3).val // 20
    doublyLinkedList.get(4) // null
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
}

var doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.push(5).push(10).push(15).push(20);
console.log('5: ', doublyLinkedList.get(0).val); // 5
console.log('10: ', doublyLinkedList.get(1).val); // 10
console.log('15: ', doublyLinkedList.get(2).val); // 15
console.log('20: ', doublyLinkedList.get(3).val); // 20
console.log('null: ', doublyLinkedList.get(4)); // null
