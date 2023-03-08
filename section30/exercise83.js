/*
Trie Exercise - findWord

Write a function called findWord which accepts a string and returns the characters object for the last character in that word if the string is a word in the Trie, otherwise it returns undefined. Try to solve this without having to find every single word in the Trie. addWord is implement to help you test the function.
文字列を受け取り、その文字列がTrieの単語であれば、その単語の最後の文字の文字オブジェクトを返し、そうでなければundefinedを返すfindWordという関数を書いてください。Trieのすべての単語を見つけることなく、これを解決するようにしてください。addWordは、関数をテストするのに役立つように実装されています。

    var t = new Trie();
    t.addWord('fun')
    t.addWord('fast')
    t.addWord('fat')
    t.addWord('fate')
    t.addWord('father')
     
    t.findWord('taco') // undefined
    t.findWord('fat').characters // {t: Trie}
    t.findWord('father').characters // {}
    t.findWord('father').isWord // true
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
}

var t = new Trie();
t.addWord('fun');
t.addWord('fast');
t.addWord('fat');
t.addWord('fate');
t.addWord('father');

console.log('undefined: ', t.findWord('taco')); // undefined
console.log('{t: Trie}: ', t.findWord('fat').characters); // {t: Trie}
// {t: Trie}:  { // fat の t
//   e: Trie { characters: {}, isWord: true }, // fate の e
//   h: Trie { characters: { e: [Trie] }, isWord: false } // father の her
// }
console.log('{}: ', t.findWord('father').characters); // {} // father の後の最後の文字がないので {}
console.log('true: ', t.findWord('father').isWord); // true
