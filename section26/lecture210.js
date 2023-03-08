/*

REPRESENTING
A GRAPH
表現する
グラフ

HOW DO WE STORE THIS???
どのように保存するのですか？



ADJACENCY MATRIX
隣接行列

    A   B   C   D   E   F
A   0   1   0   0   0   1
B   1   0   1   0   0   0
C   0   1   0   1   0   0
D   0   0   1   0   1   0
E   0   0   0   1   0   1
F   1   0   0   0   1   0


ADJACENCY LIST
[
 [1,5],
 [0,2],
 [1,3],
 [2,4],
 [3,5],
 [4,0]
]

ADJACENCY LIST
{
    A: ["B", "F"],
    B: ["A", "C"],
    C: ["B", "D"],
    D: ["C", "E"],
    E: ["D", "F"],
    F: ["E", "A"]
}
*/
