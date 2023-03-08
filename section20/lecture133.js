/*

PUSHING

Adding a node to the end of the Doubly Linked List
プッシング
ダブリーリンクリストの末尾にノードを

Pushing pseudocode

Let's visualize this!

    Create a new node with the value passed to the function
    If the head property is null set the head and tail to be the newly created node 
    If not, set the next property on the tail to be that node
    Set the previous property on the newly created node to be the tail
    Set the tail to be the newly created node
    Increment the length
    Return the Doubly Linked List
プッシュの疑似コード
可視化しよう

関数に渡された値で新しいノードを作成します。
headがNULLの場合、headとtailを新しく作成されたノードに設定します。
そうでない場合は、末尾の次のプロパティをそのノードに設定する
新しく作成されたノードの前プロパティをtailに設定する
新たに作成したノードをtailに設定する
長さを増加させる
ダブリーリンクリストを返す






*/
