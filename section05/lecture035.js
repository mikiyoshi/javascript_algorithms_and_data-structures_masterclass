/*

Divide and Conquer

This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.

This pattern can tremendously decrease time complexity
このパターンは、データセットをより小さなチャンクに分割し、そのサブセットでプロセスを繰り返すというものです。

このパターンにより、時間の複雑 さを大幅に軽減することができます


An Example

Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1
整数のソートされた配列が与えられたとき，値を受け取り，関数に渡された値が位置するインデックスを返す，
searchという関数を書きなさい．値が見つからない場合は，-1 を返す
search([1,2,3,4,5,6],4) // 3 // 4 は arr[3]
search([1,2,3,4,5,6],6) // 5 // 6 は arr[5]
search([1,2,3,4,5,6],11) // -1 // 11 は arr にないので -1



A naive solution

function search(arr, val){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === val){
            return i;
        }
    }
    return -1;
}

Linear Search

Time Complexity O(N)




Refactor

function search(array, val) {
 
    let min = 0;
    let max = array.length - 1;
 
    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = array[middle];
 
        if (array[middle] < val) {
            min = middle + 1;
        }
        else if (array[middle] > val) {
            max = middle - 1;
        }
        else {
            return middle;
        }
    }
 
    return -1;
}

Time Complexity - Log(N) - Binary Search!

*/
// 35devide_conquer // Time Complexity O(N)
function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}
console.log('search: ', search([1, 2, 3, 4, 5, 6], 4));
console.log('search: ', search([1, 2, 3, 4, 5, 6], 6));
console.log('search: ', search([1, 2, 3, 4, 5, 6], 11));
// search:  3
// search:  5
// search:  -1

// Refactor
// 35devide_conquer_refactor //Time Complexity - Log(N) - Binary Search!
// これは配列を 2 つに分けて両方いっぺんに調べるのでもっと早い
function search2(array, val) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    console.log(
      'min, max, middle, array[middle], val: ',
      min,
      max,
      middle,
      array[middle],
      val
    );
    let currentElement = array[middle];

    if (array[middle] < val) {
      min = middle + 1;
    } else if (array[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
}
console.log('search2: ', search2([1, 2, 3, 4, 5, 6], 4));
console.log('search2: ', search2([1, 2, 3, 4, 5, 6], 6));
console.log('search2: ', search2([1, 2, 3, 4, 5, 6], 11));
// min, max, middle, array[middle], val:  0 5 2 3 4
// min, max, middle, array[middle], val:  3 5 4 5 4
// min, max, middle, array[middle], val:  3 3 3 4 4
// search2:  3
// min, max, middle, array[middle], val:  0 5 2 3 6
// min, max, middle, array[middle], val:  3 5 4 5 6
// min, max, middle, array[middle], val:  5 5 5 6 6
// search2:  5
// min, max, middle, array[middle], val:  0 5 2 3 11
// min, max, middle, array[middle], val:  3 5 4 5 11
// min, max, middle, array[middle], val:  5 5 5 6 11
// search2:  -1
