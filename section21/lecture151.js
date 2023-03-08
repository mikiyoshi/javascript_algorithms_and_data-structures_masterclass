/*
STACKS


OBJECTIVES

    Define what a stack is
    Understand use cases for a stack
    Implement operations on a stack data structure
目的
スタックとは何かを定義する
スタックのユースケースを理解する
スタックデータに対する構造操作の実装

WHAT IS A STACK?

A LIFO data structure!

The last element added to the stack will be the first element removed from the stack
スタックとは何ですか？
LIFOデータ構造!

スタックに追加された最後の要素は、スタックから削除された最初の要素になる


HOW IS IT USED?

Think about a stack of plates, or a stack of markers, or a stack of....anything.

As you pile it up the last thing (or the topmost thing) is what gets removed first.
どのように使われているのですか？
お皿の山、マーカーの山、...何でもいいですから、考えてみてください。

積み上げていくと、最後のもの（あるいは一番上のもの）が最初に取り除かれることになります。


How we'll visualize a stack

A series of nodes!

Let's see this in action!
https://visualgo.net/en/list?slide=1
スタックをどのように可視化するか
ノードの連続！？

それでは、実際にご覧ください




WE'VE SEEN
THIS BEFORE
The Call Stack!
見たことがある
この前
コールスタック!

WHERE STACKS ARE USED

    Managing function invocations
    Undo / Redo
    Routing (the history object) is treated like a stack!
スタックが使用される場所
関数呼び出しの管理
元に戻す/やり直し
ルーティング（履歴オブジェクト）はスタックのように扱われる!

*/
function factorial(x) {
  console.log('x: ', x);
  if (x === 0) return 1;
  return x * factorial(x - 1);
}
console.log(factorial(4));
/*
4 * factorial(4 - 1) // factorial(4) in Call Stack
3 * factorial(3 - 1) // factorial(3) in Call Stack
2 * factorial(2 - 1) // factorial(2) in Call Stack
1 * factorial(1 - 1) // factorial(1) in Call Stack
1 // factorial(0) // factorial(0) の所に代入、Call Stack を逆から処理する
1 * 1 // factorial(1 - 1) = factorial(0) = 1
2 * 1 // factorial(2 - 1) = factorial(1) = 1
3 * 2 // factorial(3 - 1) = factorial(2) = 2
4 * 6 // factorial(4 - 1) = factorial(3) = 6
factorial(4) = 24

*/
