/*

WHAT IF WE COULD
"REMEMBER" OLD VALUES?
できることなら
古い価値観を "記憶 "する？


ENTER
DYNAMIC PROGRAMMING

ダイナミックプログラミング
 

"Using past knowledge to make solving a future problem easier"
"過去の知識を利用して、未来の問題解決を容易にする"



ENTER (AGAIN)
DYNAMIC PROGRAMMING

 

"A method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions."
ダイナミックプログラミング
 

"複雑な問題をより単純な小問題の集まりに分解し、それらの小問題をそれぞれ一度だけ解いて、その解を保存することによって解決する方法"。


MEMOIZATION

Storing the results of expensive function calls and returning the cached result when the same inputs occur again
高価な関数呼び出しの結果を保存し、同じ入力が再び発生したときにキャッシュされた結果を返すこと






A MEMO-IZED SOLUTION

function fib(n, memo=[]){
  if(memo[n] !== undefined) return memo[n]
  if(n <= 2) return 1;
  var res = fib(n-1, memo) + fib(n-2, memo);
  memo[n] = res;
  return res;
}




RECURSION + MEMOIZATION

                      fib(5)
            fib(4)       +        fib(3)
      fib(3)   +   fib(2)   fib(2)    +   fib(1)
fib(2)   +   fib(1)

fib(5) の場合
                  5
          3       +        2
    2   +   1       fib(2)  +  fib(1) // ここの計算は不要 // 上の fib(3) が分かればいいので、fib(3) はメモライズされているので計算が不要
1   +   1

What we've already culculated
      X         1         1         2         3         5
    fib(0)     fib(1)   fib(2)   fib(3)    fib(4)     fib(5)



*/
// A MEMO-IZED SOLUTION // メモライズされていると計算が早い、不要な計算を省く

function fib(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  var res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;
  // console.log('memo: ', memo);
  return res;
}

console.log('fib(): ', fib(45));
// fib():  1134903170
console.log('fib(): ', fib(100));
// fib():  354224848179262000000
// console.log('fib(): ', fib(10000)); // RangeError: Maximum call stack size exceeded

function fib2(n, memo = [undefined, 1, 1]) {
  if (memo[n] !== undefined) return memo[n];
  var res = fib2(n - 1, memo) + fib2(n - 2, memo);
  memo[n] = res;
  return res;
}
console.log('fib2(): ', fib2(45));
// fib2():  1134903170
console.log('fib2(): ', fib2(100));
// fib2():  354224848179262000000
