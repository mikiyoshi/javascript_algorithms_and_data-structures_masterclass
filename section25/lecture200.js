/*

A HashTable Class

class HashTable {
  constructor(size=53){
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
}




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
