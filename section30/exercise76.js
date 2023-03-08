/*
Dynamic Programming - Coin Change

Write a function called coinChange which accepts two parameters: an array of denominations and a value. The function should return the number of ways you can obtain the value from the given collection of denominations. You can think of this as figuring out the number of ways to make change for a given value from a supply of coins.
coinChangeという関数を書き、2つのパラメータ、すなわち額面の配列と値を受け取ります。この関数は、与えられた宗派のコレクションから値を得ることができる方法の数を返す必要があります。これは、硬貨の供給から与えられた値のお釣りを作る方法の数を見つけ出すと考えることができます。

Examples:

    const denominations = [1, 5, 10, 25]
     
    coinChange(denominations, 1) // 1
    coinChange(denominations, 2) // 1
    coinChange(denominations, 5) // 2
    coinChange(denominations, 10) // 4
    coinChange(denominations, 25) // 13
    coinChange(denominations, 45) // 39
    coinChange(denominations, 100) // 242
    coinChange(denominations, 145) // 622
    coinChange(denominations, 1451) // 425663
    coinChange(denominations, 14511) // 409222339
*/
function coinChange() {
  // add whatever parameters you deem necessary - good luck!
}

// const denominations = [1, 5, 10, 25];

// console.log('1: ', coinChange(denominations, 1)); // 1
// console.log('1: ', coinChange(denominations, 2)); // 1
// console.log('2: ', coinChange(denominations, 5)); // 2
// console.log('4: ', coinChange(denominations, 10)); // 4
// console.log('13: ', coinChange(denominations, 25)); // 13
// console.log('39: ', coinChange(denominations, 45)); // 39
// console.log('242: ', coinChange(denominations, 100)); // 242
// console.log('622: ', coinChange(denominations, 145)); // 622
// console.log('425663: ', coinChange(denominations, 1451)); // 425663
// console.log('409222339: ', coinChange(denominations, 14511)); // 409222339

// Write a function called coinChange which accepts two parameters:
// an array of denominations and a value. The function should return the number
// of ways you can obtain the value from the given collection of denominations.
// You can think of this as figuring out the number of ways to make change
// for a given value from a supply of coins.
// Use Dynamic Programming approach.

// Brute Force
// Time Complexity exponential
// Space Complexity O(1)
function coinChangeBF(denominations, value) {
  const index = denominations.length - 1;

  function change(denominations, value, index) {
    if (value < 0 || index < 0) return 0;
    if (value === 0) return 1;

    return (
      change(denominations, value - denominations[index], index) +
      change(denominations, value, index - 1)
    );
  }

  return change(denominations, value, index);
}

console.log('242: ', coinChangeBF([1, 5, 10, 25], 100)); // 242
const denominations = [1, 5, 10, 25];

console.log('1: ', coinChangeBF(denominations, 1)); // 1
console.log('1: ', coinChangeBF(denominations, 2)); // 1
console.log('2: ', coinChangeBF(denominations, 5)); // 2
console.log('4: ', coinChangeBF(denominations, 10)); // 4
console.log('13: ', coinChangeBF(denominations, 25)); // 13
console.log('39: ', coinChangeBF(denominations, 45)); // 39
console.log('242: ', coinChangeBF(denominations, 100)); // 242
console.log('622: ', coinChangeBF(denominations, 145)); // 622
// console.log('425663: ', coinChangeBF(denominations, 1451)); // 425663 // これは計算が遅すぎるので、Terminalがフリーズする
// console.log('409222339: ', coinChangeBF(denominations, 14511)); // 409222339 // これは計算が遅すぎるので、Terminalがフリーズする

// Dynamic Programming

// Top-down approach - Memoization
// Time Complexity O(value * denominations.length)
// Space Complexity O(value * denominations.length)
function coinChangeTD(denominations, value) {
  const index = denominations.length - 1;
  const memo = {};

  function change(denominations, value, index) {
    if (value < 0 || index < 0) return 0;
    if (value === 0) return 1;

    const key = `${index}/${value}`;

    if (memo[key]) return memo[key];

    memo[key] =
      change(denominations, value - denominations[index], index) +
      change(denominations, value, index - 1);

    return memo[key];
  }

  return change(denominations, value, index);
}

console.log('409222339: ', coinChangeTD([1, 5, 10, 25], 14511)); // 409222339

// const denominations = [1, 5, 10, 25];

console.log('1: ', coinChangeTD(denominations, 1)); // 1
console.log('1: ', coinChangeTD(denominations, 2)); // 1
console.log('2: ', coinChangeTD(denominations, 5)); // 2
console.log('4: ', coinChangeTD(denominations, 10)); // 4
console.log('13: ', coinChangeTD(denominations, 25)); // 13
console.log('39: ', coinChangeTD(denominations, 45)); // 39
console.log('242: ', coinChangeTD(denominations, 100)); // 242
console.log('622: ', coinChangeTD(denominations, 145)); // 622
console.log('425663: ', coinChangeTD(denominations, 1451)); // 425663
console.log('409222339: ', coinChangeTD(denominations, 14511)); // 409222339

// Bottom-up approach - Tabulation
// Time Complexity Complexity O(value * denominations.length)
// Space Complexity O(value)
function coinChangeBU(denominations, value) {
  const table = Array.from({ length: value + 1 }).fill(0);
  table[0] = 1;

  for (let i = 0; i < denominations.length; i++) {
    for (let j = denominations[i]; j <= value; j++) {
      table[j] += table[j - denominations[i]];
    }
  }

  return table[value];
}

console.log('409222339: ', coinChangeBU([1, 5, 10, 25], 14511)); // 409222339

// const denominations = [1, 5, 10, 25];

console.log('1: ', coinChangeBU(denominations, 1)); // 1
console.log('1: ', coinChangeBU(denominations, 2)); // 1
console.log('2: ', coinChangeBU(denominations, 5)); // 2
console.log('4: ', coinChangeBU(denominations, 10)); // 4
console.log('13: ', coinChangeBU(denominations, 25)); // 13
console.log('39: ', coinChangeBU(denominations, 45)); // 39
console.log('242: ', coinChangeBU(denominations, 100)); // 242
console.log('622: ', coinChangeBU(denominations, 145)); // 622
console.log('425663: ', coinChangeBU(denominations, 1451)); // 425663
console.log('409222339: ', coinChangeBU(denominations, 14511)); // 409222339
