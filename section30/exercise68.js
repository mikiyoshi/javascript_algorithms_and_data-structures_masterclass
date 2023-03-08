/*
BinaryHeap - extractMax Exercise

Implement the following functions on the maxBinaryHeap class

extractMax

Implement the `extractMax` function on the `MaxBinaryHeap.prototype`: This function should remove the root node in a binary heap. Make sure to re-order the heap after removal if necessary.
maxBinaryHeap クラスに以下の関数を実装します。

エクストラクトマックス

MaxBinaryHeap.prototype`に`extractMax`関数を実装します。この関数は、バイナリヒープのルートノードを削除する必要があります。必要であれば、削除後にヒープを再注文することを確認する。

    binaryHeap.insert(1)
    binaryHeap.insert(2)
    binaryHeap.insert(3)
    binaryHeap.insert(4)
    binaryHeap.insert(5)
    binaryHeap.insert(6)
    binaryHeap.extractMax()
    binaryHeap.values[0] // 5
     
    binaryHeap.values // [5,4,2,1,3])
     
    binaryHeap.extractMax()
    binaryHeap.values // [4,3,2,1])
     
    binaryHeap.extractMax()
    binaryHeap.values // [3,1,2])
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
  extractMax() {
    if (this.isEmpty()) return null;
    if (this.values.length === 1) return this.values.pop();

    this.swap(0, this.values.length - 1);
    const extractedItem = this.values.pop();
    this.sinkDown();

    return extractedItem;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    // find left and right
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
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
  isEmpty() {
    return !this.values.length;
  }

  swap(indexOne, indexTwo) {
    [this.values[indexOne], this.values[indexTwo]] = [
      this.values[indexTwo],
      this.values[indexOne],
    ];
  }

  compare(firstItem, secondItem) {
    throw new Error(
      'You must implement your own compare method for min or max heap.'
    );
  }
}

binaryHeap = new MaxBinaryHeap();
binaryHeap.insert(1);
binaryHeap.insert(2);
binaryHeap.insert(3);
binaryHeap.insert(4);
binaryHeap.insert(5);
binaryHeap.insert(6);
binaryHeap.extractMax();
console.log('5: ', binaryHeap.values[0]); // 5

console.log('[5,4,2,1,3]: ', binaryHeap.values); // [5,4,2,1,3])

binaryHeap.extractMax();
console.log('[4,3,2,1]: ', binaryHeap.values); // [4,3,2,1])

binaryHeap.extractMax();
console.log('[3,1,2]: ', binaryHeap.values); // [3,1,2])
