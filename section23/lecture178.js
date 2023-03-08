/*

DEPTH FIRST SEARCH


DFS - PostOrder

Let's visualize this!

//      10
//   6     15
// 3  8       20

[3, 8, 6, 20, 15, 10]



DFS - PostOrder
Steps - Recursively

    Create a variable to store the values of nodes visited
    Store the root of the BST in a variable called current
    Write a helper function which accepts a node
        If the node has a left property, call the helper function with the left property on the node
        If the node has a right property, call the helper function with the right property on the node
        Push the value of the node to the variable that stores the values
        Invoke the helper function with the current variable
    Return the array of values
    
DFS - PostOrder
ステップ - 再帰的
訪問したノードの値を格納するための変数を作成する
BSTのルートをcurrentという変数に格納する
ノードを受け取るヘルパー関数を書く
ノードが left プロパティを持つ場合、そのノードの left プロパティを指定してヘルパー関数を呼び出します。
ノードが right プロパティを持つ場合、ノードの right プロパティを指定してヘルパー関数を呼び出す
ノードの値を値を格納する変数にプッシュする
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

console.log('tree.DFSPostOrder(): ', tree.DFSPostOrder());
// tree.DFSPostOrder():  [ 3, 8, 6, 20, 15, 10 ]
