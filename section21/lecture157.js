/*

BUILDING A QUEUE WITH AN ARRAY



A Queue Class

class Queue {
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












How we'll visualize a queue

A series of nodes!

Let's see this in action!
https://visualgo.net/en/list?slide=1
キューをどのように可視化するか
ノードの連続！？

それでは、実際にご覧ください。


Enqueue

Adding to the beginning of the Queue!

Remember, queues are a FIFO data structure
エンキュー
キューの先頭に追加！？

キューはFIFO データ構造であることを忘れてはならない



Enqueue Pseudocode

    This function accepts some value
    Create a new node using that value passed to the function
    If there are no nodes in the queue, set this node to be the first and last property of the queue
    Otherwise, set the next property on the current last to be that node, and then set the last property of the queue to be that node
    Increment the size of the queue by 1
Enqueue疑似コード
この関数は、ある値を受け取ります。
関数に渡された値を用いて新しいノードを作成します。
キューにノードが存在しない場合、このノードをキューの最初と最後のプロパティに設定する
そうでない場合は、現在のlastの次のプロパティをそのノードに設定し、キューの最後のプロパティをそのノードに設定する
キューのサイズを1増加させる



Dequeue

Removing from the beginning of the Queue!

Remember, queues are a FIFO data structure
デキュー
キューの先頭から削除！？

キューはFIFO データ構造であることを忘れてはならない


Dequeue pseudocode

    If there is no first property, just return null
    Store the first property in a variable
    See if the first is the same as the last (check if there is only 1 node). If so, set the first and last to be null
    If there is more than 1 node, set the first property to be the next property of first 
    Decrement the size by 1
    Return the value of the node dequeued
Dequeue疑似コード
最初のプロパティが存在しない場合は、単にnullを返す
最初のプロパティを変数に格納する
firstとlastが同じかどうか確認する（ノードが1つしかない場合は確認する）。もしそうなら、最初と最後をnullに設定する
ノードが複数ある場合、最初のプロパティをfirstの次のプロパティに設定します。
サイズを1つ小さくする
キューに入れられたノードの値を返す
*/
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
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

var queue = new Queue();
queue.enqueue('First');
queue.enqueue('Second');
queue.enqueue('Third');
console.log('queue: ', queue);
// queue:  Queue {
//   first: Node { value: 'First', next: Node { value: 'Second', next: [Node] } },
//   last: Node { value: 'Third', next: null },
//   size: 3
// }
console.log('queue.dequeue(): ', queue.dequeue());
// queue.dequeue():  First
console.log('queue: ', queue);
// queue:  Queue {
//   first: Node { value: 'Second', next: Node { value: 'Third', next: null } },
//   last: Node { value: 'Third', next: null },
//   size: 2
// }
