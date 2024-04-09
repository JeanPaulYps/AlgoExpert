type SpecialArray = Array<number | SpecialArray>;

const getSpecialArrayTotal = (array: SpecialArray, depth: number): number => {
    let total = 0;
    for (const element of array) {
        if (Array.isArray(element)) {
            total += (depth + 1) * getSpecialArrayTotal(element, depth + 1);
        } else {
            total += element;
        }
    }
    return total;
}

// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
export function productSum(array: SpecialArray) {
  // Write your code here.
  const totalSum = getSpecialArrayTotal(array, 1);
  return totalSum;
}

console.log(productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]))