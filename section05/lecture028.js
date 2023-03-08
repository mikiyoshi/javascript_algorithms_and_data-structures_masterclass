/*

FREQUENCY COUNTERS

This pattern uses objects or sets to collect values/frequencies of values

This can often avoid the need for nested loops or O(N^2) operations with arrays / strings
周波数カウンタ
このパターンは、オブジェクトまたはセットを使用して、値/値の頻度を収集します。

これにより、ループの入れ子や、配列・文字列のO(N^2)演算を回避できる場合があります。


AN EXAMPLE

Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.
2つの配列を受け取るsameという関数を作成しなさい．この関数は，配列中のすべての値が2番目の配列中の対応する値を2乗したものである場合に真を返す必要があります．値の頻度も同じでなければならない．
same([1,2,3], [4,1,9]) // true // 1, 2, 3 の 2乗が配列にあるから
same([1,2,3], [1,9]) // false // 1, 2, 3 の 2乗が配列にない
same([1,2,1], [4,4,1]) // false (must be same frequency) // 1, 2, 1 の 2乗が配列にない (重複も含む)


A NAIVE SOLUTION

function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex,1)
    }
    return true
}

Time Complexity - N^2



REFACTORED

function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

Time Complexity - O(n)

*/
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    console.log(arr2);
    arr2.splice(correctIndex, 1);
  }
  return true;
}
console.log('same: ', same([1, 2, 3, 2], [9, 1, 4, 4]));
// [ 9, 1, 4, 4 ] // 2乗があれば、配列から削除されていく
// [ 9, 4, 4 ]
// [ 9, 4 ]
// [ 4 ]
// same: true;

// REFACTORED
function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  console.log('frequencyCounter1: ', frequencyCounter1);
  console.log('frequencyCounter2: ', frequencyCounter2);
  return true;
}
console.log('same2: ', same2([1, 2, 3, 2], [9, 1, 4, 4]));
// frequencyCounter1:  { '1': 1, '2': 2, '3': 1 }
// frequencyCounter2:  { '1': 1, '4': 2, '9': 1 }
// same2:  true
