/*

Merging Arrays Pseudocode

    Create an empty array, take a look at the smallest values in each input array
    While there are still values we haven't looked at...

    If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
    If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
    Once we exhaust one array, push in all remaining values from the other array
配列のマージ 擬似コード
空の配列を作成し、各入力配列の最小値を確認します。
まだ見ていない価値観がある中で...。
もし最初の配列の値が2番目の配列の値よりも小さければ、最初の配列の値を結果に押し込み、最初の配列の次の値に進みます。
1番目の配列の値が2番目の配列の値よりも大きい場合、2番目の配列の値を結果にプッシュし、2番目の配列の次の値に移動します。
一方の配列を使い切ったら、もう一方の配列から残りの値をすべて押し込む


*/
// Merges two already sorted arrays
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}
console.log('merge: ', merge([100, 200], [1, 2, 3, 5, 6]));
