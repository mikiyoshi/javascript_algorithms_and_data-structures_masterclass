/*

Shifting

Removing a new node from the beginning of the Linked List!
シフティング
リンクリストの先頭から新しいノードを 削除する!

Shifting pseudocode

    If there are no nodes, return undefined
    Store the current head property in a variable
    Set the head property to be the current head's next property
    Decrement the length by 1
    Return the value of the node removed

Let's visualize this!
https://visualgo.net/en/list?slide=1
シフトの疑似コード
可視化しよう

ノードが存在しない場合は未定義を返す
現在のheadプロパティを変数に格納する
headプロパティを現在のheadの次のプロパティに設定する
長さを1つ減らす
削除されたノードの値を返す

*/

/*
.push() // 112 リンクリストの "末尾" に新しいノードを 追加
.pop() // 114 リンクリストの "末尾" からノードを 削除
.shift() // 116 リンクリストの "先頭" から新しいノードを 削除
.unshift(val) // 118 リンクリストの先頭に新しいノードを 追加
.get(index) // 120 リンクリスト内の位置でノードを 取り出す
.set(index, val) // 122 リンクリスト内の位置に基づいてノードの値を変更する
.insert(index, val) // 124 リンクリストに特定の 位置のノードを追加する機能
.remove(index) // 126 リンクリストの特定 位置のノードを削除する機能
.reverse() // 128 リンクリストの反転
.print()  // 128 おまけ: リンクリストを配列で表示
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
  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  // list.shift() の度に、list.next の中身に移動
  shift() {
    if (!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
}

var list = new SinglyLinkedList();
list.push('HELLO');
list.push('GOODBYE');
list.push('!');

console.log('list:', list);
// list: SinglyLinkedList {
//   head: Node { val: 'HELLO', next: Node { val: 'GOODBYE', next: [Node] } },
//   tail: Node { val: '!', next: null },
//   length: 3
// }

list.shift();

console.log('list:', list);
// list: SinglyLinkedList {
//   head: Node { val: 'GOODBYE', next: Node { val: '!', next: null } },
//   tail: Node { val: '!', next: null },
//   length: 2
// }
