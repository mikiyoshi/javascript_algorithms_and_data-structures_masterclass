/*
recursiveRange

Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function 
再帰的範囲
数値を受け取り、0から関数に渡された数値までのすべての数値を足し合わせるrecursiveRangeという関数を作成します。
*/

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55

function recursiveRange(x) {
  if (x === 0) return 0;
  return x + recursiveRange(x - 1);
}
console.log('recursiveRange: ', recursiveRange(6)); // 21
// Call Stack に溜まる
//          return 6 + recursiveRange(5)
//            return 5 + recursiveRange(4)
//              return 4 + recursiveRange(3)
//                return 3 + recursiveRange(2)
//                  return 2 + recursiveRange(1)
//                    return 1 + recursiveRange(0)
//                      return 0
// 処理の順序
//                      return 0
//                    return 1 + 0
//                  return 2 + 1
//                return 3 + 3
//              return 4 + 6
//            return 5 + 10
//          return 6 + 15

// recursiveRange:  21
console.log('recursiveRange: ', recursiveRange(10)); // 55
// Call Stack に溜まる
// return 10 + recursiveRange(9)
//    return 9 + recursiveRange(8)
//      return 8 + recursiveRange(7)
//        return 7 + recursiveRange(6)
//          return 6 + recursiveRange(5)
//            return 5 + recursiveRange(4)
//              return 4 + recursiveRange(3)
//                return 3 + recursiveRange(2)
//                  return 2 + recursiveRange(1)
//                    return 1 + recursiveRange(0)
//                      return 0
// 処理の順序
//                      return 0
//                    return 1 + 0
//                  return 2 + 1
//                return 3 + 3
//              return 4 + 6
//            return 5 + 10
//          return 6 + 15
//        return 7 + 21
//      return 8 + 28
//    return 9 + 36
// return 10 + 45

// recursiveRange:  55
