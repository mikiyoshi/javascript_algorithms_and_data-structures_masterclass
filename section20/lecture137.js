/*

SHIFTING

Removing a node from the beginning of the Doubly Linked List
シフティング
ダブリーリンクリストの先頭からノードを削除すること

Shifting pseudocode

Let's visualize this!

    If length is 0, return undefined
    Store the current head property in a variable (we'll call it old head)
    If the length is one
        set the head to be null
        set the tail to be null
    Update the head to be the next of the old head
    Set the head's prev property to null
    Set the old head's next to null
    Decrement the length
    Return old head
シフトの疑似コード
可視化しよう

長さが0の場合，未定義を返す
現在のheadプロパティを変数に格納する（old headと呼ぶことにする）。
長さが1である場合
headをnullに設定する
尾をnullに設定する
古いヘッドの次のヘッドに更新する
headのprevプロパティにnullを設定する
古いheadのnextをnullに設定
長さを減少させる
旧型ヘッドを戻す
*/
