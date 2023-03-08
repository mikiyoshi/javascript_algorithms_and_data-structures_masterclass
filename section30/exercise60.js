/*
Binary Search Tree - insert Exercise

Write a function on the BinarySearchTree class

insert - accepts a value and inserts it into the BST in the correct position. The function should return the binary search tree. 
BinarySearchTreeクラスの関数を記述する。

insert - 値を受け取り、それをBSTの正しい位置に挿入します。この関数は、バイナリサーチツリーを返す必要があります。



    var binarySearchTree = new BinarySearchTree();
    binarySearchTree.insert(15);
    binarySearchTree.insert(20);
    binarySearchTree.insert(10);
    binarySearchTree.insert(12);
    binarySearchTree.root.value // 15
    binarySearchTree.root.right.value // 20
    binarySearchTree.root.left.right.value // 12
     
    var binarySearchTree = new BinarySearchTree();
    binarySearchTree
        .insert(15)
        .insert(20)
        .insert(10)
        .insert(12);
    binarySearchTree.root.value // 15
    binarySearchTree.root.right.value // 20
    binarySearchTree.root.left.right.value // 12
*/
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
}

var binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(15);
binarySearchTree.insert(20);
binarySearchTree.insert(10);
binarySearchTree.insert(12);
console.log('15: ', binarySearchTree.root.value); // 15
console.log('20: ', binarySearchTree.root.right.value); // 20
console.log('12: ', binarySearchTree.root.left.right.value); // 12

var binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(15).insert(20).insert(10).insert(12);
console.log('15: ', binarySearchTree.root.value); // 15
console.log('20: ', binarySearchTree.root.right.value); // 20
console.log('12: ', binarySearchTree.root.left.right.value); // 12
