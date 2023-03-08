/*

BUILDING A QUEUE WITH AN ARRAY



A Queue Class

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
}

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

*/

// console に直接記入
var q = [];
q.push('First');
q.push('Second');
q.push('Third');
console.log('q: ', q);
q.shift();
q.shift();
q.shift();
console.log('q: ', q);
q.unshift('First');
q.unshift('Second');
q.unshift('Third');
console.log('q: ', q);
