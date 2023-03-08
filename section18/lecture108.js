/*

Class Methods

class Student {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
    
    static enrollStudents(...students){
        // maybe send an email here
    }
}

let firstStudent = new Student("Colt", "Steele");
let secondStudent = new Student("Blue", "Steele");

Student.enrollStudents([firstStudent, secondStudent])





How we'll be using classes

class DataStructure(){
    constructor(){
        // what default properties should it have?
    }
    someInstanceMethod(){
        // what should each object created from this class be able to do?
    }
}

We will almost never be using static methods
クラスをどのように使うか
静的メソッドを使用することはほとんどないでしょう

コンストラクタと インスタンスメソッドは 、かなり使うことになるでしょう




One gotcha with `this`

Inside all of our instance methods and constructor, the keyword `this` refers to the object created from that class (also known as an instance)
この `this`で1つ問題が発生 しました。
すべてのインスタンス メソッドとコンストラクタの内部では、キーワード `this` はそのクラスから作成されたオブジェクト (インスタンスとも呼ばれる) を指します。




Recap

    Classes are blueprints that when created make objects known as instances
    Classes are created with the new keyword
    The constructor function is a special function that gets run when the class is instantiated
    Instance methods can be added to classes similar to methods in objects
    Class methods can be added using the static keyword
まとめ
クラスは、作成時にインスタンスとして 知られるオブジェクトを作成する青写真です。
クラスは新しいキーワードで作成されます
コンストラクタ関数は、クラスがインスタンス化されるときに実行される特別な関数です。
オブジェクトのメソッドと同様に、クラスにインスタンスメソッドを追加することができる
クラスメソッドは、static キーワードを使用して追加することができます。
*/

// ========================================================
// 108Classes_Basics
// ========================================================
class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
    this.scores = [];
  }
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
  markLate() {
    this.tardies += 1;
    if (this.tardies >= 3) {
      return 'YOU ARE EXPELLED!!!!';
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  calculateAverage() {
    let sum = this.scores.reduce(function (a, b) {
      return a + b;
    });
    return sum / this.scores.length;
  }
  static EnrollStudents() {
    return 'ENROLLING STUDENTS!';
  }
}

let firstStudent = new Student('Colt', 'Steele', 1);
let secondStudent = new Student('Blue', 'Steele', 2);

console.log('fullName: ', firstStudent.fullName()); // "Colt Steele"
// fullName:  Your full name is Colt Steele
console.log('markLate: ', firstStudent.markLate());
// markLate:  Colt Steele has been late 1 times
console.log('markLate: ', firstStudent.markLate());
// markLate:  Colt Steele has been late 2 times
console.log('markLate: ', firstStudent.markLate());
// markLate:  YOU ARE EXPELLED!!!!
console.log('addScore: ', secondStudent.addScore(92));
// addScore:  [ 92 ]
console.log('addScore: ', secondStudent.addScore(87));
// addScore:  [ 92, 87 ]
console.log('scores: ', secondStudent.scores);
// scores:  [ 92, 87 ]
console.log('calculateAverage: ', secondStudent.calculateAverage());
// calculateAverage:  89.5
console.log('EnrollStudents: ', Student.EnrollStudents());
// EnrollStudents:  ENROLLING STUDENTS!

// ========================================================
// 108Classes_Point
// ========================================================

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    // Math.hypot() 各引数を二乗した総和の平方根 // Math.hypot(3, 4) = (3 * 3 + 4 * 4)^n = (25)^n = 5^5 = 5
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/hypot
    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2)); // 7.0710678118654755
// 7.0710678118654755
