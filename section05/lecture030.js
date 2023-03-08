// Frequency Counter - validAnagram

// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
// 2 つの文字列が与えられたとき、2 番目の文字列が最初の文字列のアナグラムであるかどうかを判断する関数を作成しなさい。
// アナグラムとは、例えば iceman から cinema のように、他の文字を並べ替えて作られた単語、フレーズ、または名前のことです。
// Examples:

//     validAnagram('', '') // true
//     validAnagram('aaz', 'zza') // false
//     validAnagram('anagram', 'nagaram') // true
//     validAnagram("rat","car") // false) // false
//     validAnagram('awesome', 'awesom') // false
//     validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
//     validAnagram('qwerty', 'qeywrt') // true
//     validAnagram('texttwisttime', 'timetwisttext') // true

// Note: You may assume the string contains only lowercase alphabets.

// Time Complexity - O(n)
function validAnagram(first, second) {
  // add whatever parameters you deem necessary - good luck!

  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log('lookup: ', lookup);

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

console.log(validAnagram('', '')); // true
console.log(validAnagram('aaz', 'zza')); // false
console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram('rat', 'car')); // false) // false
console.log(validAnagram('awesome', 'awesom')); // false
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')); // false
console.log(validAnagram('qwerty', 'qeywrt')); // true
console.log(validAnagram('texttwisttime', 'timetwisttext')); // true
// lookup:  {}
// true
// lookup:  { a: 2, z: 1 }
// false
// lookup:  { a: 3, n: 1, g: 1, r: 1, m: 1 }
// true
// lookup:  { r: 1, a: 1, t: 1 }
// false
// false // 文字数が違う
// false // 文字数が違う
// lookup:  { q: 1, w: 1, e: 1, r: 1, t: 1, y: 1 }
// true
// lookup:  { t: 5, e: 2, x: 1, w: 1, i: 2, s: 1, m: 1 }
// true
