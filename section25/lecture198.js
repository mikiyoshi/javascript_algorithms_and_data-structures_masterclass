/*

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



Hashing Revisited
ハッシュの再来
function hash(key, arrayLen) {
  let total = 0;
  for (let i = 0; i < key.length; i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96
    total = (total + value) % arrayLen;
  }
  return total;
}



function hash(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}




Prime numbers? wut.

The prime number in the hash is helpful in spreading out the keys more uniformly.

It's also helpful if the array that you're putting values into has a prime length.

You don't need to know why. (Math is complicated!) But here are some links if you're curious.

Why do hash functions use prime numbers?

Does making array size a prime number help in hash table implementation?
素数？
ハッシュの素数は、キーをより均一に分散させるのに役立つ。

また、値を入れる配列の長さが素数であれば便利です。

その理由は知らなくても大丈夫です。(数学は複雑なんです！）でも、気になるならここにいくつかのリンクがあります。

なぜハッシュ関数に素数が使われるのか？

配列のサイズを素数にすると、ハッシュテーブルの実装に役立つのでしょうか？


*/

function hash(key, arrayLen) {
  let total = 0;
  for (let i = 0; i < key.length; i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
}

function hash2(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31; // Hashing Revisited
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}

console.log('hash(): ', hash('hello', 13));
console.log('hash(): ', hash('goodbye', 13));
console.log('hash(): ', hash('hi', 13));
console.log('hash(): ', hash('cyan', 13));
console.log('hash(): ', hash('pink', 13));

console.log('hash2(): ', hash2('hello', 13));
console.log('hash2(): ', hash2('goodbye', 13));
console.log('hash2(): ', hash2('hi', 13));
console.log('hash2(): ', hash2('cyan', 13));
console.log('hash2(): ', hash2('pink', 13));
// hash():  0
// hash():  8
// hash():  4
// hash():  4
// hash():  11
// hash2():  7
// hash2():  9
// hash2():  10
// hash2():  5
// hash2():  5
