/*

Two essential parts of a recursive function!

    Base Case
    Different Input


*/
// Our first recursive function
function countDown(num) {
  if (num <= 0) {
    console.log('All done!');
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

console.log('countDown: ', countDown(5));

function countDown2(num) {
  for (let i = num; i > 0; i--) {
    console.log(i);
  }
  console.log('All done!');
}

console.log('countDown2: ', countDown2(5));
