/*


Unshifting

Adding a new node to the beginning of the Linked List!
アンシフト
リンクリストの先頭に新しいノードを 追加！？

Unshifting pseudocode

    This function should accept a value
    Create a new node using the value passed to the function
    If there is no head property on the list, set the head and tail to be the newly created node
    Otherwise set the newly created node's next property to be the current head property on the list
    Set the head property on the list to be that newly created node
    Increment the length of the list by 1
    Return the linked list

Let's visualize this!
https://visualgo.net/en/list?slide=1
アンシフト疑似コード
可視化しよう

この関数は、値を受け取る必要があります。
関数に渡された値を用いて、新しいノードを作成します。
リストに head プロパティが存在しない場合、head と tail を新しく作成したノードに設定する
そうでなければ、新しく作成されたノードの次のプロパティを、リストの現在の先頭のプロパティに設定します。
リストのheadプロパティに新しく作成されたノードを設定する
リストの長さを1だけ増加させる
リンクリストを返す


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
  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
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

list.unshift('First');

console.log('list:', list);
// list: SinglyLinkedList {
//   head: Node { val: 'First', next: Node { val: 'HELLO', next: [Node] } },
//   tail: Node { val: '!', next: null },
//   length: 4
// }
