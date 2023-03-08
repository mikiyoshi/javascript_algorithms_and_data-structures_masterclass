/*

BubbleSort Pseudocode

Let's visualize this!

    Start looping from with a variable called i the end of the array towards the beginning
    Start an inner loop with a variable called j from the beginning until i - 1
    If arr[j] is greater than arr[j+1], swap those two values!
    Return the sorted array





*/
// UNOPTIMIZED VERSION OF BUBBLE SORT
function bubbleSort(arr) {
  for (var i = arr.length; i > 0; i--) {
    for (var j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    console.log('One Pass Complete!');
  }
  return arr;
}
console.log('bubbleSort: ', bubbleSort([37, 45, 29, 8]));
console.log('bubbleSort: ', bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));
// [ 37, 45, 29, 8 ] 37 45
// [ 37, 45, 29, 8 ] 45 29
// [ 37, 29, 45, 8 ] 45 8
// One Pass Complete!
// [ 37, 29, 8, 45 ] 37 29
// [ 29, 37, 8, 45 ] 37 8
// One Pass Complete!
// [ 29, 8, 37, 45 ] 29 8
// One Pass Complete!
// One Pass Complete!
// bubbleSort:  [ 8, 29, 37, 45 ]
// [ 8, 1, 2, 3, 4, 5, 6, 7 ] 8 1
// [ 1, 8, 2, 3, 4, 5, 6, 7 ] 8 2
// [ 1, 2, 8, 3, 4, 5, 6, 7 ] 8 3
// [ 1, 2, 3, 8, 4, 5, 6, 7 ] 8 4
// [ 1, 2, 3, 4, 8, 5, 6, 7 ] 8 5
// [ 1, 2, 3, 4, 5, 8, 6, 7 ] 8 6
// [ 1, 2, 3, 4, 5, 6, 8, 7 ] 8 7
// One Pass Complete!
// [ 1, 2, 3, 4, 5, 6, 7, 8 ] 1 2
// [ 1, 2, 3, 4, 5, 6, 7, 8 ] 2 3
// [ 1, 2, 3, 4, 5, 6, 7, 8 ] 3 4
// [ 1, 2, 3, 4, 5, 6, 7, 8 ] 4 5
// [ 1, 2, 3, 4, 5, 6, 7, 8 ] 5 6
// [ 1, 2, 3, 4, 5, 6, 7, 8 ] 6 7
// One Pass Complete!
// [ 1, 2, 3, 4, 5, 6, 7, 8 ] 1 2
// [ 1, 2, 3, 4, 5, 6, 7, 8 ] 2 3
// [ 1, 2, 3, 4, 5, 6, 7, 8 ] 3 4
// [ 1, 2, 3, 4, 5, 6, 7, 8 ] 4 5
// [ 1, 2, 3, 4, 5, 6, 7, 8 ] 5 6
// One Pass Complete!
// [ 1, 2, 3, 4, 5, 6, 7, 8 ] 1 2
// [ 1, 2, 3, 4, 5, 6, 7, 8 ] 2 3
// [ 1, 2, 3, 4, 5, 6, 7, 8 ] 3 4
// [ 1, 2, 3, 4, 5, 6, 7, 8 ] 4 5
// One Pass Complete!
// [ 1, 2, 3, 4, 5, 6, 7, 8 ] 1 2
// [ 1, 2, 3, 4, 5, 6, 7, 8 ] 2 3
// [ 1, 2, 3, 4, 5, 6, 7, 8 ] 3 4
// One Pass Complete!
// [ 1, 2, 3, 4, 5, 6, 7, 8 ] 1 2
// [ 1, 2, 3, 4, 5, 6, 7, 8 ] 2 3
// One Pass Complete!
// [ 1, 2, 3, 4, 5, 6, 7, 8 ] 1 2
// One Pass Complete!
// One Pass Complete!
// bubbleSort:  [ 1, 2, 3, 4, 5, 6, 7, 8 ]

// ES2015 Version
function bubbleSort2(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

console.log('bubbleSort2: ', bubbleSort2([37, 45, 29, 8]));
console.log('bubbleSort2: ', bubbleSort2([8, 1, 2, 3, 4, 5, 6, 7]));
// bubbleSort2:  [ 8, 29, 37, 45 ]
// bubbleSort2:  [ 1, 2, 3, 4, 5, 6, 7, 8 ]
