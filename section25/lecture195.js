/*


HASH TABLES

Introductory Example

How can we get human-readability and computer readability?

Computers don't know how to find an element at index pink!

Hash tables to the rescue!
ハッシュテーブル
導入事例

人間の読みやすさとコンピューターの読みやすさを両立させるにはどうしたらいいか。

コンピュータはインデックスピンクの要素を見つける方法を知らないのです

ハッシュテーブルが救う!




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


*/
