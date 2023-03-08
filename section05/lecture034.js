/*

SLIDING WINDOW

This pattern involves creating a window which can either be an array or number from one position to another

Depending on a certain condition, the window either increases or closes (and a new window is created)

Very useful for keeping track of a subset of data in an array/string etc.
このパターンでは、ある位置から別の位置への配列または数値であるウィンドウを作成します。
ある条件によって、ウィンドウが増えたり、閉じたりする（新しいウィンドウが作成される）
配列/文字列などのデータのサブセットを追跡するのに非常に便利です。


An Example

Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.
maxSubarraySum という関数を作成し、整数の配列とn という数値を受け取ります。
この関数は、配列内の連続したn 個の要素の最大和を計算する必要があります。
maxSubarraySum([1,2,5,2,8,1,5],2) // 10
// 3 3 // 1 + 2
// 7 7 // 2 + 5
// 7 7 // 5 + 2
// 10 10 // 2 + 8
// 9 10 // 8 + 1
// 6 10 // 1 + 5
maxSubarraySum([1,2,5,2,8,1,5],4) // 17
maxSubarraySum([4,2,1,6],1) // 6
maxSubarraySum([4,2,1,6,2],4) // 13
maxSubarraySum([],4) // null


A naive solution

function maxSubarraySum(arr, num) {
  if ( num > arr.length){
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i ++){
    temp = 0;
    for (let j = 0; j < num; j++){
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

Time Complexity - O(N^2)




Refactor

function maxSubarraySum(arr, num){
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

Time Complexity - O(N)

*/
// 34max_sam // Time Complexity - O(N^2)
function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
    console.log(temp, max);
  }
  return max;
}
// ('hellothere');
console.log('maxSubarraySum: ', maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
// 3 3 // 1 + 2
// 7 7 // 2 + 5
// 7 7 // 5 + 2
// 10 10 // 2 + 8
// 9 10 // 8 + 1
// 6 10 // 1 + 5
// maxSubarraySum:  10
console.log('maxSubarraySum: ', maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));
// 10 10
// 17 17
// 16 17
// 16 17
// maxSubarraySum:  17
console.log('maxSubarraySum: ', maxSubarraySum([4, 2, 1, 6], 1));
// 4 4
// 2 4
// 1 4
// 6 6
// maxSubarraySum:  6
console.log('maxSubarraySum: ', maxSubarraySum([4, 2, 1, 6, 2], 4));
// 13 13
// 11 13
// maxSubarraySum:  13
console.log('maxSubarraySum: ', maxSubarraySum([], 4));
// maxSubarraySum:  null

// Refactor
// 34max_sam_refactor // Time Complexity - O(N)
function maxSubarraySum2(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
console.log('maxSubarraySum2: ', maxSubarraySum2([1, 2, 5, 2, 8, 1, 5], 2));
console.log('maxSubarraySum2: ', maxSubarraySum2([1, 2, 5, 2, 8, 1, 5], 4));
console.log('maxSubarraySum2: ', maxSubarraySum2([4, 2, 1, 6], 1));
console.log('maxSubarraySum2: ', maxSubarraySum2([4, 2, 1, 6, 2], 4));
console.log('maxSubarraySum2: ', maxSubarraySum2([], 4));
