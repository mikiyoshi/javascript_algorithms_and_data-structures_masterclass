/*
REMOVING FROM A HEAP

//      41
//   39     33
// 18  27  12

Let's visualize this!

    Remove the root
    Replace with the most recently added
    Adjust (sink down)

取卸し

ルートを削除する
最も新しく追加されたものに置き換える
アジャスト（沈み込み）する


SINK DOWN?

The procedure for deleting the root from the heap (effectively extracting the maximum element in a max-heap or the minimum element in a min-heap) and restoring the properties is called down-heap (also known as bubble-down, percolate-down, sift-down, trickle down, heapify-down, cascade-down, and extract-min/max).
ヒープからルートを削除し（maxヒープでは最大要素、minヒープでは最小要素を効果的に抽出）、
特性を復元する 手順をダウンヒープと呼ぶ 
（ バブルダウン、 パーコレートダウン、 シフティングダウン、 トリクルダウン、 ヒープ化ダウン、 
カスケードダウン、 エキスミン／マックスなどとも呼ばれる）。



REMOVE AND SWAP
抜き差し
//      41
//   39     33
// 18  27  12

[41,39,33,18,27,12]

//      12
//   39     33
// 18  27          REMOVED! [41]

[12,39,33,18,27]

SINKING DOWN
シンキングダウン
//      12
//   39     33
// 18  27  

[12,39,33,18,27]

//      39
//   12     33
// 18  27  

[39,12,33,18,27]

//      39
//   27     33
// 18  12  

[39,27,33,18,12]



REMOVING (also called extractMax)

    Swap the first value in the values property with the last one
    Pop from the values property, so you can return the value at the end.
    Have the new root "sink down" to the correct spot...​
        Your parent index starts at 0 (the root)
        Find the index of the left child: 2 * index + 1 (make sure its not out of bounds)
        Find the index of the right child: 2*index + 2 (make sure its not out of bounds)
        If the left or right child is greater than the element...swap. If both left and right children are larger, swap with the largest child.
        The child index you swapped to now becomes the new parent index.  
        Keep looping and swapping until neither child is larger than the element.
        Return the old root!
リムーバブル(エクストラクトマックス）
valuesプロパティの最初の値を最後の値と入れ替える
valuesプロパティからポップするので、最後に値を返すことができます。
新しいルートが正しい場所に「沈む」ように...
親のインデックスは0（ルート）から始まります。
左の子のインデックスを求める: 2 * index + 1 (範囲外でないことを確認する)
右の子のインデックスを求める: 2*index + 2 (境界外でないことを確認する)
左または右の子が要素より大きい場合...入れ替え。左の子も右の子も大きい場合は、大きい方の子とスワップします。
スワップ先の子インデックスが新しい親インデックスになります。
どちらの子も要素より大きくなくなるまで、ループとスワップを続けます。
古いルートを返します!
*/
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

//      55
//   39     41
// 18  27  12  33
// [55, 39, 41, 18, 27, 12, 33];

//      33
//   39     41
// 18  27  12
// [33, 39, 41, 18, 27, 12];
//   0   1   2   3   4   5
// 33(arr[0]) と 41(arr[2]) を swap
console.log('heap: ', heap);
console.log('heap: ', heap.values);
console.log('heap.extractMax(): ', heap.extractMax());
console.log('heap: ', heap);
console.log('heap.extractMax(): ', heap.extractMax());
console.log('heap: ', heap);
console.log('heap.extractMax(): ', heap.extractMax());
console.log('heap.extractMax(): ', heap.extractMax());
console.log('heap.extractMax(): ', heap.extractMax());
console.log('heap.extractMax(): ', heap.extractMax());
console.log('heap.extractMax(): ', heap.extractMax());
console.log('heap.extractMax(): ', heap.extractMax());
console.log('heap: ', heap);
// heap:  MaxBinaryHeap { values: [
//   55, 39, 41, 18,
//   27, 12, 33
// ] }
// heap:  [
// 55, 39, 41, 18,
// 27, 12, 33
// ]
// heap.extractMax():  55
// heap:  MaxBinaryHeap { values: [ 41, 39, 33, 18, 27, 12 ] }
// heap.extractMax():  41
// heap:  MaxBinaryHeap { values: [ 39, 27, 33, 18, 12 ] }
// heap.extractMax():  39
// heap.extractMax():  33
// heap.extractMax():  27
// heap.extractMax():  18
// heap.extractMax():  12
// heap.extractMax():  undefined
// heap:  MaxBinaryHeap { values: [] }
