/*
Trie - autocomplete

Write a function on the trie class which accepts a string and returns an array of all the possible options in the trie for that string.
文字列を受け取り、その文字列に対するトライのすべての可能なオプションの配列を返すtrieクラスの関数を書いてください。

    var t = new Trie();
    t.addWord('fun')
    t.addWord('fast')
    t.addWord('fat')
    t.addWord('fate')
    t.addWord('father')
    t.addWord('forget')
    t.addWord('awesome')
    t.addWord('argue')
     
    t.autocomplete('fa') // ["fast","fat", "fate", "father"] 
    t.autoComplete('a') // ["awesome", "argue"]
    t.autoComplete('arz') // []
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

  findWord(word, index = 0) {
    var char = word[index];
    if (index < word.length - 1 && this.characters[char]) {
      index += 1;
      return this.characters[char].findWord(word, index);
    } else {
      return this.characters[char];
    }
  }
  // getWords(words = [], currentWord = '') {
  //   if (this.isWord) {
  //     words.push(currentWord);
  //   }
  //   for (var char in this.characters) {
  //     var nextWord = currentWord + char;
  //     this.characters[char].getWords(words, nextWord);
  //   }
  //   return words;
  // }
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

  findSequence(word, index = 0) {
    const char = word[index];
    const subTrie = this.characters[char];

    if (word.length - 1 > index && subTrie)
      return subTrie.findSequence(word, index + 1);

    return subTrie;
  }

  autoComplete(prefix) {
    const subTrie = this.findSequence(prefix);

    return subTrie ? subTrie.getWords(prefix) : [];
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

console.log('["fast","fat", "fate", "father"]: ', t.autoComplete('fa')); // ["fast","fat", "fate", "father"]
console.log('["awesome", "argue"]: ', t.autoComplete('a')); // ["awesome", "argue"]
console.log('[]: ', t.autoComplete('arz')); // []
