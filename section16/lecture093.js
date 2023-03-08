/*

Pivot Helper

    In order to implement merge sort, it's useful to first implement a function responsible arranging elements in an array on either side of a pivot
    Given an array, this helper function should designate an element as the pivot
    It should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot
    The order of elements on either side of the pivot doesn't matter!
    The helper should do this in place, that is, it should not create a new array
    When complete, the helper should return the index of the pivot
ピボットヘルパー
マージソートを実装するためには、まず配列の要素をピボットの両側に並べる機能を実装するのが便利です
配列が与えられたら、このヘルパー関数はある要素をピボットとして指定する必要があります。
そして、ピボットより小さい値はすべてピボットの左に、ピボットより大きい値はすべてピボットの右に移動するように、配列の要素を並べ替える必要があります。
ピボットの両側にある要素の順番は重要ではありません!
ヘルパーはこれを所定の位置で行います。つまり、新しい配列
完了したら、ヘルパーはピボットのインデックスを返す必要があります


Picking a pivot

    The runtime of quick sort depends in part on how one selects the pivot
    Ideally, the pivot should be chosen so that it's roughly the median value in the data set you're sorting
    For simplicity, we'll always choose the pivot to be the first element (we'll talk about consequences of this later)
ピボットの選択
クイックソートの実行時間は、ピボットの選択方法にも依存します。
ピボットは、ソートするデータセットの中央値に近い値を選択するのが理想的です。
簡単のために、ピボットは常に最初の要素になるように選択します（この結果については後で説明します）

Pivot Helper Example

let arr = [ 5, 2, 1, 8, 4, 7, 6, 3 ]

pivot(arr); // 4;

arr;
// any one of these is an acceptable mutation:
// [2, 1, 4, 3, 5, 8, 7, 6]
// [1, 4, 3, 2, 5, 7, 6, 8]
// [3, 2, 1, 4, 5, 7, 6, 8]
// [4, 1, 2, 3, 5, 6, 8, 7]
// there are other acceptable mutations too!

All that matters is for 5 to be at index 4, for smaller values to be to the left, and for larger values to be to the right
重要なのは、5がインデックス4の位置にあること、小さい値が左側にあること、大きい値が右側にあること、だけです


Pivot Pseudocode

    It will help to accept three arguments: an array, a start index, and an end index (these can default to 0 and the array length minus 1, respectively)
    Grab the pivot from the start of the array 
    Store the current pivot index in a variable (this will keep track of where the pivot should end up)
    Loop through the array from the start until the end

    If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index

    Swap the starting element (i.e. the pivot) with the pivot index
    Return the pivot index
ピボット疑似コード
配列，開始インデックス，終了インデックスの 3 つの引数を受け付けると便利です（デフォルトはそれぞれ 0 と配列の長さから 1 を引いた値です）．
配列の先頭からピボットをつかむ
現在のピボット・インデックスを変数に格納します（これは、ピボットの終点を追跡するものです）。
配列の先頭から末尾までループさせます。
ピボットが現在の要素より大きい場合，ピボットインデックス変数をインクリメントし，現在の要素とピボットインデックスにある要素を交換します。
開始要素（つまりピボット）とピボットインデックスを入れ替える
ピボットインデックスを返す

*/
