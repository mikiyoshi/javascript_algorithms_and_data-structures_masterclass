/*

Now on to Dikstra's
Djikstra's
Dijkstra's


Find the shortest path from A to  E
AからEへの最短経路を求めよ



//          A
//        /   \
//       |     B
//       |     |
//       C -D- E
//        \ | /
//          F



THE APPROACH

    Every time we look to visit a new node, we pick the node with the smallest known distance to visit first.
    Once we’ve moved to the node we’re going to visit, we look at each of its neighbors
    For each neighboring node, we calculate the distance by summing the total edges that lead to the node we’re checking from the starting node.
    If the new total distance to a node is less than the previous total, we store the new shorter distance for that node.
アプローチ
新しいノードを訪問しようとするたびに、既知の距離が最も小さいノードを選んで最初に訪問する。
訪問するノードに移動したら、その近傍のノードをそれぞれ見てみます。
隣接する各ノードについて、開始ノード から チェックするノードにつながるエッジの総和をとって距離を計算する。
あるノードまでの新しい距離の合計が前の合計より小さい場合、そのノードの新しい短い距離を保存する。





FIND THE SHORTEST PATH

FROM A TO E
最短経路を探す

Aから Eまで

//          A
//        /   \
//       |     B
//       |     |
//       C -D- E
//        \ | /
//          F

Vertex      Shortest Dist From A
  A                   0
  B                Infinity -> 4(A B)
  C                Infinity -> 2(A C)
  D                Infinity -> 4(A C D)
  E                Infinity -> 7(A B) -> 6(A C D F E)
  F                Infinity -> 6(A C F) -> 5(A C D F)

Visited:
[] -> [A] -> [A, C] -> [A, C, B] -> [A, C, B, D]

Previous:
{
  A: null,
  B: null, -> A
  C: null, -> A
  D: null, -> C
  E: null, -> B -> F
  F: null  -> C -> D
}
*/
