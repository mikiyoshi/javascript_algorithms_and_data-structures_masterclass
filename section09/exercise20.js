/*
nestedEvenSum

Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.
ネステッドイーブンサム
nestedEvenSumと呼ばれる再帰的な関数を書きなさい。
ネストされたオブジェクトを含むことができるオブジェクト内のすべての "偶数" の合計を返す。
*/

function nestedEvenSum(obj, sum = 0) {
  // add whatever parameters you deem necessary - good luck!
  for (var key in obj) {
    // console.log(obj[key]);
    // typeof "Jhon" // Returns "string"
    // typeof {a: 1, b: 2} // Returns "object"
    // https://www.w3schools.com/js/js_typeof.asp
    if (typeof obj[key] === 'object') {
      // sum は 偶数 を追加するけど、object なら Recursion
      sum += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  return sum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: 'yup',
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' },
};
console.log('nestedEvenSum: ', nestedEvenSum(obj1)); // 6
console.log('nestedEvenSum: ', nestedEvenSum(obj2)); // 10
