function transform(nums) {
  for (i = 0; i < nums.length - 1; i++) {
    let swapped = false;
    for (j = 0; j < nums.length - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
        swapped = true;
      }
    }

    if (swapped == false) break;
  }
  return nums.map((i) => i * i);
}

const nums = [4, 9, 5, 3, 8];
const sortedSquaredNums = transform(nums);
console.log(sortedSquaredNums); // [9,16,25,64,81]
