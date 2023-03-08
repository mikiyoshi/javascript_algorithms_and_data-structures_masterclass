/*
DFS - PreOrder

Let's visualize this!

//      10
//   6     15
// 3  8       20

[10, 6, 3, 8, 15, 20]



DFS - PreOrder
Steps - Recursively

    Create a variable to store the values of nodes visited
    Store the root of the BST in a variable called current
    Write a helper function which accepts a node
        Push the value of the node to the variable that stores the values
        If the node has a left property, call the helper function with the left property on the node
        If the node has a right property, call the helper function with the right property on the node
    Invoke the helper function with the current variable
    Return the array of values
    
DFS - PreOrder
ステップ - 再帰的
訪問したノードの値を格納するための変数を作成する
BSTのルートをcurrentという変数に格納する
ノードを受け取るヘルパー関数を作成する
ノードの値を値を格納する変数にプッシュする
ノードが left プロパティを持つ場合、ノードの left プロパティを指定してヘルパー関数を呼び出します。
ノードが右のプロパティを持つ場合、ノードの右のプロパティでヘルパー関数を呼び出す
現在の変数でヘルパー関数を呼び出す
値の配列を返す



*/
