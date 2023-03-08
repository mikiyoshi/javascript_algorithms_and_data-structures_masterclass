/*
Merge Sort

Merge Sort

Implement the merge sort algorithm. Given an array, this algorithm will sort the values in the array. The functions take 2 parameters: an array and an optional comparator function.

The comparator function is a callback that will take two values from the array to be compared. The function returns a negative value if the first value is less than the second, a positive value if the first value is greater than the second, and 0 if both values are equal.

The default comparator you provide should assume that the two parameters are numbers and that we are sorting the values from smallest to largest.

Here's some guidance for how merge sort should work:

    Break up the array into halves until you can compare one value with another
    Once you have smaller sorted arrays, merge those arrays with other sorted pairs until you are back at the full length of the array
    Once the array has been merged back together, return the merged (and sorted!) array 

In order to implement this function, you'll also need to implement a merge function that takes in two sorted arrays and a comparator and returns a new sorted array. You implemented this function in the previous exercise, so copy and paste that code here.

You can read more merge sort here: https://www.rithmschool.com/courses/javascript-computer-science-fundamentals/intermediate-sorting-algorithms
マージソートアルゴリズムを実装する。配列が与えられたとき、このアルゴリズムは配列内の値をソートする。この関数は、配列とオプションのコンパレータ関数という2つのパラメータを受け取ります。

コンパレータ関数はコールバックで、配列から2つの値を受け取り、比較します。この関数は、最初の値が2番目の値より小さい場合は負の値を、最初の値が2番目の値より大きい場合は正の値を、そして両方の値が等しい場合は0を返します。

提供するデフォルトのコンパレータは、2つのパラメータが数値であり、値を小さいものから大きいものへとソートすることを想定しているはずです。

マージソートがどのように機能すべきかのガイダンスを以下に示します。

    1つの値と別の値を比較できるようになるまで、配列を半分に分割する。
    小さなソート配列ができたら、その配列を他のソートされたペアとマージして、配列の全長まで戻す
    配列の結合が完了したら、結合された（ソートされた！）配列を返します。

この関数を実装するためには、2つのソートされた配列とコンパレータを取り込み、新しいソートされた配列を返すマージ関数も実装する必要があります。この関数は前回の演習で実装しましたので、そのコードをここにコピー＆ペーストしてください。

マージソートについては、こちらで詳しく解説しています： https://www.rithmschool.com/courses/javascript-computer-science-fundamentals/intermediate-sorting-algorithms




Examples

    mergeSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
    mergeSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
    mergeSort([1, 2, 3]); // [1, 2, 3]
    mergeSort([]);
     
    var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
    mergeSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
     
    var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
     
    function strComp(a, b) {
      if (a < b) { return -1;}
      else if (a > b) { return 1;}
      return 0;
    }
     
    mergeSort(kitties, strComp); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]
     
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
     
    mergeSort(moarKittyData, oldestToYoungest); // sorted by age in descending order
*/

// simple way using recusion
function mergeSort(arr) {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length <= 1) return arr;

  const middle = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));

  return merge(left, right);
}

function mergeSort(arr, comparator) {
  if (arr.length <= 1) return arr;

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(
    mergeSort(left, comparator),
    mergeSort(right, comparator),
    comparator
  );
}

// Merge two arrays intially
function merge(left, right, comparator) {
  // add whatever parameters you deem necessary - good luck!
  if (typeof comparator !== 'function') {
    comparator = (a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    };
  }
  const resultArr = [];
  let leftCount = 0;
  let rightCount = 0;

  while (leftCount < left.length && rightCount < right.length) {
    if (comparator(left[leftCount], right[rightCount]) < 0) {
      resultArr.push(left[leftCount]);
      leftCount++;
    } else {
      resultArr.push(right[rightCount]);
      rightCount++;
    }
  }

  while (leftCount < left.length) {
    resultArr.push(left[leftCount]);
    leftCount++;
  }

  while (rightCount < right.length) {
    resultArr.push(right[rightCount]);
    rightCount++;
  }

  return resultArr;
}

console.log('[4, 7, 9, 10, 12, 20]: ', mergeSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
console.log('[-10, 0, 4, 7]: ', mergeSort([0, -10, 7, 4])); // [-10, 0, 4, 7]
console.log('[1, 2, 3]: ', mergeSort([1, 2, 3])); // [1, 2, 3]
console.log('[]: ', mergeSort([]));

var nums = [
  4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342,
  32,
];
console.log(
  '[2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]: ',
  mergeSort(nums)
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
  mergeSort(kitties, strComp)
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
  mergeSort(moarKittyData, oldestToYoungest)
); // sorted by age in descending order
