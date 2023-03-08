/*

DEPTH FIRST SEARCH


DFS - PostOrder

Let's visualize this!

//      10
//   6     15
// 3  8       20

[3, 8, 6, 20, 15, 10]



DFS - PostOrder
Steps - Recursively

    Create a variable to store the values of nodes visited
    Store the root of the BST in a variable called current
    Write a helper function which accepts a node
        If the node has a left property, call the helper function with the left property on the node
        If the node has a right property, call the helper function with the right property on the node
        Push the value of the node to the variable that stores the values
        Invoke the helper function with the current variable
    Return the array of values
    
DFS - PostOrder
ステップ - 再帰的
訪問したノードの値を格納するための変数を作成する
BSTのルートをcurrentという変数に格納する
ノードを受け取るヘルパー関数を書く
ノードが left プロパティを持つ場合、そのノードの left プロパティを指定してヘルパー関数を呼び出します。
ノードが right プロパティを持つ場合、ノードの right プロパティを指定してヘルパー関数を呼び出す
ノードの値を値を格納する変数にプッシュする
現在の変数でヘルパー関数を呼び出す
値の配列を返す
*/
