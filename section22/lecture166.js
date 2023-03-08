/*

INSERTING A NODE

Steps - Iteratively or Recursively

    Create a new node
    Starting at the root
        Check if there is a root, if not - the root now becomes that new node!
        If there is a root, check if the value of the new node is greater than or less than the value of the root
        If it is greater 
            Check to see if there is a node to the right
                If there is, move to that node and repeat these steps
                If there is not, add that node as the right property
        If it is less
            Check to see if there is a node to the left
                If there is, move to that node and repeat these steps
                If there is not, add that node as the left property
ノード挿入
ステップ - 反復的または再帰的

新規ノードの作成
ルートから始める
ルートがあるかどうかをチェックし、ない場合は、ルートが新しいノードになります。
ルートがある場合、新しいノードの値がルートの値より大きいか小さいかをチェックします。
大きい場合
右側にノードがあるかどうかをチェックします。
ある場合は、そのノードに移動して、この手順を繰り返します。
ない場合は、そのノードを右のプロパティとして追加します。
少ない場合
左側にノードがあるかどうかを確認します。
ある場合は、そのノードに移動して、この手順を繰り返します。
ない場合は、そのノードを左のプロパティとして追加します。
*/
