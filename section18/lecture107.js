/*

Instance Methods

class Student {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
}

let firstStudent = new Student("Colt", "Steele");

firstStudent.fullName() // "Colt Steele"





*/
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
