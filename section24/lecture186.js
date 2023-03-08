/*

DEFINING OUR CLASS

Class Name:

       MaxBinaryHeap

Properties:

       values = []
クラスの定義
クラス名

MaxBinaryHeap

プロパティ

値 = [ ]である。



Adding to a MaxBinaryHeap

//      41
//   39     33
// 18  27  12

    Add to the end
    Bubble up

    ADD TO THE END
MaxBinaryHeapへの追加

末尾に追加
バブルアップ

Add to the end
末尾に追加
//      41
//   39     33
// 18  27  12  [55]

[41,39,33,18,27,12,(55)]

BUBBLE UP
バブルアップ
//      41
//   39     [55]
// 18  27  12  33

[41,39,33,18,27,12,(55)]
[41,39,(55),18,27,12,33]

BUBBLE UP
バブルアップ
//      [55]
//   39     41
// 18  27  12  33

[41,39,(55),18,27,12,33]
[(55),39,41,18,27,12,33]





INSERT PSEUDOCODE

    Push the value into the values property on the heap
    Bubble the value up to its correct spot!
インサート擬似コード
ヒープ上のvaluesプロパティに値をプッシュする
バブルで値を正しい位置に移動させよう




INSERT PSEUDOCODE

    Push the value into the values property on the heap
    Bubble Up:
        Create a variable called index which is the length of the values property - 1
        Create a variable called parentIndex which is the floor of (index-1)/2
        Keep looping as long as the values element at the parentIndex is less than the values element at the child index
            Swap the value of the values element at the parentIndex with the value of the element property at the child index
            Set the index to be the parentIndex, and start over!
インサート擬似コード
ヒープ上のvaluesプロパティに値をプッシュする
バブルアップ。
値のプロパティの長さ-1であるindexという変数を作成する。
parentIndexという変数を作成し、(index-1)/2の階数とする。
parentIndexのvalues要素がchild indexのvalues要素より小さい限り、ループを続ける。
parentIndexのvalues要素の値をchild indexの要素プロパティの値と入れ替える
そのインデックスをparentIndexに設定し、やり直す。
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
    let idx = this.values.length - 1; // 配列の最後(追加した値)
    const element = this.values[idx];
    // while (true) {

    // Refactored
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      // console.log(parentIdx);
      let parent = this.values[parentIdx];
      // if (element > parent) {
      //   this.values[parentIdx] = element;
      //   this.values[idx] = parent;
      //   idx = parentIdx;
      // }

      // Refactored
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
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
console.log('heap: ', heap);
heap.insert(55);

//      41
//   39     33
// 18  27  12  [55]

// [41, 39, 33, 18, 27, 12, 55];
//   0   1   2   3   4   5   6

// [41, 39, 33, 18, 27, 12, 55];
// [41, 39, 55, 18, 27, 12, 33];
// [55, 39, 41, 18, 27, 12, 33];
// [55, 39, 41, 18, 27, 12, 33];
console.log('heap: ', heap);
console.log('heap: ', heap.values); // これはおまけで、配列のみ確認できる
// heap:  MaxBinaryHeap { values: [ 41, 39, 33, 18, 27, 12 ] }
// heap:  MaxBinaryHeap { values: [
//     55, 39, 41, 18,
//     27, 12, 33
//   ] }
// heap:  [
//   55, 39, 41, 18,
//   27, 12, 33
// ]
