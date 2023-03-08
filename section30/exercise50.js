/*
Sorting Exercise - pivot helper

In this exercise, your goal is to implement a function called pivot . This function contains nearly all of the logic you'll need in order to implement Quick Sort in the next exercise.

The pivot  function is responsible for taking an array, setting the pivot value, and mutating the array so that all values less than the pivot wind up to the left of it, and all values greater than the pivot wind up to the right of it. It's also helpful if this helper returns the index of where the pivot value winds up.

For example, if we decide the pivot will always be the first element in the array, it should behave in the following way:

    var arr = [4, 2, 5, 3, 6];
    pivot(arr); // 2
    arr; // [3, 2, 4, 5, 6];

In this code, the specifics of how the arr  variable gets mutated are not important. All that matters is that 4 winds up at index 2, with 3 and 2 to the left of it (in any order), and with 5 and 6 to the right of it (in any order).

Hint: When we get to Quick Sort, it will be helpful for the pivot  helper to accept not only an array an an optional comparator, but also an optional start and end index. These should default to 0 and the array length minus 1, respectively. We've provided these to you in the starter code, but their utility may not be apparent yet. That's okay! When you get to implementing Quick Sort, their usefulness will become clearer.
この演習では、pivot という関数を実装することを目標とします。この関数には、次の演習でクイックソートを実装するために必要なロジックがほぼすべて含まれています。

ピボット関数は、配列を受け取り、ピボット値を設定し、ピボットより小さい値はすべて配列の左側に、ピボットより大きい値はすべて配列の右側に移動するように配列を変更する役割を果たします。このヘルパーが、ピボット値の位置を示すインデックスを返すと便利です。

例えば、ピボットは常に配列の最初の要素にすると決めた場合、次のように動作します。

    var arr = [4, 2, 5, 3, 6];
    pivot(arr); // 2
    arr; // [3, 2, 4, 5, 6] となります。

このコードでは、arr変数がどのように変化するかということは重要ではありません。重要なのは、インデックス2に4が入り、その左に3と2が入り（順番は問わない）、その右に5と6が入ることです。

ヒント: クイックソートでは、ピボットヘルパーに配列とオプションのコンパレータだけでなく、開始と終了のインデックスも指定できるようにすると便利でしょう。これらのデフォルトは、それぞれ 0 と配列の長さから 1 を引いた値である必要があります。スターター・コードでこれらを提供しましたが、その有用性はまだ明らかではないかもしれません。でも、大丈夫です。クイックソートを実装するようになれば、これらの有用性はより明確になるでしょう。




Examples

    var arr1 = [5, 4, 9, 10, 2, 20, 8, 7, 3];
    var arr2 = [8, 4, 2, 5, 0, 10, 11, 12, 13, 16];
    var arr3 = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
     
    function strLength(a, b) {
      return a.length - b.length
    }
     
    pivot(arr1); // 3
    pivot(arr2); // 4
    pivot(arr3, strLength); // 1
     
    arr1.slice(0, 3).sort((a, b) => a - b); // [2, 3, 4]
    arr1.slice(3).sort((a, b) => a - b); // [5, 7, 8, 9, 10, 20]
     
    arr2.slice(0, 4).sort((a, b) => a - b); // [0, 2, 4, 5]
    arr2.slice(4).sort((a, b) => a - b); // [8, 10, 11, 12, 13, 16]
     
    arr3.slice(0, 1).sort(strLength); // ["Blue"]
    arr3.slice(1).sort(strLength); // ["LilBub", "Grumpy", "Garfield", "Heathcliff"]


https://github.com/m90khan/Algorithms-and-Data-Structures/blob/965ff576abb73ab92cb504583ab8d704777ea84d/sorting-algorithms/quick-sort/quick-sort-comparator.js
    */

function pivot(arr, comparator, start = 0, end = arr.length - 1) {
  // good luck!
  if (typeof comparator !== 'function') {
    comparator = (a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    };
  }

  let pivotIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (comparator(arr[start], arr[i]) > 0) {
      pivotIndex++;
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
    }
  }

  if (pivotIndex !== start)
    [arr[pivotIndex], arr[start]] = [arr[start], arr[pivotIndex]];

  return pivotIndex;
}

function quickSort(arr, comparator, start = 0, end = arr.length - 1) {
  if (start < end) {
    const pivotIndex = pivot(arr, comparator, start, end);

    quickSort(arr, comparator, start, pivotIndex - 1);
    quickSort(arr, comparator, pivotIndex + 1, end);
  }

  return arr;
}

var arr1 = [5, 4, 9, 10, 2, 20, 8, 7, 3];
var arr2 = [8, 4, 2, 5, 0, 10, 11, 12, 13, 16];
var arr3 = ['LilBub', 'Garfield', 'Heathcliff', 'Blue', 'Grumpy'];

function strLength(a, b) {
  return a.length - b.length;
}

console.log('3: ', pivot(arr1)); // 3
console.log('4: ', pivot(arr2)); // 4
console.log('1: ', pivot(arr3, strLength)); // 1

console.log(
  '[2, 3, 4]: ',
  arr1.slice(0, 3).sort((a, b) => a - b)
); // [2, 3, 4]
console.log(
  '[5, 7, 8, 9, 10, 20]: ',
  arr1.slice(3).sort((a, b) => a - b)
); // [5, 7, 8, 9, 10, 20]

console.log(
  '[0, 2, 4, 5]: ',
  arr2.slice(0, 4).sort((a, b) => a - b)
); // [0, 2, 4, 5]
console.log(
  '[8, 10, 11, 12, 13, 16]: ',
  arr2.slice(4).sort((a, b) => a - b)
); // [8, 10, 11, 12, 13, 16]

console.log('["Blue"]: ', arr3.slice(0, 1).sort(strLength)); // ["Blue"]
console.log(
  '["LilBub", "Grumpy", "Garfield", "Heathcliff"]: ',
  arr3.slice(1).sort(strLength)
); // ["LilBub", "Grumpy", "Garfield", "Heathcliff"]
