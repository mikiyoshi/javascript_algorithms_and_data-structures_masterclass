/*

INSERT

Adding a node in a Doubly Linked List by a certain position
INSERT
ダブルリンクリストのノードをある位置で追加する

Insert pseudocode

Let's visualize this!

    If the index is less than zero or greater than or equal to the length return false
    If the index is 0, unshift
    If the index is the same as the length, push
    Use the get method to access the index -1
    Set the next and prev properties on the correct nodes to link everything together
    Increment the length 
    Return true
擬似コードを挿入する
可視化しよう

インデックスが0より小さいか，または長さ以上の場合 return false
インデックスが0の場合、アンシフト
インデックスが長さと同じなら，プッシュする。
インデックスにアクセスするには、getメソッドを使用します -1
正しいノードにnextとprevのプロパティを設定し、すべてをリンクさせる
長さを増加させる
真を返す
*/
