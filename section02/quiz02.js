// Big O Time Complexity Quiz 2

// Question 1:
// Determine the time complexity for the following function
// 次の関数の時間 複雑性を求めよ。

function logUpTo(n) {
  for (var i = 1; i <= n; i++) {
    console.log(i);
  }
}

// O(n)

// Question 2:
// Determine the time complexity for the following function
// 次の関数の時間 複雑性を求めよ。

function logAtMost10(n) {
  for (var i = 1; i <= Math.min(n, 10); i++) {
    console.log(i);
  }
}

// O(1)
// いつも答えは 10

// Question 3:
// Determine the time complexity for the following function
// 次の関数の時間複雑性を求めよ。

function logAtLeast10(n) {
  for (var i = 1; i <= Math.max(n, 10); i++) {
    console.log(i);
  }
}

// O(n)
// 答えは n が増えるほど増えるから

// Question 4:
// Determine the time complexity for the following function
// 次の関数の時間複雑性を求めよ。

function onlyElementsAtEvenIndex(array) {
  var newArray = Array(Math.ceil(array.length / 2));
  for (var i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      newArray[i / 2] = array[i];
    }
  }
  return newArray;
}

// O(n)

// Question 5:
// Determine the time complexity for the following function
// 次の関数の時間複雑性を求めよ。

function subtotals(array) {
  var subtotalArray = Array(array.length);
  for (var i = 0; i < array.length; i++) {
    var subtotal = 0;
    for (var j = 0; j <= i; j++) {
      subtotal += array[j];
    }
    subtotalArray[i] = subtotal;
  }
  return subtotalArray;
}

// O(n^2)
