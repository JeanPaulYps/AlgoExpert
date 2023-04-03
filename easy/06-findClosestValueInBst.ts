class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function findClosestValueInBst(tree: BST, target: number) {
  if (!tree.value) {
    return -1;
  }
  let node: BST | null = tree;
  let answer = {
    value: tree.value,
    distance: Math.abs(tree.value - target),
  };
  while (node !== null) {
    const distance = Math.abs(node.value - target);
    if (distance < answer.distance) {
      answer = {
        value: node.value,
        distance,
      };
    }
    node = target > node.value ? node.right : node.left;
  }

  return answer.value;
}
