/*

POPPING

Removing a node from the end of the Doubly Linked List
ポッピング
ダブリーリンクリストの末尾からノードを削除する


Popping pseudocode

    If there is no head, return undefined
    Store the current tail in a variable to return later
    If the length is 1, set the head and tail to be null
    Update the tail to be the previous Node.
    Set the newTail's next to null
    Decrement the length
    Return the value removed
ポッピングの疑似コード
headがない場合は未定義を返す
現在のテールを変数に格納し、後で返す
長さが1の場合、headとtailにnullを設定する
tail を前の Node に更新する。
newTail の next を null に設定する。
長さを減少させる
削除した値を返す
*/
