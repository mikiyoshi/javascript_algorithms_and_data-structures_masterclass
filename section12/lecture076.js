/*
Selection Sort Pseudocode

    Store the first element as the smallest value you've seen so far.
    Compare this item to the next item in the array until you find a smaller number.
    If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
    If the "minimum" is not the value (index) you initially began with, swap the two values.
    Repeat this with the next element until the array is sorted.
選択ソート疑似コード
最初の要素を今までで最小の値として保存します。
この項目と配列の次の項目を、より小さい数字が見つかるまで比較します。
より小さい数値が見つかったら、その小さい数値を新しい「最小値」として指定し、配列の最後まで続けます。
最小値」が最初に設定した値（インデックス）でない場合は、2つの値を入れ替えてください。
配列がソートされるまで、次の要素でこれを繰り返します。
*/
// LEGACY VERSION (non ES2015 syntax)
function selectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var lowest = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    // console.log('Swapping to: ', arr);
    // swap の必要がなければ処理しない(先頭が最小の数字であれば、処理が必要ない)
    if (i !== lowest) {
      console.log('i lowest: ', i, lowest, arr[i], arr[lowest]);
      //SWAP!
      var temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
    // console.log('Result: ', arr);
  }
  return arr;
}
console.log('selectionSort: ', selectionSort([0, 2, 34, 22, 10, 19, 17]));
// i lowest:  2 4 34 10
// i lowest:  3 6 22 17
// i lowest:  4 5 34 19
// i lowest:  5 6 34 22
// selectionSort:  [ 0,  2, 10, 17, 19, 22, 34 ]

// ES2015 VERSION
function selectionSort2(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
}

// console.log('selectionSort2: ', selectionSort2([0, 2, 34, 22, 10, 19, 17]));
