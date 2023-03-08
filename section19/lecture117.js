/*


Unshifting

Adding a new node to the beginning of the Linked List!
アンシフト
リンクリストの先頭に新しいノードを 追加！？

Unshifting pseudocode

    This function should accept a value
    Create a new node using the value passed to the function
    If there is no head property on the list, set the head and tail to be the newly created node
    Otherwise set the newly created node's next property to be the current head property on the list
    Set the head property on the list to be that newly created node
    Increment the length of the list by 1
    Return the linked list

Let's visualize this!
https://visualgo.net/en/list?slide=1
アンシフト疑似コード
可視化しよう

この関数は、値を受け取る必要があります。
関数に渡された値を用いて、新しいノードを作成します。
リストに head プロパティが存在しない場合、head と tail を新しく作成したノードに設定する
そうでなければ、新しく作成されたノードの次のプロパティを、リストの現在の先頭のプロパティに設定します。
リストのheadプロパティに新しく作成されたノードを設定する
リストの長さを1だけ増加させる
リンクリストを返す

*/
