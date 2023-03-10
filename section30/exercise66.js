/*
Binary Search Tree Exercise - Check if balanced

Write a function on the BinarySearchTree class

isBalanced - returns true if the BST is balanced, otherwise returns false.

A balanced tree is defined as a tree where the depth of all leaf nodes or nodes with single children differ by no more than one.
BinarySearchTreeクラスの関数を記述する。

isBalanced - BSTがバランスしている場合にtrueを返し，そうでない場合にfalseを返す．

バランスのとれた木とは、すべての葉ノードまたは単一の子を持つノードの深さが1以上違わない木と定義されます。

    var binarySearchTree = new BinarySearchTree();
    binarySearchTree.insert(15);
    binarySearchTree.insert(20);
    binarySearchTree.insert(10);
    binarySearchTree.insert(12);
    binarySearchTree.isBalanced(); // true
     
    var binarySearchTree2 = new BinarySearchTree();
    binarySearchTree2.insert(5);
    binarySearchTree2.isBalanced(); // true
    binarySearchTree2.insert(6);
    binarySearchTree2.isBalanced(); // true
    binarySearchTree2.insert(7);
    binarySearchTree2.isBalanced(); // false
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
  getHeight(node = this.root) {
    if (!node) return 0;

    return Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
  }

  isBalanced(node = this.root) {
    if (!node) return true;

    return (
      Math.abs(this.getHeight(node.left) - this.getHeight(node.right)) <= 1 &&
      this.isBalanced(node.left) &&
      this.isBalanced(node.right)
    );
  }
}

var binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(15);
binarySearchTree.insert(20);
binarySearchTree.insert(10);
binarySearchTree.insert(12);
console.log('true: ', binarySearchTree.isBalanced()); // true

var binarySearchTree2 = new BinarySearchTree();
binarySearchTree2.insert(5);
console.log('true: ', binarySearchTree2.isBalanced()); // true
binarySearchTree2.insert(6);
console.log('true: ', binarySearchTree2.isBalanced()); // true
binarySearchTree2.insert(7);
console.log('false: ', binarySearchTree2.isBalanced()); // false
