// Source: https://www.geeksforgeeks.org/implementation-binary-search-tree-javascript/
class TNode {
  value: number;
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

  // function to be implemented
  // insert(data)
  insert(data: number) {
    let newNode = new TNode(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  // remove(data)
  remove(data: number): void {
    this.root = this.removeNode(this.root, data);
  }

  // Helper function
  // findMinNode()
  findMinNode(node: TNode): TNode {
    if (node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }
  // getRootNode()
  getRootNode() {
    return this.root;
  }
  // inorder(node)
  inorder(node: TNode | null) {
    if (node != null) {
      this.inorder(node.left);
      console.log(node.value);
      this.inorder(node.right);
    }
  }
  // preorder(node)
  preorder(node: TNode | null) {
    if (node != null) {
      console.log(node.value);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }
  // postorder(node)
  postorder(node: TNode | null) {
    if (node != null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.value);
    }
  }
  // search(node, data)

  insertNode(node: TNode, newNode: TNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  removeNode(node: TNode | null, key: number): TNode | null {
    if (node === null) return null;
    else if (key < node.value) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.value) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      // Deleting node with two children
      // minimum node of the right subtree
      // is stored in aux
      var aux = this.findMinNode(node.right);
      node.value = aux.value;

      node.right = this.removeNode(node.right, aux.value);
      return node;
    }
  }
}
