/*

GET

Accessing a node in a Doubly Linked List by its position
ゲット
二重リンクリストのノードに位置からアクセスする方法

Get Pseudocode

Let's visualize this!

    If the index is less than 0 or greater or equal to the length, return null
    If the index is less than or equal to half the length of the list
        Loop through the list starting from the head and loop towards the middle
        Return the node once it is found
    If the index is greater than half the length of the list
        ​Loop through the list starting from the tail and loop towards the middle
        Return the node once it is found
シュードコードを取得する
可視化しよう

インデックスが 0 より小さいか、長さ以上の場合は null を返す。
インデックスがリストの長さの半分以下である場合
リストの先頭から始まり、中央に向かってループを回します。
ノードが見つかったら、そのノードを返す
インデックスがリストの長さの半分より大きい場合
リストの末尾から始まり、中央に向かってループします。
ノードが見つかったら返す
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

    // count = 0;
    // current = this.head;
    // while (count !== index) {
    //   current = current.next;
    //   count++;
    // }

    // 半分だけ検証した方が時間短縮　refactor
    if (index <= this.length / 2) {
      console.log('WORKING FROM START');
      count = 0;
      current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      console.log('WORKING FROM END');
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
list.push('Last');
list.push('Actually Last');
console.log('list: ', list);
// list:  DoublyLinkedList {
//   head: <ref *1> Node {
//     val: 'Harry',
//     next: Node { val: 'Ron', next: [Node], prev: [Circular *1] },
//     prev: null
//   },
//   tail: <ref *2> Node {
//     val: 'Actually Last',
//     next: null,
//     prev: Node { val: 'Last', next: [Circular *2], prev: [Node] }
//   },
//   length: 5
// }
console.log('list.get(): ', list.get(-1));
// list.get():  null
console.log('list.get(): ', list.get(10));
// list.get():  null
console.log('list.get(): ', list.get(5));
// list.get():  null
console.log('list.get(): ', list.get(3));
// WORKING FROM END
// list.get():  <ref *1> Node {
//   val: 'Last',
//   next: Node { val: 'Actually Last', next: null, prev: [Circular *1] },
//   prev: <ref *2> Node {
//     val: 'Hermione',
//     next: [Circular *1],
//     prev: Node { val: 'Ron', next: [Circular *2], prev: [Node] }
//   }
// }
console.log('list.get(): ', list.get(4));
// WORKING FROM END
// list.get():  <ref *1> Node {
//   val: 'Actually Last',
//   next: null,
//   prev: <ref *2> Node {
//     val: 'Last',
//     next: [Circular *1],
//     prev: Node { val: 'Hermione', next: [Circular *2], prev: [Node] }
//   }
// }
console.log('list.get(): ', list.get(0));
// WORKING FROM START
// list.get():  <ref *2> Node {
//   val: 'Harry',
//   next: <ref *1> Node {
//     val: 'Ron',
//     next: Node { val: 'Hermione', next: [Node], prev: [Circular *1] },
//     prev: [Circular *2]
//   },
//   prev: null
// }
console.log('list.get(): ', list.get(1));
// WORKING FROM START
// list.get():  <ref *2> Node {
//   val: 'Ron',
//   next: <ref *1> Node {
//     val: 'Hermione',
//     next: Node { val: 'Last', next: [Node], prev: [Circular *1] },
//     prev: [Circular *2]
//   },
//   prev: Node { val: 'Harry', next: [Circular *2], prev: null }
// }
console.log('list.get(): ', list.get(2));
// WORKING FROM START
// list.get():  <ref *2> Node {
//   val: 'Hermione',
//   next: <ref *1> Node {
//     val: 'Last',
//     next: Node { val: 'Actually Last', next: null, prev: [Circular *1] },
//     prev: [Circular *2]
//   },
//   prev: <ref *3> Node {
//     val: 'Ron',
//     next: [Circular *2],
//     prev: Node { val: 'Harry', next: [Circular *3], prev: null }
//   }
// }
