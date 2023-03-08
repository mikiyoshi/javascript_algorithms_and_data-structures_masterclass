/*


BINARY HEAPS



OBJECTIVES

 

    Define what a binary heap is

    Compare and contrast min and max heaps

    Implement basic methods on heaps

    Understand where heaps are used in the real world and what other data structures can be constructed from heaps 
目的
 

バイナリヒープとは何かを定義する

最小ヒープと最大ヒープの比較対照

ヒープに対する基本的なメソッドの実装

ヒープが実世界でどのように使われているか、またヒープからどのようなデータ構造を構築できるかを理解する。


WHAT IS A BINARY HEAP?

Very similar to a binary search tree, but with some different rules!

In a MaxBinaryHeap, parent nodes are always larger than child nodes. In a MinBinaryHeap, parent nodes are always smaller than child nodes
バイナリヒープとは何ですか？
二分探索木に非常によく似ていますが、いくつか異なるルールがあります

MaxBinaryHeapでは、親ノードは常に子ノードより大きい。MinBinaryHeapでは、親ノードは常に子ノードより小さい。

WHAT DOES IT LOOK LIKE?
どのようなものですか？
//      41
//   39     33
// 18  27  12



NOT A BINARY HEAP
バイナリヒープでない
//      33
//   18     41
// 12  27  39




MAX BINARY HEAP

    Each parent has at most two child nodes
    The value of each parent node is always greater than its child nodes
    In a max Binary Heap the parent is greater than the children, but there are no guarantees between sibling nodes.
    A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first
最大2値ヒープ
各親は最大で2つの子ノードを持つ
各親ノードの値は、常に その子ノードよりも大きい
最大バイナリヒープでは、親は子より大きいが、兄弟ノード間の保証はない。
バイナリヒープは、可能な限りコンパクトである。各ノードのすべての子ノードは可能な限り完全であり、左の子ノードが最初に埋められる

Value of parent is always greater than children
親の値は常に子より大きい
//       100
//     19     36
//   17  3  25   1
// 2   7

No Implied Ordering Between Siblings
兄弟間の暗黙の秩序はない


A MIN BINARY HEAP
アミノバイナリーのヒープ
//        1
//     2     3
//   17  19  36   7
// 25   100


Why do we need to know this?

Binary Heaps are used to implement Priority Queues, which are very commonly used data structures

They are also used quite a bit, with graph traversal algorithms

We'll come back to this!
なぜ、それを知る必要があるのか。
バイナリヒープは、非常によく使われるデータ構造であるプライオリティキューを実装するために使用されます。

また、グラフのトラバーサルアルゴリズムも かなり使われています

また来ようね!



*/
