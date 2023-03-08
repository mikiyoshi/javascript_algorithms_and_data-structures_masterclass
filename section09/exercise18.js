/*
flatten

Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.
押しつぶす
配列の配列を受け取り、すべての値を平坦化した新しい配列を返すflattenという再帰的な関数を作成しなさい。
*/
function flatten(oldArr) {
  // add whatever parameters you deem necessary - good luck!
  var newArr = [];
  for (var i = 0; i < oldArr.length; i++) {
    // .isArray() は変数が配列であれば true, 配列以外は false
    // https://www.w3schools.com/jsref/jsref_isarray.asp
    // 配列内に配列があると、Recursion でもう一度 flatten() の Recursion
    console.log('oldArr[i]: ', oldArr[i]);
    if (Array.isArray(oldArr[i])) {
      // .concat() は 2 つの配列をつなげる
      // https://www.w3schools.com/jsref/jsref_concat_array.asp
      newArr = newArr.concat(flatten(oldArr[i]));
    } else {
      newArr.push(oldArr[i]);
    }
  }
  return newArr;
}

console.log('flatten: ', flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
// oldArr[i]:  1
// oldArr[i]:  2
// oldArr[i]:  3
// oldArr[i]:  [ 4, 5 ]
// oldArr[i]:  4
// oldArr[i]:  5
// flatten:  [ 1, 2, 3, 4, 5 ]
console.log('flatten: ', flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
// oldArr[i]:  1
// oldArr[i]:  [ 2, [ 3, 4 ], [ [ 5 ] ] ]
// oldArr[i]:  2
// oldArr[i]:  [ 3, 4 ]
// oldArr[i]:  3
// oldArr[i]:  4
// oldArr[i]:  [ [ 5 ] ]
// oldArr[i]:  [ 5 ]
// oldArr[i]:  5
// flatten:  [ 1, 2, 3, 4, 5 ]
console.log('flatten: ', flatten([[1], [2], [3]])); // [1,2,3]
// oldArr[i]:  [ 1 ]
// oldArr[i]:  1
// oldArr[i]:  [ 2 ]
// oldArr[i]:  2
// oldArr[i]:  [ 3 ]
// oldArr[i]:  3
// flatten:  [ 1, 2, 3 ]
console.log('flatten: ', flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3
// oldArr[i]:  [ [ [ 1 ], [ [Array] ], [ [Array] ] ] ]
// oldArr[i]:  [ [ 1 ], [ [ [Array] ] ], [ [ [Array] ] ] ]
// oldArr[i]:  [ 1 ]
// oldArr[i]:  1
// oldArr[i]:  [ [ [ 2 ] ] ]
// oldArr[i]:  [ [ 2 ] ]
// oldArr[i]:  [ 2 ]
// oldArr[i]:  2
// oldArr[i]:  [ [ [ [Array] ] ] ]
// oldArr[i]:  [ [ [ [Array] ] ] ]
// oldArr[i]:  [ [ [ [Array] ] ] ]
// oldArr[i]:  [ [ [ [Array] ] ] ]
// oldArr[i]:  [ [ [ 3 ] ] ]
// oldArr[i]:  [ [ 3 ] ]
// oldArr[i]:  [ 3 ]
// oldArr[i]:  3
// flatten:  [ 1, 2, 3 ]
