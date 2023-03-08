// ARRAYS;
// Ordered lists!
let names = ['Michael', 'Melissa', 'Andrea'];
//            Michael    Melissa     Andrea
//              0           1           2

// add "Raj"
//            Michael    Melissa     Andrea     Raj
//              0           1           2        3

// add "Raj" // 前に追加するときは、全ての連番がずれる
//              Raj      Michael    Melissa     Andrea
//              0           1           2        3

// remove "Raj" // 前から削除するときは、全ての連番がずれる
//            Michael    Melissa     Andrea
//              0           1           2

let values = [true, {}, [], 2, 'awesome'];

// WHEN TO USE ARRAYS
// When you need order
// When you need fast access / insertion and removal (sort of....)

// Big O of Arrays

// Insertion -   It depends....
// Removal -   It depends....
// Searching -   O(N)
// Access -   O(1)

// Let's see what we mean by that!
