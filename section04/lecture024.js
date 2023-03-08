/*
PROBLEM SOLVING
- Understand the Problem
- Explore Concrete Examples
- Break It Down
- Solve/Simplify
- Look Back and Refactor


LOOK BACK & REFACTOR
Congrats on solving it, but you're not done!


REFACTORING QUESTIONS
    Can you check the result?
    Can you derive the result differently?
    Can you understand it at a glance?
    Can you use the result or method for some other problem?
    Can you improve the performance of your solution?
    Can you think of other ways to refactor?
    How have other people solved this problem?


*/
// sample 1
function charCount(str) {
  var obj = {};
  for (var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();
    // 正規表現
    if (/[a-z0-9]/.test(char)) {
      if (obj[char] > 0) {
        obj[char]++;
      } else {
        obj[char] = 1;
      }
    }
  }
  return obj;
}

console.log('charCount: ', charCount('aaaa'));
// charCount:  { a: 4 }
console.log('charCount: ', charCount('Hello Hi!'));
// charCount:  { h: 2, e: 1, l: 2, o: 1, i: 1 }
console.log('charCount: ', charCount('Your PIN number is 1234!'));
// charCount:  {
//   '1': 1,
//   '2': 1,
//   '3': 1,
//   '4': 1,
//   y: 1,
//   o: 1,
//   u: 2,
//   r: 2,
//   p: 1,
//   i: 2,
//   n: 2,
//   m: 1,
//   b: 1,
//   e: 1,
//   s: 1
// }

// sample 2 // refacter one
function charCount2(str) {
  var obj = {};
  for (var char of str) {
    char = char.toLowerCase();
    // 正規表現
    if (/[a-z0-9]/.test(char)) {
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}
console.log('charCount2: ', charCount2('aaaa'));
console.log('charCount2: ', charCount2('Hello Hi!'));
console.log('charCount2: ', charCount2('Your PIN number is 1234!'));
// charCount2:  { a: 4 }
// charCount2:  { h: 2, e: 1, l: 2, o: 1, i: 1 }
// charCount2:  {
//   '1': 1,
//   '2': 1,
//   '3': 1,
//   '4': 1,
//   y: 1,
//   o: 1,
//   u: 2,
//   r: 2,
//   p: 1,
//   i: 2,
//   n: 2,
//   m: 1,
//   b: 1,
//   e: 1,
//   s: 1
// }

// sample 3 // refactor two
function charCount3(str) {
  var obj = {};
  for (var char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

// charCodeAt は 文字や数字を数字のコードに変換してくれる
console.log('charCodeAt: ', 'hi'.charCodeAt(0));

function isAlphaNumeric(char) {
  var code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123) // lower alpha (a-z)
  ) {
    return false;
  }
  return true;
}

console.log('charCount3: ', charCount3('aaaa'));
console.log('charCount3: ', charCount3('Hello Hi!'));
console.log('charCount3: ', charCount3('Hello WORLD hi!!'));
// charCount3:  { a: 4 }
// charCount3:  { h: 2, e: 1, l: 2, o: 1, i: 1 }
// charCount3:  { h: 2, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1, i: 1 }
