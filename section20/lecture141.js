/*

GET

Accessing a node in a Doubly Linked List by its position
ゲット
二重リンクリストのノードに位置からアクセスする方法

Get Pseudocode

Let's visualize this!

    If the index is less than 0 or greater or equal to the length, return null
    If the index is less than or equal to half the length of the list
        Loop through the list starting from the head and loop towards the middle
        Return the node once it is found
    If the index is greater than half the length of the list
        ​Loop through the list starting from the tail and loop towards the middle
        Return the node once it is found
シュードコードを取得する
可視化しよう

インデックスが 0 より小さいか、長さ以上の場合は null を返す。
インデックスがリストの長さの半分以下である場合
リストの先頭から始まり、中央に向かってループを回します。
ノードが見つかったら、そのノードを返す
インデックスがリストの長さの半分より大きい場合
リストの末尾から始まり、中央に向かってループします。
ノードが見つかったら返す
*/
