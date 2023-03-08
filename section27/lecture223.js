/*

DEPTH FIRST

Explore as far as possible down one branch before "backtracking"
深さ優先探索
一本の枝を可能な限り探索してから "バックトラック "する。


DEPTH FIRST TRAVERSAL

(STARTING FROM "A")


{
"A":["B", "C"],         2"B"
"B":["A", "D"],       1"A"
"C":["A", "E"],       1"A"
"D":["B", "E", "F"],    2"B"
"E":["C", "D", "F"],
"F":["D", "E"]
}
1"A", 2"B"... と削除していく



DEPTH FIRST TRAVERSAL

(STARTING FROM "A")


{
"A":["B", "C"],
"B":["A", "D"],
"C":["A", "E"],
"D":["B", "E", "F"],
"E":["C", "D", "F"],
"F":["D", "E"]
}

⬇

{ 
  "A": true,
  "B": true,
  "D": true,
  "E": true,
  "C": true,
  "F": true
}


g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A","B")
g.addEdge("A","C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")



DEPTH FIRST TRAVERSAL

(STARTING FROM "A")



*/
