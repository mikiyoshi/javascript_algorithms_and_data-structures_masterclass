/*

DFS PSEUDOCODE

Iterative

DFS-iterative(start):
    let S be a stack
    S.push(start)
    while S is not empty
        vertex = S.pop()
        if vertex is not labeled as discovered:
            visit vertex (add to result list)
            label vertex as discovered
            for each of vertex's neighbors, N do 
                S.push(N)



DEPTH FIRST TRAVERSAL
Iterative

    The function should accept a starting node

    Create a stack to help use keep track of vertices (use a list/array)

    Create a list to store the end result, to be returned at the very end

    Create an object to store visited vertices

    Add the starting vertex to the stack, and mark it visited

    While the stack has something in it:

        Pop the next vertex from the stack

        If that vertex hasn't been visited yet:

            ​Mark it as visited

            Add it to the result list

            Push all of its neighbors into the stack

    Return the result array

深さ優先探索
この関数は，開始ノードを受け入れる必要があります

頂点を管理しやすいようにスタックを作成する（リスト/配列を使用する）

最終結果を格納するリストを作成し、最後の最後で返します

訪問した頂点を格納するオブジェクトを作成する

開始頂点をスタックに追加し、訪問マークを付ける。

スタックに何かが入っている間

スタックから次の頂点をポップする

その頂点がまだ訪問されていない場合。

訪問済みとしてマークする

結果一覧に追加する

隣人をすべてスタックに押し込む

結果配列を返す








DEPTH FIRST TRAVERSAL

    The function should accept a starting node
    Create an object to store visited nodes and an array to store the result
    Create a helper function which accepts a vertex
    The helper function should place the vertex it accepts into the visited object and push that vertex into the results
    Loop over all of the values in the adjacencyList for that vertex
    If any of those values have not been visited, invoke the helper function with that vertex
    return the array of results
深さ優先探索
この関数は，開始ノードを受け入れる必要があります
訪問したノードを格納するオブジェクトと、結果を格納する配列を作成する
頂点を受け取るヘルパー関数を作成します。
ヘルパー関数は、受け取った頂点を訪問したオブジェクトに配置し、その頂点を結果にプッシュする必要があります。
その頂点の adjacencyList にあるすべての値をループする。
これらの値のいずれかが訪問されていない場合、その頂点を指定してヘルパー関数を呼び出す
結果の配列を返す
*/
