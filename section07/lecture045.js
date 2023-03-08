/*

Our second recursive function

function sumRange(num){
   if(num === 1) return 1; 
   return num + sumRange(num-1);
}

Can you spot the base case?

Do you notice the different input?

What would happen if we didn't return?



The ALL important `return` keyword

function sumRange(num){
   if(num === 1) return 1; 
   return num + sumRange(num-1);
}

Let's break this down step by step!

*/
function sumRange(num) {
  if (num === 1) return 1; // base case
  return num + sumRange(num - 1);
}

console.log('sumRange: ', sumRange(5));
// sumRange:  15

function sumRange2(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}
console.log('sumRange2: ', sumRange2(3));
// Call Stack に溜まる
// return 3 + sumRange(2)
//    return 2 + sumRange(1)
//        return 1
// 処理の順序
//        return 1
//    return 2 + 1
// return 3 + 3

// sumRange2:  6
