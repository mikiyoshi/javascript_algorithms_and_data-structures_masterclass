/*
Frequency Counter - constructNote

Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given, or it should return false.

Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

Bonus Constraints:

If M is the length of message and N is the length of letters:

Time Complexity: O(M+N)

Space Complexity: O(N)
メッセージと文字の2つの文字列を受け取るconstructNoteという関数を書きなさい。この関数は、与えられた文字でメッセージを構築できる場合はtrueを返し、そうでない場合はfalseを返さなければならない。

メッセージと文字の両方には小文字のみで、スペースや特殊文字は含まれないとする。

ボーナスの制約

Mがメッセージの長さ、Nが手紙の長さである場合。

時間的複雑さ。O(M+N)

空間の複雑さ O(N)

Examples:

    constructNote('aa', 'abc') // false
    constructNote('abc', 'dcba') // true
    constructNote('aabbcc', 'bcabcaddff') // true
*/
// Frequency Counter - constructNote
// Write a function called constructNote, which accepts two strings, a message and some letters.
// The function should return true if the message can be built with the letters
// that you are given, or it should return false.
// Assume that there are only lowercase letters and no space or
// special characters in both the message and the letters.

// Bonus Constraints:
// If M is the length of message and N is the length of letters:
// Time Complexity: O(M+N)
// Space Complexity: O(N)

function constructNote(message, letters) {
  // add whatever parameters you deem necessary - good luck!
  const obj = {};

  for (const char of letters) {
    obj[char] = ++obj[char] || 1;
  }

  for (const char of message) {
    if (!obj[char]) return false;
    obj[char]--;
  }

  return true;
}

console.log('false: ', constructNote('aa', 'abc')); // false
console.log('true: ', constructNote('abc', 'dcba')); // true
console.log('true: ', constructNote('aabbcc', 'bcabcaddff')); // true
