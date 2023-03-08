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
  constructor(size = 53) {
    // (size = 53) size の値で配列の箱 arr[0], arr[1]... の数量を決める、少なければ重複が増える
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
  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }
}

let ht = new HashTable(17); // HashTable(17) の値で配列の箱 arr[0], arr[1]... の数量を決める // (size = 4) size の値で配列の箱 arr[0], arr[1]... の数量を決める、少なければ重複が増える
ht.set('maroon', '#800000');
ht.set('yellow', '#FFFF00');
ht.set('olive', '#808000');
ht.set('salmon', '#FA8072');
ht.set('lightcoral', '#F08080');
ht.set('mediumvioletred', '#C71585');
ht.set('plum', '#DDA0DD');
ht.set('are we done?', 'yes');

console.log('ht: ', ht);
console.log('ht: ', ht.keyMap);
console.log('ht.get(): ', ht.get('plum'));
console.log('ht.get(): ', ht.get('are we done?'));
console.log('ht.get(): ', ht.get('are we dongestholloween'));
// ht:  HashTable {
//   keyMap: [
//     [ [Array] ],
//     <2 empty items>,
//     [ [Array] ],
//     <4 empty items>,
//     [ [Array], [Array] ],
//     <1 empty item>,
//     [ [Array] ],
//     <2 empty items>,
//     [ [Array] ],
//     <2 empty items>,
//     [ [Array] ]
//   ]
// }
// ht:  [
//   [ [ 'plum', '#DDA0DD' ] ],
//   <2 empty items>,
//   [ [ 'salmon', '#FA8072' ] ],
//   <4 empty items>,
//   [ [ 'maroon', '#800000' ], [ 'yellow', '#FFFF00' ] ],
//   <1 empty item>,
//   [ [ 'olive', '#808000' ] ],
//   <2 empty items>,
//   [ [ 'lightcoral', '#F08080' ] ],
//   <2 empty items>,
//   [ [ 'mediumvioletred', '#C71585' ] ]
// ]
// ht.get():  #DDA0DD
// ht.get():  yes
// ht.get():  undefined
