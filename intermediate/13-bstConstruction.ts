export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value: number): BST {
    let node: BST = this;
    if (!node) this.value = value;
    let inserted = false;
    while (!inserted) {
      if (value < node.value) {
        const hasLeftNode = node?.left;
        node?.left ? (node = node.left) : (node.left = new BST(value));
        if (!hasLeftNode) inserted = true;
      } else {
        const hasRightNode = node?.right;
        node = node?.right
          ? (node = node.right)
          : (node.right = new BST(value));
        if (!hasRightNode) inserted = true;
      }
    }
    // Do not edit the return statement of this method.
    return this;
  }

  contains(value: number) {
    let node: BST | null = this;
    while (node) {
      if (value === node.value) return true;
      node = value < node.value ? node.left : node.right;
    }

    return false;
  }

  findMinimum(root: BST) {
    let parent: BST = root;
    let node: BST = root;
    if (root.right) node = root.right;
    while (node) {
      if (node.left) {
        parent = node;
        node = node.left;
      } else {
        break;
      }
    }
    return { parent, node };
  }

  search(root: BST, value: number) {
    let parent: BST = root;
    let node: BST = root;
    while (node) {
      if (value === node.value) {
        node = node;
        break;
      } else if (value < node.value && node.left) {
        parent = node;
        node = node.left;
      } else if (value > node.value && node.right) {
        parent = node;
        node = node.right;
      }
    }
    return { parent, node };
  }

  removeNode(node: BST, parent: BST) {
    const value = node.value;
    // Case 1: has no children
    if (!node.left && !node.right) {
      if (value < parent.value) parent.left = null;
      else parent.right = null;
    }
    // Case 2: has one children
    else {
      const onlyChild = node?.left ? node.left : node.right;
      if (node !== this) {
        if (parent?.left?.value === node.value) parent.left = onlyChild;
        else parent.right = onlyChild;
      } else {
        if (node.right) {
          this.value = node.right.value;
          this.right = node.right.right;
          this.left = node.right.left;
        }
        if (node.left) {
          this.value = node.left.value;
          this.right = node.left.right;
          this.left = node.left.left;
        }
      }
    }
  }

  remove(value: number): BST {
    let parent: BST = this;
    let node: BST | null = this;

    while (node) {
      if (value === node.value) {
        node = node;
        break;
      } else if (value < node.value) {
        parent = node;
        node = node.left;
      } else {
        parent = node;
        node = node.right;
      }
    }

    if (!node) return this;

    // Case 3: has two children
    if (node.right && node.left) {
      const { node: predecessorNode, parent: predecessorParent } =
        this.findMinimum(node);
      const predecesorValue = predecessorNode.value;
      this.removeNode(predecessorNode, predecessorParent);
      node.value = predecesorValue;
    }
    // Case 1: has no children
    else if (!node.left && !node.right) {
      if (value < parent.value) parent.left = null;
      else parent.right = null;
    }
    // Case 2: has one children
    else {
      const onlyChild = node?.left ? node.left : node.right;
      if (node !== this) {
        if (parent?.left?.value === node.value) parent.left = onlyChild;
        else parent.right = onlyChild;
      } else {
        if (node.right) {
          this.value = node.right.value;
          this.right = node.right.right;
          this.left = node.right.left;
        }
        if (node.left) {
          this.value = node.left.value;
          this.right = node.left.right;
          this.left = node.left.left;
        }
      }
    }

    // Do not edit the return statement of this method.
    return this;
  }
}
