/*
Insertion Sort

Implement insertionSort  . Given an array, both algorithms will sort the values in the array. The functions take 2 parameters: an array and an optional comparator function. The comparator function is a callback that will take two values from the array to be compared. The function returns a negative value if the first value is less than the second, a positive value if the first value is greater than the second, and 0 if both values are equal. The default comparator you provide should assume that the two parameters are numbers and that we are sorting the values from smallest to largest.

Insertion Sort

Here's some guidance for how insertion sort should work:

    Start by picking the second element in the array (we will assume the first element is the start of the "sorted" portion)
    Now compare the second element with the one before it and swap if necessary.
    Continue to the next element and if it is in the incorrect order, iterate through the sorted portion to place the element in the correct place.
    Repeat until the array is sorted.Implement insertion sort. Your function should accept an array and return an array of sorted values. 
insertionSort を実装する。配列が与えられたとき、どちらのアルゴリズムも配列内の値をソートします。この関数は、配列とオプションのコンパレータ関数という2つのパラメータを受け取ります。コンパレータ関数はコールバックで、配列から2つの値を受け取り、比較します。この関数は、最初の値が2番目の値より小さい場合は負の値を、最初の値が2番目の値より大きい場合は正の値を、そして両方の値が等しい場合は0を返します。提供するデフォルトのコンパレータは、2つのパラメータが数値であり、値を小さいものから大きいものへとソートすることを想定しているはずです。

挿入ソート

ここでは、挿入ソートがどのように機能するかについて、いくつかのガイダンスを示します。

    配列の2番目の要素を選ぶことから始めます（ここでは、1番目の要素が「ソート」された部分の開始点であると仮定します）。
    ここで、2番目の要素とその前の要素を比較し、必要であれば入れ替えます。
    次の要素に進み、順序が正しくない場合は、ソートされた部分を繰り返し、正しい場所に要素を配置します。
    配列がソートされるまで繰り返します。挿入ソートの実装 この関数は、配列を受け取り、ソートされた値の配列を返す必要があります。



Examples

    insertionSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
    insertionSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
    insertionSort([1, 2, 3]); // [1, 2, 3]
    insertionSort([]);
     
    var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
    insertionSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
     
    var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
     
    function strComp(a, b) {
      if (a < b) { return -1;}
      else if (a > b) { return 1;}
      return 0;
    }
     
    insertionSort(kitties, strComp); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]
     
    var moarKittyData = [{
      name: "LilBub",
      age: 7
    }, {
      name: "Garfield",
      age: 40
    }, {
      name: "Heathcliff",
      age: 45
    }, {
      name: "Blue",
      age: 1
    }, {
      name: "Grumpy",
      age: 6
    }];
     
    function oldestToYoungest(a, b) {
      return b.age - a.age;
    }
     
    insertionSort(moarKittyData, oldestToYoungest); // sorted by age in descending order
     
*/
// function insertionSort() {
// }
function insertionSort(arr, comparator) {
  // add whatever parameters you deem necessary - good luck!
  if (typeof comparator !== 'function') {
    comparator = (a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    };
  }

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (comparator(arr[j], arr[j - 1]) < 0)
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      else break;
    }
  }

  return arr;
}

console.log('[4, 7, 9, 10, 12, 20]: ', insertionSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
console.log('[-10, 0, 4, 7]: ', insertionSort([0, -10, 7, 4])); // [-10, 0, 4, 7]
console.log('[1, 2, 3]: ', insertionSort([1, 2, 3])); // [1, 2, 3]
console.log('[]: ', insertionSort([]));

var nums = [
  4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342,
  32,
];
console.log(
  '[2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]: ',
  insertionSort(nums)
); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]

var kitties = ['LilBub', 'Garfield', 'Heathcliff', 'Blue', 'Grumpy'];

function strComp(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}

console.log(
  '["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]: ',
  insertionSort(kitties, strComp)
); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]

var moarKittyData = [
  {
    name: 'LilBub',
    age: 7,
  },
  {
    name: 'Garfield',
    age: 40,
  },
  {
    name: 'Heathcliff',
    age: 45,
  },
  {
    name: 'Blue',
    age: 1,
  },
  {
    name: 'Grumpy',
    age: 6,
  },
];

function oldestToYoungest(a, b) {
  return b.age - a.age;
}

console.log(
  'sorted by age in descending order: ',
  insertionSort(moarKittyData, oldestToYoungest)
); // sorted by age in descending order
