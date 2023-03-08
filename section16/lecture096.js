/*

Quicksort Pseudocode

    Call the pivot helper on the array
    When the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index
    Your base case occurs when you consider a subarray with less than 2 elements
クイックソートの疑似コード
配列のピボット・ヘルパーを呼び出します。
ヘルパーが更新されたピボット・インデックスを返すと、そのインデックスの左側のサブ配列とその右側のサブ配列に対してピボット・ヘルパーを再帰的に呼び出します。
2要素以下の部分配列の場合、基本的なケースが発生します。
*/

function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right); //3
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log('quickSort: ', quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]));
// quickSort:  [ -3, 1, 2, 2,  3, 4, 5, 6, 9, 23, 100 ]
console.log('quickSort: ', quickSort([4, 6, 9, 1, 2, 5, 3]));
// [4,6,9,1,2,5,3]
// [3,2,1,4,6,9,5]
//        4
//  3,2,1    6,9,5
//      3      6
//  2,1      5  9
//    2
//  1
// quickSort:  [ 1, 2, 3, 4, 5, 6, 9 ]
