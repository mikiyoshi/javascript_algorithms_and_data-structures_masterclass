/*

INSERTING A NODE

Steps - Iteratively or Recursively

    Create a new node
    Starting at the root
        Check if there is a root, if not - the root now becomes that new node!
        If there is a root, check if the value of the new node is greater than or less than the value of the root
        If it is greater 
            Check to see if there is a node to the right
                If there is, move to that node and repeat these steps
                If there is not, add that node as the right property
        If it is less
            Check to see if there is a node to the left
                If there is, move to that node and repeat these steps
                If there is not, add that node as the left property
ノード挿入
ステップ - 反復的または再帰的

新規ノードの作成
ルートから始める
ルートがあるかどうかをチェックし、ない場合は、ルートが新しいノードになります。
ルートがある場合、新しいノードの値がルートの値より大きいか小さいかをチェックします。
大きい場合
右側にノードがあるかどうかをチェックします。
ある場合は、そのノードに移動して、この手順を繰り返します。
ない場合は、そのノードを右のプロパティとして追加します。
少ない場合
左側にノードがあるかどうかを確認します。
ある場合は、そのノードに移動して、この手順を繰り返します。
ない場合は、そのノードを左のプロパティとして追加します。
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
  // 下が Refactored Version // simplify
  // insert(value) {
  //   var newNode = new Node(value);
  //   if (this.root === null) {
  //     this.root = newNode;
  //     return this;
  //   } else {
  //     var current = this.root;
  //     while (true) {
  //       // これはもし同じ数値(文字)が入力された時に undefined を返す
  //       if (value === current.value) return undefined;

  //       if (value < current.value) {
  //         if (current.left === null) {
  //           current.left = newNode;
  //           return this;
  //         } else {
  //           current = current.left;
  //         }
  //       } else if (value > current.value) {
  //         if (current.right === null) {
  //           current.right = newNode;
  //           return this;
  //         } else {
  //           current = current.right;
  //         }
  //       }
  //     }
  //   }
  // }

  // 上の Refactored Version // simplify
  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      // これはもし同じ数値(文字)が入力された時に undefined を返す
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
}

//      10
//   5      13
// 2  7   11   16

var tree = new BinarySearchTree();

// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);
// tree.root.left.right = new Node(9);

tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);

console.log('tree: ', tree);
console.log('tree.insert(): ', tree.insert(10));
console.log('tree: ', tree);
// tree:  BinarySearchTree {
//   root: Node {
//     value: 10,
//     left: Node { value: 5, left: [Node], right: [Node] },
//     right: Node { value: 13, left: [Node], right: [Node] }
//   }
// }
// tree.insert():  undefined
// tree:  BinarySearchTree {
//   root: Node {
//     value: 10,
//     left: Node { value: 5, left: [Node], right: [Node] },
//     right: Node { value: 13, left: [Node], right: [Node] }
//   }
// }
