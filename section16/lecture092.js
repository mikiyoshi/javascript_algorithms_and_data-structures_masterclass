/*

Quick Sort

    Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted
    Works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array
    Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot
クイックソート
マージソートと同様に，0個または1個の要素を持つ配列は常にソートされるという事実を利用します．
1 つの要素（「ピボット」と呼ばれる）を選択し，並べ替えられた配列の中でそのピボットが終わるべきインデックスを見つけることで動作します．
ピボットの位置が適切であれば、ピボットの左右にクイックソートを適用することができる

How does it work?

[ 5, 2, 1, 8, 4, 7, 6, 3 ]

            5
      3         7
[ 1,    4,    6,  8 ]
    2
4

Let's visualize this!
https://visualgo.net/en/sorting?slide=1



*/
