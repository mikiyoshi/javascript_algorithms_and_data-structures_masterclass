/*
Radix Sort Helper - digitCount

Implement a function called digitCount  which accepts a positive integer and returns the number of digits that the integer has.
正の整数を受け取り、その整数が持つ桁数を返すdigitCountという関数を実装してください。

Examples

    digitCount(1); // 1
    digitCount(9); // 1
    digitCount(25); // 2
    digitCount(314); // 3
    digitCount(1234); // 4
    digitCount(77777); // 5
*/
function digitCount(num) {
  // good luck!
  console.log(Math.abs(num).toString().length);
  return Math.abs(num).toString().length;
}
digitCount(1); // 1
digitCount(9); // 1
digitCount(25); // 2
digitCount(314); // 3
digitCount(1234); // 4
digitCount(77777); // 5
