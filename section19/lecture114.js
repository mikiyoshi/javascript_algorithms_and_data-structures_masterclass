/*

Popping

Removing a node from the end of the Linked List!
ポッピング
リンクリストの末尾からノードを 削除！？

Popping pseudocode

    If there are no nodes in the list, return undefined
    Loop through the list until you reach the tail
    Set the next property of the 2nd to last node to be null
    Set the tail to be the 2nd to last node
    Decrement the length of the list by 1
    Return the value of the node removed

Let's visualize this!
https://visualgo.net/en/list?slide=1
ポッピングの疑似コード
可視化しよう

リストにノードが存在しない場合，未定義を返す。
リストの末尾に到達するまでループさせる
最後から2番目のノードのnextプロパティをnullに設定する
最後から2番目のノードがtailになるように設定する
リストの長さを1だけ減少させる
削除されたノードの値を返す
*/
// ====================================================================================================
// Node の動きの確認は lecture の動画で確認できる // 下記リンクで visual 化された Node と操作の仕方を確認できる
// https://visualgo.net/en/list?slide=1
// ====================================================================================================

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
    // console.log('current.val: ', current.val);
    // console.log('newTail.val: ', newTail.val);
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
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

list.pop();

console.log('list:', list);
// list: SinglyLinkedList {
//   head: Node { val: 'HELLO', next: Node { val: 'GOODBYE', next: null } },
//   tail: Node { val: 'GOODBYE', next: null },
//   length: 2
// }
