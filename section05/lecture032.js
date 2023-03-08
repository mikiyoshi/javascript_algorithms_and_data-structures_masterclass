/*

countUniqueValues

Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
countUniqueValuesという 関数を実装します。この関数はソートされた配列を受け取り、その配列内の一意な値を数えます。配列には負の数が含まれることもありますが、常にソートされた状態になります。

countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4
*/
console.log('countUniqueValues: ', countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(
  'countUniqueValues: ',
  countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])
);
console.log('countUniqueValues: ', countUniqueValues([]));
console.log('countUniqueValues: ', countUniqueValues([-2, -1, -1, 0, 1]));
