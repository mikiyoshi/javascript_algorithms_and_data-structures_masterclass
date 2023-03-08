/*

TREE
TRAVERSAL

VISIT EVERY NODE ONCE


TRAVERSING A TREE

Two ways:

    Breadth-first Search(BFS)
    Depth-first Search(DFS)
じゅんかい
2つの方法

ブレッドファーストサーチ（Breadth-first Search)
デプスファーストサーチ (Depth-first Search)

BREADTH FIRST SEARCH



BFS // Tree を横で並列に全てを検索

//      10
//   6     15
// 3  8       20

[10, 6, 15, 3, 8, 20]


BFS // BREADTH FIRST SEARCH

Steps - Iteratively

    Create a queue (this can be an array) and a variable to store the values of nodes visited
    Place the root node in the queue
    Loop as long as there is anything in the queue
        Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
        If there is a left property on the node dequeued - add it to the queue
        If there is a right property on the node dequeued - add it to the queue
    Return the variable that stores the values
ステップ - 反復的

キュー（配列でも可）と変数を作成し、訪問したノードの値を格納する
ルートノードをキューに入れる
キューに何かが入っている限りループする
キューからノードをデキューし、そのノードの値をノードを格納する変数にプッシュする
キューから取り出されたノードに left プロパティがある場合、それをキューに追加する
キューから取り出されたノードにrightプロパティがある場合、それをキューに追加する
値を格納する変数を返す
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

// queue: [6, 15];
// data: [10];

// queue: [15, 3, 8];
// data: [10, 6];

// queue: [3, 8, 20];
// data: [10, 6, 15];

// queue: [8, 20];
// data: [10, 6, 15, 3];

// queue: [20];
// data: [10, 6, 15, 3, 8];

// queue: [];
// data: [10, 6, 15, 3, 8, 20];

console.log('tree.BFS(): ', tree.BFS());
// tree.BFS():  [ 10, 6, 15, 3, 8, 20 ]
