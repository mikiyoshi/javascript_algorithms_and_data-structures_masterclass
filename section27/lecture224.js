/*

DFS PSEUDOCODE

Recursive

 DFS(vertex):
    if vertex is empty
        return (this is base case)
    add vertex to results list
    mark vertex as visited
    for each neighbor in vertex's neighbors:
       if neighbor is not visited:
          recursively call DFS on neighbor





VISITING THINGS


{
"A":["B", "C"],
"B":["A", "D"],
"C":["A", "E"],
"D":["B", "E", "F"],
"E":["C", "D", "F"],
"F":["D", "E"]
}

{ 
  "A": true,
  "B": true,
  "D": true
}


DEPTH FIRST TRAVERSAL
Recursive

    The function should accept a starting node

    Create a list to store the end result, to be returned at the very end

    Create an object to store visited vertices

    Create a helper function which accepts a vertex

        The helper function should return early if the vertex is empty

        The helper function should place the vertex it accepts into the visited object and push that vertex into the result array.

        Loop over all of the values in the adjacencyList for that vertex

        If any of those values have not been visited, recursively invoke the helper function with that vertex

    Invoke the helper function with the starting vertex

    Return the result array
深さ優先探索
この関数は，開始ノードを受け入れる必要があります

最終結果を格納するリストを作成し、最後の最後で返します

訪問した頂点を格納するオブジェクトを作成する

頂点を受け取るヘルパー関数を作成します。

ヘルパー関数は、頂点が空である場合に早期に戻る必要があります。

ヘルパー関数は、受け取った頂点を訪問したオブジェクトに配置し、その頂点を結果配列にプッシュする必要があります。

その頂点の adjacencyList にあるすべての値をループする。

これらの値のいずれかが訪問されていない場合、その頂点でヘルパー関数を再帰的に呼び出す

開始頂点を指定してヘルパー関数を呼び出す。

結果、配列を返す
*/
