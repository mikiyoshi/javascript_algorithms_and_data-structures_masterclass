/*
BFS?
DFS?
Which is better?
どちらが良いのでしょうか？



BREADTH FIRST

Lots of nodes to keep track of!

ブレッドファースト

たくさんのノードを把握することができます(例えば　全ての Node を検索する)


DEPTH FIRST

Fewer nodes to keep track of
デプスファースト

把握すべきノードの数が少ない(例えば　一つの Node だけ検索する)


BREADTH FIRST

Fewer nodes to keep track of
ブレッドファースト

把握すべきノードの数が少ない(例えば　一つの Node だけ検索する)


DFS - InOrder

//      10
//   6     15
// 3  8       20

[3, 6, 8, 10, 15, 20]

Used commonly with BST's

Notice we get all nodes in the tree in their underlying order
BSTと共通で使用

ツリー内のすべてのノードをその基本的な順序で取得することに注意してください。




DFS - PreOrder

//      10
//   6     15
// 3  8       20

[10, 6, 3, 8, 15, 20]

Can be used to "export" a tree structure so that it is easily reconstructed or copied.

ツリー構造を「エクスポート」して、簡単に再構築やコピーできるようにすることができます。


RECAP

    Trees are non-linear data structures that contain a root and child nodes
    Binary Trees can have values of any type, but at most two children for each parent
    Binary Search Trees are a more specific version of binary trees where every node to the left of a parent is less than it's value and every node to the right is greater
    We can search through Trees using BFS and DFS
RECAP
木はルートと子ノードを含む非線形のデータ構造である
二分木は任意の型の値を持つことができるが、各親に対して最大で2つの子を持つことができる
二分探索木は、二分木をより具体的にしたもので、親の左側にあるすべてのノードがその値より小さく、右側にあるすべてのノードがそれより大きいというものです。
BFSとDFSを使ってTreeを探索することができる











?????????????????????????????????????????????????????????????????????????????
ここはどこで解説するのか？ lecture181 ではない
?????????????????????????????????????????????????????????????????????????????
Removing a Node in a BST

This one can be tough!
BSTのノードを削除する
これは厳しいかも！？


No Children, No Problem
子供がいなくても問題ない
Let's visualize this!


Removing a Node - 0 children
Steps - Iteratively

    Find the parent of the node that needs to be removed and the node that needs to be removed
    If the value we are removing is greater than the parent node
        Set the right property of the parent to be null
    If the value we are removing is less than the parent node​
        Set the left property of the parent to be null
    Otherwise, the node we are removing has to be the root, so set the root to be null
ステップ - 反復的

削除が必要なノードの親と削除が必要なノードを探す
削除する値が親ノードより大きい場合
親の右側のプロパティをnullに設定します。
削除する値が親ノードより小さい場合
親のleftプロパティをnullに設定する
そうでない場合は、削除するノードはルートでなければならないので、ルートをnullに設定します。


One Child, One Problem
一人の子ども、一つの問題
Let's visualize this!


Removing a Node - 1 child

    Find the parent of the node that needs to be removed and the node that needs to be removed
    See if the child of the node to be removed is on the right side or the left side
    If the value we are removing is greater than the parent node​​
        Set the right property of the parent to be the child
    If the value we are removing is less than the parent node​
        Set the left property of the parent to be the child
    Otherwise, set the root property of the tree to be the child
ステップ - 反復的

ノードの削除 - 子 1
削除が必要なノードの親と削除が必要なノードを探す
削除するノードの子が右側にあるか左側にあるかを確認する
削除する値が親ノードより大きい場合
親の右のプロパティを子に設定する
削除する値が親ノードより小さい場合
親のleftプロパティを子に設定する
そうでない場合は、ツリーのルートプロパティを子


Two Children, More Problems
二人の子供、さらなる問題
Let's visualize this!


Find the Predecessor Node!
前任者 ノードを探せ!
One Right, As left as possible
右1つ、できるだけ左

Removing a Node - 2 children

Steps - Iteratively

    Find the parent of the node that needs to be removed and the node that needs to be removed
    Find the predecessor node and store that in a variable
    Set the left property of the predecessor node to be the left property of the node that is being removed
    If the value we are removing is greater than the parent node​​
        Set the right property of the parent to be the right property of the node to be removed
    If the value we are removing is less than the parent node​
        Set the left property of the parent to be the right property of the node to be removed
    Otherwise, set the root of the tree to be the right property of the node to be removed
ステップ - 反復的

削除が必要なノードの親と削除が必要なノードを探す
先行するノードを見つけ、それを変数に格納する
先行ノードの left プロパティを、削除するノードの left プロパティに設定する。
削除する値が親ノードより大きい場合
親の右プロパティを、削除するノードの右プロパティに設定する
削除する値が親ノードより小さい場合
親の左プロパティを削除するノードの右プロパティに設定する
それ以外の場合は、ツリーのルートを削除するノードの右側のプロパティに設定する
*/
