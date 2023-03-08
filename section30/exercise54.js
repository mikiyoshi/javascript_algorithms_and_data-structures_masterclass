/*
Radix Sort Helper - mostDigits

Implement a function called mostDigits  which accepts an array of integers and returns a count of the number of digits for the number in the array with the most digits.

It may help to use your digitCount  code from the previous exercise in this function.
整数の配列を受け取り、配列の中で最も桁数の多い数字の桁数のカウントを返す関数mostDigitsを実装しなさい。

この関数には、前回の演習で作成したdigitCountのコードを使用するとよいでしょう。



Examples

    mostDigits([1, 9, 10, 100, 99]); // 3
    mostDigits([100, 1010, 1, 500]); // 4
    mostDigits([0, 100000, 400, 12, 8]); // 6
    mostDigits([]); // 0
*/
function digitCount(num) {
  // using this function may be helpful. good luck!
  return Math.abs(num).toString().length;
}

function mostDigits(nums) {
  // good luck!
  let max = 0;

  for (const num of nums) {
    max = Math.max(max, digitCount(num));
  }
  console.log(max);
  return max;
}
mostDigits([1, 9, 10, 100, 99]); // 3
mostDigits([100, 1010, 1, 500]); // 4
mostDigits([0, 100000, 400, 12, 8]); // 6
mostDigits([]); // 0
