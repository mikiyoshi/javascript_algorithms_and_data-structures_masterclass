/*

BREADTH FIRST

Visit neighbors at current depth first!
ブレッドファースト
まずは現在の深さでご近所さんを訪ねましょう


BREADTH FIRST TRAVERSAL
はばゆうせんたくせつ
(STARTING FROM "A")


BREADTH FIRST

    This function should accept a starting vertex
    Create a queue (you can use an array) and place the starting vertex in it
    Create an array to store the nodes visited
    Create an object to store nodes visited
    Mark the starting vertex as visited
    Loop as long as there is anything in the queue
    Remove the first vertex from the queue and push it into the array that stores nodes visited
    Loop over each vertex in the adjacency list for the vertex you are visiting.
    If it is not inside the object that stores nodes visited, mark it as visited and enqueue that vertex
    Once you have finished looping, return the array of visited nodes
ブレッドファースト
この関数は、開始頂点を受け取る必要があります。
キューを作成し（配列でも可）、開始頂点をそこに配置する
訪問したノードを格納するための配列を作成する
訪問したノードを格納するオブジェクトを作成する
開始頂点を訪問済みとしてマークする
キューに何かある限りループする
キューから最初の頂点を取り除き、訪問したノードを格納する配列にプッシュします。
訪問している頂点の隣接リストの各頂点に対してループをかける。
訪問したノードを保存するオブジェクトの中にない場合は、訪問済みとしてマークし、その頂点を待ち行列に入れます。
ループが終了したら、訪問したノードの配列を返します。

*/
