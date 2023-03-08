/*
Divide and Conquer - findRotatedIndex

Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. The function should return the index of the integer in the array. If the value is not found, return -1.
ソートされた数値の回転配列と整数を受け付ける findRotatedIndex という関数を作成しなさい。この関数は、配列中の整数のインデックスを返す必要があります。もしその値が見つからなければ、-1を返す。



Constraints:

Time Complexity - O(log n)

Space Complexity - O(1)

    findRotatedIndex([3,4,1,2],4) // 1
    findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
    findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
    findRotatedIndex([37,44,66,102,10,22],14) // -1
    findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1
    findRotatedIndex([11,12,13,14,15,16,3,5,7,9], 16) // 5
*/

function findRotatedIndex(arr, num) {
  // add whatever parameters you deem necessary - good luck!
  let left = 0;
  let right = arr.length - 1;

  if (right && arr[left] >= arr[right]) {
    let middle = Math.floor((left + right) / 2);

    while (arr[middle] <= arr[middle + 1]) {
      if (arr[left] <= arr[middle]) left = middle + 1;
      else right = middle - 1;

      middle = Math.floor((left + right) / 2);
    }

    if (num >= arr[0] && num <= arr[middle]) {
      left = 0;
      right = middle;
    } else {
      left = middle + 1;
      right = arr.length - 1;
    }
  }

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (num === arr[middle]) return middle;

    if (num > arr[middle]) left = middle + 1;
    else right = middle - 1;
  }

  return -1;
}

console.log('1: ', findRotatedIndex([3, 4, 1, 2], 4)); // 1
console.log('2: ', findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)); // 2
console.log('6: ', findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)); // 6
console.log('-1: ', findRotatedIndex([37, 44, 66, 102, 10, 22], 14)); // -1
console.log('-1: ', findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)); // -1
console.log('5: ', findRotatedIndex([11, 12, 13, 14, 15, 16, 3, 5, 7, 9], 16)); // 5
