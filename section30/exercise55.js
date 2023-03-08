/*
Radix Sort

Finally, you're ready to implement Radix Sort! Write a function called radixSort  which accepts an array of numbers and sorts them in ascending order.

You'll need to make use of the helper functions from the previous exercises here. Good luck!
いよいよ、Radix Sortを実装する準備が整いました。数値の配列を受け取り、昇順にソートする radixSort という関数を作りましょう。

ここでは、前の練習問題で使ったヘルパー関数を使う必要があります。幸運を祈ります。



Examples

    radixSort([8, 6, 1, 12]); // [1, 6, 8, 12]
    radixSort([10, 100, 1, 1000, 10000000]); // [1, 10, 100, 1000, 10000000]
    radixSort([902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593]); 
    // [4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157, 9637]
*/

function getDigit(num, i) {
  // using this function may be helpful. good luck!
  let result = Math.abs(num);
  for (let count = i; count > 0; count--) {
    result = Math.floor(result / 10);
  }
  return result % 10;
}

function digitCount(num) {
  // using this function may be helpful. good luck!
  return Math.abs(num).toString().length;
}

function mostDigits(nums) {
  // using this function may be helpful. good luck!
  let max = 0;

  for (const num of nums) {
    max = Math.max(max, digitCount(num));
  }
  return max;
}

function radixSort(nums) {
  // good luck!
  const end = mostDigits(nums); // get maximum number in the array

  for (let i = 0; i < end; i++) {
    const helperArr = Array.from({ length: 10 }, () => []); // create 10 buckets
    for (const num of nums) {
      helperArr[getDigit(num, i)].push(num);
    }
    nums = [].concat(...helperArr);
  }
  console.log('radixSort: ', nums);
  return nums;
}
radixSort([8, 6, 1, 12]); // [1, 6, 8, 12]
radixSort([10, 100, 1, 1000, 10000000]); // [1, 10, 100, 1000, 10000000]
radixSort([902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593]);
// [4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157, 9637]

// version 2
function radixSort2(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  console.log('radixSort2: ', nums);
  return nums;
}
radixSort2([8, 6, 1, 12]); // [1, 6, 8, 12]
radixSort2([10, 100, 1, 1000, 10000000]); // [1, 10, 100, 1000, 10000000]
radixSort2([902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593]);
// [4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157, 9637]
