/*

Where things go wrong

    No base case
    Forgetting to return or returning the wrong thing!
    Stack overflow! 

うまくいかないところ
    ベースケースなし
    返却忘れ、返却間違え！？
    Stack overflow!
*/

function factorial(num) {
  if (num === 1) return 1; // これはエラー　処理が終わらずにエンドレス
  return num * factorial(num);
}
// これはエラー　処理が終わらずにエンドレス
// console.log('factorial: ', factorial(2));

function factorial2(num) {
  if (num === 1) console.log(1); // これはエラー　処理が終わらずにエンドレス
  return num * factorial2(num - 1);
}
// これはエラー　処理が終わらずにエンドレス
// console.log('factorial2: ', factorial2(2));
