/*
Frequency Counter - findAllDuplicates

Given an array of positive integers, some elements appear twice and others appear once. Find all the elements that appear twice in this array. Note that you can return the elements in any order.
正の整数の配列が与えられたとき、ある要素は2回現れ、ある要素は1回現れる。この配列の中で2回出現する要素をすべて求めよ．なお、要素はどのような順番で返してもよい。

    findAllDuplicates([4,3,2,7,8,2,3,1]) // array with 2 and 3
    findAllDuplicates([4, 3, 2, 1, 0]) // []
    findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]) // array with 3, 2, and 1

Time Complexity - O(n)
*/

// Frequency Counter - findAllDuplicates
// Given an array of positive integers, some elements appear twice and others appear once.
// Find all the elements that appear twice in this array.
// Note that you can return the elements in any order.

// Time Complexity - O(n)

function findAllDuplicates(arr) {
  // add whatever parameters you deem necessary - good luck!
  const obj = {};
  const resultArr = [];

  for (const item of arr) {
    obj[item] = ++obj[item] || 1;
    if (obj[item] > 1) resultArr.push(item);
  }

  return resultArr;
}
console.log(
  'array with 2 and 3: ',
  findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1])
); // array with 2 and 3
console.log('[]: ', findAllDuplicates([4, 3, 2, 1, 0])); // []
console.log(
  'array with 3, 2, and 1: ',
  findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3])
); // array with 3, 2, and 1
