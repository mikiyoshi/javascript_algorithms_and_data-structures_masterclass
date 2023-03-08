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
  traverse() {
    var current = this.head;
    while (current) {
      console.log('traverse(): ', current.val);
      current = current.next;
    }
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
list.traverse();
// traverse():  HELLO
// traverse():  GOODBYE
// traverse():  !
