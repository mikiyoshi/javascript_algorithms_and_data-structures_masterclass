/*

*/
// Optimized BubbleSort with noSwaps
// swap されたかどうかを確認して、swap されてなければ処理は終了(71Sorting_Bubble より処理が短い)
function bubbleSort(arr) {
  var noSwaps;
  for (var i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (var j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    console.log('One Pass Complete!');
    if (noSwaps) break;
  }
  return arr;
}

console.log('bubbleSort: ', bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));
// [ 8, 1, 2, 3, 4, 5, 6, 7 ] 8 1
// [ 1, 8, 2, 3, 4, 5, 6, 7 ] 8 2
// [ 1, 2, 8, 3, 4, 5, 6, 7 ] 8 3
// [ 1, 2, 3, 8, 4, 5, 6, 7 ] 8 4
// [ 1, 2, 3, 4, 8, 5, 6, 7 ] 8 5
// [ 1, 2, 3, 4, 5, 8, 6, 7 ] 8 6
// [ 1, 2, 3, 4, 5, 6, 8, 7 ] 8 7
// One Pass Complete!
// [ 1, 2, 3, 4, 5, 6, 7, 8 ] 1 2
// [ 1, 2, 3, 4, 5, 6, 7, 8 ] 2 3
// [ 1, 2, 3, 4, 5, 6, 7, 8 ] 3 4
// [ 1, 2, 3, 4, 5, 6, 7, 8 ] 4 5
// [ 1, 2, 3, 4, 5, 6, 7, 8 ] 5 6
// [ 1, 2, 3, 4, 5, 6, 7, 8 ] 6 7
// One Pass Complete!
// bubbleSort:  [ 1, 2, 3, 4, 5, 6, 7, 8 ]
