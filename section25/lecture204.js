/*

Keys / Values

keys

    Loops through the hash table array and returns an array of keys in the table

values

    Loops through the hash table array and returns an array of values in the table
キー／バリュー
キー
ハッシュテーブルの配列をループし、テーブル内のキーの配列を返す
価値観
ハッシュテーブルの配列をループし、テーブル内の値の配列を返す
*/
class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      // .charCodeAt() はUTF-16 コードユニットを表す 0 から 65535 までの整数
      // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
      // https://www.w3schools.com/jsref/jsref_charcodeat.asp
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
  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          // .includes() は同じデータの重複を削除
          // .includes() は配列にデータがあれば true、なければ false // .includes("Banana", 3) arr[3] と key も指定できる
          // https://www.w3schools.com/jsref/jsref_includes_array.asp
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            // .keyMap[i][j] は ['maroon', '#800000']
            // .keyMap[i][j][0] は ['maroon'] // ちなみに .keyMap[i][j][1] は ['#800000']
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }
  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          // .includes() は同じデータの重複を削除
          // .includes() は配列にデータがあれば true、なければ false // .includes("Banana", 3) arr[3] と key も指定できる
          // https://www.w3schools.com/jsref/jsref_includes_array.asp
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            // .keyMap[i][j] は ['maroon', '#800000']
            // .keyMap[i][j][1] は ['#800000'] // ちなみに .keyMap[i][j][0] は ['maroon']
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }
}

let ht = new HashTable(17);
ht.set('maroon', '#800000');
ht.set('yellow', '#FFFF00');
ht.set('olive', '#808000');
ht.set('salmon', '#FA8072');
ht.set('lightcoral', '#F08080');
ht.set('mediumvioletred', '#C71585');
ht.set('plum', '#DDA0DD');
ht.set('purple', '#DDA0DD');
ht.set('violet', '#DDA0DD');

// .keys() の配列をそれぞれ .get() で表示すれば、values だけの表示を確認できる
ht.keys().forEach(function (key) {
  console.log(ht.get(key));
});
// #DDA0DD
// #FA8072
// #DDA0DD
// #DDA0DD
// #800000
// #FFFF00
// #808000
// #F08080
// #C71585
console.log('ht.keys(): ', ht.keys());
// ht.keys():  [
//   'plum',
//   'salmon',
//   'violet',
//   'purple',
//   'maroon',
//   'yellow',
//   'olive',
//   'lightcoral',
//   'mediumvioletred'
// ]
console.log('ht.values(): ', ht.values());
// ht.values():  [
//   '#DDA0DD',
//   '#FA8072',
//   '#800000',
//   '#FFFF00',
//   '#808000',
//   '#F08080',
//   '#C71585'
// ]
