/*


HASH TABLES

OBJECTIVES

    Explain what a hash table is
    Define what a hashing algorithm
    Discuss what makes a good hashing algorithm
    Understand how collisions occur in a hash table
    Handle collisions using separate chaining or linear probing
目的
ハッシュテーブルとは何かを説明する
ハッシュアルゴリズムの定義
良いハッシュアルゴリズムとは何かについて議論する
ハッシュテーブルで衝突が発生する仕組みを理解する
セパレートチェイニングやリニアプロービングによるコリジョンの処理
ハッシュテーブルとは何ですか？



どうだっていいじゃない







WHAT IS A HASH TABLE?

Hash tables are used to store key-value pairs.

They are like arrays, but the keys are not ordered.

Unlike arrays, hash tables are fast for all of the following operations: finding values, adding new values, and removing values!

ハッシュテーブルとは何ですか？
ハッシュテーブルは、キーと 値のペアを保存するために使用されます。

配列のようなものだが、キーに順番はない。

配列と違って、ハッシュテーブルは、値の検索、新しい値の追加、値の削除のすべての操作において高速です





WHY SHOULD I CARE?

Nearly every programming language has some sort of hash table data structure

Because of their speed, hash tables are very commonly used!
どうだっていいじゃない
ほぼすべてのプログラミング言語が、何らかのハッシュテーブルのデータ構造を持っている

その速さから、ハッシュテーブルは非常によく使われているのです





HASH TABLES IN THE WILD
野生のハッシュテーブル
* Objects have some restrictions, but are basically hash tables
* オブジェクトにはいくつかの制約があるが、基本的にはハッシュテーブルである

Python has Dictionaries

JS has Objects and Maps*

Java, Go, & Scala have Maps

Ruby has...Hashes


Pythonは 辞書があります

JSには オブジェクトと マップがある*。

Java、Go、Scalaには Mapがあります。

Rubyには...ハッシュ





LET'S PRETEND...

Existing implementations mysteriously disappear
How would we implement our own version???
既存の実装が不思議と消えていく
自分たちのバージョンをどのように実装するか？






HASH TABLES

Introductory Example


Imagine we want to store some colors

We could just use an array/list:

[ "#ff69b4","#ff4500","#00ffff" ] 

Not super readable!  What do these colors correspond to?
ある色を保存したいとします
配列/リストを使えばいいんだよ。
[ "#ff69b4", "#ff4500", "#00ffff" ]。 
超読めない！？ この色は何に対応するのでしょうか？






It would be nice if instead of using indices to access the colors, we could use more human-readable keys.

orangered ->   #ff4500
pink      ->   #ff69b4
cyan      ->   #00ffff

ハッシュテーブル
導入事例

色へのアクセスにインデックスを使うのではなく、もっと人間が読みやすいキーを使えたらいいなと思います。

オレンジ色 ->   #ff4500
ピンク    ->   #ff69b4
シアン    ->   #00ffff


colors["cyan"]
is way better than
colors[2]


colors["cyan"] (シアン)
の方がずっといい。
カラーズ[2]。
*/
