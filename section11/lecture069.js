/*

JavaScript has a sort method...

Yes, it does!

...but it doesn't always work the way you expect.
JavaScriptにはソートメソッドがあり...
はい、そうです!

...しかし、いつも期待通りにいくとは限りません。

[ "Steele", "Colt", "Data Structures", "Algorithms" ].sort();
// [ "Algorithms", "Colt", "Data Structures", "Steele" ]

[ 6, 4, 15, 10 ].sort();
// [ 10, 15, 4, 6 ]



Telling JavaScript how to sort

    The built-in sort method accepts an optional comparator function
    You can use this comparator function to tell JavaScript how you want it to sort
    The comparator looks at pairs of elements (a and b), determines their sort order based on the return value

    If it returns a negative number, a should come before b
    If it returns a positive number, a should come after b,
    If it returns 0, a and b are the same as far as the sort is concerned
JavaScriptに並べ替えを指示する
組み込みのソートメソッドには、オプションでコンパレータ関数を指定することができます。
このコンパレータ関数を使って、JavaScriptにどのようにソートさせたいかを指示することができます。
コンパレータは要素のペア（aとb）を見て、戻り値に基づいてそれらのソート順を決定します。
負の数を返す場合、aは bの前に来るはずです。
もし正の数を返すなら、aは bの後に来るはずです。
0を返した場合、ソートに関する限り、aと bは同じである

Telling JavaScript how to sort

Examples

function numberCompare(num1, num2) {
  return num1 - num2;
}

[ 6, 4, 15, 10 ].sort(numberCompare);
// [ 4, 6, 10, 15 ]

function compareByLen(str1, str2) {
  return str1.length - str2.length;
}

[ "Steele", "Colt", "Data Structures", "Algorithms" ]
  .sort(compareByLen);
// [ "Colt", "Steele", "Algorithms", "Data Structures" ]




Before we sort, we must swap!

// ES5
function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

// ES2015
const swap = (arr, idx1, idx2) => {
  [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]];
}



BubbleSort

A sorting algorithm where the largest values bubble up to the top!

[ 5, 3, 4, 1, 2 ]

[ 3, 5, 4, 1, 2 ]

[ 3, 4, 5, 1, 2 ]

[ 3, 4, 1, 5, 2 ]

[ 3, 4, 1, 2, 5 ]
5 is now in its sorted position!




BubbleSort Pseudocode

Let's visualize this!

    Start looping from with a variable called i the end of the array towards the beginning
    Start an inner loop with a variable called j from the beginning until i - 1
    If arr[j] is greater than arr[j+1], swap those two values!
    Return the sorted array


Selection Sort

Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position

[ 5, 3, 4, 1, 2 ]

[ 5, 3, 4, 1, 2 ]

[ 5, 3, 4, 1, 2 ]

[ 5, 3, 4, 1, 2 ]

[ 1, 3, 4, 5, 2 ]

1 is now in its sorted position!




Selection Sort Pseudocode

Let's visualize this!

    Store the first element as the smallest value you've seen so far.
    Compare this item to the next item in the array until you find a smaller number.
    If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
    If the "minimum" is not the value (index) you initially began with, swap the two values.
    Repeat this with the next element until the array is sorted.


Insertion Sort

Builds up the sort by gradually creating a larger left half which is always sorted

[ 5, 3, 4, 1, 2 ]

[ 3, 5, 4, 1, 2 ]

[ 3, 4, 5, 1, 2 ]

[ 1, 3, 4, 5, 2 ]

[ 1, 2, 3, 4, 5 ]





Insertion Sort Pseudocode

Let's visualize this!

    Start by picking the second element in the array
    Now compare the second element with the one before it and swap if necessary.
    Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place.
    Repeat until the array is sorted.




Big O of Sorting Algorithms
Algorithm 	Time Complexity (Best) 	Time Complexity (Average) 	Time Complexity (Worst) 	Space Complexity
Bubble Sort 	O(n) 	O(n  ) 	O(n  ) 	O(1)
Insertion Sort 	O(n) 	O(n  ) 	O(n  ) 	O(1)
Selection Sort 	O(n  ) 	O(n  ) 	O(n  ) 	O(1)






Recap

    Sorting is fundamental!
    Bubble sort, selection sort, and insertion sort are all roughly equivalent
    All have average time complexities that are quadratic
    We can do better...but we need more complex algorithms!


*/

// JS の sort() は数字の比較はできても、文字の並び替えはできない
function numberCompare(num1, num2) {
  return num1 - num2;
}

console.log([6, 4, 15, 10].sort(numberCompare));
// [ 4, 6, 10, 15 ]

function compareByLen(str1, str2) {
  return str1.length - str2.length;
}

console.log(
  ['Steele', 'Colt', 'Data Structures', 'Algorithms'].sort(compareByLen)
);
// [ "Colt", "Steele", "Algorithms", "Data Structures" ]
