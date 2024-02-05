const testNums = [1, 2, 3, 4];

function sumFor(nums) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}

console.log(sumFor(testNums));

const sumWhile = (nums) => {
  let total = 0;
  let i = 0;
  while (i < nums.length) {
    total += nums[i];
    i++;
  }
  return total;
};

console.log(sumWhile(testNums));

const sumRecursion = (nums) => {
  if (nums.length === 0) {
    return 0;
  }
  const total = nums[0] + sumRecursion(nums.slice(1, nums.length));

  return total;
};

console.log(sumRecursion(testNums));

const sumTheSimpleWay = (nums) => _.reduce(nums, function (memo, num) { return memo + num; });
console.log(sumTheSimpleWay(testNums));
