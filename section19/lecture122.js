/*

Set

Changing the value of a node based on it's position in the Linked List
セット
リンクリスト内の位置に基づいてノードの値を変更する


Set pseudocode

Let's visualize this!

    This function should accept a value and an index
    Use your get function to find the specific node.
    If the node is not found, return false
    If the node is found, set the value of that node to be the value passed to the function and return true
セット疑似コード
可視化しよう

この関数は、値とインデックスを受け取る必要があります。
get関数を使って、特定のノードを探します。
ノードが見つからなかった場合は false を返す。
ノードが見つかった場合、そのノードの値を関数に渡された値に設定し、true を返す


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
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    var counter = 0;
    var current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(index, val) {
    var foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
}

var list = new SinglyLinkedList();

list.push('HELLO');
list.push('GOODBYE');
list.push('!');
list.push('<3');
list.push(':)');

console.log('list:', list);
// list: SinglyLinkedList {
//   head: Node { val: 'HELLO', next: Node { val: 'GOODBYE', next: [Node] } },
//   tail: Node { val: ':)', next: null },
//   length: 5
// }
console.log('list.get(): ', list.get(2));
// list.get():  Node {
//   val: '!',
//   next: Node { val: '<3', next: Node { val: ':)', next: null } }
// }

// list.set(2, '!!!')) // これだけでも確認できる // console.log() に追加すると Boolean で確認できる
console.log('list.set: ', list.set(2, '!!!'));

console.log('list.get(): ', list.get(2));
// list.get():  Node {
//   val: '!!!',
//   next: Node { val: '<3', next: Node { val: ':)', next: null } }
// }

console.log('list.set: ', list.set(6, '!!!'));
// list.set:  false
console.log('list.tail: ', list.tail);
// list.tail:  Node { val: ':)', next: null }
console.log('list.set: ', list.set(-1, 'l0l'));
// list.set:  false
