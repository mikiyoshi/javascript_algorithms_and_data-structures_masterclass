/*
Selection Sort

Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position

[ 5, 3, 4, 1, 2 ]

[ 5, 3, 4, 1, 2 ]

[ 5, 3, 4, 1, 2 ]

[ 5, 3, 4, 1, 2 ]

[ 1, 3, 4, 5, 2 ]　1 is now in its sorted position!




Selection Sort Pseudocode

    Store the first element as the smallest value you've seen so far.
    Compare this item to the next item in the array until you find a smaller number.
    If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
    If the "minimum" is not the value (index) you initially began with, swap the two values.
    Repeat this with the next element until the array is sorted.
選択ソート疑似コード
最初の要素を今までで最小の値として保存します。
この項目と配列の次の項目を、より小さい数字が見つかるまで比較します。
より小さい数値が見つかったら、その小さい数値を新しい「最小値」として指定し、配列の最後まで続けます。
最小値」が最初に設定した値（インデックス）でない場合は、2つの値を入れ替えてください。
配列がソートされるまで、次の要素でこれを繰り返します。

Let's visualize this!
https://visualgo.net/en/sorting?slide=1



*/
