/*

Finding a Node in a BST

Steps - Iteratively or Recursively

    Starting at the root
        Check if there is a root, if not - we're done searching!
        If there is a root, check if the value of the new node is the value we are looking for. If we found it, we're done!
        If not, check to see if the value is greater than or less than the value of the root
        If it is greater 
            Check to see if there is a node to the right
                If there is, move to that node and repeat these steps
                If there is not, we're done searching!
        If it is less
            Check to see if there is a node to the left
                If there is, move to that node and repeat these steps
                If there is not, we're done searching!

Let's visualize this!
BSTのノードを探す
ステップ - 反復的または再帰的

ルートから始める
  ルートがあるかどうかを確認し、ない場合は検索を終了します。
  ルートがある場合、新しいノードの値が探している値であるかどうかをチェックします。見つかった場合は、これで完了です。
  そうでない場合は、その値がルートの値より大きいか小さいかを確認します。
  大きい場合
  右側にノードがあるかどうかをチェックします。
  ある場合は、そのノードに移動して、この手順を繰り返します。
  ない場合は、検索を終了します。
  少ない場合
  左側にノードがあるかどうかを確認します。
  あれば、そのノードに移動し、このステップを繰り返す
  ない場合は、検索を終了します。

可視化しよう

*/
