/*
Sliding Window - findLongestSubstring

Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.
スライディングウィンドウ - findLongestSubstring
文字列を受け取り、すべての異なる文字を含む最も長い部分文字列の長さを返すfindLongestSubstring という関数を作成しなさい。

    findLongestSubstring('') // 0
    findLongestSubstring('rithmschool') // 7
    findLongestSubstring('thisisawesome') // 6
    findLongestSubstring('thecatinthehat') // 7
    findLongestSubstring('bbbbbb') // 1
    findLongestSubstring('longestsubstring') // 8
    findLongestSubstring('thisishowwedoit') // 6

Time Complexity - O(n)
*/
function findLongestSubstring(str) {
  // add whatever parameters you deem necessary - good luck!
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    // もし seen[char] があれば、重複しているので start の値をリセットして、再度 longest をカウント
    if (seen[char]) {
      console.log('start: ', start, seen[char]);
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    // インデックス - 部分文字列の先頭 + 1 (現在をカウントに含めるため)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    // ダブルカウントにならないように、次の文字列のインデックスを格納する。
    seen[char] = i + 1;
    console.log('longest: ', seen, longest);
  }
  return longest;
}

console.log(findLongestSubstring('')); // 0
// 0
console.log(findLongestSubstring('rithmschool')); // 7
// longest:  { r: 1 } 1
// longest:  { r: 1, i: 2 } 2
// longest:  { r: 1, i: 2, t: 3 } 3
// longest:  { r: 1, i: 2, t: 3, h: 4 } 4
// longest:  { r: 1, i: 2, t: 3, h: 4, m: 5 } 5
// longest:  { r: 1, i: 2, t: 3, h: 4, m: 5, s: 6 } 6
// longest:  { r: 1, i: 2, t: 3, h: 4, m: 5, s: 6, c: 7 } 7
// start:  0 4
// longest:  { r: 1, i: 2, t: 3, h: 8, m: 5, s: 6, c: 7 } 7
// longest:  { r: 1, i: 2, t: 3, h: 8, m: 5, s: 6, c: 7, o: 9 } 7
// start:  4 9
// longest:  { r: 1, i: 2, t: 3, h: 8, m: 5, s: 6, c: 7, o: 10 } 7
// longest:  { r: 1, i: 2, t: 3, h: 8, m: 5, s: 6, c: 7, o: 10, l: 11 } 7
// 7
console.log(findLongestSubstring('thisisawesome')); // 6
// longest:  { t: 1 } 1
// longest:  { t: 1, h: 2 } 2
// longest:  { t: 1, h: 2, i: 3 } 3
// longest:  { t: 1, h: 2, i: 3, s: 4 } 4
// start:  0 3
// longest:  { t: 1, h: 2, i: 5, s: 4 } 4
// start:  3 4
// longest:  { t: 1, h: 2, i: 5, s: 6 } 4
// longest:  { t: 1, h: 2, i: 5, s: 6, a: 7 } 4
// longest:  { t: 1, h: 2, i: 5, s: 6, a: 7, w: 8 } 4
// longest:  { t: 1, h: 2, i: 5, s: 6, a: 7, w: 8, e: 9 } 5
// start:  4 6
// longest:  { t: 1, h: 2, i: 5, s: 10, a: 7, w: 8, e: 9 } 5
// longest:  { t: 1, h: 2, i: 5, s: 10, a: 7, w: 8, e: 9, o: 11 } 5
// longest:  { t: 1, h: 2, i: 5, s: 10, a: 7, w: 8, e: 9, o: 11, m: 12 } 6
// start:  6 9
// longest:  { t: 1, h: 2, i: 5, s: 10, a: 7, w: 8, e: 13, o: 11, m: 12 } 6
// 6
console.log(findLongestSubstring('thecatinthehat')); // 7
// longest:  { t: 1 } 1
// longest:  { t: 1, h: 2 } 2
// longest:  { t: 1, h: 2, e: 3 } 3
// longest:  { t: 1, h: 2, e: 3, c: 4 } 4
// longest:  { t: 1, h: 2, e: 3, c: 4, a: 5 } 5
// start:  0 1
// longest:  { t: 6, h: 2, e: 3, c: 4, a: 5 } 5
// longest:  { t: 6, h: 2, e: 3, c: 4, a: 5, i: 7 } 6
// longest:  { t: 6, h: 2, e: 3, c: 4, a: 5, i: 7, n: 8 } 7
// start:  1 6
// longest:  { t: 9, h: 2, e: 3, c: 4, a: 5, i: 7, n: 8 } 7
// start:  6 2
// longest:  { t: 9, h: 10, e: 3, c: 4, a: 5, i: 7, n: 8 } 7
// start:  6 3
// longest:  { t: 9, h: 10, e: 11, c: 4, a: 5, i: 7, n: 8 } 7
// start:  6 10
// longest:  { t: 9, h: 12, e: 11, c: 4, a: 5, i: 7, n: 8 } 7
// start:  10 5
// longest:  { t: 9, h: 12, e: 11, c: 4, a: 13, i: 7, n: 8 } 7
// start:  10 9
// longest:  { t: 14, h: 12, e: 11, c: 4, a: 13, i: 7, n: 8 } 7
// 7
console.log(findLongestSubstring('bbbbbb')); // 1
// longest:  { b: 1 } 1
// start:  0 1
// longest:  { b: 2 } 1
// start:  1 2
// longest:  { b: 3 } 1
// start:  2 3
// longest:  { b: 4 } 1
// start:  3 4
// longest:  { b: 5 } 1
// start:  4 5
// longest:  { b: 6 } 1
// 1
console.log(findLongestSubstring('longestsubstring')); // 8
// longest:  { l: 1 } 1
// longest:  { l: 1, o: 2 } 2
// longest:  { l: 1, o: 2, n: 3 } 3
// longest:  { l: 1, o: 2, n: 3, g: 4 } 4
// longest:  { l: 1, o: 2, n: 3, g: 4, e: 5 } 5
// longest:  { l: 1, o: 2, n: 3, g: 4, e: 5, s: 6 } 6
// longest:  { l: 1, o: 2, n: 3, g: 4, e: 5, s: 6, t: 7 } 7
// start:  0 6
// longest:  { l: 1, o: 2, n: 3, g: 4, e: 5, s: 8, t: 7 } 7
// longest:  { l: 1, o: 2, n: 3, g: 4, e: 5, s: 8, t: 7, u: 9 } 7
// longest:  { l: 1, o: 2, n: 3, g: 4, e: 5, s: 8, t: 7, u: 9, b: 10 } 7
// start:  6 8
// longest:  { l: 1, o: 2, n: 3, g: 4, e: 5, s: 11, t: 7, u: 9, b: 10 } 7
// start:  8 7
// longest:  { l: 1, o: 2, n: 3, g: 4, e: 5, s: 11, t: 12, u: 9, b: 10 } 7
// longest:  { l: 1, o: 2, n: 3, g: 4, e: 5, s: 11, t: 12, u: 9, b: 10, r: 13 } 7
// longest:  {l: 1,o: 2,n: 3,g: 4,e: 5,s: 11,t: 12,u: 9,b: 10,r: 13,i: 14 } 7
// start:  8 3
// longest:  {l: 1,o: 2,n: 15,g: 4,e: 5,s: 11,t: 12,u: 9,b: 10,r: 13,i: 14 } 7
// start:  8 4
// longest:  {l: 1,o: 2,n: 15,g: 16,e: 5,s: 11,t: 12,u: 9,b: 10,r: 13,i: 14 } 8
// 8
console.log(findLongestSubstring('thisishowwedoit')); // 6
// longest:  { t: 1 } 1
// longest:  { t: 1, h: 2 } 2
// longest:  { t: 1, h: 2, i: 3 } 3
// longest:  { t: 1, h: 2, i: 3, s: 4 } 4
// start:  0 3
// longest:  { t: 1, h: 2, i: 5, s: 4 } 4
// start:  3 4
// longest:  { t: 1, h: 2, i: 5, s: 6 } 4
// start:  4 2
// longest:  { t: 1, h: 7, i: 5, s: 6 } 4
// longest:  { t: 1, h: 7, i: 5, s: 6, o: 8 } 4
// longest:  { t: 1, h: 7, i: 5, s: 6, o: 8, w: 9 } 5
// start:  4 9
// longest:  { t: 1, h: 7, i: 5, s: 6, o: 8, w: 10 } 5
// longest:  { t: 1, h: 7, i: 5, s: 6, o: 8, w: 10, e: 11 } 5
// longest:  { t: 1, h: 7, i: 5, s: 6, o: 8, w: 10, e: 11, d: 12 } 5
// start:  9 8
// longest:  { t: 1, h: 7, i: 5, s: 6, o: 13, w: 10, e: 11, d: 12 } 5
// start:  9 5
// longest:  { t: 1, h: 7, i: 14, s: 6, o: 13, w: 10, e: 11, d: 12 } 5
// start:  9 1
// longest:  { t: 15, h: 7, i: 14, s: 6, o: 13, w: 10, e: 11, d: 12 } 6
// 6
