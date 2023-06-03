export function bestSeat(seats: number[]) {
  let answer = {
    length: 0,
    index: 0,
  };
  let count = {
    length: 0,
    index: 0,
  };
  seats.forEach((seat: number, index: number) => {
    if (seat === 0) count.length++;
    if (seat !== 0 || index === seats.length - 1) {
      if (count.length > 0 && count.length > answer.length) {
        answer.length = count.length;
        const correction = index === seats.length -1 && seat === 0 ? 0 : 1;
        answer.index = index - Math.floor(count.length / 2) - correction;
      }
      count = { length: 0, index: 0 };
    }
  });

  return answer.length === 0 && answer.index === 0 ? -1 : answer.index;
}

console.log(bestSeat([0, 0, 0]));
