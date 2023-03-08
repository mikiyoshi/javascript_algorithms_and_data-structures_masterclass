/*

DEPTH FIRST SEARCH


DFS - InOrder

Let's visualize this!

//      10
//   6     15
// 3  8       20

[3, 6, 8, 10, 15, 20]




DFS - InOrder
Steps - Recursively

    Create a variable to store the values of nodes visited
    Store the root of the BST in a variable called current
    Write a helper function which accepts a node
        If the node has a left property, call the helper function with the left property on the node
        Push the value of the node to the variable that stores the values
        If the node has a right property, call the helper function with the right property on the node
    Invoke the helper function with the current variable
    Return the array of values

DFS - InOrder
ステップ - 再帰的

訪問したノードの値を格納するための変数を作成する
BSTのルートをcurrentという変数に格納する
ノードを受け取るヘルパー関数を書く
ノードにleftプロパティがある場合、leftプロパティを持つヘルパー関数をノードに対して呼び出す
ノードの値を値を格納する変数にプッシュする
ノードが right プロパティを持つ場合、ノードの right プロパティでヘルパー関数を呼び出す
現在の変数でヘルパー関数を呼び出す
値の配列を返す
*/
