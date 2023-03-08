/*

UNSHIFTING

Adding a node to the beginning of the Doubly Linked List
アンシフティング
ダブリーリンクリストの先頭にノード

Unshifting pseudocode

    Create a new node with the value passed to the function
    If the length is 0
        Set the head to be the new node
        Set the tail to be the new node
    Otherwise
        Set the prev property on the head of the list to be the new node
        Set the next property on the new node to be the head property 
        Update the head to be the new node
    Increment the length
    Return the list
アンシフト疑似コード
関数に渡された値で新しいノードを作成します。
長さが0である場合
headを新しいノードに設定する
tailを新しいノードに設定する。
それ以外の場合
リストの先頭の prev プロパティを新しいノードに設定する。
新しいノードの next プロパティを head プロパティに設定する。
head を新しいノードに更新する
長さを増加させる
リストを返す
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
  constructor() {
    this.head = null;
    this.tail = null;
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

var list = new DoublyLinkedList();
list.push('Harry');
list.push('Ron');
list.push('Hermione');
console.log('list: ', list);
list.pop();
list.pop();
list.pop();
console.log('list: ', list);
list.unshift(1000);
console.log('list: ', list);
