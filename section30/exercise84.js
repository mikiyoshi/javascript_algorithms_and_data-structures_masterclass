/*
Trie Exercise - getWords

Write a function on the Trie.prototype called getWords which returns an array of all of the words in the Trie.
Trie.prototypeに、Trieに含まれるすべての単語の配列を返すgetWordsという関数を記述してください。

    var t = new Trie();
    t.addWord('fun')
    t.addWord('fast')
    t.addWord('fat')
    t.addWord('fate')
    t.addWord('father')
    t.addWord('forget')
    t.addWord('awesome')
    t.addWord('argue')
     
    t.getWords() // ["fun", "fast", "fat", "fate", "father", "forget", "awesome", "argue"]
     
    t.getWords().length // 8
*/
class Trie {
  constructor() {
    this.characters = {};
    this.isWord = false;
  }
  addWord(word, index = 0) {
    if (index === word.length) {
      this.isWord = true;
    } else if (index < word.length) {
      var char = word[index];
      var subTrie = this.characters[char] || new Trie();
      subTrie.addWord(word, index + 1);
      this.characters[char] = subTrie;
    }
    return this;
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
}

var t = new Trie();
t.addWord('fun');
t.addWord('fast');
t.addWord('fat');
t.addWord('fate');
t.addWord('father');
t.addWord('forget');
t.addWord('awesome');
t.addWord('argue');

console.log(
  '["fun", "fast", "fat", "fate", "father", "forget", "awesome", "argue"]: ',
  t.getWords()
); // ["fun", "fast", "fat", "fate", "father", "forget", "awesome", "argue"]

console.log('8: ', t.getWords().length); // 8
