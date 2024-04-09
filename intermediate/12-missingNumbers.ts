export function missingNumbers(nums: number[]) {
  const maximumRange = nums.length + 2;
  const numbers: Record<number, boolean> = {};
  const answer = [];
  nums.forEach((num: number) => numbers[num] = true);
  for(let num = 1; num <= maximumRange; num++) {
    if (!(num in numbers)) 
        answer.push(num);
  }
  
  return answer;
}

console.log(missingNumbers([1,4,3]))