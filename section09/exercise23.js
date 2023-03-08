/*
collectStrings

Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string

コレクションストリング
オブジェクトを受け取り、オブジェクトの中で typeof string を持つすべての値の配列を返すcollectStrings という関数を作成します。

*/
const obj = {
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz',
          },
        },
      },
    },
  },
};

// ====================================================
// collectStrings Solution: Helper Method Recursion Version
// collectStringsの解決策。ヘルパーメソッド 再帰版
// ====================================================
function collectStrings(obj) {
  var stringsArr = [];

  function gatherStrings(o) {
    for (var key in o) {
      console.log('o[key]: ', o[key]);
      // console.log(obj[key]);
      // typeof "Jhon" // Returns "string"
      // typeof {a: 1, b: 2} // Returns "object"
      // https://www.w3schools.com/js/js_typeof.asp
      if (typeof o[key] === 'string') {
        stringsArr.push(o[key]);
      } else if (typeof o[key] === 'object') {
        return gatherStrings(o[key]);
      }
    }
  }

  gatherStrings(obj);

  return stringsArr;
}
console.log('collectStrings: ', collectStrings(obj)); // ["foo", "bar", "baz"])
// o[key]:  foo
// o[key]:  { val: { thing: { info: 'bar', moreInfo: [Object] } } }
// o[key]:  { thing: { info: 'bar', moreInfo: { evenMoreInfo: [Object] } } }
// o[key]:  { info: 'bar', moreInfo: { evenMoreInfo: { weMadeIt: 'baz' } } }
// o[key]:  bar
// o[key]:  { evenMoreInfo: { weMadeIt: 'baz' } }
// o[key]:  { weMadeIt: 'baz' }
// o[key]:  baz
// collectStrings:  [ 'foo', 'bar', 'baz' ]

// ====================================================
// collectStrings Solution: Pure Recursion Version
// collectStringsの解決策。純粋再帰版
// ====================================================
function collectStrings2(obj) {
  var stringsArr = [];
  for (var key in obj) {
    console.log('obj[key]: ', obj[key]);
    // console.log(obj[key]);
    // typeof "Jhon" // Returns "string"
    // typeof {a: 1, b: 2} // Returns "object"
    // https://www.w3schools.com/js/js_typeof.asp
    if (typeof obj[key] === 'string') {
      stringsArr.push(obj[key]);
    } else if (typeof obj[key] === 'object') {
      stringsArr = stringsArr.concat(collectStrings2(obj[key]));
    }
  }

  return stringsArr;
}
console.log('collectStrings2: ', collectStrings2(obj)); // ["foo", "bar", "baz"])
// obj[key]:  foo
// obj[key]:  { val: { thing: { info: 'bar', moreInfo: [Object] } } }
// obj[key]:  { thing: { info: 'bar', moreInfo: { evenMoreInfo: [Object] } } }
// obj[key]:  { info: 'bar', moreInfo: { evenMoreInfo: { weMadeIt: 'baz' } } }
// obj[key]:  bar
// obj[key]:  { evenMoreInfo: { weMadeIt: 'baz' } }
// obj[key]:  { weMadeIt: 'baz' }
// obj[key]:  baz
// collectStrings2:  [ 'foo', 'bar', 'baz' ]
