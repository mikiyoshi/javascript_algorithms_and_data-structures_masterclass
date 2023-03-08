/*
BinarySearchTree - find

Implement the following functions on the `BinarySearchTree.prototype`. insert has been implemented for you to help with testing.

findIteratively

This function should find a node in a binary tree. It should return the node if found, otherwise return `undefined`. This should be solved using iteration or recursion. The tests for this method assume that insertIteratively has been implemented correctly.
BinarySearchTree.prototype`に以下の関数を実装する。テスト用にinsertを実装しておく。

findIteratively

この関数は、バイナリツリーからノードを見つけるものである。見つかればそのノードを返し、見つからなければ `undefined` を返す。これは、反復または再帰を使用して解決する必要があります。このメソッドのテストは、insertIterativelyが正しく実装されていることを前提としています。



    var binarySearchTree = new BinarySearchTree();
    binarySearchTree
        .insert(15)
        .insert(20)
        .insert(10)
        .insert(12);
    var foundNode = binarySearchTree.find(20);
    foundNode.value // 20
    foundNode.left // null
    foundNode.right // null
     
    var binarySearchTree = new BinarySearchTree();
     
    binarySearchTree
        .insert(15)
        .insert(20)
        .insert(10)
        .insert(12);
    var foundNode = binarySearchTree.find(120);
    foundNode // undefined
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
    if (this.root === null) {
      this.root = new Node(value);
      return this;
    } else {
      var current = this.root;
      while (true) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = new Node(value);
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = new Node(value);
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  find(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
}

var binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(15).insert(20).insert(10).insert(12);
var foundNode = binarySearchTree.find(20);
console.log('20: ', foundNode.value); // 20
console.log('null: ', foundNode.left); // null
console.log('null ', foundNode.right); // null

var binarySearchTree = new BinarySearchTree();

binarySearchTree.insert(15).insert(20).insert(10).insert(12);
var foundNode = binarySearchTree.find(120);
console.log('undefined: ', foundNode); // undefined
