/*
Insertion Sort Pseudocode

    Start by picking the second element in the array
    Now compare the second element with the one before it and swap if necessary.
    Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place.
    Repeat until the array is sorted.
挿入ソート疑似コード

配列の2番目の要素を選ぶところから始めます
ここで、2番目の要素とその前の要素を比較し、必要であれば入れ替える。
次の要素に進み、順序が正しくない場合は、ソートされた部分（つまり左側）を繰り返し、その要素を正しい位置に配置します。
配列がソートされるまで繰り返します。
*/
function insertionSort(arr) {
  var currentVal;
  for (var i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
    console.log(arr);
  }
  return arr;
}

console.log('insertionSort: ', insertionSort([2, 1, 9, 76, 4]));
// [ 1, 2, 9, 76, 4 ] 1 と 2 を比較して入れ替え
// [ 1, 2, 9, 76, 4 ] 1,2 と 9 を比較して入れ替え
// [ 1, 2, 9, 76, 4 ] 1,2,9 と 76 を比較して入れ替え
// [ 1, 2, 4, 9, 76 ] 1,2,9,76 と 4 を比較して入れ替え
// insertionSort:  [ 1, 2, 4, 9, 76 ]
