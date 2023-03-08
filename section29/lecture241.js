/*

WTF IS 
DYNAMIC PROGRAMMING

 

"A method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions."
WTF IS
ダイナミックプログラミング
 

"複雑な問題をより単純な小問題の集まりに分解し、それらの小問題をそれぞれ一度だけ解いて、その解を保存することによって解決する方法"。


Where does
the name come from? 
どこの国？
名前の由来は？




IT ONLY WORKS ON PROBLEMS WITH...
Optimal Substructure    &
Overlapping Subproblems
の問題でしか動作しません。
最適な下部構造
オーバーラップサブプロブレム


EXCUSE ME?!




OVERLAPPING
SUBPROBLEMS

A problem is said to have overlapping subproblems if it can be broken down into subproblems which are reused several times
問題は，複数回再利用される部分問題に分解できる場合， 重複する部分問題を 持つという．


FIBONACCI SEQUENCE

"Every number after the first two is the sum of the two preceding ones"
「最初の2つ以降のすべての数は、前の2つの数の合計である」




FIBONNACI NUMBERS

OVERLAPPING SUBPROBLEMS!
フィボナッチ数
オーバーラップするサブ問題!

  FIBONNACI NUMBERS
[1, 1, 2, 3, 5, 8, 13];


                  FIBONNACI NUMBERS
                      fib(5)
            fib(4)       +        fib(3)
      fib(3)   +   fib(2)   fib(2)    +   fib(1)
fib(2)   +   fib(1)
OVERLAPPING SUBPROBLEMS!
オーバーラップするサブ問題!





REMEMBER MERGESORT?
mergesortを覚えていますか？

                        REMEMBER MERGESORT
                          [10,24,73,76]
                      mergeSort([10,24,76,73])
          [10,24]              merge                  [73,76]
      mergeSort([10,24])                        mergeSort([76,73])
    [10]      merge      [24]               [76]      merge      [73]
mergeSort([10])     mergeSort([24])   mergeSort([76])       mergeSort([73])


NO OVERLAPPING SUBPROBLEMS!
サブプロブレムが重ならないように!



A VERY SPECIAL CASE

                        A VERY SPECIAL CASE
                          [10,24,10,24]
                      mergeSort([10,24,24,10])
                      
      mergeSort([10,24])                        mergeSort([10,24])
      
mergeSort([10])     mergeSort([24])   mergeSort([10])       mergeSort([24])

YES OVERLAPPING SUBPROBLEMS!
みぎからひだりへ
はいオーバーラップサブプロブレム!
*/
