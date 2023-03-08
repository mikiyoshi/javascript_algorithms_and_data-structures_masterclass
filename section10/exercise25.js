/*
Binary Search Exercise

Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

This algorithm should be more efficient than linearSearch - you can read how to implement it here - https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search and here - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/

Examples:

    binarySearch([1,2,3,4,5],2) // 1
    binarySearch([1,2,3,4,5],3) // 2
    binarySearch([1,2,3,4,5],5) // 4
    binarySearch([1,2,3,4,5],6) // -1
    binarySearch([
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
      40, 44, 64, 79, 84, 86, 95, 96, 98, 99
    ], 10) // 2
    binarySearch([
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
      40, 44, 64, 79, 84, 86, 95, 96, 98, 99
    ], 95) // 16
    binarySearch([
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
      40, 44, 64, 79, 84, 86, 95, 96, 98, 99
    ], 100) // -1


*/
// Original Solution
function binarySearch(arr, elem) {
  // add whatever parameters you deem necessary - good luck!
  var start = 0;
  var end = arr.length - 1;
  // Math.floor()
  // https://www.w3schools.com/jsref/jsref_floor.asp
  var middle = Math.floor((start + end) / 2);

  // start <= end がなければ、binarySearch([1,2,40], 50) などの時に無限ループになる 40 に start,middle,end が固定されたまま無限ループ
  while (arr[middle] !== elem && start <= end) {
    console.log('start middle end: ', start, middle, end);
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  console.log('middle: ', start, middle, end);
  if (arr[middle] === elem) {
    return middle;
  }
  return -1;
}
console.log('binarySearch: ', binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 28)); // 1
// [2, 5, 6, 9, 13, 15, 28, 30]
//  S        M               E
// [2, 5, 6, 9, 13, 15, 28, 30]
//              S    M       E
// [2, 5, 6, 9, 13, 15, 28, 30]
//                      SM   E

console.log('binarySearch: ', binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log('binarySearch: ', binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log('binarySearch: ', binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log('binarySearch: ', binarySearch([1, 2, 3, 4, 5], 6)); // -1
console.log(
  'binarySearch: ',
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    10
  )
); // 2
console.log(
  'binarySearch: ',
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    95
  )
); // 16
console.log(
  'binarySearch: ',
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    100
  )
); // -1

// Refactored Version
function binarySearch2(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    // if文は省略して 1 行に
    // if (elem < arr[middle]) {
    //   end = middle - 1;
    // } else {
    //   start = middle + 1;
    // }
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  // if文は省略して 1 行に、さらに else は if文 ? true : false で 1 行に
  // if (arr[middle] === elem) {
  //   return middle;
  //   }
  // return -1;
  return arr[middle] === elem ? middle : -1;
}
console.log('binarySearch2: ', binarySearch2([1, 2, 3, 4, 5], 2)); // 1
console.log('binarySearch2: ', binarySearch2([1, 2, 3, 4, 5], 3)); // 2
console.log('binarySearch2: ', binarySearch2([1, 2, 3, 4, 5], 5)); // 4
console.log('binarySearch2: ', binarySearch2([1, 2, 3, 4, 5], 6)); // -1
console.log(
  'binarySearch2: ',
  binarySearch2(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    10
  )
); // 2
console.log(
  'binarySearch2: ',
  binarySearch2(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    95
  )
); // 16
console.log(
  'binarySearch2: ',
  binarySearch2(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    100
  )
); // -1
