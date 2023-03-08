/*
Divide and Conquer - countZeroes

Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.
すべての1が最初にあり、次にすべての0がある1と0の配列が与えられたとき、
配列中の0の数を返すcountZeroesという関数を書きなさい。

    countZeroes([1,1,1,1,0,0]) // 2
    countZeroes([1,0,0,0,0]) // 4
    countZeroes([0,0,0]) // 3
    countZeroes([1,1,1,1]) // 0

Time Complexity - O(log n) 
*/

// Divide and Conquer - countZeroes
// Given an array of 1s and 0s which has all 1s first followed by all 0s,
// write a function called countZeroes, which returns the number of zeroes in the array.

// Time Complexity - O(log n)

function countZeroes(arr) {
  // add whatever parameters you deem necessary - good luck!!!
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (arr[middle] === 1) left = middle + 1;
    else right = middle - 1;
  }

  return arr.length - left;
}
console.log('2: ', countZeroes([1, 1, 1, 1, 0, 0])); // 2
console.log('4: ', countZeroes([1, 0, 0, 0, 0])); // 4
console.log('3: ', countZeroes([0, 0, 0])); // 3
console.log('0: ', countZeroes([1, 1, 1, 1])); // 0
