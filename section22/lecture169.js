/*

Finding a Node in a BST

Steps - Iteratively or Recursively

    Starting at the root
        Check if there is a root, if not - we're done searching!
        If there is a root, check if the value of the new node is the value we are looking for. If we found it, we're done!
        If not, check to see if the value is greater than or less than the value of the root
        If it is greater 
            Check to see if there is a node to the right
                If there is, move to that node and repeat these steps
                If there is not, we're done searching!
        If it is less
            Check to see if there is a node to the left
                If there is, move to that node and repeat these steps
                If there is not, we're done searching!

Let's visualize this!
BSTのノードを探す
ステップ - 反復的または再帰的

ルートから始める
  ルートがあるかどうかを確認し、ない場合は検索を終了します。
  ルートがある場合、新しいノードの値が探している値であるかどうかをチェックします。見つかった場合は、これで完了です。
  そうでない場合は、その値がルートの値より大きいか小さいかを確認します。
  大きい場合
  右側にノードがあるかどうかをチェックします。
  ある場合は、そのノードに移動して、この手順を繰り返します。
  ない場合は、検索を終了します。
  少ない場合
  左側にノードがあるかどうかを確認します。
  あれば、そのノードに移動し、このステップを繰り返す
  ない場合は、検索を終了します。

可視化しよう

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
}

//      10
//   5     13
// 2  7  11  16

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);

console.log('tree: ', tree);
//   root: Node {
//     value: 10,
//     left: Node { value: 5, left: [Node], right: [Node] },
//     right: Node { value: 13, left: [Node], right: [Node] }
//   }
// }
console.log('tree.find(): ', tree.find(10));
// tree:  BinarySearchTree {
// tree.find():  Node {
//   value: 10,
//   left: Node {
//     value: 5,
//     left: Node { value: 2, left: null, right: null },
//     right: Node { value: 7, left: null, right: null }
//   },
//   right: Node {
//     value: 13,
//     left: Node { value: 11, left: null, right: null },
//     right: Node { value: 16, left: null, right: null }
//   }
// }
console.log('tree.find(): ', tree.find(10000));
// tree.find():  undefined
console.log('tree.contains(): ', tree.contains(10));
// tree.contains():  true
console.log('tree.contains(): ', tree.contains(100000));
// tree.contains():  false
