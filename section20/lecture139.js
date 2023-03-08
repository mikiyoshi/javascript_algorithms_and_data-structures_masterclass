/*

UNSHIFTING

Adding a node to the beginning of the Doubly Linked List
アンシフティング
ダブリーリンクリストの先頭にノード

Unshifting pseudocode

    Create a new node with the value passed to the function
    If the length is 0
        Set the head to be the new node
        Set the tail to be the new node
    Otherwise
        Set the prev property on the head of the list to be the new node
        Set the next property on the new node to be the head property 
        Update the head to be the new node
    Increment the length
    Return the list
アンシフト疑似コード
関数に渡された値で新しいノードを作成します。
長さが0である場合
headを新しいノードに設定する
tailを新しいノードに設定する。
それ以外の場合
リストの先頭の prev プロパティを新しいノードに設定する。
新しいノードの next プロパティを head プロパティに設定する。
head を新しいノードに更新する
長さを増加させる
リストを返す
*/
