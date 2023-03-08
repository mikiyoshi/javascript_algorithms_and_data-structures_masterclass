/*
PROBLEM SOLVING
- Understand the Problem
- Explore Concrete Examples
- Break It Down
- Solve/Simplify
- Look Back and Refactor


SOLVE THE PROBLEM

If you can't...
SOLVE A SIMPLER PROBLEM!


SIMPLIFY
    Find the core difficulty in what you're trying to do
    Temporarily ignore that difficulty
    Write a simplified solution
    Then incorporate that difficulty back in

Write a function which takes in a string and returns counts of each character in the string.



*/

function charCount(str) {
  // make object to return at end
  var result = {};
  // loop over string, for each character ...
  for (var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();
    //// If the char is a number/letter AND is a key in object, add one to count
    if (result[char] > 0) {
      result[char]++;
    }
    //// if the char is a number/letter AND not in object, add it to object and set value to 1
    else {
      result[char] = 1;
    }
  }
  //// if char is something else (space, period, etc.) don't do anything
  // return object at end
  return result;
  //
  // 最後に返すオブジェクトを作成する
  // 文字列をループし、それぞれの文字について ...
  //// もし文字が数字/文字であり、かつオブジェクトのキーであれば、カウントに1を加える。
  //// もし文字が数字/文字で、かつオブジェクトにない場合、オブジェクトに追加して値を 1 に設定する。
  //// char が他のもの（スペース、ピリオドなど）であれば、何もしない。
  // 最後にオブジェクトを返す
}

console.log('charCount: ', charCount('aaaa'));
// charCount:  { a: 4 }
console.log('charCount: ', charCount('hello'));
// charCount:  { h: 1, e: 1, l: 2, o: 1 }
console.log('charCount: ', charCount('Your PIN number is 1234!'));
// charCount:  {
//   '1': 1,
//   '2': 1,
//   '3': 1,
//   '4': 1,
//   Y: 1,
//   o: 1,
//   u: 2,
//   r: 2,
//   ' ': 4,
//   P: 1,
//   I: 1,
//   N: 1,
//   n: 1,
//   m: 1,
//   b: 1,
//   e: 1,
//   i: 1,
//   s: 1,
//   '!': 1
// }
