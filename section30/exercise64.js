/*
Binary Search Tree - remove Exercise

Implement the following function on the BinarySearchTree.prototype. insert is implemented to help with testing.

remove

This function should remove a node from a binary search tree. Your remove function should be able to handle removal of the root node, removal of a node with one child and removal of a node with two children. The function should return the node removed.
BinarySearchTree.prototype に以下の関数を実装する。insert はテストに役立つように実装する。

取り除く

この関数は、バイナリサーチツリーからノードを削除する必要があります。remove関数は、ルートノードの削除、1つの子を持つノードの削除、2つの子を持つノードの削除を扱うことができる必要があります。この関数は、削除されたノードを返す必要があります。



    var binarySearchTree = new BinarySearchTree();
    binarySearchTree
        .insert(15)
        .insert(20)
        .insert(10)
        .insert(12)
        .insert(1)
        .insert(5)
        .insert(50);
    binarySearchTree.remove(50);
    binarySearchTree.root.right.value // 20
    binarySearchTree.root.right.right // null
     
    binarySearchTree.remove(5);
    binarySearchTree.root.left.left.value // 1
    binarySearchTree.root.left.left.right // null
     
    var binarySearchTree = new BinarySearchTree();
    binarySearchTree
        .insert(15)
        .insert(20)
        .insert(10)
        .insert(12)
        .insert(1)
        .insert(5)
        .insert(50);
     
    binarySearchTree.remove(1);
    binarySearchTree.root.left.left.value // 5
    binarySearchTree.root.left.left.left // null
    binarySearchTree.root.left.left.right // null
     
    binarySearchTree.remove(20);
    binarySearchTree.root.right.value // 50
    binarySearchTree.root.right.right // null
    binarySearchTree.root.right.left // null
     
    var binarySearchTree = new BinarySearchTree();
    binarySearchTree
        .insert(15)
        .insert(20)
        .insert(10)
        .insert(12)
        .insert(1)
        .insert(5)
        .insert(50)
        .insert(60)
        .insert(30)
        .insert(25)
        .insert(23)
        .insert(24)
        .insert(70);
     
    binarySearchTree.remove(10);
    binarySearchTree.root.left.value // 12
    binarySearchTree.root.left.left.value // 1
    binarySearchTree.root.left.left.right.value // 5
     
    binarySearchTree.remove(50);
    binarySearchTree.root.right.value // 20
    binarySearchTree.root.right.right.value // 60
    binarySearchTree.root.right.right.left.value // 30
     
    var binarySearchTree = new BinarySearchTree();
    binarySearchTree
        .insert(22)
        .insert(49)
        .insert(85)
        .insert(66)
        .insert(95)
        .insert(90)
        .insert(100)
        .insert(88)
        .insert(93)
        .insert(89)
     
    binarySearchTree.remove(85);
    binarySearchTree.root.right.right.value // 88
    binarySearchTree.root.right.right.right.left.left.value // 89
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
  /*
https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/8344870#questions/6802510

remove(value) uses a recursive function findAndReplace(node) - maybe, not the best name -  which accepts a node and returns a replacement for that node in the subtrees branching out from that node. So it is called like this:
node = findAndReplace(node)
if node.value !== value, no replacement is necessary and the function returns the node itself (last line in the code) after calling itself for node.left (passing node.left) && node.right (passing node.right)
if node.value === value, the function replaces the node:
    it's easy to replace it when it has one (returns the only child, either left or right) or no children (returns null)
    when there are two children, the function finds the node with the smallest value greater than node.value meaning the leftmost node   in its right subtree (can also find the largest value smaller than node.value). Then it swaps the values of the two nodes and finds and replaces the leftmost node in its right subtree

remove(value)は、再帰関数findAndReplace(node)を使います。
この関数は、ノードを受け取り、そのノードから分岐するサブツリーの中でそのノードの代替となるものを返します。
つまり、次のように呼び出すのです。
node = findAndReplace(node)
node.left (node.leftを渡す) && node.right (node.rightを渡す) の場合、 node.value !== value の場合、置換は必要なく、
関数がノード自身を呼び出した後 (コードの最終行) に返されます。
node.value === value の場合、関数はノードを置き換えます。
    子ノードが1つ（左右どちらかの唯一の子ノードを返す）、または子ノードがない（nullを返す）場合は、簡単に置き換えることができます。
    子ノードが2つある場合、この関数は、node.valueより小さい値を持つノードを見つけ、
    その右サブツリーの左端のノードを意味します（node.valueより小さい最大値も見つけることができます）。
    そして、2つのノードの値を入れ替え、その右のサブツリーの一番左のノードを見つけ、置き換えます。
*/
  remove(value) {
    if (this.root === null) return;

    let removed;

    function findAndRemove(node) {
      // console.log('value', value);
      // console.log('node.value', node.value);
      if (value === node.value) {
        removed = new Node(node.value);
        if (node.left && node.right) {
          // console.log('A node.left', node.left);
          // console.log('A node.right', node.right);
          let cur = node.right;
          while (cur.left) {
            cur = cur.left;
          }
          node.value = cur.value;
          cur.value = value;
          node.right = findAndRemove(node.right);
        } else if (node.left) {
          // console.log('B node.left', node.left);
          // console.log('B node.right', node.right);
          return node.left;
        } else if (node.right) {
          // console.log('C node.left', node.left);
          // console.log('C node.right', node.right);
          return node.right;
        } else {
          return null;
        }
      } else if (value < node.value) {
        if (node.left) {
          node.left = findAndRemove(node.left);
        }
      } else {
        if (node.right) {
          node.right = findAndRemove(node.right);
        }
      }
      return node;
    }
    this.root = findAndRemove(this.root);
    return removed;
  }
}

var binarySearchTree = new BinarySearchTree();
binarySearchTree
  .insert(15)
  .insert(20)
  .insert(10)
  .insert(12)
  .insert(1)
  .insert(5)
  .insert(50);
binarySearchTree.remove(50);
console.log('20: ', binarySearchTree.root.right.value); // 20
console.log('null: ', binarySearchTree.root.right.right); // null

binarySearchTree.remove(5);
console.log('1: ', binarySearchTree.root.left.left.value); // 1
console.log('null: ', binarySearchTree.root.left.left.right); // null

var binarySearchTree = new BinarySearchTree();
binarySearchTree
  .insert(15)
  .insert(20)
  .insert(10)
  .insert(12)
  .insert(1)
  .insert(5)
  .insert(50);

binarySearchTree.remove(1);
console.log('5: ', binarySearchTree.root.left.left.value); // 5
console.log('null: ', binarySearchTree.root.left.left.left); // null
console.log('null: ', binarySearchTree.root.left.left.right); // null

binarySearchTree.remove(20);
console.log('50: ', binarySearchTree.root.right.value); // 50
console.log('null: ', binarySearchTree.root.right.right); // null
console.log('null: ', binarySearchTree.root.right.left); // null

var binarySearchTree = new BinarySearchTree();
binarySearchTree
  .insert(15)
  .insert(20)
  .insert(10)
  .insert(12)
  .insert(1)
  .insert(5)
  .insert(50)
  .insert(60)
  .insert(30)
  .insert(25)
  .insert(23)
  .insert(24)
  .insert(70);

binarySearchTree.remove(10);
console.log('12: ', binarySearchTree.root.left.value); // 12
console.log('1: ', binarySearchTree.root.left.left.value); // 1
console.log('5: ', binarySearchTree.root.left.left.right.value); // 5

binarySearchTree.remove(50);
console.log('20: ', binarySearchTree.root.right.value); // 20
console.log('60: ', binarySearchTree.root.right.right.value); // 60
console.log('30: ', binarySearchTree.root.right.right.left.value); // 30

var binarySearchTree = new BinarySearchTree();
binarySearchTree
  .insert(22)
  .insert(49)
  .insert(85)
  .insert(66)
  .insert(95)
  .insert(90)
  .insert(100)
  .insert(88)
  .insert(93)
  .insert(89);

binarySearchTree.remove(85);
console.log('88: ', binarySearchTree.root.right.right.value); // 88
console.log('89: ', binarySearchTree.root.right.right.right.left.left.value); // 89
