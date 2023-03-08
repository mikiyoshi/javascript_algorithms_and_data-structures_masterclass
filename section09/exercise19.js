/*
capitalizeFirst

Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.
capitalizeFirst
capitalizeFirstという再帰的な関数を作成します。文字列の配列が与えられたとき、その配列の各文字列の最初の文字を大文字にする。
*/
function capitalizeFirst(array) {
  // add whatever parameters you deem necessary - good luck!
  if (array.length === 1) {
    // .slice() は配列を切り取る // arr.slice(1,3) arr[1], arr[2] // arr.slice(1) arr[1] 以降全て // arr.slice(0,-1) は最後を配列以外全て
    // .substr() は文字を切り取る // ("Hello").substr(1,3) "ell" // ("Hello").substr(1) "ello" 文字の先頭以降全て
    // https://www.w3schools.com/jsref/jsref_substr.asp
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }

  // .slice() は配列を切り取る // arr.slice(1,3) arr[1], arr[2] // arr.slice(1) arr[1] 以降全て // arr.slice(0,-1) は最後を配列以外全て
  console.log(array.slice(0, -1));
  const res = capitalizeFirst(array.slice(0, -1));
  // 最後の配列を取り出し
  const string =
    array.slice(array.length - 1)[0][0].toUpperCase() +
    array.slice(array.length - 1)[0].substr(1);
  res.push(string);
  return res;
}
console.log('capitalizeFirst: ', capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']
