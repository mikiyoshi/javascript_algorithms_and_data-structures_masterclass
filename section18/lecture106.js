/*

THE SYNTAX

class Student {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

The method to create new objects must be called constructor

The class keyword creates a constant, so you can not redefine it. Watch out for the syntax as well!
新しいオブジェクトを作成するメソッドは、コンストラクタと呼ばれなければならない

classキーワードは定数を作成するので、再定義はできません。構文にも気をつけましょう



Creating objects from classes

We use the new keyword
クラスからオブジェクトを作成する
を使用しています。


class Student {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let firstStudent = new Student("Colt", "Steele");
let secondStudent = new Student("Blue", "Steele");






*/
class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
  }
}

let firstStudent = new Student('Colt', 'Steele', 1);
let secondStudent = new Student('Blue', 'Steele', 2);

console.log('firstName: ', firstStudent.firstName);
console.log('grade: ', firstStudent.grade);
