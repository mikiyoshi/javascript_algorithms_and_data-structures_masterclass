/*

Set / Get

set

    Accepts a key and a value
    Hashes the key
    Stores the key-value pair in the hash table array via separate chaining

get

    Accepts a key
    Hashes the key
    Retrieves the key-value pair in the hash table
    If the key isn't found, returns undefined
設定／取得

set セット
キーと値を受け取る
キーをハッシュ化する
キーと値のペアをハッシュテーブルの配列に分離連鎖で格納する

get 得る
キーを受け付ける
キーをハッシュ化する
ハッシュテーブルのキーと値のペアを取得する。
キーが見つからない場合、未定義を返す


*/
class HashTable {
  // constructor(size = 53) {
  constructor(size = 4) {
    // (size = 4) size の値で配列の箱 arr[0], arr[1]... の数量を決める、少なければ重複が増える
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
  get(key) {}
}

let ht = new HashTable();
ht.set('hello world', 'goodbye!!');
ht.set('dogs', 'are cool');
ht.set('cats', 'are fine');
ht.set('i love', 'pizza');
ht.set('hi', 'bye');
ht.set('french', 'fries');

// let ht = new HashTable(17);
// ht.set('maroon', '#800000');
// ht.set('yellow', '#FFFF00');
// ht.set('olive', '#808000');
// ht.set('salmon', '#FA8072');
// ht.set('lightcoral', '#F08080');
// ht.set('mediumvioletred', '#C71585');
// ht.set('plum', '#DDA0DD');

console.log('ht: ', ht);
console.log('ht: ', ht.keyMap);
