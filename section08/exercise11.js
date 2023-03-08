/*
factorial

Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.
階乗
数値を受け取り，その数値の階乗を返す関数factorialを作成せよ．
階乗とは、ある整数とそれ以下のすべての整数の積である。
例えば、階乗4（4！）は4 * 3 * 2 * 1が24に等しいので、24になる 。
*/
// factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

// 参照 45SamRange
function factorial(x) {
  if (x < 0) return 0;
  if (x <= 1) return 1;
  return x * factorial(x - 1);
}
console.log('factorial: ', factorial(1)); // 1
// Call Stack に溜まる
//            return 1 * factorial(1 - 1)
//              return 0
// 処理の順序
//              return 0
//            return 1 * 1

// factorial:  1
console.log('factorial: ', factorial(2)); // 2
// Call Stack に溜まる
//            return 2 * factorial(1 - 1)
//              return 0
// 処理の順序
//              return 0
//            return 2 * 1

// factorial:  2
console.log('factorial: ', factorial(4)); // 24
// Call Stack に溜まる
//        return 4 * factorial(3 - 1)
//          return 3 * factorial(2 - 1)
//            return 2 * factorial(1 - 1)
//              return 0
// 処理の順序
//              return 0
//            return 2 * 1
//          return 3 * 2
//        return 4 * 6

// factorial:  24
console.log('factorial: ', factorial(7)); // 5040
// Call Stack に溜まる
// return 7 * factorial(7 - 1)
//    return 6 * factorial(6 - 1)
//      return 5 * factorial(5 - 1)
//        return 4 * factorial(3 - 1)
//          return 3 * factorial(2 - 1)
//            return 2 * factorial(1 - 1)
//              return 0
// 処理の順序
//              return 0
//            return 2 * 1
//          return 3 * 2
//        return 4 * 6
//      return 5 * 24
//    return 6 * 120
// return 7 * 720

// factorial:  5040
