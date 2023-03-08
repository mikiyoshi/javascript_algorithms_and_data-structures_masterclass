/*

THERE IS MORE THAN ONE WAY OF IMPLEMENTING A STACK
スタックの実装方法は1つではありません。

ARRAY IMPLEMENTATION


LINKED LIST IMPLEMENTATION



A STACK CLASS

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
}

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}



PUSHING

Add a value to the top of the stack!
プッシング
スタックの一番上に値を追加してください



PUSHING PSEUDOCODE

    The function should accept a value
    Create a new node with that value
    If there are no nodes in the stack, set the first and last property to be the newly created node 
    If there is at least one node, create a variable that stores the current first property on the stack
    Reset the first property to be the newly created node
    Set the next property on the node to be the previously created variable
    Increment the size of the stack by 1
プッシュ型疑似コード
この関数は，値を受け取る必要があります。
その値で新しいノードを作成する
スタックにノードが存在しない場合、最初と最後のプロパティに新しく作成されたノードを設定する
少なくとも1つのノードがある場合、スタック上の現在の最初のプロパティを格納する変数を作成します。
最初のプロパティが新しく作成されたノードになるようにリセットする
ノードの次のプロパティを、先に作成した変数に設定する
スタックのサイズを1つ増やす



POP

Remove a value from the top of the stack!
ポップ
スタックの先頭から値を削除する!


POP PSEUDOCODE

    If there are no nodes in the stack, return null
    Create a temporary variable to store the first property on the stack
    If there is only 1 node, set the first and last property to be null
    If there is more than one node, set the first property to be the next property on the current first
    Decrement the size by 1
    Return the value of the node removed
POP PSEUDOCODE
スタックにノードが存在しない場合、null を返す。
スタック上の最初のプロパティを格納するための一時変数を作成します。
ノードが1つしかない場合、最初と最後のプロパティにnullを設定する
ノードが複数ある場合は、現在の最初のプロパティを次のプロパティに設定します。
サイズを1つ小さくする
削除されたノードの値を返す
*/
// console に直接記入
/*
var stack = new Stack();
stack.push('FIRST');
stack.push('SECOND');
stack.push('THIRD');
stack.push('FOURTH');
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
*/
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  pop() {
    if (!this.first) return null;
    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

var stack = new Stack();
stack.push(23);
stack.push(230);
stack.push(2301);
console.log('stack: ', stack);
stack.pop();
stack.pop();
stack.pop();
console.log('stack: ', stack);
