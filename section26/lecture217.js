/*


REMOVING AN EDGE

    This function should accept two vertices, we'll call them vertex1 and vertex2
    The function should reassign the key of vertex1 to be an array that does not contain vertex2
    The function should reassign the key of vertex2 to be an array that does not contain vertex1
    Don't worry about handling errors/invalid vertices
たんじゅんそぼく
この関数は2つの頂点を受け取る必要があり、ここではvertex1とvertex2と呼ぶことにします。
この関数は，vertex1 のキーを vertex2 を含まない配列に再代入する必要があります．
この関数は，vertex2 のキーを vertex1 を含まない配列に再代入する必要があります．
エラー/無効な頂点の処理に悩まされることはない


REMOVING AN EDGE
端折り

{
  "Tokyo": ["Dallas"],
  "Dallas": ["Tokyo", "Aspen"],
  "Aspen": ["Dallas"]
}

            ⬇

g.removeEdge("Tokyo", "Dallas")

            ⬇

{
  "Tokyo": [],
  "Dallas": ["Aspen"],
  "Aspen": ["Dallas"]
}

*/
