/*
capitalizeWords

Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.
キャピタライズワード
capitalizeWordsという再帰的関数を作成しなさい。単語の配列が与えられたとき、大文字に変換された各単語を含む新しい配列を返します。
*/
// function capitalizeWords () {
// }
function capitalizeWords(array) {
  // add whatever parameters you deem necessary - good luck!
  if (array.length === 1) {
    // .slice() は配列を切り取る // arr.slice(1,3) arr[1], arr[2] // arr.slice(1) arr[1] 以降全て // arr.slice(0,-1) は最後を配列以外全て
    // .substr() は文字を切り取る // ("Hello").substr(1,3) "ell" // ("Hello").substr(1) "ello" 文字の先頭以降全て
    // https://www.w3schools.com/jsref/jsref_substr.asp
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  const res = capitalizeWords(array.slice(0, -1));
  // 最後の配列を取り出し
  const string =
    array.slice(array.length - 1)[0][0].toUpperCase() +
    array.slice(array.length - 1)[0].substr(1);
  res.push(string);
  return res;
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log('capitalizeWords:', capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
