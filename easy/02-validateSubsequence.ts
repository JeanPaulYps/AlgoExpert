export function isValidSubsequence(array: number[], sequence: number[]) {
  // Write your code here.
  let indexOfSequence = 0;
  let numberOfSequence = sequence[indexOfSequence];
  let totalElementsOfSequence = sequence.length;

  if (totalElementsOfSequence === 0) {
    return false;
  }

  for (const num of array) {
      if (num === numberOfSequence) {
          indexOfSequence += 1;
          numberOfSequence = sequence[indexOfSequence];
      }
      if (totalElementsOfSequence === indexOfSequence){
        return true;
      }
    
  }


  return false;
}

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));