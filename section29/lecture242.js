/*


OPTIMAL SUBSTRUCTURE

A problem is said to have optimal substructure if an optimal solution can be constructed from optimal solutions of its subproblems
最適部分構造
問題は 、 その部分問題の最適解から最適解を構成できる場合、最適部分構造を持つという。




SHORTEST PATH

A ->  B     D
      ⬇ ↘   ⬆
      E ->  C

SHORTEST PATH FROM:
            A to D    A -> B -> C -> D
            A to C    A -> B -> C
            A to B    A -> B


OPTIMAL SUBSTRUCTURE!





LONGEST SIMPLE PATH
(simple means no repeating)

A   <->   B   <->   D
          ⬆
          ⬇
          C

LONGEST PATH FROM:
          A to C    A -> B -> C
          C to D    C -> B -> D
          A to D    A -> B -> C -> B -> D
                    A -> B -> D

NO OPTIMAL SUBSTRUCTURE!



Cheapest flight from SFO to FAI? サンフランシスコ/アラスカ フェアバンクス

SFO         ->          SEA   ->    FAI


Cheapest flight from SFO to SEA? サンフランシスコ/シアトル(ポートランド経由) 最安値

SFO   ->    PDX   ->    SEA


NO OPTIMAL SUBSTRUCTURE!
最適な部分構造なし!
*/
