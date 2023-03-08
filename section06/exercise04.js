/*
Frequency Counter / Multiple Pointers - areThereDuplicates

Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.
周波数カウンター／マルチプルポインタ - areThereDuplicates
可変個数の引数を 受け取り、渡された引数の中に重複があるかどうかを チェックするareThereDuplicatesという関数を実装してください。 
周波数カウンタパターンまたは多重ポインタパターンを使って解くことができます。
Examples:

    areThereDuplicates(1, 2, 3) // false
    areThereDuplicates(1, 2, 2) // true 
    areThereDuplicates('a', 'b', 'c', 'a') // true 

Restrictions:

Time - O(n)

Space - O(n)

Bonus:

Time - O(n log n)

Space - O(1)
*/

/*
The Arguments Object
引数オブジェクト

JavaScript functions have a built-in object called the arguments object.
JavaScript の関数には、引数オブジェクトと呼ばれる組み込みオブジェクトがあります。

The argument object contains an array of the arguments used when the function was called (invoked).
引数オブジェクトには、関数が呼び出されたときに使用された引数の配列が格納されています。

This way you can simply use a function to find (for instance) the highest value in a list of numbers:
このように、ある関数を使えば、例えば数字のリストの中から最も大きな値を見つけることができます。

arguments
https://www.w3schools.com/js/js_function_parameters.asp
https://www.w3schools.com/js/tryit.asp?filename=tryjs_function_arguments
*/

// =================================================
// areThereDuplicates Solution (Frequency Counter)
// areThereDuplicates ソリューション（周波数カウンタ）
// =================================================
function areThereDuplicates() {
  // good luck. (supply any arguments you deem necessary.)
  // 頑張ってください。(必要と思われる反論は何でもしてください)
  let collection = {};
  // arguments // 引数オブジェクト // built-in object called the arguments object
  // arguments 引数オブジェクトは、関数内に入れられたデータ全て
  // https://www.w3schools.com/js/js_function_parameters.asp
  // https://www.w3schools.com/js/tryit.asp?filename=tryjs_function_arguments
  console.log('arguments arguments[0]: ', arguments, arguments[0]);

  // arguments を key としてそれぞれカウント数を val に追加
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }
  // カウント数が 1 以上であれば(重複しているので) true
  for (let key in collection) {
    if (collection[key] > 1) return true;
  }
  return false;
}
console.log(areThereDuplicates(1, 2, 3)); // false
// arguments arguments[0]:  [Arguments] { '0': 1, '1': 2, '2': 3 } 1
// false
console.log(areThereDuplicates(1, 2, 2)); // true
// arguments arguments[0]:  [Arguments] { '0': 1, '1': 2, '2': 2 } 1
// true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true
// arguments arguments[0]:  [Arguments] { '0': 'a', '1': 'b', '2': 'c', '3': 'a' } a
// true

// =================================================
// areThereDuplicates Solution (Multiple Pointers)
// areThereDuplicates 解決策（複数ポインタ）
// =================================================
function areThereDuplicates2(...args) {
  // Two pointers
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}
console.log(areThereDuplicates2(1, 2, 3)); // false
console.log(areThereDuplicates2(1, 2, 2)); // true
console.log(areThereDuplicates2('a', 'b', 'c', 'a')); // true

// =================================================
// areThereDuplicates One Liner Solution
// =================================================
function areThereDuplicates3() {
  return new Set(arguments).size !== arguments.length;
}
console.log(areThereDuplicates3(1, 2, 3)); // false
console.log(areThereDuplicates3(1, 2, 2)); // true
console.log(areThereDuplicates3('a', 'b', 'c', 'a')); // true
