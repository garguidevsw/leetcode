
// @param {number[]} nums
// @param {number} target
// @return {number}

// It's OK
const searchInsert = (nums, target) => {
    let idx = nums.indexOf(target);

    if(idx != -1){
        return idx;
    }

    idx = 0;
    nums.forEach(element => {
        if(element < target){
            idx++;
        }
    });

    return idx;

    
};
console.log(searchInsert([1,3,5,6], 5));
console.log(searchInsert([1,3,5,6], 2));
console.log(searchInsert([1,3,5,6], 7));
console.log(searchInsert([1,3,5,6], 0));

