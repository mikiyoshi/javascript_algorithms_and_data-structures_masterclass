/*
Sliding Window - minSubArrayLen

Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
スライディングウィンドウ - minSubArrayLen
minSubArrayLenという名前の関数を作成し，正の整数の配列と正の整数の2つのパラメータを受け取ってください．
この関数は、連続した部分配列のうち、和がこの関数に渡された整数以上であるものの最小の長さを返すべきである。
存在しない場合は、代わりに0を返します。

Examples:

    minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
    minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
    minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
    minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
    minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
    minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
    minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0

Time Complexity - O(n)

Space Complexity - O(1)
*/

function minSubArrayLen(nums, sum) {
  // add whatever parameters you deem necessary - good luck!
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    // 現在のウィンドウの合計が指定された合計と一致しない場合
    // ウィンドウを右に移動する
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window
    // 現在のウィンドウの合計が指定された合計以上であれば
    // ウィンドウを縮小することができる
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    // 現在の合計が必要な合計より少ないが、最後に到達している、これが必要、さもなければ無限ループに陥る
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
