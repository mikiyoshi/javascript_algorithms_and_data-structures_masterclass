/*


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






DIFFERENCES & BIG O
違い＆ビッグ・オー
|V| - number of vertices
|V| - 頂点の数
|E| - number of edges
|E| - エッジの数

OPERATION 	    ADJACENCY LIST 	    ADJACENCY MATRIX
オペレーション    ADJACENCY LIST      隣接行列
Add Vertex 	    O(1) 	              ​O(|V^2|)
Add Edge 	    O(1) 	              O(1)
Remove Vertex 	O(|V| + |E|) 	​      O(|V^2|)
Remove Edge 	O(|E|) 	              O(1)
Query 	        O(|V| + |E|) 	      O(1)
Storage 	    O(|V| + |E|) 	      ​O(|V^2|)





Adjacency List                                VS        Adjacency Matrix
Can take up less space (in sparse graphs)               Takes up more space (in sparse graphs)
Faster to iterate over all edges                        Slower to iterate over all edges
Can be slower to lookup specific edge                   Faster to lookup specific edge

アディエイションリスト  
疎なグラフの場合、より小さいスペースを取ることができる
すべてのエッジに対する反復処理の高速化
特定のエッジを検索するのに時間がかかることがある

アディエイションマトリックス
疎なグラフの場合、より大きなスペースを必要とする
すべてのエッジに対する反復処理の速度が遅い
特定エッジの検索を高速化



What will we use?
何を使うか？

An Adjacency List

An Adjacency List

An Adjacency List

Why?

Most data in the real-world tends to lend itself to sparser and/or larger graphs
現実世界のほとんどのデータは、よりスパースで大きなグラフに適している傾向がある


*/
