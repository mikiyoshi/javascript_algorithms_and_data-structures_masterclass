/*

TREE
TRAVERSAL

VISIT EVERY NODE ONCE


TRAVERSING A TREE

Two ways:

    Breadth-first Search(BFS)
    Depth-first Search(DFS)
じゅんかい
2つの方法

ブレッドファーストサーチ（Breadth-first Search)
デプスファーストサーチ (Depth-first Search)

BREADTH FIRST SEARCH



BFS // Tree を横で並列に全てを検索

//      10
//   6     15
// 3  8       20

[10, 6, 15, 3, 8, 20]


BFS // BREADTH FIRST SEARCH

Steps - Iteratively

    Create a queue (this can be an array) and a variable to store the values of nodes visited
    Place the root node in the queue
    Loop as long as there is anything in the queue
        Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
        If there is a left property on the node dequeued - add it to the queue
        If there is a right property on the node dequeued - add it to the queue
    Return the variable that stores the values
ステップ - 反復的

キュー（配列でも可）と変数を作成し、訪問したノードの値を格納する
ルートノードをキューに入れる
キューに何かが入っている限りループする
キューからノードをデキューし、そのノードの値をノードを格納する変数にプッシュする
キューから取り出されたノードに left プロパティがある場合、それをキューに追加する
キューから取り出されたノードにrightプロパティがある場合、それをキューに追加する
値を格納する変数を返す
*/

//      10
//   6     15
// 3  8       20

queue: [6, 15];
visited: [10];

queue: [15, 3, 8];
visited: [10, 6];

queue: [3, 8, 20];
visited: [10, 6, 15];

queue: [8, 20];
visited: [10, 6, 15, 3];

queue: [20];
visited: [10, 6, 15, 3, 8];

queue: [];
visited: [10, 6, 15, 3, 8, 20];
