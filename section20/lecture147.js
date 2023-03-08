/*

REMOVE

Removing a node in a Doubly Linked List by a certain position
リムーブ
ダブルリンクリストのノードをある位置から削除すること

Remove pseudocode

Let's visualize this!

    If the index is less than zero or greater than or equal to the length return undefined
    If the index is 0, shift
    If the index is the same as the length-1, pop
    Use the get method to retrieve the item to be removed
    Update the next and prev properties to remove the found node from the list
    Set next and prev to null on the found node
    Decrement the length
    Return the removed node.
疑似コードを削除する
可視化しよう

インデックスが0より小さいか，または長さ以上の場合 return undefined
インデックスが0の場合、シフト
インデックスがlength-1と同じであれば，pop
削除する項目を取得する場合は、get メソッドを使用します。
見つかったノードをリストから削除するためにnextとprevのプロパティを更新する
見つかったノードのnextとprevをnullに設定する
長さを減少させる
削除されたノードを返す。
*/
