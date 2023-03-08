/*
someRecursive

Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.
someRecursive
配列とコールバックを受け付ける再帰的関数someRecursiveを作成します。
この関数は、配列内の 1 つの値がコールバックに渡されたときに true を返した場合に true を返します。
そうでなければ，false を返す．
*/
// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(array, callback) {
  // add whatever parameters you deem necessary - good luck!
  console.log(callback(array[0]));
  if (array.length === 0) return false;
  if (callback(array[0])) return true;

  // .slice() は配列を切り取る // arr.slice(1,3) arr[1], arr[2] // arr.slice(1) arr[1] 以降全て
  // https://www.w3schools.com/jsref/jsref_slice_array.asp
  return someRecursive(array.slice(1), callback);
}

const isOdd = (val) => val % 2 !== 0;
console.log('someRecursive: ', someRecursive([1, 2, 3, 4], isOdd)); // true
// true
// someRecursive:  true
console.log('someRecursive: ', someRecursive([4, 6, 8, 9], isOdd)); // true
// false
// false
// false
// true
// someRecursive:  true
console.log('someRecursive: ', someRecursive([4, 6, 8], isOdd)); // false
// false
// false
// false
// true
// someRecursive:  false
console.log(
  'someRecursive: ',
  someRecursive([4, 6, 8], (val) => val > 10)
); // false
// false
// false
// false
// false
// someRecursive:  false
