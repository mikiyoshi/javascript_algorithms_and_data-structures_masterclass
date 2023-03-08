/*

THERE IS MORE THAN ONE WAY OF IMPLEMENTING A STACK
スタックの実装方法は1つではありません。

ARRAY IMPLEMENTATION


LINKED LIST IMPLEMENTATION



A STACK CLASS

class Stack {
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
var stak = [];
stack.push('google');
stack.push('youtube');
stack.push('instagram');
console.log('stack: ', stack);
stack.pop();
stack.unshift('create new file');
stack.shift();
