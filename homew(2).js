const input1 = [2, 5, 1, 3, 1, 2, 1, 7, 7, 6]; // 17
const input2 = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0];  // 10
const input3 = [7, 0, 1, 3, 4, 1, 2, 1] // 9
const input4 = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0] // 10
const input5 = [2, 2, 1, 2, 2, 3, 0, 1, 2] // 4
const input6 =  [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8] // 24
const input7 = [2, 2, 2, 2, 2] // 0

function trap(height) {
  let maxLeft = height[0];
  let maxRight = height[height.length - 1];

  let left = 1;
  let right = height.length - 2;
  let total = 0;

  while (left <= right) {
    if (maxLeft <= maxRight) {
      maxLeft = Math.max(maxLeft, height[left]);
      total += maxLeft - height[left];
      left += 1;
    } else {
      maxRight = Math.max(maxRight, height[right]);
      total += maxRight - height[right];
      right -= 1;
    }
  }

  return total;
}

console.log(trap(input1));
console.log(trap(input2));
console.log(trap(input3));
console.log(trap(input4));
console.log(trap(input5));
console.log(trap(input6));
console.log(trap(input7));