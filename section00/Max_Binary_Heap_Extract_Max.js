class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  extractMax() {
    // EDGE CASE COME BACK TO THIS!!
    const max = this.values[0];
    const end = this.values.pop();
    // if (this.values.length > 0) がないと、最後の値は削除されない
    if (this.values.length > 0) {
      this.values[0] = end;

      // trickle down // ポタポタ落ち(v)
      this.sinkDown(); // 関数 sinkDown()
    }
    return max;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      // let leftChild = this.values[leftChildIdx]; // (範囲外でないことを確認する) not sure
      let leftChild, rightChild; // (範囲外でないことを確認する) not sure
      let swap = null;

      if (leftChildIdx < length) {
        // (範囲外でないことを確認する) true
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        // (範囲外でないことを確認する) true
        rightChild = this.values[rightChildIdx];

        //   0   1   2   3   4   5
        // [33, 39, 41, 18, 27, 12]; // 33(arr[0]) と leftChild の 41(arr[2]) を swap // leftChild があれば先に処理する
        // [33, 41, 39, 18, 27, 12]; // 33(arr[0]) と rightChild の 41(arr[1]) を swap // leftChild の処理(swap !== null)が先にされて、さらに rightChild > leftChild だから
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
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log('heap: ', heap);
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
console.log('heap: ', heap);
