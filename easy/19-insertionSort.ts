const swapUntil = (start: number, end: number, array: number[]) => {
    let temp;
    let old = array[end];
    for (let i = start; i <= end; i++) {
        temp = array[i];
        array[i] = old;
        old = temp;
    }
}

export function insertionSort(array: number[]) {
  for (let i = 1; i < array.length; i++) {
    let start = i;
    for (let j = i - 1; j >= 0; j--) {
        if(array[i] < array[j]){
            start = j;
        }
    }
    if (start !== i) {
        // console.log("start", start);
        // console.log("end", i);
        swapUntil(start, i, array);
        // console.log("new array", array);
    }


  }
  return array;
}

console.log(insertionSort([8, 5, 2, 9, 5, 6, 3]));