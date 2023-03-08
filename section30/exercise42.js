/*
Divide and Conquer - sortedFrequency

Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array
ソートされた配列と数値が与えられたとき，配列中の数値の出現回数をカウントする関数 sortedFrequency を書く

    sortedFrequency([1,1,2,2,2,2,3],2) // 4 
    sortedFrequency([1,1,2,2,2,2,3],3) // 1 
    sortedFrequency([1,1,2,2,2,2,3],1) // 2 
    sortedFrequency([1,1,2,2,2,2,3],4) // -1

Time Complexity - O(log n)
*/
function sortedFrequency(arr, num) {
  // add whatever parameters you deem necessary - good luck!
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (arr[middle] === num) {
      let leftCount = middle;
      let rightCount = middle;

      while (arr[leftCount] === num && leftCount >= 0) {
        leftCount--;
      }

      while (arr[rightCount] === num && rightCount < arr.length) {
        rightCount++;
      }

      return rightCount - leftCount - 1;
    }

    if (arr[middle] < num) left = middle + 1;
    else right = middle - 1;
  }

  return -1;
}
console.log('4: ', sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)); // 4
console.log('1: ', sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)); // 1
console.log('2: ', sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)); // 2
console.log('-1: ', sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)); // -1
