// Javascript program to demonstrate
// delete operation in binary
// search tree

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
  remove(value) {
    if (this.root === null) return;

    let removed;
    function findAndRemove(node) {
      if (value === node.value) {
        removed = new Node(node.value);
        if (node.left && node.right) {
          let cur = node.right;
          while (cur.left) {
            cur = cur.left;
          }
          node.value = cur.value;
          cur.value = value;
          node.right = findAndRemove(node.right);
        } else if (node.left) {
          return node.left;
        } else if (node.right) {
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
// Driver Code
/* Let us create following BST
			50
		/	 \
		30	 70
		/ \ / \
		20 40 60 80 */

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

console.log('test: ', binarySearchTree);
// console.log('test: ', binarySearchTree.remove(85));
// console.log('test: ', binarySearchTree.find(85));
// binarySearchTree.remove(100);
// console.log('test: ', binarySearchTree.find(95));
// console.log('22: ', binarySearchTree.findMin());
// console.log('100: ', binarySearchTree.findMax());
// console.log('test: ', binarySearchTree.remove(100));
binarySearchTree.remove(85);
console.log('88: ', binarySearchTree.root.right.right.value); // 88
console.log('89: ', binarySearchTree.root.right.right.right.left.left.value); // 89
