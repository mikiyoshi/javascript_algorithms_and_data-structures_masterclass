/*

REPRESENTING HEAPS
だいそうどう
//      41
//   39     33
// 18  27  12



THERE'S AN EASY WAY OF STORING A BINARY HEAP...

A LIST/ARRAY
バイナリヒープを格納する簡単な 方法がある...
A LIST/ARRAY

REPRESENTING A HEAP
ヒープを表す




For any index of an array n...

The left child is stored at 2n + 1

The right child is at 2n + 2

WHAT IF WE HAVE A CHILD NODE AND WANT TO FIND ITS PARENT?
子ノードがあり、その親を探したい場合はどうすればよいのでしょうか。



For any child node at index  n...

Its parent is at index (n-1)/2

floored
インデックスnの任意の子ノードに対して ....

その親はインデックス (n-1)/2にあります。
*/
