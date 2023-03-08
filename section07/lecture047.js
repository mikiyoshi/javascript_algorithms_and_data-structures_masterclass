/*

Another example

function factorial(num){
    if(num === 1) return 1;
    return num * factorial(num-1);
}

Let's visualize the call stack!


*/
// Factorial
// 階乗 factorial(4) = 4 * 3 * 2 * 1
// function factorial(num) {
//   let total = 1;
//   for (let i = num; i > 0; i--) {
//     total *= i;
//   }
//   return total;
// }
// console.log('factorial: ', factorial(4));
// factorial:  24

// Refactor
function factorial2(num) {
  if (num === 1) return 1;
  return num * factorial2(num - 1);
}

console.log('factorial2: ', factorial2(4));
// factorial2:  24
