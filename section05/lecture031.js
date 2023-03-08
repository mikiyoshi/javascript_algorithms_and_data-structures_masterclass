/*

MULTIPLE POINTERS

Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition

Very efficient for solving problems with minimal space complexity as well
多重ポインタ
インデックスや位置に対応するポインタや 値を作成し、ある条件に基づいて先頭、末尾、中間に向かって移動させること

空間複雑度が最小の問題を解くのにも非常に効率的です。


一例
Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist
整数のソートされた配列を受け取るsumZeroという関数を作成しなさい．この関数は，和が 0 となる最初の組を見つけなければなりません． 和が 0 となる両方の値を含む配列を返すか，組が存在しない場合は未定義を返します．

sumZero([-3,-2,-1,0,1,2,3]) // [-3,3] 
sumZero([-2,0,1,3]) // undefined
sumZero([1,2,3]) // undefined

NAIVE SOLUTION
function sumZero(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}
Time Complexity - O(N^2)
Space Complexity - O(1)
時間的複雑さ - O(N^2)
空間の複雑さ - O(1)



REFACTOR

function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
        } else if(sum > 0){
            right--;
        } else {
            left++;
        }
    }
}
Time Complexity - O(N)
Space Complexity - O(1)

*/
//
// 32sum_zero_naive
//

function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}
console.log('sumZero: ', sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));
// sumZero:  [ -2, 2 ] // 前から順番に確認するので、[-1,1] ではない
console.log('sumZero: ', sumZero('alksjdalksjdlkasjdlks'));
// sumZero:  undefined

// REFACTOR
// Time Complexity - O(N)
// Space Complexity - O(1)

function sumZero2(arr) {
  // 先頭を左、最後を右にして同時に処理して、合計がゼロ(0)になれば終了 // 全ての配列を確認するより時間短縮できる
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
console.log('sumZero2: ', sumZero2([-4, -3, -2, -1, 0, 1, 2, 5]));
// sumZero2:  [ -2, 2 ]
console.log('sumZero2: ', sumZero2('alksjdalksjdlkasjdlks'));
// sumZero2:  undefined
