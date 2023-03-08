/*
power

Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.
けんせい
底値と指数を受け付ける power という名前の関数を作成しなさい．
この関数は底値と指数のべき乗を返さなければなりません。
この関数はMath.pow() の機能を模倣したものであるべきで、負の基数や指数については気にする必要はありません。


*/
// power(2,0) // 1
// power(2,2) // 4 // 2 の 2 乗 = 2 * 2
// power(2,4) // 16　// 2 の 4 乗 = 2 * 2 * 2 * 2

// 参照 45SamRange
function power(base, exponent) {
  if (exponent === 0) return 1;

  return base * power(base, exponent - 1);
}
console.log('power: ', power(2, 0)); // 1
// Call Stack に溜まる
//          return 1
// 処理の順序
//          return 1

// power: 1
console.log('power: ', power(2, 2)); // 4
// Call Stack に溜まる
//      return 2 * power(2,2)
//        return 2 * power(2,1)
//          return 1
// 処理の順序
//          return 1
//        return 2 * 1
//      return 2 * 2

// power: 4
console.log('power: ', power(2, 4)); // 16
// Call Stack に溜まる
// return 2 * power(2,4)
//    return 2 * power(2,3)
//      return 2 * power(2,2)
//        return 2 * power(2,1)
//          return 1
// 処理の順序
//          return 1
//        return 2 * 1
//      return 2 * 2
//    return 2 * 4
// return 2 * 8

// power: 16
