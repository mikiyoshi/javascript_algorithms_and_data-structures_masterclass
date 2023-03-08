/*
Multiple Pointers - isSubsequence

Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
マルチプルポインタ - isSubsequence
2つの文字列を受け取り、最初の文字列の文字が2番目の文字列の文字の部分列を形成しているかどうかをチェックする isSubsequenceという関数を作成しなさい。
言い換えれば、この関数は最初の文字列の文字が2番目の文字列のどこかに現れるかどうかを、その順序を変えずにチェックしなければならない。
Examples:

    isSubsequence('hello', 'hello world'); // true
    isSubsequence('sing', 'sting'); // true
    isSubsequence('abc', 'abracadabra'); // true
    isSubsequence('abc', 'acb'); // false (order matters)

Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)

Space Complexity - O(1)
*/

function isSubsequence(str1, str2) {
  // good luck. Add any arguments you deem necessary.
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    console.log('str2[j] str1[i]: ', str2[j], str1[i]);
    // 同じ文字があれば、i を追加(次の文字を確認)
    if (str2[j] === str1[i]) i++;

    // i が最後まで行けば、全ての文字が使われたので true // 順序が違えば最後まで行けない
    if (i === str1.length) return true;
    j++;
  }
  return false;
}
console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)
// str2[j] str1[i]:  h h
// str2[j] str1[i]:  e e
// str2[j] str1[i]:  l l
// str2[j] str1[i]:  l l
// str2[j] str1[i]:  o o
// true
// str2[j] str1[i]:  s s
// str2[j] str1[i]:  t i
// str2[j] str1[i]:  i i
// str2[j] str1[i]:  n n
// str2[j] str1[i]:  g g
// true
// str2[j] str1[i]:  a a
// str2[j] str1[i]:  b b
// str2[j] str1[i]:  r c
// str2[j] str1[i]:  a c
// str2[j] str1[i]:  c c
// true
// str2[j] str1[i]:  a a
// str2[j] str1[i]:  c b
// str2[j] str1[i]:  b b
// false

// isSubsequence Solution - Recursive but not O(1) Space

function isSubsequence2(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0]) return isSubsequence2(str1.slice(1), str2.slice(1));
  return isSubsequence2(str1, str2.slice(1));
}
console.log(isSubsequence2('hello', 'hello world')); // true
console.log(isSubsequence2('sing', 'sting')); // true
console.log(isSubsequence2('abc', 'abracadabra')); // true
console.log(isSubsequence2('abc', 'acb')); // false (order matters)
