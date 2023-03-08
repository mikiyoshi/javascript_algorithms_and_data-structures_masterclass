/*


HOW BAD?
O(2^n)


HOW BAD?
O(2^n)


https://i.stack.imgur.com/kgXDS.png


WHAT CAN WE IMPROVE??

WE'RE REPEATING THINGS!


PLAIN OLD RECURSION

                      fib(5)                        // 同じ計算の重複箇所
            fib(4)       +        fib(3)            // fib(3)
      fib(3)   +   fib(2)   fib(2)    +   fib(1)    // fib(3), fib(2), fib(1)
fib(2)   +   fib(1)                                 // fib(2), fib(1)

function fib(n){
  if(n <= 2) return 1;
  return fib(n-1) + fib(n-2);
}
fib(5) の場合
                  5
          3       +        2
    2   +   1         1    +   1
1   +   1


THIS IS NOT GOOD.

REALLY NOT GOOD


*/
