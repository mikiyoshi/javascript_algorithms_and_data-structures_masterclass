/*
Selection Sort

Selection Sort

Here's some guidance for how selection sort should work:

    Assign the first element to be the smallest value (this is called the minimum). It does not matter right now if this actually the smallest value in the array.
    Compare this item to the next item in the array until you find a smaller number.
    If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
    If the "minimum" is not the value (index) you initially began with, swap the two values. You will now see that the beginning of the array is in the correct order (similar to how after the first iteration of bubble sort, we know the rightmost element is in its correct place).
    Repeat this with the next element until the array is sorted. 

This algorithm has a O(n^2) time complexity. You can read more about them here: https://www.rithmschool.com/courses/javascript-computer-science-fundamentals/basic-sorting-algorithms
ここでは、選択ソートがどのように機能すべきかのガイダンスを示します。

    最初の要素を最小の値とする（これを最小値と呼ぶ）。これが実際に配列の中で最小の値であるかどうかは、今は問題ではありません。
    この値を配列の次の値と比較し、より小さい値が見つかるまで比較する。
    より小さい数値が見つかったら、その小さい数値を新しい「最小値」に指定し、配列の最後まで続けます。
    もし「最小値」が最初に指定した値（インデックス）でない場合は、2つの値を入れ替えてください。これで、配列の先頭が正しい順番に並んでいることがわかります（バブルソートの最初の繰り返しで、右端の要素が正しい場所にあることがわかるのと同じです）。
    配列がソートされるまで、次の要素でこれを繰り返す。

このアルゴリズムは、O(n^2)の時間複雑性を持っています。詳しくはこちらでご覧いただけます： https://www.rithmschool.com/courses/javascript-computer-science-fundamentals/basic-sorting-algorithms



Examples

    selectionSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
    selectionSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
    selectionSort([1, 2, 3]); // [1, 2, 3]
    selectionSort([]);
     
    var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
    selectionSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
     
    var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
     
    function strComp(a, b) {
      if (a < b) { return -1;}
      else if (a > b) { return 1;}
      return 0;
    }
     
    selectionSort(kitties, strComp); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]
     
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
     
    selectionSort(moarKittyData, oldestToYoungest); // sorted by age in descending order
*/

function selectionSort(arr, comparator) {
  // add whatever parameters you deem necessary - good luck!
  if (typeof comparator !== 'function') {
    comparator = (a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    };
  }

  let min;

  for (let i = 0; i < arr.length; i++) {
    min = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (comparator(arr[min], arr[j]) > 0) min = j;
    }

    if (min !== i) [arr[i], arr[min]] = [arr[min], arr[i]];
  }

  return arr;
}

console.log('[4, 7, 9, 10, 12, 20]: ', selectionSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
console.log('[-10, 0, 4, 7]: ', selectionSort([0, -10, 7, 4])); // [-10, 0, 4, 7]
console.log('[1, 2, 3]: ', selectionSort([1, 2, 3])); // [1, 2, 3]
console.log('[]: ', selectionSort([]));

var nums = [
  4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342,
  32,
];
console.log(
  '[2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]: ',
  selectionSort(nums)
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
  selectionSort(kitties, strComp)
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
  selectionSort(moarKittyData, oldestToYoungest)
); // sorted by age in descending order
