const swap = (array: number[], firstIndex: number, secondIndex: number) => {
  const temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};

// export function moveElementToEnd(array: number[], toMove: number) {
//   let numbersDifferentToMove = [];
//   let toMoveArray = [];

//   while(array.length) {
//     const top = array.shift();
//     if (top !== toMove)
//         numbersDifferentToMove.push(top);
//     else
//         toMoveArray.push(top)
//   }

//   return [...numbersDifferentToMove, ...toMoveArray];
// }

export function moveElementToEnd(array: number[], toMove: number) {
  let lastIndexChanged = 0;

  array.forEach((value: number, index: number) => {
    if (value !== toMove) {
      swap(array, index, lastIndexChanged);
      lastIndexChanged += 1;
    }
  });

  return array;
}

console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2));
