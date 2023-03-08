/*
stringifyNumbers

Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!
文字列化された数字
オブジェクトを取り込んで、数値であるすべての値を見つけ、文字列に変換するstringifyNumbersという関数を書いてください。
再帰はこれを解決する素晴らしい方法です。
*/
/*
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}


stringifyNumbers(obj)


{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
function stringifyNumbers(obj) {
  var newObj = {};
  for (var key in obj) {
    // console.log(obj[key]);
    // typeof "Jhon" // Returns "string"
    // typeof {a: 1, b: 2} // Returns "object"
    // https://www.w3schools.com/js/js_typeof.asp
    if (typeof obj[key] === 'number') {
      // .toString() // typeof (14) = number // typeof (14).toString() = string
      // https://www.w3schools.com/jsref/jsref_tostring_number.asp
      newObj[key] = obj[key].toString();
      // .isArray() は変数が配列であれば true, 配列以外は false
      // https://www.w3schools.com/jsref/jsref_isarray.asp
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

// Object 内の数字を文字に変換
console.log('number: ', obj.num, typeof obj.num);
// number:  1 number
console.log(
  'converts to strings: ',
  stringifyNumbers(obj).num,
  typeof stringifyNumbers(obj).num
);
// converts to strings:  1 string
console.log('stringifyNumbers: ', stringifyNumbers(obj));
// stringifyNumbers:  {
//   num: '1',
//   test: [],
//   data: { val: '4', info: { isRight: true, random: '66' } }
// }
