/*
REMOVING FROM A HEAP

//      41
//   39     33
// 18  27  12

Let's visualize this!

    Remove the root
    Replace with the most recently added
    Adjust (sink down)

取卸し

ルートを削除する
最も新しく追加されたものに置き換える
アジャスト（沈み込み）する


SINK DOWN?

The procedure for deleting the root from the heap (effectively extracting the maximum element in a max-heap or the minimum element in a min-heap) and restoring the properties is called down-heap (also known as bubble-down, percolate-down, sift-down, trickle down, heapify-down, cascade-down, and extract-min/max).
ヒープからルートを削除し（maxヒープでは最大要素、minヒープでは最小要素を効果的に抽出）、
特性を復元する 手順をダウンヒープと呼ぶ 
（ バブルダウン、 パーコレートダウン、 シフティングダウン、 トリクルダウン、 ヒープ化ダウン、 
カスケードダウン、 エキスミン／マックスなどとも呼ばれる）。



REMOVE AND SWAP
抜き差し
//      41
//   39     33
// 18  27  12

[41,39,33,18,27,12]

//      12
//   39     33
// 18  27          REMOVED! [41]

[12,39,33,18,27]

SINKING DOWN
シンキングダウン
//      12
//   39     33
// 18  27  

[12,39,33,18,27]

//      39
//   12     33
// 18  27  

[39,12,33,18,27]

//      39
//   27     33
// 18  12  

[39,27,33,18,12]



REMOVING (also called extractMax)

    Swap the first value in the values property with the last one
    Pop from the values property, so you can return the value at the end.
    Have the new root "sink down" to the correct spot...​
        Your parent index starts at 0 (the root)
        Find the index of the left child: 2 * index + 1 (make sure its not out of bounds)
        Find the index of the right child: 2*index + 2 (make sure its not out of bounds)
        If the left or right child is greater than the element...swap. If both left and right children are larger, swap with the largest child.
        The child index you swapped to now becomes the new parent index.  
        Keep looping and swapping until neither child is larger than the element.
        Return the old root!
リムーバブル(エクストラクトマックス）
valuesプロパティの最初の値を最後の値と入れ替える
valuesプロパティからポップするので、最後に値を返すことができます。
新しいルートが正しい場所に「沈む」ように...
親のインデックスは0（ルート）から始まります。
左の子のインデックスを求める: 2 * index + 1 (範囲外でないことを確認する)
右の子のインデックスを求める: 2*index + 2 (境界外でないことを確認する)
左または右の子が要素より大きい場合...入れ替え。左の子も右の子も大きい場合は、大きい方の子とスワップします。
スワップ先の子インデックスが新しい親インデックスになります。
どちらの子も要素より大きくなくなるまで、ループとスワップを続けます。
古いルートを返します!
*/
