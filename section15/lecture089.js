/*

mergeSort Pseudocode

    Break up the array into halves until you have arrays that are empty or have one element
    Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
    Once the array has been merged back together, return the merged (and sorted!) array
mergeSort 擬似コード
配列を半分に分割し、空または1つの要素を持つ配列にします。
小さなソート済み配列ができたら、その配列を他のソート済み配列と結合して、配列の全長に戻します。
配列が再び結合されたら、結合された (そして並べ替えられた) 配列を返します。

*/
// Merge function from earlier
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

// Recrusive Merge Sort
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  // Math.floor()
  // https://www.w3schools.com/jsref/jsref_floor.asp
  let mid = Math.floor(arr.length / 2);

  // .slice() は配列を切り取る // arr.slice(1,3) arr[1], arr[2] // arr.slice(1) arr[1] 以降全て
  // https://www.w3schools.com/jsref/jsref_slice_array.asp
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  console.log('left right: ', left, right);
  return merge(left, right);
}

console.log('mergeSort: ', mergeSort([10, 24, 76, 73]));
// left right:  [ 10 ] [ 24 ]
// left right:  [ 76 ] [ 73 ]
// left right:  [ 10, 24 ] [ 73, 76 ]
// mergeSort:  [ 10, 24, 73, 76 ]
