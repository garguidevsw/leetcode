// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:
// Input: nums = [2,2,1]
// Output: 1

// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4

// Example 3:
// Input: nums = [1]
// Output: 1
 
// Constraints:
// 1 <= nums.length <= 3 * 104
// -3 * 104 <= nums[i] <= 3 * 104
// Each element in the array appears twice except for one element which appears only once.

const singleNumber = (nums) => {
    // return nums.filter( (el, i) => nums.indexOf(el) === i);
    
    let result = [...nums];
    nums.forEach((element, index) => {
        if(nums.lastIndexOf(element) != index){
            console.log('lastIdx:', result.lastIndexOf(element));
            console.log('index: ', index);
            if(result.length != 1){
                while (result.includes(element)) {
                    const idx = result.indexOf(element);
                    result.splice(idx, 1);
                    console.log('elem: ', element);
                    console.log('idx: ', idx);
                    console.log('res: ', result);
                }
            }
        }

    });

    return result[0];
};

console.log(singleNumber([17,12,5,-6,12,4,17,-5,2,-3,2,4,5,16,-3,-4,15,15,-4,-5,-6]));