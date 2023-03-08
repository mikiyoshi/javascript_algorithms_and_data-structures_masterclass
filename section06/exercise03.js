/*
Frequency Counter - sameFrequency

Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)
周波数カウンタ - sameFrequency
sameFrequencyという 関数を書け。
2つの正の整数が与えられたとき、その2つの数値の桁数が同じ頻度であるかどうかを調べろ。

あなたのソリューションは、以下のような複雑さを持たなければなりません。

時間O(N)

サンプル入力です。
Sample Input:

    sameFrequency(182,281) // true
    sameFrequency(34,14) // false
    sameFrequency(3589578, 5879385) // true
    sameFrequency(22,222) // false
*/
function sameFrequency(num1, num2) {
  // good luck. Add any arguments you deem necessary.

  // 数値の個数比較
  // 数値の比較
  // .toString() // 数値 Number を文字 String に変える // num1 = 123, num2 = "123" は num1 === num2 false
  // https://www.w3schools.com/jsref/jsref_tostring_string.asp

  let arr1 = num1.toString().split('');
  let arr2 = num2.toString().split('');
  // console.log('arr1: ', arr1, arr2);
  if (arr1.length !== arr2.length) {
    return false;
  }
  // 分割した文字を key それぞれカウントして val に追加
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  // num1, num2 に同じ key があるか確認、あれば、同じ key のカウント数 val も確認
  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      return false;
    }
  }
  console.log('frequencyCounter1: ', frequencyCounter1);
  console.log('frequencyCounter2: ', frequencyCounter2);
  return true;
}

console.log(sameFrequency(182, 281)); // true // 同じ数字があれば true なければ false
// frequencyCounter1:  { '1': 1, '2': 1, '8': 1 }
// frequencyCounter2:  { '1': 1, '2': 1, '8': 1 }
// true
console.log(sameFrequency(34, 14)); // false
// false
console.log(sameFrequency(3589578, 5879385)); // true // 同じ数字があれば true なければ false
// frequencyCounter1:  { '3': 1, '5': 2, '7': 1, '8': 2, '9': 1 }
// frequencyCounter2:  { '3': 1, '5': 2, '7': 1, '8': 2, '9': 1 }
// true
console.log(sameFrequency(22, 222)); // false
// false
