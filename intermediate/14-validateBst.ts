// This is an input class. Do not edit.
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


const validateTree = (node: BST | null, minimum: number, maximum: number):boolean => {
  if (!node) return true;
  // Root has to be greater than the left
  if (minimum > node.value) return false;
  // Root has to be less or equal to the values to the right 
  if (maximum <= node.value) return false;


  return validateTree(node.left, minimum, node.value) && validateTree(node.right, node.value, maximum);
}

export function validateBst(tree: BST) {

  return tree ? validateTree(tree, -Infinity, Infinity) : false;
}
