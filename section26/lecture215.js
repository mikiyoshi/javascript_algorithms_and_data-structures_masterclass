/*


ADDING AN EDGE

    This function should accept two vertices, we can call them vertex1 and vertex2
    The function should find in the adjacency list the key of vertex1 and push vertex2 to the array
    The function should find in the adjacency list the key of vertex2 and push vertex1 to the array
    Don't worry about handling errors/invalid vertices
エッジを効かせる
この関数は2つの頂点を受け取る必要があり、それらをvertex1 とvertex2 と呼ぶことができます。
この関数は，隣接リストの中から頂点1のキーを見つけ，頂点2を配列にプッシュします．
この関数は，隣接リストの中から頂点2のキーを見つけ，頂点1を配列にプッシュします．
エラー/無効な頂点の処理に悩まされることはない


ADDING AN EDGE

{
  "Tokyo": [],
  "Dallas": [],
  "Aspen": []
}

        ⬇

g.addEdge("Tokyo", "Dallas")

        ⬇

{
  "Tokyo": ["Dallas"],
  "Dallas": ["Tokyo"],
  "Aspen": []
}

        ⬇

g.addEdge("Dallas", "Aspen")

        ⬇

{
  "Tokyo": ["Dallas"],
  "Dallas": ["Tokyo", "Aspen"],
  "Aspen": ["Dallas"]
}
*/
