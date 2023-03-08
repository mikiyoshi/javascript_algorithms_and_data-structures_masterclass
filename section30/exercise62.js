/*
Binary Search Tree - DFS Exercise

Implement the following functions on the BinarySearchTree.prototype. insert has been implemented for you to help with testing.

DFSPreOrder

This function should search through each node in the binary search tree using pre-order depth first search and return an array containing each node's value.
BinarySearchTree.prototypeに以下の関数を実装する。なお、insertはテストに役立つように実装されている。

DFSPreOrder

この関数は、バイナリサーチツリーの各ノードをプレオーダー深さ優先探索で探索し、各ノードの値を含む配列を返す必要があります。




    var binarySearchTree = new BinarySearchTree();
    binarySearchTree
        .insert(15)
        .insert(20)
        .insert(10)
        .insert(12)
        .insert(1)
        .insert(5)
        .insert(50);
    binarySearchTree.DFSPreOrder() // [15, 10, 1, 5, 12, 20, 50]

DFSInOrder

This function should search through each node in the binary search tree using in-order depth first search and return an array containing each node's value.

    var binarySearchTree = new BinarySearchTree();
    binarySearchTree
        .insert(15)
        .insert(20)
        .insert(10)
        .insert(12)
        .insert(1)
        .insert(5)
        .insert(50);
    binarySearchTree.DFSInOrder() // [1, 5, 10, 12, 15, 20, 50]

DFSPostOrder

This function should search through each node in the binary search tree using post-order depth first search and return an array containing each node's value.

    var binarySearchTree = new BinarySearchTree();
    binarySearchTree
        .insert(15)
        .insert(20)
        .insert(10)
        .insert(12)
        .insert(1)
        .insert(5)
        .insert(50);
    binarySearchTree.DFSPostOrder() // [5, 1, 12, 10, 50, 20, 15]
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
  // depthFirstSearchPreOrder() {}
  // depthFirstSearchInOrder() {}
  // depthFirstSearchPostOrder() {}
  DFSPreOrder() {
    var data = [];
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
  DFSPostOrder() {
    var data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }
  DFSInOrder() {
    var data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
}

console.log(': ');
var binarySearchTree = new BinarySearchTree();
binarySearchTree
  .insert(15)
  .insert(20)
  .insert(10)
  .insert(12)
  .insert(1)
  .insert(5)
  .insert(50);
console.log('[15, 10, 1, 5, 12, 20, 50]: ', binarySearchTree.DFSPreOrder()); // [15, 10, 1, 5, 12, 20, 50]
console.log('[1, 5, 10, 12, 15, 20, 50]: ', binarySearchTree.DFSInOrder()); // [1, 5, 10, 12, 15, 20, 50]
console.log('[5, 1, 12, 10, 50, 20, 15]: ', binarySearchTree.DFSPostOrder()); // [5, 1, 12, 10, 50, 20, 15]
