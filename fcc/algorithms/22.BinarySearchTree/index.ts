// Source: https://www.geeksforgeeks.org/implementation-binary-search-tree-javascript/
class TNode {
  value: number | null;
  right: TNode | null;
  left: TNode | null;
  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  root: TNode | null;
  constructor() {
    this.root = null;
  }

  insert(data) {
    let newNode = new TNode(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(node, newNode) {}
}
