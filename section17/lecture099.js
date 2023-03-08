/*

COMPARISON SORTS

Average Time Complexity
    Bubble Sort - O(n^2)
    Insertion Sort - O(n^2)
    Selection Sort - O(n^2)
    Quick Sort - O(n log (n))
    Merge Sort - O(n log (n))
Can we do better?
コンパウンドソート
バブルソート - O(n^2)
挿入ソート - O(n^2)
選択ソート - O(n^2)
クイックソート - O(n log (n))
マージソート - O(n log (n))
平均時間 複雑さ

もっといいものができないか？

CAN WE DO BETTER?

YES,

BUT NOT BY MAKING COMPARISONS
もっといいものができないか？
はい。

とはいえ、比較するのではなく





RADIX SORT



RADIX SORT

Radix sort is a special sorting algorithm that works on lists of numbers

It never makes comparisons between elements!

It exploits the fact that information about the size of a number is encoded in the number of digits.  

More digits means a bigger number!
ラディックスソート
基数ソートは、数値のリストに対して機能する特殊なソートアルゴリズムである

これは、数字の大きさに関する情報が桁数に符号化されていることを利用したものである。

桁数が多いほど、大きな数字になります


How does it work?

[902, 593, 4, 1556, 3556, 4386, 86, 7, 8157, 9637, 408, 29]

一桁の数字に合わせて分別
十桁の数字に合わせて分別
百桁の数字に合わせて分別
続く(桁がないものは 0 に収束)


Let's visualize this!
https://visualgo.net/en/sorting?slide=1




*/
