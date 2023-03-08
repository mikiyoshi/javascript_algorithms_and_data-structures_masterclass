/*
fib

Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

数値を受け取ってフィボナッチ数列のn番目の数値を返すfibという再帰的関数を作成しなさい．
フィボナッチ数列とは、1、1、2、3、5、8、...の整数で、1、1から始まり、
それ以降のすべての数が前の2つの数の和に等しい数列であることを想起してください。
*/
// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465
let arr = [];
function fib(n) {
  // add whatever parameters you deem necessary - good luck!
  if (n <= 2) return 1;
  // recursion で console.log() を確認できない、無限ループに入るから
  // Call Stack での処理の流れだけは理解できる
  return fib(n - 1) + fib(n - 2);
}
console.log('fib: ', fib(4)); // 3
// Call Stack に溜まる
// return fib(3) + 1
//   return 1 + 1
//     return 1
// 処理の順序
//      return 1     // fib(2)
//    return 1 + 1 // fib(3)
// return 2 + 1 // fib(4)

// fib:  3
console.log('fib: ', fib(10)); // 55
// Call Stack に溜まる
// return fib(9) + fib(8)
//   return fib(8) + fib(7)
//     return fib(7) + fib(6)
//       return fib(6) + fib(5)
//         return fib(5) + fib(4)
//           return fib(4) + fib(3)
//             return fib(3) + 1
//               return 1 + 1
//                 return 1
// 処理の順序
//                 return 1    // fib(2)
//               return 1 + 1 // fib(3)
//             return 2 + 1 // fib(4)
//           return 3 + 2 // fib(5)
//         return 5 + 3 // fib(6)
//       return 8 + 5 // fib(7)
//     return 13 + 8 // fib(8)
//   return 21 + 13 // fib(9)
// return 34 + 21 // fib(10)

// fib:  55
console.log('fib: ', fib(28)); // 317811
console.log('fib: ', fib(35)); // 9227465
