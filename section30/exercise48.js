/*
Sorting Exercise - merge helper

Given two sorted arrays, write a function called merge which accepts two SORTED arrays and returns a new array with both of the values from each array sorted.

This function should run in O(n + m) time and O(n + m) space and should not modify the parameters passed to it.

As before, the function should default to sorting numbers in ascending order. If you pass in a comparator function as a third argument, this comparator is what will be used. (Note that the input arrays will always be sorted according to the comparator!)

Also, do not use the built in .sort method! We're going to use this helper to implement a sort, so the helper itself shouldn't depend on a sort.
2つのソートされた配列が与えられたとき、2つのソートされた配列を受け取り、それぞれの配列の両方の値をソートした新しい配列を返すmergeという関数を書きなさい。

この関数は、O(n + m)時間およびO(n + m)空間で実行され、渡されたパラメータを変更してはならない。

前回と同様、この関数はデフォルトで数値を昇順にソートするようにする必要があります。第3引数にコンパレータ関数を渡すと、このコンパレータが使用されます。(入力配列は常にコンパレータに従ってソートされることに注意してください!)。

また、内蔵の.sortメソッドは使わないでください! 私たちはこのヘルパーを使ってソートを実装するつもりなので、ヘルパー自体がソートに依存してはいけないのです。



Examples

    var arr1 = [1,3,4,5];
    var arr2 = [2,4,6,8];
    merge(arr1,arr2) // [1,2,3,4,4,5,6,8]
     
    arr1 // [1,3,4,5];
    arr2 // [2,4,6,8];
     
    var arr3 = [-2,-1,0,4,5,6];
    var arr4 = [-3,-2,-1,2,3,5,7,8];
     
    merge(arr3,arr4); // [-3,-2,-2,-1,-1,0,2,3,4,5,5,6,7,8]
     
    var arr5 = [3,4,5]
    var arr6 = [1,2]
     
    merge(arr5,arr6) // [1,2,3,4,5]
     
    var names = ["Bob", "Ethel", "Christine"]
    var otherNames = ["M", "Colt", "Allison", "SuperLongNameOMG"]
     
    function stringLengthComparator(str1, str2) {
      return str1.length - str2.length;
    }
     
    merge(names, otherNames, stringLengthComparator); // ["M", "Bob", "Colt", "Ethel", "Allison", "Christine", "SuperLongNameOMG"]
*/
function merge(arr1, arr2, comparator) {
  // add whatever parameters you deem necessary - good luck!
  if (typeof comparator !== 'function') {
    comparator = (num1, num2) => num1 - num2;
  }
  const result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    const compareResult = comparator(arr1[i], arr2[j]);
    const isLargeI = compareResult > 0;
    if (isLargeI) {
      result.push(arr2[j]);
      j++;
    } else {
      result.push(arr1[i]);
      i++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  // console.log(result);
  return result;
}

var arr1 = [1, 3, 4, 5];
var arr2 = [2, 4, 6, 8];
console.log('[1,2,3,4,4,5,6,8]: ', merge(arr1, arr2)); // [1,2,3,4,4,5,6,8]

arr1; // [1,3,4,5];
arr2; // [2,4,6,8];

var arr3 = [-2, -1, 0, 4, 5, 6];
var arr4 = [-3, -2, -1, 2, 3, 5, 7, 8];

console.log('[-3,-2,-2,-1,-1,0,2,3,4,5,5,6,7,8]: ', merge(arr3, arr4)); // [-3,-2,-2,-1,-1,0,2,3,4,5,5,6,7,8]

var arr5 = [3, 4, 5];
var arr6 = [1, 2];

console.log('[1,2,3,4,5]: ', merge(arr5, arr6)); // [1,2,3,4,5]

var names = ['Bob', 'Ethel', 'Christine'];
var otherNames = ['M', 'Colt', 'Allison', 'SuperLongNameOMG'];

function stringLengthComparator(str1, str2) {
  return str1.length - str2.length;
}

console.log(
  '["M", "Bob", "Colt", "Ethel", "Allison", "Christine", "SuperLongNameOMG"]: ',
  merge(names, otherNames, stringLengthComparator)
); // ["M", "Bob", "Colt", "Ethel", "Allison", "Christine", "SuperLongNameOMG"]
