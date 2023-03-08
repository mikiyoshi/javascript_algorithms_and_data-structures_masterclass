/*

PROBLEM SOLVING

    Understand the Problem
    Explore Concrete Examples
    Break It Down
    Solve/Simplify
    
Write a function which takes in a string and returns counts of each character in the string.


BREAK IT DOWN

Explicitly write out the steps you need to take.

This forces you to think about the code you'll write before you write it, and helps you catch any lingering conceptual issues or misunderstandings before you dive in and have to worry about details (e.g. language syntax) as well.

*/

charCount('aaaa');
charCount('hello');
charCount('Your PIN number is 1234!');

function charCount(str) {
  // make object to return at end
  // loop over string, for each character ...
  //// If the char is a number/letter AND is a key in object, add one to count
  //// if the char is a number/letter AND not in object, add it to object and set value to 1
  //// if char is something else (space, period, etc.) don't do anything
  // return object at end
  //
  // 最後に返すオブジェクトを作成する
  // 文字列をループし、それぞれの文字について ...
  //// もし文字が数字/文字であり、かつオブジェクトのキーであれば、カウントに1を加える。
  //// もし文字が数字/文字で、かつオブジェクトにない場合、オブジェクトに追加して値を 1 に設定する。
  //// char が他のもの（スペース、ピリオドなど）であれば、何もしない。
  // 最後にオブジェクトを返す
}
