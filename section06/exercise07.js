/*
Sliding Window - maxSubarraySum

Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

スライディングウィンドウ - maxSubarraySum
整数の配列と数値が与えられたとき、関数に渡された数値の長さを持つ部分配列の最大和を求めるmaxSubarraySum という関数を書いてください。
部分配列は、元の配列から連続した要素で構成されなければならないことに注意してください。
以下の最初の例では、[100, 200, 300]は元の配列の部分配列ですが、[100, 300]はそうではありません。

    maxSubarraySum([100,200,300,400], 2) // 700
    maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
    maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
    maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
    maxSubarraySum([2,3], 3) // null

Constraints:

Time Complexity - O(N)

Space Complexity - O(1)
*/

function maxSubarraySum(arr, num) {
  // add whatever parameters you deem necessary - good luck!
  // 第2引数の数字分、配列内での合計が最大値のものを探す(第2引数の数字分連続していなければならない)

  // 第2引数の数字より配列が少なければ null
  if (arr.length < num) return null;

  // total は初期設定で、num の数量分先頭から合計を計算
  let total = 0;
  for (let i = 0; i < num; i++) {
    total += arr[i];
  }

  // currentTotal 初期設定で、num の数量分先頭から合計を計算
  let currentTotal = total;
  for (let i = num; i < arr.length; i++) {
    console.log(
      'currentTotal, add',
      currentTotal,
      arr[i],
      '-' + arr[i - num],
      arr[i] - arr[i - num]
    );
    // 初期設定(total)から num の数量の幅で、合計を変更する(arr[num+1] を足して、 arr[(num+1) - num]を引く)
    currentTotal += arr[i] - arr[i - num];

    // Math.max() は数値が大きい方を優先
    total = Math.max(total, currentTotal);
  }
  return total;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
// currentTotal, add 300 300 -100 200
// currentTotal, add 500 400 -200 200
// 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
// currentTotal, add 17 23 -1 22
// currentTotal, add 39 3 -4 -1
// currentTotal, add 38 1 -2 -1
// currentTotal, add 37 0 -10 -10
// currentTotal, add 27 20 -23 -3
// 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
// currentTotal, add 1 0 --3 3
// currentTotal, add 4 -2 -4 -6
// currentTotal, add -2 6 -0 6
// currentTotal, add 4 -1 --2 1
// 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
// currentTotal, add 1 7 -3 4
// currentTotal, add 5 -4 --2 -2
// currentTotal, add 3 1 -7 -6
// currentTotal, add -3 -1 --4 3
// currentTotal, add 0 4 -1 3
// currentTotal, add 3 -2 --1 -1
// currentTotal, add 2 1 -4 -3
// 5
console.log(maxSubarraySum([2, 3], 3)); // null
// null
