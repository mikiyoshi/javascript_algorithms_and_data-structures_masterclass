/*

LET'S CHAT ABOUT

Big O

Look at that growth!
https://i.stack.imgur.com/kgXDS.png

サンプル // 数値が多くなるほど、計算が膨大になる
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
console.log('fib(): ', fib(4));
// fib():  3
console.log('fib(): ', fib(7));
// fib():  13
console.log('fib(): ', fib(13));
// fib():  233
console.log('fib(): ', fib(45)); // これは相当処理に時間がかかる
// fib():  1134903170


*/
