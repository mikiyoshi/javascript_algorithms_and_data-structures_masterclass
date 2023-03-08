/*

Let's return to our pal...

THE FIBONACCI SEQUENCE






LET'S WRITE IT!
仲間に戻ろう...。

A MEMO-IZED SOLUTION
書こうよ！

    Fib(n) = Fib(n-1) + Fib(n-2)
    Fib(2) is 1
    Fib(1) is 1


RECURSIVE SOLUTION
再帰的解決

function fib(n){
  if(n <= 2) return 1;
  return fib(n-1) + fib(n-2);
}



PLAIN OLD RECURSION

                      fib(5)
            fib(4)       +        fib(3)
      fib(3)   +   fib(2)   fib(2)    +   fib(1)
fib(2)   +   fib(1)

function fib(n){
  if(n <= 2) return 1;
  return fib(n-1) + fib(n-2);
}
fib(5) の場合
                  5
          3       +        2
    2   +   1         1    +   1
1   +   1


*/
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
