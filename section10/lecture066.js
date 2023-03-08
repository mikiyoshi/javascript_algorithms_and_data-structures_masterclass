/*
Pseudocode

    Loop over the longer string
    Loop over the shorter string
    If the characters don't match, break out of the inner loop
    If the characters do match, keep going
    If you complete the inner loop and find a match, increment the count of matches
    Return the count

疑似コード
長い方の文字列をループさせる
短い方の文字列をループさせる
文字が一致しない場合、内部ループから抜け出す
文字が一致する場合は、そのまま進みます
内部ループを完了し、マッチが見つかった場合、マッチのカウントをインクリメントする
カウントを返す
*/
function naiveSearch(long, short) {
  var count = 0;
  for (var i = 0; i < long.length; i++) {
    for (var j = 0; j < short.length; j++) {
      console.log('long[i] short[j]: ', long[i], short[j], long[i + j]);
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
}

console.log('naiveSearch: ', naiveSearch('lorie loled', 'lol'));
// long[i] short[j]:  l l
// long[i] short[j]:  l o
// long[i] short[j]:  l l
// long[i] short[j]:  o l
// long[i] short[j]:  r l
// long[i] short[j]:  i l
// long[i] short[j]:  e l
// long[i] short[j]:    l
// long[i] short[j]:  l l
// long[i] short[j]:  l o
// long[i] short[j]:  l l
// long[i] short[j]:  o l
// long[i] short[j]:  l l
// long[i] short[j]:  l o
// long[i] short[j]:  e l
// long[i] short[j]:  d l
// naiveSearch:  1
