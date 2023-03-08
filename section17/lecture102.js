/*

RADIX SORT PSEUDOCODE

    Define a function that accepts list of numbers
    Figure out how many digits the largest number has
    Loop from k = 0 up to this largest number of digits
    For each iteration of the loop:

    Create buckets for each digit (0 to 9)
    place each number in the corresponding bucket based on its kth digit

    Replace our existing array with values in our buckets, starting with 0 and going up to 9
    return list at the end!
基数ソート疑似コード
数値のリストを受け取る関数を定義する
一番大きい数字が何桁か考える
k= 0からこの最大桁数までループさせる
ループの各反復のために。
各桁（0～9）ごとにバケットを作成する
各数字をk番目の桁に基づいて対応するバケツに入れる。
既存の配列を、0 から始まり 9 までのバケツの値で置き換えます。
最後にリターンリスト！

*/
function getDigit(num, i) {
  // Math.abs() 絶対値
  // https://www.w3schools.com/jsref/jsref_abs.asp
  // Math.pow()  // Math.pow(2,4) 2^4 2 の 4 乗 = 16
  // https://www.w3schools.com/jsref/jsref_pow.asp
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  // Math.log10()  // Math.log10(100) = 2 階乗の回数を調べる 10^y = 100 だから y = 2
  // https://www.w3schools.com/jsref/jsref_log10.asp
  // Math.abs() 絶対値
  // https://www.w3schools.com/jsref/jsref_abs.asp
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    // Array.from() は配列を分割
    // https://www.w3schools.com/jsref/jsref_from.asp
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }

    // .concat() は 2 つの配列をつなげる
    // https://www.w3schools.com/jsref/jsref_concat_array.asp
    // .concat はつなげる join // array1.concat(array2) は [...array1, ...array2] と同じ // 順番注意 [...array2, ...array1] ではない
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

console.log('radixSort: ', radixSort([23, 345, 5467, 12, 2345, 9852]));
