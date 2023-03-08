/*
Binary Search Tree Exercise - Find 2nd largest node

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
    // only accept numbers....watch out since NaN is typeof number!
    if (typeof value === 'number' && !isNaN(value)) {
      // if there is nothing in the tree, start it off with a new node!
      if (this.root === null) {
        this.root = new Node(value);
        return this;
      } else {
        // current variable used for traversal, just like linked lists!
        var current = this.root;
        // keep looping till we get to the correct spot;
        while (true) {
          if (value < current.value) {
            // if there is nothing on the left
            if (current.left === null) {
              // make a new node and get out
              current.left = new Node(value);
              return this;
            }
            // otherwise, keep moving on!
            else {
              current = current.left;
            }
          } else if (value > current.value) {
            // if there is nothing on the right
            if (current.right === null) {
              // make a new node and get out
              current.right = new Node(value);
              return this;
            } else {
              current = current.right;
            }
          }
          // otherwise it must be a duplicate so let's get out of here
          else {
            return 'duplicate!';
          }
        }
      }
    } else return 'Please insert a number';
  }
  findMax(node = this.root) {
    if (!node || !node.right) return node;

    return this.findMax(node.right);
  }

  findSecondLargest(node = this.root, parent = null) {
    if (!node) return null;

    if (!node.right) return node.left ? this.findMax(node.left) : parent;

    return this.findSecondLargest(node.right, node);
  }
}

console.log(': ');
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
