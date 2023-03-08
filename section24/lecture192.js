/*
Big O of Binary Heaps

Insertion -   O(log N)

Removal -   O(log N)

Search -   O(N)
バイナリヒープのビッグオー
挿入 -O(log N)

除去 -O(log N)

検索 -O(N)



WHY LOG(N)?

Suppose we wanted to insert 200

For 16 Elements....4 comparisons

なぜLOG(N)なのか？

仮に200を挿入したい場合


16エレメントの場合...4比較


WHAT ABOUT WORST CASE?
最悪の場合は？

REMEMBER THIS DEPRESSING TREE?
この鬱陶しい木を覚えていますか？
NOT POSSIBLE WITH HEAPS!
ヒープでは無理です!


RECAP

    Binary Heaps are very useful data structures for sorting, and implementing other data structures like priority queues

    Binary Heaps are either MaxBinaryHeaps or MinBinaryHeaps with parents either being smaller or larger than their children

    With just a little bit of math, we can represent heaps using arrays!
RECAP
バイナリヒープは、ソートや、プライオリティキューなどの他のデータ構造の実装に非常に便利なデータ構造です

バイナリヒープはMaxBinaryHeapsまたはMinBinaryHeapsで、親は子より小さいか大きい。

ほんの少しの計算で、ヒープを配列で表現することができるのです!
*/
