function logAtLeast5(n) {
  // O(n)
  for (var i = 1; i <= Math.max(5, n); i++) {
    console.log('logAtLeast5: ', i);
  }
}
// 5 以下なら最低 5 までカウントする、5 以上なら 5 以上の数値までカウントする
logAtLeast5(1);
// logAtLeast5:  1
// logAtLeast5:  2
// logAtLeast5:  3
// logAtLeast5:  4
// logAtLeast5:  5
logAtLeast5(10);
// logAtLeast5:  1
// logAtLeast5:  2
// logAtLeast5:  3
// logAtLeast5:  4
// logAtLeast5:  5
// logAtLeast5:  6
// logAtLeast5:  7
// logAtLeast5:  8
// logAtLeast5:  9
// logAtLeast5:  10

function logAtMost5(n) {
  // O(1)
  for (var i = 1; i <= Math.min(5, n); i++) {
    console.log('logAtMost5: ', i);
  }
}
// 5 以下なら 5 以下の数値までカウントする、5 以上なら 5 までカウントする
logAtMost5(1);
// logAtMost5:  1
logAtMost5(30);
// logAtMost5:  1
// logAtMost5:  2
// logAtMost5:  3
// logAtMost5:  4
// logAtMost5:  5
