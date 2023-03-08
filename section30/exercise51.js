/*
Quick Sort

The next sorting algorithm we'll consider is Quick Sort. Unfortunately, quicksort is not the most intuitive of algorithms and has a wide range of implementations. It may help to check out this great video from Computerphile for a quick introduction to how quicksort works:https://www.youtube.com/watch?v=XE4VP_8Y0BU

The algorithm is as follows:

    Pick an element in the array and designate it as the "pivot". While there are quite a few options for choosing the pivot. We'll make things simple to start, and will choose the pivot as the first element. This is not an ideal choice, but it makes the algorithm easier to understand for now.
    Next, compare every other element in the array to the pivot.
    If it's less than the pivot value, move it to the left of the pivot.
    If it's greater, move it to the right.
    Once you have finished comparing, the pivot will be in the right place.
    Next, recursively call quicksort again with the left and right halves from the pivot until the array is sorted. 

It's easiest to implement Quick Sort with the aid of your pivot  helper from the earlier exercise. This function is responsible for taking an array, setting the pivot value, and mutating the array so that all values less than the pivot wind up to the left of it, and all values greater than the pivot wind up to the right of it. It's also helpful if this helper returns the index of where the pivot value winds up.

The default comparator you provide should assume that the two parameters are numbers and that we are sorting the values from smallest to largest.
次に考えるソートアルゴリズムは、クイックソートです。
残念ながら、クイックソートは最も直感的なアルゴリズムではなく、実装の幅も広いです。
Computerphileの素晴らしいビデオでクイックソートの仕組みを簡単に紹介していますので、
ご覧になってみてください： https://www.youtube.com/watch?v=XE4VP_8Y0BU

アルゴリズムは次の通りです。

    配列の中から1つの要素を選び、それを「ピボット」とする。ピボットの選択には多くの選択肢があります。ここでは単純に、ピボットを最初の要素にすることにします。これは理想的な選択ではありませんが、とりあえずアルゴリズムを理解しやすくするためです。
    次に、配列の他のすべての要素とピボットを比較します。
    ピボットの値より小さければ、ピボットの左側に移動します。
    大きい場合は、右側に移動します。
    比較が終わると、ピボットは正しい位置にあります。
    次に、ピボットから左半分と右半分を使用して、配列がソートされるまで、再び再帰的にクイックソートを呼び出します。

クイックソートの実装には、先ほどのピボット・ヘルパーを使用するのが最も簡単です。この関数は、配列を受け取り、ピボット値を設定し、ピボットより小さい値が左に、ピボットより大きい値が右に来るように配列を変化させる役割を担っています。このヘルパーがピボット値のインデックスを返すと便利です。

提供するデフォルトのコンパレータは、2 つのパラメータが数値であり、値を小さいものから大きいものへとソートすることを想定する必要があります。



Examples

    quickSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
    quickSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
    quickSort([1, 2, 3]); // [1, 2, 3]
    quickSort([]);
     
    var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
    quickSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
     
    var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
     
    function strComp(a, b) {
      if (a < b) { return -1;}
      else if (a > b) { return 1;}
      return 0;
    }
     
    quickSort(kitties, strComp); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]
     
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
     
    quickSort(moarKittyData, oldestToYoungest); // sorted by age in descending order
*/
// function pivot(arr, comparator, start = 0, end = arr.length - 1) {
//   // good luck!
// }

// function quickSort(arr, comparator) {
//   // good luck!
// }

function pivot(arr, comparator, start = 0, end = arr.length - 1) {
  // good luck!

  if (typeof comparator !== 'function') {
    comparator = function (a, b) {
      return a - b;
    };
  }

  var pivotIndex = start;

  var swapIndex = start;

  for (let i = start + 1; i <= end; i++) {
    let result = comparator(arr[pivotIndex], arr[i]);

    if (result > 0) {
      swapIndex++;

      [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
    }
  }

  [arr[swapIndex], arr[pivotIndex]] = [arr[pivotIndex], arr[swapIndex]];

  //console.log(swapIndex);

  return swapIndex;
}

function quickSort(arr, comparator = null) {
  // good luck!
  function helper(arr, start, end) {
    if (start < end) {
      let pivotIndex = pivot(arr, comparator, start, end);

      helper(arr, start, pivotIndex);

      helper(arr, pivotIndex + 1, end);
    }
  }

  helper(arr, 0, arr.length - 1);

  // console.log(arr);

  return arr;
}

console.log('[4, 7, 9, 10, 12, 20]: ', quickSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
console.log('[-10, 0, 4, 7]: ', quickSort([0, -10, 7, 4])); // [-10, 0, 4, 7]
console.log('[1, 2, 3]: ', quickSort([1, 2, 3])); // [1, 2, 3]
console.log('[]: ', quickSort([]));

var nums = [
  4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342,
  32,
];
console.log(
  '[2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]: ',
  quickSort(nums)
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
  quickSort(kitties, strComp)
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
  quickSort(moarKittyData, oldestToYoungest)
); // sorted by age in descending order
