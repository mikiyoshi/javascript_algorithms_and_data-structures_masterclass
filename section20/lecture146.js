/*

INSERT

Adding a node in a Doubly Linked List by a certain position
INSERT
ダブルリンクリストのノードをある位置で追加する

Insert pseudocode

Let's visualize this!

    If the index is less than zero or greater than or equal to the length return false
    If the index is 0, unshift
    If the index is the same as the length, push
    Use the get method to access the index -1
    Set the next and prev properties on the correct nodes to link everything together
    Increment the length 
    Return true
擬似コードを挿入する
可視化しよう

インデックスが0より小さいか，または長さ以上の場合 return false
インデックスが0の場合、アンシフト
インデックスが長さと同じなら，プッシュする。
インデックスにアクセスするには、getメソッドを使用します -1
正しいノードにnextとprevのプロパティを設定し、すべてをリンクさせる
長さを増加させる
真を返す
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
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    var newNode = new Node(val);
    var beforeNode = this.get(index - 1);
    var afterNode = beforeNode.next;

    (beforeNode.next = newNode), (newNode.prev = beforeNode);
    (newNode.next = afterNode), (afterNode.prev = newNode);
    this.length++;
    return true;
  }
}

var list = new DoublyLinkedList();
list.push('Harry');
list.push('Ron');
list.push('Hermione');
console.log('list: ', list);
// list:  DoublyLinkedList {
//   head: <ref *1> Node {
//     val: 'Harry',
//     next: Node { val: 'Ron', next: [Node], prev: [Circular *1] },
//     prev: null
//   },
//   tail: <ref *2> Node {
//     val: 'Hermione',
//     next: null,
//     prev: Node { val: 'Ron', next: [Circular *2], prev: [Node] }
//   },
//   length: 3
// }
console.log('list: ', list.insert(1, 'Tonks'));
// list:  true
console.log('list: ', list);
// list:  DoublyLinkedList {
//   head: <ref *1> Node {
//     val: 'Harry',
//     next: Node { val: 'Tonks', next: [Node], prev: [Circular *1] },
//     prev: null
//   },
//   tail: <ref *2> Node {
//     val: 'Hermione',
//     next: null,
//     prev: Node { val: 'Ron', next: [Circular *2], prev: [Node] }
//   },
//   length: 4
// }
