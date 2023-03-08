/*
/*
Multiple Pointers - countUniqueValues

Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
countUniqueValuesという関数を実装します。
この関数はソートされた配列を受け取り、その配列内の一意な値を数えます。
配列には負の数が含まれることもありますが、常にソートされた状態になります。

    countUniqueValues([1,1,1,1,1,2]) // 2 [1,2]
    countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7 [1,2,3,4,7,12,13]
    countUniqueValues([]) // 0 []
    countUniqueValues([-2,-1,-1,0,1]) // 4 [-2,-1,0,1]
*/
// 33unique_values

function countUniqueValues(arr) {
  // add whatever parameters you deem necessary - good luck!
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    console.log(i, j);
  }
  return i + 1;
}
console.log(
  'countUniqueValues: ',
  countUniqueValues([1, 1, 1, 2, 2, 3, 4, 5, 5, 5, 6, 7])
);
// countUniqueValues:  7
// 0 1
// 0 2
// 1 3
// 1 4
// 2 5
// 3 6
// 4 7
// 4 8
// 4 9
// 5 10
// 6 11
// countUniqueValues:  7
console.log('countUniqueValues: ', countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
// 0 1
// 0 2
// 0 3
// 0 4
// 1 5
// countUniqueValues:  2
console.log(
  'countUniqueValues: ',
  countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])
); // 7

// 1 1
// 2 2
// 3 3
// 3 4
// 3 5
// 4 6
// 4 7
// 5 8
// 5 9
// 6 10
// countUniqueValues:  7
console.log('countUniqueValues: ', countUniqueValues([])); // 0
// countUniqueValues:  1
console.log('countUniqueValues: ', countUniqueValues([-2, -1, -1, 0, 1])); // 4
// 1 1
// 1 2
// 2 3
// 3 4
// countUniqueValues:  4
