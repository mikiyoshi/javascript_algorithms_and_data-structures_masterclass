/*

Binary Search Pseudocode

    This function accepts a sorted array and a value
    Create a left pointer at the start of the array, and a right pointer at the end of the array
    While the left pointer comes before the right pointer:

    Create a pointer in the middle
    If you find the value you want, return the index
    If the value is too small, move the left pointer up
    If the value is too large, move the right pointer down

    If you never find the value, return -1

バイナリサーチ疑似コード
この関数は，ソートされた配列と，その配列の値を受け取る。
配列の先頭に左ポインタ、配列の末尾に右ポインタを作成します。
左ポインターは右ポインターより前に来るが
真ん中にポインターを作成する
欲しい値が見つかったら、そのインデックスを返す
値が小さすぎる場合は、左ポインターを上に移動させる
値が大きすぎる場合は、右ポインタを下に移動させる
値が見つからなかった場合、-1を返す
*/
