/*
Trie Exercise - addWord

This function should add the given word starting from the given index to the Trie.

It will be recursive and notify the correct child of this Trie to add the word starting from a later index.

Consider what the add function should do when it reaches the end of the word as a word does not necessarily end at a leaf.

You must mark nodes which are the ends of words so that the words can be reconstructed later.
この関数は、与えられたインデックスから始まる与えられた単語を、Trieに追加するものである。

この関数は再帰的であり、このTrieの正しい子に通知して、後のインデックスから始まる単語を追加します。

単語は必ずしも葉で終わるとは限らないので、add関数が単語の末尾に達したときに何をすべきか考えてみましょう。

単語の終端であるノードをマークして、後で単語を再構築できるようにしなければならない。

    var firstTrie = new Trie();
    firstTrie.addWord("fun")
    firstTrie.characters // {f: Trie}
    !!firstTrie.characters["f"] // true
     
    firstTrie.characters.f.characters.u // {u: Trie}
    !!firstTrie.characters.f.characters.u // true
     
    firstTrie.characters.f.characters.u.characters.n.isWord // true
    !!firstTrie.characters.f.characters.u.characters.n // true
    !!firstTrie.characters.f.characters.u.characters.n.characters // {}
     
    !!firstTrie.characters.f.characters.u.characters.l // true
     
    var secondTrie = new Trie();
    secondTrie.addWord("ha")
    secondTrie.addWord("hat")
    secondTrie.addWord("has")
    secondTrie.addWord("have")
    secondTrie.addWord("hate")
     
    secondTrie.characters.h.characters.a.isWord // true
    secondTrie.characters.h.characters.a.characters.t.isWord // true
    secondTrie.characters.h.characters.a.characters.v.isWord // false
    secondTrie.characters.h.characters.a.characters.v.characters.e.isWord // true
    secondTrie.characters.h.characters.a.characters.t.characters.e.isWord // true
     
    Object.keys(secondTrie.characters.h.characters.a.characters).length // 3
*/

// Trie

// Implement the following on the Trie class

// addWord
// This function should add the given word starting from the given index to the Trie.
// It will be recursive and notify the correct child of this Trie to add the word
// starting from a later index. Consider what the add function should do
// when it reaches the end of the word as a word does not necessarily end at a leaf.
// You must mark nodes which are the ends of words so that the words can be reconstructed later.

// getWords
// This function should return an array of all of the words in the Trie.

// findWord
// This function should accept a string and return the characters object
// for the last character in that word if the string is a word in the Trie,
// otherwise - undefined. Try to solve this without having to find every single word in the Trie.

// removeWord
// This function should accept a string and remove the word from the Trie.

// autocomplete
// This function should accept a string and return an array of all the possible
// options in the trie for that string.

class Trie {
  constructor(isWord = false) {
    this.characters = {};
    this.isWord = isWord;
  }

  addWord(word, index = 0) {
    if (word.length === index) return this;

    const char = word[index];
    let subTrie;

    if (this.characters[char]) {
      subTrie = this.characters[char];
      subTrie.isWord = subTrie.isWord || word.length - 1 === index;
    } else {
      subTrie = new Trie(word.length - 1 === index);
      this.characters[char] = subTrie;
    }

    subTrie.addWord(word, index + 1);

    return this;
  }

  removeWord(word) {
    this._removeWord(word);

    return this;
  }

  _removeWord(word, index = 0) {
    const char = word[index];
    const subTrie = this.characters[char];

    if (!subTrie) return false;

    if (word.length - 1 > index) {
      return subTrie._removeWord(word, index + 1) &&
        !subTrie.isWord &&
        !Object.keys(subTrie.characters).length
        ? delete this.characters[char]
        : false;
    }

    subTrie.isWord = false;

    return !Object.keys(subTrie.characters).length
      ? delete this.characters[char]
      : false;
  }

  getWords(currentWord = '', words = []) {
    for (const char in this.characters) {
      if (Object.prototype.hasOwnProperty.call(this.characters, char)) {
        const nextWord = currentWord + char;
        const subTrie = this.characters[char];

        if (subTrie.isWord) words.push(nextWord);

        subTrie.getWords(nextWord, words);
      }
    }

    return words;
  }

  countWords() {
    return this.getWords().length;
  }

  findSequence(word, index = 0) {
    const char = word[index];
    const subTrie = this.characters[char];

    if (word.length - 1 > index && subTrie)
      return subTrie.findSequence(word, index + 1);

    return subTrie;
  }

  findWord(word) {
    const lastChar = this.findSequence(word);

    return lastChar && lastChar.isWord ? lastChar : undefined;
  }

  autoComplete(prefix) {
    const subTrie = this.findSequence(prefix);

    return subTrie ? subTrie.getWords(prefix) : [];
  }

  print() {
    console.log(this.getWords());
  }
}

var firstTrie = new Trie();
firstTrie.addWord('fun');
console.log('{f: Trie}: ', firstTrie.characters); // {f: Trie}　// f, u, n として分けられる
// https://www.sunapro.com/js%E3%81%AE%E4%BA%8C%E9%87%8D%E5%90%A6%E5%AE%9A/
// JSの二重否定
// オブジェクトを Boolean 型にできる
// そもそも undefined は false として処理される？
// 例えば: objは定義されてない
// console.log(obj) //undefined
// console.log(!obj) //true
// console.log(!!obj) //false
console.log('true: ', !!firstTrie.characters['f']); // true // Boolean で判定

console.log('{u: Trie}: ', firstTrie.characters.f.characters.u); // {u: Trie}
console.log('true: ', !!firstTrie.characters.f.characters.u); // true

console.log('true: ', firstTrie.characters.f.characters.u.characters.n.isWord); // true
console.log('true: ', !!firstTrie.characters.f.characters.u.characters.n); // true
// console.log(
//   '{}: ',
//   !!firstTrie.characters.f.characters.u.characters.n.characters
// ); // {} // !! が Boolean で判定になるので　バグ？
console.log(
  '{}: ',
  firstTrie.characters.f.characters.u.characters.n.characters
); // {}

console.log('true: ', !!firstTrie.characters.f.characters.u.characters.l); // true // characters.l だから false じゃないの？ バグ？

var secondTrie = new Trie();
secondTrie.addWord('ha');
secondTrie.addWord('hat');
secondTrie.addWord('has');
secondTrie.addWord('have');
secondTrie.addWord('hate');

console.log('true: ', secondTrie.characters.h.characters.a.isWord); // true
console.log('true: ', secondTrie.characters.h.characters.a.characters.t.isWord); // true
console.log(
  'false: ',
  secondTrie.characters.h.characters.a.characters.v.isWord
); // false
console.log(
  'true: ',
  secondTrie.characters.h.characters.a.characters.v.characters.e.isWord
); // true
console.log(
  'true: ',
  secondTrie.characters.h.characters.a.characters.t.characters.e.isWord
); // true

console.log(
  '3: ',
  Object.keys(secondTrie.characters.h.characters.a.characters).length
); // 3
