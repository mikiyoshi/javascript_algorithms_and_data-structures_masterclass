/*

Merge Sort

    It's a combination of two things - merging and sorting!
    Exploits the fact that arrays of 0 or 1 element are always sorted
    Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array
マージソート
マージとソートの2つを組み合わせたものです
0個または1個の要素を持つ配列は常にソートされることを利用する。
配列を 0 か 1 の要素からなる小さな配列に分解し、新たにソートした配列を構築することで動作します。

How does it work?


[ 8, 3, 5, 4, 7, 6, 1, 2 ]

[ 8, 3, 5, 4 ]

[ 7, 6, 1, 2 ]

[ 8, 3 ]

[ 5, 4 ]

[ 1, 2 ]

[ 7, 6 ]

[ 8 ]

[ 3 ]

[ 5 ]

[ 4 ]

[ 7 ]

[ 6 ]

[ 1 ]

[ 2 ]

[ 3, 8 ]

[ 4, 5 ]

[ 6, 7 ]

[ 1, 2 ]

[ 3, 4, 5, 8 ]

[ 1, 2, 6, 7 ]

[ 1, 2, 3, 4, 5, 6, 7, 8 ]


Let's visualize this!
https://visualgo.net/en/sorting?slide=1



*/
