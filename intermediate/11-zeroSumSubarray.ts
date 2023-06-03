const getSum = (arr: number[]) => {
  let total = 0;
  arr.forEach((num: number) => (total += num));
  return total;
};

export function zeroSumSubarray(nums: number[]) {
  for (let size = 1; size <= nums.length; size++) {
    for (let i = 0; i <= nums.length - size; i++) {
      const subarray = nums.slice(i, i + size);
      // console.log(subarray);
      const total = getSum(subarray);
      if (total === 0) return true;
    }
  }

  return false;
}

console.log(zeroSumSubarray([-5, -5, 4, 2, 3]));
