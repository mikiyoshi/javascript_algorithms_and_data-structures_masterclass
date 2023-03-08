/*

RADIX SORT HELPERS

In order to implement radix sort, it's helpful to build a few helper functions first:

getDigit(num, place) - returns the digit in num at the given place value
基数ソートヘルパー
基数ソートを実装するためには、まずいくつかのヘルパー関数を作っておくと便利です。

getDigit(num,place) - 指定した位置の numの数字を返す。

getDigit(12345, 0); // 5
getDigit(12345, 1); // 4
getDigit(12345, 2); // 3
getDigit(12345, 3); // 2
getDigit(12345, 4); // 1
getDigit(12345, 5); // 0

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}



RADIX SORT HELPERS

In order to implement radix sort, it's helpful to build a few helper functions first:

digitCount(num) - returns the number of digits in num
基数ソートヘルパー
基数ソートを実装するためには、まずいくつかのヘルパー関数を作っておくと便利です。

digitCount(num) -numの桁数を返す。

digitCount(1); // 1
digitCount(25); // 2
digitCount(314); // 3

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}



RADIX SORT HELPERS

In order to implement radix sort, it's helpful to build a few helper functions first:

mostDigits(nums) - Given an array of numbers, returns the number of digits in the largest numbers in the list
基数ソートヘルパー
基数ソートを実装するためには、まずいくつかのヘルパー関数を作っておくと便利です。

mostDigits(nums) - 数値の配列が与えられたとき、その中の最大の数値の桁数を返す。

mostDigits([1234, 56, 7]); // 4
mostDigits([1, 1, 11111, 1]); // 5
mostDigits([12, 34, 56, 78]); // 2

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}



*/
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
console.log('getDigit: ', getDigit(7323, 1));
console.log('getDigit: ', getDigit(7323, 2));
console.log('getDigit: ', getDigit(7323, 3));
console.log('getDigit: ', getDigit(7323, 0));
console.log('getDigit: ', getDigit(7323, 12));
// getDigit:  2
// getDigit:  3
// getDigit:  7
// getDigit:  3
// getDigit:  0

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
console.log('digitCount: ', Math.log10(digitCount(423)));
console.log('digitCount: ', Math.log10(digitCount(21338)));
console.log('digitCount: ', Math.log10(digitCount(0)));
// digitCount: 0.47712125471966244;
// digitCount: 0.6989700043360189;
// digitCount: 0;

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

console.log('mostDigits: ', mostDigits([23, 567, 89, 12234324, 90]));
// mostDigits:  8
