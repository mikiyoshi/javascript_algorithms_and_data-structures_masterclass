/*

What Makes for a Good Hash?

Fast

Non-Example

function slowHash(key) {
  for (var i = 0; i < 10000; i++) {
    console.log("everyday i'm hashing");
  }
  return key[0].charCodeAt(0);
}





Uniformly Distributes Values

Non-Example

function sameHashedValue(key) {
  return 0;
}





Deterministic

Non-Example

function randomHash(key) {
  return Math.floor(Math.random() * 1000)
}

良いハッシュの条件とは？
価値観の均一化

非対象




Simple Hash Example

Here's a hash that works on strings only:

function hash(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    // map "a" to 1, "b" to 2, "c" to 3, etc.
    let value = char.charCodeAt(0) - 96
    total = (total + value) % arrayLen;
  }
  return total;
}
良いハッシュの条件とは？
シンプルなハッシュの例

function hash(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    // map "a" to 1, "b" to 2, "c" to 3, etc.
    let value = char.charCodeAt(0) - 96
    total = (total + value) % arrayLen;
  }
  return total;
}
ここでは、文字列のみで動作するハッシュを紹介します。

hash("pink", 10); // 0
hash("orangered", 10); // 7
hash("cyan", 10); // 3



REFINING OUR HASH

Problems with our current hash

    Only hashes strings (we won't worry about this)
    Not constant time - linear in key length
    Could be a little more random
ハッシュの精製
現在のハッシュの問題点

文字列のハッシュのみ(これは気にしない)
一定時間ではない - 鍵長に比例する
もう少しランダム性があってもよい


*/
function hash(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    // .charCodeAt() はUTF-16 コードユニットを表す 0 から 65535 までの整数
    // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
    // https://www.w3schools.com/jsref/jsref_charcodeat.asp
    // map "a" to 1, "b" to 2, "c" to 3, etc.
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
}

console.log('basic hash: ', hash('pink'));
console.log('basic hash: ', 'a'.charCodeAt(0));
console.log('basic hash: ', 'hi'.charCodeAt(0));
console.log('basic hash: ', 'hi'.charCodeAt(1));
console.log('basic hash: ', 'a'.charCodeAt(0) - 96);
console.log('basic hash: ', 'd'.charCodeAt(0) - 96);
console.log('basic hash: ', 'z'.charCodeAt(0) - 96);

let total = 0;
total += 'hello'.charCodeAt(0) - 96;
console.log('total: ', total);
total += 'hello'.charCodeAt(1) - 96;
console.log('total: ', total);
total += 'hello'.charCodeAt(2) - 96;
console.log('total: ', total);
total += 'hello'.charCodeAt(3) - 96;
console.log('total: ', total);
total += 'hello'.charCodeAt(4) - 96;
console.log('total: ', total);

console.log('hash(): ', hash('pink', 10));
console.log('hash(): ', hash('orange', 10));
console.log('hash(): ', hash('blue', 10));
console.log('hash(): ', hash('cyan', 10));
console.log('hash(): ', hash('purple', 10));
console.log('hash(): ', hash('maroon', 10));
// basic hash:  NaN
// basic hash:  97
// basic hash:  104
// basic hash:  105
// basic hash:  1
// basic hash:  4
// basic hash:  26
// total:  8
// total:  13
// total:  25
// total:  37
// total:  52
// hash():  0
// hash():  0
// hash():  0
// hash():  3
// hash():  8
// hash():  6
