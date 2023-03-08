/*

THE HASH PART

To implement a hash table, we'll be using an array.

In order to look up values by key, we need a way to convert keys into valid array indices.

A function that performs this task is called a hash function.
ハッシュ・パート
ハッシュテーブルを実装するために、配列を使用することにします。

キーで値を検索するためには、キーを有効な配列インデックスに変換する方法が必要です。

この作業を行う関数をハッシュ 関数と呼ぶ。






HASHING CONCEPTUALLY
概念的なハッシュ化

        0       1       2       3       4       5       6       7       8       9
        ⬆                      ⬆                             ⬆
["pink",  "#ff69b4"]            ⬆                    ["orangered", "#ff4500"]
                        ["cyan",  "#00ffff"]




WHAT MAKES A GOOD HASH?(not a cryptographically secure one)

    Fast (i.e. constant time)
    Doesn't cluster outputs at specific indices, but distributes uniformly
    Deterministic (same input yields same output)
良いハッシュの条件とは？(暗号的に安全なものではありません)
高速（＝一定時間）
特定のインデックスに出力を集中させず、一様に分布させる。
決定論的（同じ入力から同じ出力が得られる）









What Makes for a Good Hash?

Fast

Non-Example

function slowHash(key) {
  for (var i = 0; i < 10000; i++) {
    console.log("everyday i'm hashing");
  }
  return key[0].charCodeAt(0);
}





Uniformly Distributes Values

Non-Example

function sameHashedValue(key) {
  return 0;
}





Deterministic

Non-Example

function randomHash(key) {
  return Math.floor(Math.random() * 1000)
}

良いハッシュの条件とは？
価値観の均一化

非対象
*/
