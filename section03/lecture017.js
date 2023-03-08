// https://cs.slides.com/colt_steele/built-in-data-structures-25#/11/0/0

// Big O of Array Operations
// push -   O(1)
// pop -   O(1)
// shift -   O(N)
// unshift -   O(N)
// concat -   O(N)
// slice -   O(N)
// splice -   O(N)
// sort -   O(N * log N)
// forEach/map/filter/reduce/etc. -   O(N)

// concat -   O(N) // Array.prototype.concat() // array をくっつける
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

// slice -   O(N) // Array.prototype.slice()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

// splice -   O(N) // Array.prototype.splice()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

// Limitations of Arrays
// Inserting at the beginning is not as easy as we might think! There are more efficient data structures for that!
