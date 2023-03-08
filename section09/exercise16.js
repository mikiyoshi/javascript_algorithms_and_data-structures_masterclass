/*
isPalindrome

Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.
isPalindrome
isPalindromeという再帰的な関数を作成し、渡された文字列が回文であれば真を返すようにしなさい（前にも後ろにも同じように読める）。
そうでなければ偽を返す。
*/
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str) {
  // add whatever parameters you deem necessary - good luck!
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];

  // .slice() は配列を切り取る // arr.slice(1,3) arr[1], arr[2] // arr.slice(1) arr[1] 以降全て // arr.slice(1,-1) 先頭 arr[0] と、最後 arr[-1] を削除した残り
  // https://www.w3schools.com/jsref/jsref_slice_array.asp
  console.log(str.slice(1, -1));

  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}

// console.log('isPalindrome: ', isPalindrome('awesome')); // false
// console.log('isPalindrome: ', isPalindrome('foobar')); // false
console.log('isPalindrome: ', isPalindrome('tacocat')); // true
// Call Stack に溜まる
// return isPalindrome('tacocat')
//   return isPalindrome('acoca')
//     return isPalindrome('coc')
//       return isPalindrome('o')
//        return true
// console.log('isPalindrome: ', isPalindrome('amanaplanacanalpanama')); // true
// console.log('isPalindrome: ', isPalindrome('amanaplanacanalpandemonium')); // false
