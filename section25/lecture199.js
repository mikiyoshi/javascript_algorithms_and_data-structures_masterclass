/*

Dealing with Collisions

Even with a large array and a great hash function, collisions are inevitable. 

There are many strategies for dealing with collisions, but we'll focus on two:

    Separate Chaining
    Linear Probing
衝突への対応
大きな配列と優れたハッシュ関数があっても、衝突は避けられない。

衝突に対処するための戦略はたくさんありますが、ここでは2つに絞って説明します。

セパレートチェイン
リニアプロービング







Separate Chaining

With separate chaining, at each index in our array we store values using a more sophisticated data structure (e.g. an array or a linked list).

This allows us to store multiple key-value pairs at the same index.
セパレートチェイン
セパレートチェイニングでは、配列の各インデックスに、より洗練されたデータ構造（配列やリンクリストなど）を用いて値を格納します。

これにより、複数のKey-Valueペアを同じインデックスに格納することができる。


Separate Chaining


        0       1       2       3       4       5       6       7       8       9
                                        ⬆                             
                        [["darkblue",  "#00008b"],
                          ["salmon", "#fa8072"]]

                        darkblue  ->     4
                        salmon    ->     4







Linear Probing

With linear probing, when we find a collision, we search through the array to find the next empty slot.

Unlike with separate chaining, this allows us to store a single key-value at each index.
リニアプロービング
リニアプロービングでは、衝突を見つけたら、配列の中を検索して、次の空きスロットを探します。

セパレートチェイニングとは異なり、各インデックスに1つのKey-Valueを格納することができるようになります。


Linear Probing

        0       1       2       3       4       5       6       7       8       9
                                        ⬆      ⬆      ⬆                  
                                        ⬆      ⬆  ["tomato", "#ff6347"]                    
                                        ⬆ ["salmon", "#fa8072"]
                              ["darkblue",  "#00008b"]

                                        darkblue  ->     4
                                        salmon    ->     4
                                        tomato    ->     4


*/
