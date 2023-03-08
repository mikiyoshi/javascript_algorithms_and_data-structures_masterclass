/*

SHIFTING

Removing a node from the beginning of the Doubly Linked List
シフティング
ダブリーリンクリストの先頭からノードを削除すること

Shifting pseudocode

Let's visualize this!

    If length is 0, return undefined
    Store the current head property in a variable (we'll call it old head)
    If the length is one
        set the head to be null
        set the tail to be null
    Update the head to be the next of the old head
    Set the head's prev property to null
    Set the old head's next to null
    Decrement the length
    Return old head
シフトの疑似コード
可視化しよう

長さが0の場合，未定義を返す
現在のheadプロパティを変数に格納する（old headと呼ぶことにする）。
長さが1である場合
headをnullに設定する
尾をnullに設定する
古いヘッドの次のヘッドに更新する
headのprevプロパティにnullを設定する
古いheadのnextをnullに設定
長さを減少させる
旧型ヘッドを戻す
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
}

var list = new DoublyLinkedList();
list.push('Harry');
list.push('Ron');
list.push('Hermione');
console.log('list: ', list);
list.shift();
console.log('list: ', list);
list.shift();
console.log('list: ', list);
list.shift();
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
// list:  DoublyLinkedList {
//   head: <ref *1> Node {
//     val: 'Ron',
//     next: Node { val: 'Hermione', next: null, prev: [Circular *1] },
//     prev: null
//   },
//   tail: <ref *2> Node {
//     val: 'Hermione',
//     next: null,
//     prev: <ref *1> Node {
//       val: 'Ron',
//       next: [Circular *2],
//       prev: null
//     }
//   },
//   length: 2
// }
// list:  DoublyLinkedList {
//   head: Node { val: 'Hermione', next: null, prev: null },
//   tail: Node { val: 'Hermione', next: null, prev: null },
//   length: 1
// }
// list:  DoublyLinkedList { head: null, tail: null, length: 0 }
