/*
reverse

Write a recursive function called reverse which accepts a string and returns a new string in reverse.
裏面
文字列を受け取り、新しい文字列を逆に返すreverseという再帰的関数を作成しなさい。
*/
function reverse(str) {
  // add whatever parameters you deem necessary - good luck!
  if (str.length <= 1) return str;

  // .slice() は配列を切り取る // arr.slice(1,3) arr[1], arr[2] // arr.slice(1) arr[1] 以降全て
  // https://www.w3schools.com/jsref/jsref_slice_array.asp
  return reverse(str.slice(1)) + str[0];
}
console.log('reverse: ', reverse('awesome')); // 'emosewa'
// Call Stack に溜まる
// return reverse('wesome') + a
//   return reverse('esome') + w
//     return reverse('some') + e
//       return reverse('ome') + s
//         return reverse('me') + o
//           return e + m
// 処理の順序
//           return em
//         return emo
//       return emos
//     return emosw
//   return emosew
// return emosewa

// reverse:  emosewa
console.log('reverse: ', reverse('rithmschool')); // 'loohcsmhtir'

// reverse:  loohcsmhtir
