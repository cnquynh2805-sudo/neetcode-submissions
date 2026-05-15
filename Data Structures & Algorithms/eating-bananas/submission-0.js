class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
let left = 1;
  let right = Math.max(...piles);
  let answer = right;

  while (left <= right) {
    const speed = Math.floor((left + right) / 2);

    if (canFinish(piles, h, speed)) {
      answer = speed;
      right = speed - 1;
    } else {
      left = speed + 1;
    }
  }
  return answer;
}
}
function canFinish(piles, h, speed){
  let hours = 0;

  for (let pile of piles) {
    hours += Math.ceil(pile / speed);
  }

  return hours <= h;
}

