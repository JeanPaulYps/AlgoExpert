const NOT_FOUND_ITEM = -1;
export function firstDuplicateValue(array: number[]) {
  const checkedItems: Record<string, boolean> = {};
  for (let num of array) {
    if (num in checkedItems) return num;
    else checkedItems[num] = true;
  }
  return NOT_FOUND_ITEM;
}

console.log(firstDuplicateValue([2, 1, 5, 2, 3, 3, 4]));
