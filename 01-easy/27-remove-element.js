// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]

/// Its OK
let nums = [3,2,2,3];
const val = 3;

const removeElement = function(nums, val) {
    let i = 0;
    for(let j=0; j < nums.length; j++){
        if(nums[j] != val){
            nums[i] = nums[j]
            i++;
        }
    }

    console.log(i, nums);
};

removeElement(nums, val);