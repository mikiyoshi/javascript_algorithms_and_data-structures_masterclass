/*

sumRange with the call stack

function sumRange(num){
   if(num === 1) return 1; 
   return num + sumRange(num-1);
}

sumRange(5)
================================

call stack には下の順序でデータが溜まって、最後まで溜まると sumRange(1) から処理されて sumRange(5) で終わる
sumRange(5)
sumRange(4)
sumRange(3)
sumRange(2)
sumRange(1)

*/
function takeShower() {
  return 'Showering!';
}

function eatBreakfast() {
  let meal = cookFood();
  return `Eating ${meal}`;
}

function cookFood() {
  let items = ['Oatmeal', 'Eggs', 'Protein Shake'];
  return items[Math.floor(Math.random() * items.length)];
}
function wakeUp() {
  takeShower();
  eatBreakfast();
  console.log('Ok ready to go to work!');
}

// wakeUp() の左の数値に印をつけて、　=> のボタンで処理を進めると、Call Stack に処理がどんどん溜まる
wakeUp();
