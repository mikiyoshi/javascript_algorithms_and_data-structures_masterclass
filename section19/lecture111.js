/*

Singly
Linked Lists

Objectives
    Define what a Singly Linked List is
    Compare and contrast Linked Lists with Arrays
    Implement insertion, removal and traversal methods on Singly Linked Lists
目標
Singly Linked Listとは何かを定義する
リンクリストと配列の比較対照表
単一リンクリストに対する挿入、削除、探索メソッドの実装

What is a linked list?

A data structure that contains a head, tail and length property.

Linked Lists consist of nodes, and each node has a value and a pointer to another node or null
リンクリストとは何 ですか？
head,tail,lengthプロパティを含むデータ構造。

リンクリストはノードで構成され、各ノードは値と他のノードへのポインタまたはNULLを持つ


Comparisons with Arrays

Lists 

    Do not have indexes!
    Connected via nodes with a next pointer
    Random access is not allowed

Arrays

    Indexed in order!
    Insertion and deletion can be expensive
    Can quickly be accessed at a specific index

配列との比較
リスト

インデックスを持たないでください
ネクストポインターを持つノードを介して接続される
ランダムアクセス不可

アレイ（配列)

順番にインデックス化!
挿入と削除は高価になる可能性がある
特定のインデックスに素早くアクセスできる


 */
// ====================================================================================================
// Node の動きの確認は lecture の動画で確認できる // 下記リンクで visual 化された Node と操作の仕方を確認できる
// https://visualgo.net/en/list?slide=1
// ====================================================================================================

// piece of data - val
//reference to next node - next

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
  push(val) {}
}

var first = new Node('Hi');
first.next = new Node('there');
first.next.next = new Node('how');
first.next.next.next = new Node('are');
first.next.next.next.next = new Node('you');

console.log('first: ', first);
// first:  Node {
//   val: 'Hi',
//   next: Node { val: 'there', next: Node { val: 'how', next: [Node] } }
// }

var list = new SinglyLinkedList();
list.push('HELLO');
list.push('GOODBYE');

console.log('list: ', list);
// list:  SinglyLinkedList { head: null, tail: null, length: 0 }
