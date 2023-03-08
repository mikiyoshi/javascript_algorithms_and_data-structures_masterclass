/*
Once Again
DYNAMIC PROGRAMMING

 

"A method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions."
もう一度
ダイナミックプログラミング
 

"複雑な問題をより単純な小問題の集まりに分解し、それらの小問題をそれぞれ一度だけ解き、その解を保存することによって解決する方法"。




WE'VE BEEN WORKING

TOP-DOWN

BUT THERE IS ANOTHER WAY!

BOTTOM-UP
私たちは

トップダウン
しかし、もう一つの方法があります

ボトムアップ


Tabulation

Storing the result of a previous result in a "table" (usually an array)

Usually done using iteration

Better space complexity can be achieved using tabulation
集計
直前の結果を「テーブル」（通常は配列）に格納すること

通常、イテレーションを使用して行われる

タビュレーションを使用することで、より良い空間の複雑さを実現することができます



TABULATED VERSION


function fib(n){
    if(n <= 2) return 1;
    var fibNums = [0,1,1];
    for(var i = 3; i <= n; i++){
        fibNums[i] = fibNums[i-1] + fibNums[i-2];
    }
    return fibNums[n];
}


TABULATED FIB(6)

arr[3] = arr[2] + arr[1]
arr[4] = arr[3] + arr[2]
arr[5] = arr[4] + arr[3]
arr[6] = arr[5] + arr[4]

      X         1         1         2         3         5         8
    fib(0)     fib(1)   fib(2)   fib(3)    fib(4)     fib(5)     fib(6)

*/
function fib_table(n) {
  if (n <= 2) return 1;
  var fibNums = [0, 1, 1];
  for (var i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}
console.log('fib_table(): ', fib_table(6));
// fib_table():  8
console.log('fib_table(): ', fib_table(10000));
// fib_table():  Infinity

function fib_memo(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  var res = fib_memo(n - 1, memo) + fib_memo(n - 2, memo);
  memo[n] = res;
  // console.log('memo: ', memo);
  return res;
}
// console.log('fib_memo(): ', fib_memo(10000)); // RangeError: Maximum call stack size exceeded

/*
=====================================================================
ここから下は解説がない
=====================================================================
THE REST IS UNDER CONSTRUCTION!




RECURSION + MEMOIZATION



TOP DOWN VS. BOTTOM UP



An example:

Write a function called stairs which accepts n number of stairs. Imagine that a person is standing at the bottom of the stairs and wants to reach the top and the person can climb either 1 stair or 2 stairs at a time. Your function should return the number of ways the person can reach the top by only climbing 1 or 2 stairs at a time.
一例です。
階段の数をn 個 受け付ける stairsという関数を書き なさい． 人が階段の下に立っていて、頂上に行きたいと思っていて、その人は一度に1段か2段のどちらかを登ることができると想像してください。あなたの関数は、その人が一度に1段または2段の階段だけを登って頂上に到達できる方法を何通りか返す必要がある。


Start with something small

Stairs(1)   Stairs(2)       Stairs(3)       Stairs(4)        Stairs(5)

    1         1,1           1,1,1           1,1,1,1          1,1,1,1,1
              2             1,2             2,1,1            2,1,1,1
                            2,1             1,2,1            1,2,1,1
                                            1,1,2            1,1,2,1
                                            2,2              2,2,1
                                                             1,1,1,2
                                                             1,2,2
                                                             2,1,2
    1         2             3               5                8
 

What are the subproblems?




What is the substructure?

stairs(n) = stairs(n - 1) + stairs(n - 2); 

This is usually the hardest part of dynamic programming and takes a lot of practice!
下部構造とは何ですか？
これは通常、ダイナミックプログラミングの最も難しい部分であり、多くの練習が必要です。



How do we solve it?

function stairs(n) {
  if (n <= 0) return 0;
  if (n <= 2) return n;
  return stairs(n - 1) + stairs(n - 2);
}

Brute force

Time Complexity O(2^N)
どうすれば解決できるのか？
ブルートフォース

時間複雑度O(2^N)


Memoization

Storing the result of an expensive function

Usually done using recursion
メモ化
高価な関数の結果を保存する

通常、再帰を使用して行われる



Memoization Solution

function stairs(n, memo=[]) {
  if (n <= 0) return 0;
  if (n <= 2) return n;
  if (memo[n] > 0) return memo[n];
  memo[n] = stairs(n - 1, memo) + stairs(n - 2, memo);
  return memo[n];
}

Time Complexity - O(N)




Tabulation

Storing the result of a previous result in a "table" (usually an array)

Usually done using iteration

Better space complexity can be achieved using tabulation
集計
直前の結果を「テーブル」（通常は配列）に格納すること

通常、イテレーションを使用して行われる

タビュレーションを使用することで、より良い空間の複雑さを実現することができます




Tabulation Solution

function stairs(n) {
  if(n < 3) return n;
  let store = [1,1];
  for(let i = 2; i <= n; i++) {
    let total = store[1] + store[0]
    store[0] = store[1]
    store[1] = total
  }
  return store[1];
}

Time Complexity - O(N)

Space Complexity - O(1)





Another example

function fib(n) {
    if (n <= 0) return 0; 
    if (n <= 2) return 1; 

    return fib(n - 1) + fib(n - 2); 
}



What are the overlapping subproblems?





What is the substructure?

fib(n) = fib(n - 1) + fib(n - 2); 




Memoization

function fib(n, savedFib={}) {
   // base case
   if (n <= 0) { return 0; }
   if (n <= 2) { return 1; }

   // memoize
   if (savedFib[n - 1] === undefined) {
        savedFib[n - 1] = fib(n - 1, savedFib);
   }

   // memoize
   if (savedFib[n - 2] === undefined) {
        savedFib[n - 2] = fib(n - 2, savedFib);
   }

   return savedFib[n - 1] + savedFib[n - 2];
}






Tabulation

function fib(n){
    let arr = [0,1]
    // calculating the fibonacci and storing the values
    for(let i = 2; i <= n; i++){
      arr[i] = arr[i-1] + arr[i-2]
    }
    return arr[n]
}





Using lists and matrices to break down problems
リストや マトリックスを使って 問題を分解する




An example:

Write a function called coinChange which accepts two parameters: an array of denominations and a value. The function should return the number of ways you can obtain the value from the given collection of denominations. You can think of this as figuring out the number of ways to make change for a given value from a supply of coins. 
一例です。
coinChangeという名前の関数を作成 し、2つのパラメータ、すなわち、宗派の配列と値を受け取ります 。 この関数は、指定された額面の集合から値を得る方法の数を返す必要があります。これは，与えられた値に対して硬貨からお釣りを作る方法の数を求めると考えることができる．




Building a list

Amount - 10  / Denominations - [1,2,5]
Start with 1 

If amount > coin:

combinations[amount] += combinations[amount-coin]






Move to 2

Amount - 10  / Denominations - [1,2,5]

Current Coin - 2

If amount > coin:

combinations[amount] += combinations[amount-coin]







Move to 5

Amount - 10  / Denominations - [1,2,5]

Current Coin - 5

If amount > coin:

combinations[amount] += combinations[amount-coin]





Where is this actually used?
これは実際にどこで使われているのでしょうか？

    Artificial Intelligence
    Speech Recognition
    Caching
    Image Processing
    Shortest Path Algorithms
    Much, much more!
人工知能
音声認識
キャッシング
画像処理
最短経路のアルゴリズム
もっと、もっと、もっと!



Greedy Algorithms

A greedy algorithm is an algorithmic paradigm that follows the problem solving heuristic of making the locally optimal choice at each stage with the hope of finding a global optimum.
貪欲なアルゴリズム
貪欲アルゴリズムとは、大域的な最適値を求めつつ、各段階で局所的に最適な選択をするという問題解決のヒューリスティックに従うアルゴリズムパラダイムである。




What?

An algorithm that makes the best guess about what the right answer is and tries to solve it that way as quickly as possible!
何？
正解が何であるかについて最善の推測を行い、できるだけ早くその方法で解こうとするアルゴリズムです



Where are they used?

You've seen one already!

Remember how Dijkstra's Algorithm works!
どこで使われているのですか？
もう見たんですか！？

Dijkstraのアルゴリズムがどのように機能するか覚えておきましょう



An example:

The coin change problem - again!

A greedy algorithm takes the highest denomination and works it's way down
一例です。
コインチェンジ問題、再び!

貪欲なアルゴリズムは、最も高い額面から順に下げていきます。


Pseudocode for Coin Change

    Start with the largest denomination
    Once the total can not use the largest
    Move to the 2nd largest
    Work your way down until there is no more change
コインチェンジの疑似コード
一番大きい額面から始める
一度、合計が最大を使用することはできません
第2位へ移動
変化がなくなるまで、下に向かって作業する


Do they work?

Sometimes! Not always!

If we wanted the least amount of coins, a dynamic programming solution would be more efficient
効果はあるのか？
時々！いつもじゃない！

もし、コインの量を最小限にしたいのであれば、動的計画法の方がより効率的です



Backtracking

"Backtracking is a general algorithm for finding all (or some) solutions to notably constraint satisfaction problems  

It incrementally builds candidates to the solutions, and abandons a candidate ("backtracks") as soon as it determines that the candidate cannot possibly be completed to a valid solution"
バックトラック
「バックトラックは、 制約充足 問題の 全解（または一部の解）を求めるための 一般的なアルゴリズムである

解の候補を段階的に構築し、その候補が有効な解になり得ないと判断した時点で、その候補を放棄する（「バックトラック」）」。



What is it?

Going through a solution and retracing steps backward if the solution is not valid.
何ですか？
解決策を経て、解決策が有効でない場合、ステップを逆に辿ること。


How does it work?

Visualizer for N queens
どのように機能するのですか？


Where is it used?

Puzzle Solving - Sudoku

N Queens / Rooks
どこで使われているのですか？


Recap

    Dynamic Programming is the idea of breaking down a problem into smaller subproblems - it's hard
    Optimal substructure is required to use dynamic program and involves figuring out the correct expression to consistently solve subproblems
    Overlapping subproblems is the second essential part of dynamic programming 
    Greedy Algorithms are a more aggressive and not always efficient way of solving algorithms
    Backtracking is quite useful when solving for restrictive conditions with unknown possibilities
まとめ
動的計画法とは、問題をより小さなサブ問題に分解する考え方です。
最適な部分構造は、動的プログラムを使用するために必要であり、部分問題を一貫して解くための正しい表現を見つけ出すことである
サブ問題の重ね合わせは、動的計画法の第二の本質である
貪欲なアルゴリズムとは、より攻撃的で、必ずしも効率的とは言えないアルゴリズムの解法です
バックトラックは、未知の可能性を持つ制限的な条件を解くときに非常に有効です。
*/
