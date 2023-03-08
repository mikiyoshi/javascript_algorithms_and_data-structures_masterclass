/*

Insert

Adding a node to the Linked List at a specific position
インサート
リンクリストに特定の 位置のノードを追加する機能



Insert pseudocode


    If the index is less than zero or greater than the length, return false
    If the index is the same as the length, push a new node to the end of the list
    If the index is 0, unshift a new node to the start of the list
    Otherwise, using the get method, access the node at the index - 1
    Set the next property on that node to be the new node
    Set the next property on the new node to be the previous next
    Increment the length
    Return true
Let's visualize this!
https://visualgo.net/en/list?slide=1
擬似コードを挿入する
可視化しよう

インデックスが0より小さいか、または長さより大きい場合、falseを返す
インデックスと長さが同じ場合，新しいノードをリストの末尾にプッシュする
インデックスが0の場合、新しいノードをリストの先頭にアンシフトする
それ以外の場合は，getメソッドで index - 1 のノードにアクセスします．
そのノードの次のプロパティを新しいノードに設定する
新しいノードのnextプロパティを前のnextに設定する
長さを増加させる
真を返す


*/
