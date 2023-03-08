/*
Frequency Counter / Multiple Pointer - findPair

Given an unsorted array and a number n, find if there exists a pair of elements in the array whose difference is n. This function should return true if the pair exists or false if it does not.
ソートされていない配列と数値nが与えられたとき、その差分がnである配列の要素の組が存在するかどうかを調べる。この関数は、組が存在すれば真を、存在しなければ偽を返すべきである。

    findPair([6,1,4,10,2,4], 2) // true
    findPair([8,6,2,4,1,0,2,5,13],1) // true
    findPair([4,-2,3,10],-6) // true
    findPair([6,1,4,10,2,4], 22) // false
    findPair([], 0) // false
    findPair([5,5], 0) // true
    findPair([-4,4], -8) // true
    findPair([-4,4], 8) // true
    findPair([1,3,4,6],-2) // true
    findPair([0,1,3,4,6],-2) // true

Part 1 - solve this with the following requirements:

Time Complexity Requirement - O(n)

Space Complexity Requirement - O(n)

Part 2 - solve this with the following requirements:

Time Complexity Requirement - O(n log n)

Space Complexity Requirement - O(1)
*/

// Solve this with the following requirements:
// Time Complexity - O(n log n)
// Space Complexity - O(1)

function findPair(arr, num) {
  arr.sort((a, b) => a - b);

  const numAbs = Math.abs(num);
  let i = 0;
  let j = 1;

  while (j < arr.length) {
    const diffAbs = Math.abs(arr[i] - arr[j]);

    if (diffAbs === numAbs) return true;

    if (diffAbs > numAbs && i === j - 1) {
      i++;
      j++;
    } else if (diffAbs > numAbs) {
      i++;
    } else {
      j++;
    }
  }

  return false;
}
console.log('true: ', findPair([6, 1, 4, 10, 2, 4], 2)); // true
console.log('true: ', findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1)); // true
console.log('true: ', findPair([4, -2, 3, 10], -6)); // true
console.log('false: ', findPair([6, 1, 4, 10, 2, 4], 22)); // false
console.log('false: ', findPair([], 0)); // false
console.log('true: ', findPair([5, 5], 0)); // true
console.log('true: ', findPair([-4, 4], -8)); // true
console.log('true: ', findPair([-4, 4], 8)); // true
console.log('true: ', findPair([1, 3, 4, 6], -2)); // true
console.log('true: ', findPair([0, 1, 3, 4, 6], -2)); // true

// Solve this with the following requirements:
// Time Complexity - O(n)
// Space Complexity - O(n)

function findPair2(arr, num) {
  const obj = {};

  for (const item of arr) {
    if (obj[item - num] || obj[item + num]) return true;
    obj[item] = item;
  }

  return false;
}
console.log('true: ', findPair2([6, 1, 4, 10, 2, 4], 2)); // true
console.log('true: ', findPair2([8, 6, 2, 4, 1, 0, 2, 5, 13], 1)); // true
console.log('true: ', findPair2([4, -2, 3, 10], -6)); // true
console.log('false: ', findPair2([6, 1, 4, 10, 2, 4], 22)); // false
console.log('false: ', findPair2([], 0)); // false
console.log('true: ', findPair2([5, 5], 0)); // true
console.log('true: ', findPair2([-4, 4], -8)); // true
console.log('true: ', findPair2([-4, 4], 8)); // true
console.log('true: ', findPair2([1, 3, 4, 6], -2)); // true
console.log('true: ', findPair2([0, 1, 3, 4, 6], -2)); // true
