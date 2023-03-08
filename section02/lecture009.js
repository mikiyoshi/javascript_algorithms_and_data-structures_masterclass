function countUpAndDown(n) {
  console.log('Going up!');
  // O(n)
  for (var i = 0; i < n; i++) {
    console.log(i);
  }
  console.log('At the top!\nGoing down...');
  // O(n)
  for (var j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log('Back down. Bye!');
}
countUpAndDown(10);
// Going up!
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// At the top!
// Going down...
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0
// Back down. Bye!

function printAllPairs(n) {
  // O(n2) // O(n) の中に O(n) があるから
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log('printAllPairs: ', i, j);
    }
  }
}
printAllPairs(2);
// 0 0
// 0 1
// 1 0
// 1 1
