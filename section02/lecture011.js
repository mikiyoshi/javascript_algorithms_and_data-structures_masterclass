function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
console.log('sum: ', sum([1, 2, 3]));
// sum:  6

function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}
console.log('double: ', double([1, 2, 3]));
// double:  [ 2, 4, 6 ]
