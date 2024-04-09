// Instructions: O(n)
// Memory: O(log(n))

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

const getBranchSum = (root: BinaryTree) => {
  let answer: number[] = [];
  const preOrder = (node: BinaryTree, total: number) => {
    if (!node.left && !node.right) {
      answer.push(total + node.value);
      return;
    }
    if (node.left) {
      preOrder(node.left, total + node.value);
    }
    if (node.right) {
      preOrder(node.right, total + node.value);
    }
  };
  preOrder(root, 0);
  return answer;
};

export function branchSums(root: BinaryTree): number[] {
  // Write your code here.
  if (!root) {
    return [-1];
  }
  const answer = getBranchSum(root);
  console.log(answer);
  return answer;
}
