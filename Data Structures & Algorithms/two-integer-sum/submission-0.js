class Solution {
    twoSum(nums, target) {
        const hashmap = {};

        for (let i = 0; i < nums.length; i++) {

            const complement = target - nums[i];

            if (complement in hashmap) {
                return [hashmap[complement], i];
            }

            hashmap[nums[i]] = i;
        }

        return null;
    }
}