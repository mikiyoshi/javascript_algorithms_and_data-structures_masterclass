/*

RADIX SORT PSEUDOCODE

    Define a function that accepts list of numbers
    Figure out how many digits the largest number has
    Loop from k = 0 up to this largest number of digits
    For each iteration of the loop:

    Create buckets for each digit (0 to 9)
    place each number in the corresponding bucket based on its kth digit

    Replace our existing array with values in our buckets, starting with 0 and going up to 9
    return list at the end!
基数ソート疑似コード
数値のリストを受け取る関数を定義する
一番大きい数字が何桁か考える
k= 0からこの最大桁数までループさせる
ループの各反復のために。
各桁（0～9）ごとにバケットを作成する
各数字をk番目の桁に基づいて対応するバケツに入れる。
既存の配列を、0 から始まり 9 までのバケツの値で置き換えます。
最後にリターンリスト！


RADIX SORT BIG O
Time Complexity (Best) 	Time Complexity (Average) 	Time Complexity (Worst) 	Space Complexity
        O(nk) 	                  O(nk) 	                    O(nk)             	O(n + k)
    n - length of array
    k - number of digits(average)







Recap

    Merge sort and quick sort are standard efficient sorting algorithms
    Quick sort can be slow in the worst case, but is comparable to merge sort on average
    Merge sort takes up more memory because it creates a new array (in-place merge sorts exist, but they are really complex!)
    Radix sort is a fast sorting algorithm for numbers
    Radix sort exploits place value to sort numbers in linear time (for a fixed number of digits)
まとめ
マージソートとクイックソートは標準的な効率的ソートアルゴリズムです。
クイックソートは最悪の場合遅くなることがあるが、平均的にはマージソートと同等である
マージソートは新しい配列を作成するため、より多くのメモリを消費します(インプレースマージソートも存在しますが、非常に複雑です!)。
Radixソートは数値の高速ソートアルゴリズムです
基数ソートにより、（固定桁数の）線形時間での数値の並べ替えが可能です。
*/
