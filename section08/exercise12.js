/*
productOfArray

Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
productOfArray
数値の配列を受け取り、それらの積を返すproductOfArrayと呼ばれる関数を書いてください。
*/
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  // .slice() は配列を切り取る // arr.slice(1,3) arr[1], arr[2] // arr.slice(1) arr[1] 以降全て
  // https://www.w3schools.com/jsref/jsref_slice_array.asp
  return arr[0] * productOfArray(arr.slice(1));
}

console.log('productOfArray: ', productOfArray([1, 2, 3])); // 6
// Call Stack に溜まる
// return 1 * productOfArray([2, 3])
//    return 2 * productOfArray([3])
//      return 3 * productOfArray([])
//        return 1
// 処理の順序
//        return 1
//      return 3 * 1
//    return 2 * 3
// return 1 * 6

// productOfArray:  6
console.log('productOfArray: ', productOfArray([1, 2, 3, 10])); // 60
// Call Stack に溜まる
// return 1 * productOfArray([2, 3, 10])
//    return 2 * productOfArray([3, 10])
//      return 3 * productOfArray([10])
//        return 10 * productOfArray([])
//          return 1
// 処理の順序
//          return 1
//        return 10 * 1
//      return 3 * 10
//    return 2 * 30
// return 1 * 60

// productOfArray:  60
