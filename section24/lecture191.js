/*
 OUR PRIORITY QUEUE

    Write a Min Binary Heap - lower number means higher priority.
    Each Node has a val and a priority.  Use the priority to build the heap.
    Enqueue method accepts a value and priority, makes a new node, and puts it in the right spot based off of its priority.
    Dequeue method removes root element, returns it, and rearranges heap using priority.
私たちの優先順位キュー
Min Binary Heapを書け - 数字が小さいほど優先度が高い。
各Nodeはvalと優先度を持ち、優先度によりヒープを構築する。
Enqueue メソッドは、値と優先度を受け取り、新しいノードを作り、その優先度に基づいて正しい場所に置く。
Dequeueメソッドはルート要素を削除してそれを返し、優先順位を用いてヒープを並べ替える。
MaxHeapify

Converting an array into a MaxBinaryHeap

    Create a new heap
    Iterate over the array and invoke your insert function
    return the values property on the heap
最大ヒープ化
配列をMaxBinaryHeapに 変換する

新しいヒープを作成する
配列を繰り返し処理し，挿入関数を呼び出します．
ヒープ上の値プロパティを返す



Heapsort

Let's visualize this!

We can sort an array in O(n log n) time and O(1) space by making it a heap!

    Make the array a max heap (use maxHeapify)
    Loop over the array, swap the root node with last item in the array
    After swapping each item, run maxHeapify again to find the next root node
    Next loop you'll swap the root node with the second-to-last item in the array and run maxHeapify again.
    Once you've run out of items to swap, you have a sorted array! 
ヒープソート
可視化しよう

配列をヒープにすることで、時間O(n log n) 、空間O(1) でソートできる!

配列を最大ヒープにする (maxHeapifyを使用)
配列をループし、ルートノードと配列の最後の項目を入れ替えます。
各アイテムを交換した後、次のルートノードを見つけるために再度maxHeapifyを実行します。
次のループでは、ルートノードと配列の最後から2番目のアイテムを交換し、再びmaxHeapifyを実行します。
交換するアイテムがなくなったら、ソートされた配列ができあがります!




MinBinaryHeap

//      12
//   18     23
// 29  51  44

Same idea, min values go upwards
MinBinaryHeap
同じ考え方で、最小値は上昇する
*/
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

let ER = new PriorityQueue();
ER.enqueue('common cold', 5);
ER.enqueue('gunshot wound', 1);
ER.enqueue('high fever', 4);
ER.enqueue('broken arm', 2);
ER.enqueue('glass in foot', 3);

console.log('ER: ', ER);
console.log('ER.dequeue(): ', ER.dequeue());
console.log('ER.dequeue(): ', ER.dequeue());
console.log('ER.dequeue(): ', ER.dequeue());
console.log('ER.dequeue(): ', ER.dequeue());
// ER:  PriorityQueue {
//   values: [
//     Node { val: 'gunshot wound', priority: 1 },
//     Node { val: 'broken arm', priority: 2 },
//     Node { val: 'high fever', priority: 4 },
//     Node { val: 'common cold', priority: 5 },
//     Node { val: 'glass in foot', priority: 3 }
//   ]
// }
// ER.dequeue():  Node { val: 'gunshot wound', priority: 1 }
// ER.dequeue():  Node { val: 'broken arm', priority: 2 }
// ER.dequeue():  Node { val: 'glass in foot', priority: 3 }
// ER.dequeue():  Node { val: 'high fever', priority: 4 }
// ER.dequeue():  Node { val: 'common cold', priority: 5 }
