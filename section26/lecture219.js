/*

REMOVING A VERTEX

    The function should accept a vertex to remove
    The function should loop as long as there are any other vertices in the adjacency list for that vertex
    Inside of the loop, call our removeEdge function with the vertex we are removing and any values in the adjacency list for that vertex
    delete the key in the adjacency list for that vertex
除籍
この関数は，削除する頂点を受け取ります．
この関数は，その頂点の隣接リストに他の頂点が存在する限り，ループする必要があります．
ループの内部で、削除する頂点とその頂点の隣接リストの値を指定して、removeEdge関数を呼び出します。
その頂点の隣接リストのキーを削除します。



REMOVING A VERTEX // 削除頂点
除籍

"Hong Kong" は key なので削除すると、影響する箇所が多いので注意！！！！

{
  "Tokyo": ["Dallas", "Hong Kong"],                           　// "Hong Kong"
  "Dallas": ["Tokyo", "Aspen", "Hong Kong", "Los Angeles"],     // "Hong Kong"
  "Aspen": ["Dallas"],
  "Hong Kong": ["Tokyo", "Dallas", "Los Angeles"],              // "Hong Kong": ["Tokyo", "Dallas", "Los Angeles"]
  "Los Angeles": ["Hong Kong", "Dallas"]                        // "Hong Kong"
}

            ⬇

g.removeVertex("Hong Kong")

            ⬇

{
  "Tokyo": ["Dallas"],
  "Dallas": ["Tokyo", "Aspen","Los Angeles"],
  "Aspen": ["Dallas"],
  "Los Angeles": ["Dallas"]
}

*/
