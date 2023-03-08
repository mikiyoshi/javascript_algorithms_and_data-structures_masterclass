/*
DFS - PreOrder

Let's visualize this!

//      10
//   6     15
// 3  8       20

[10, 6, 3, 8, 15, 20]



DFS - PreOrder
Steps - Recursively

    Create a variable to store the values of nodes visited
    Store the root of the BST in a variable called current
    Write a helper function which accepts a node
        Push the value of the node to the variable that stores the values
        If the node has a left property, call the helper function with the left property on the node
        If the node has a right property, call the helper function with the right property on the node
    Invoke the helper function with the current variable
    Return the array of values
    
DFS - PreOrder
ステップ - 再帰的
訪問したノードの値を格納するための変数を作成する
BSTのルートをcurrentという変数に格納する
ノードを受け取るヘルパー関数を作成する
ノードの値を値を格納する変数にプッシュする
ノードが left プロパティを持つ場合、ノードの left プロパティを指定してヘルパー関数を呼び出します。
ノードが右のプロパティを持つ場合、ノードの右のプロパティでヘルパー関数を呼び出す
現在の変数でヘルパー関数を呼び出す
値の配列を返す
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
  contains(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
  BFS() {
    var node = this.root,
      data = [],
      queue = [];
    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
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
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

//      10
//   6     15
// 3  8       20

console.log('tree.DFSPreOrder(): ', tree.DFSPreOrder());
// tree.DFSPreOrder():  [ 10, 6, 3, 8, 15, 20 ]
