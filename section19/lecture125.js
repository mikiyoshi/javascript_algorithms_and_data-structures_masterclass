/*

Remove

Removing a node from the Linked List at a specific position
削除
リンクリストの特定 位置のノードを削除する機能



Remove pseudocode
    If the index is less than zero or greater than the length, return undefined
    If the index is the same as the length-1, pop
    If the index is 0, shift
    Otherwise, using the get method, access the node at the index - 1
    Set the next property on that node to be the next of the next node
    Decrement the length
    Return the value of the node removed

Let's visualize this!
https://visualgo.net/en/list?slide=1
疑似コードを削除する
可視化しよう

インデックスが0より小さいか，または長さより大きい場合，未定義を返す。
インデックスがlength-1と同じであれば，pop
インデックスが0の場合、シフト
それ以外の場合は，getメソッドで index - 1 のノードにアクセスします．
そのノードのnextプロパティを次のノードのnextに設定する
長さを減少させる
削除されたノードの値を返す

*/
