/*


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
