/*
BinaryHeap - insert Exercise

Implement the following functions on the maxBinaryHeap class

insert

Implement the `insert` function on the `MaxBinaryHeap.prototype`: This function should insert a node in a binary heap. Make sure to re-order the heap after insertion if necessary.
maxBinaryHeap クラスに以下の関数を実装します。

入れる

MaxBinaryHeap.prototype`に`insert`関数を実装する。この関数は、バイナリヒープにノードを挿入する必要がある。必要であれば、挿入後にヒープを再注文することを確認する。

    binaryHeap = new MaxBinaryHeap()
    binaryHeap.insert(1)
    binaryHeap.values[0] // 1
     
    binaryHeap.insert(2)
    binaryHeap.values[0] // 2
     
    binaryHeap.values // [2, 1]
     
    binaryHeap.insert(3)
    binaryHeap.values[0] // 3
     
    binaryHeap.values // [3, 1, 2]
     
    binaryHeap.insert(4)
    binaryHeap.values[0] // 4
     
    binaryHeap.values // [4, 3, 2, 1]
     
    binaryHeap.insert(5)
    binaryHeap.values[0] // 5
     
    binaryHeap.values // [5, 4, 2, 1, 3]
     
    binaryHeap.insert(6)
    binaryHeap.values[0] // 6
     
    binaryHeap.values // [6, 4, 5, 1, 3, 2]
*/
class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  getItem(index) {
    return this.values[index];
  }
  insert(value) {
    this.values.push(value);
    this.bubbleUp();

    return this;
  }
  bubbleUp(idx = this.values.length - 1) {
    let index = idx;
    const element = this.getItem(index);

    while (index > 0) {
      const parentIndex = this.getParentIndex(index);
      const parent = this.values[parentIndex];
      if (element <= parent) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
      // this.swap(index, parentIndex);
    }
  }
}

console.log(': ');
binaryHeap = new MaxBinaryHeap();
binaryHeap.insert(1);
console.log('1: ', binaryHeap.values[0]); // 1

binaryHeap.insert(2);
console.log('2: ', binaryHeap.values[0]); // 2

console.log('[2, 1]: ', binaryHeap.values); // [2, 1]

binaryHeap.insert(3);
console.log('3: ', binaryHeap.values[0]); // 3

console.log('[3, 1, 2]: ', binaryHeap.values); // [3, 1, 2]

binaryHeap.insert(4);
console.log('4: ', binaryHeap.values[0]); // 4

console.log('[4, 3, 2, 1]: ', binaryHeap.values); // [4, 3, 2, 1]

binaryHeap.insert(5);
console.log('5: ', binaryHeap.values[0]); // 5

console.log('[5, 4, 2, 1, 3]: ', binaryHeap.values); // [5, 4, 2, 1, 3]

binaryHeap.insert(6);
console.log('6: ', binaryHeap.values[0]); // 6

console.log('[6, 4, 5, 1, 3, 2]: ', binaryHeap.values); // [6, 4, 5, 1, 3, 2]
