// Instructions: O(n)
// Memory: O(log(n))

const getSumOfDepth = (tree: BinaryTree) => {
  let total = 0;

  const preOrder = (node: BinaryTree | null, depth: number) => {
    if (!node) {
      return;
    }
    total += depth;
    preOrder(node.left, depth + 1);
    preOrder(node.right, depth + 1);
  };

  preOrder(tree, 0);
  return total;
};

export function nodeDepths(root: BinaryTree) {
  const result = getSumOfDepth(root);
  return result;
}

// This is the class of the input binary tree.
class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
