/*

Insertion Sort

Builds up the sort by gradually creating a larger left half which is always sorted
インサーションソート
左半分を徐々に大きくしてソートを構築し、常にソートされるようにします。

[ 5, 3, 4, 1, 2 ] 5 と 3 を比較して入れ替え

[ 3, 5, 4, 1, 2 ] 3, 5 と 4 を比較して入れ替え

[ 3, 4, 5, 1, 2 ] 3,4,5 と 1 を比較して入れ替え

[ 1, 3, 4, 5, 2 ] 1,3,4,5 と 2 を比較して入れ替え

[ 1, 2, 3, 4, 5 ] 





Insertion Sort Pseudocode

    Start by picking the second element in the array
    Now compare the second element with the one before it and swap if necessary.
    Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place.
    Repeat until the array is sorted.
挿入ソート疑似コード

配列の2番目の要素を選ぶところから始めます
ここで、2番目の要素とその前の要素を比較し、必要であれば入れ替える。
次の要素に進み、順序が正しくない場合は、ソートされた部分（つまり左側）を繰り返し、その要素を正しい位置に配置します。
配列がソートされるまで繰り返します。

Let's visualize this!
https://visualgo.net/en/sorting?slide=1


*/
