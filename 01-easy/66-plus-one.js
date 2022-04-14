// 
//  @param {number[]} digits
//  @return {number[]}
// 


// Wrong Result with more than 16 digits
// const plusOne = (digits) => {
//     const size = digits.length;
//     let result = 0;
//     let base = 1;
//     for(let i = size-1; i >= 0; i--){
//         console.log(digits[i]);
//         console.log(`base: ${base}`);

//         result = result + digits[i]*base;
//         console.log(`result: ${result}`);
//         base = base * 10;
//     }

//     result++;

//     return result.toString().split('').map(Number);
    
// };


// It's OK
const plusOne = (digits) => {
    const size = digits.length;
    let result = [];
    let digit = 0;
    let next = false;


    for(let i = size-1; i >= 0; i--){
        if(i == size-1){
            digit = digits[i]+1;
        }else{
            digit = digits[i];
        }
        if(next){
            digit = digits[i]+1;
        }
        if(digit < 10){
            result.unshift(digit);
            next = false;
        }else{
            result.unshift(0);
            next = true;
        }
    }
  
    if(next){
        result.unshift(1);
    }

    return result;
    
};

console.log(plusOne([9]));
console.log(plusOne([9,9]));
console.log(plusOne([9,9,9]));
console.log(plusOne([9,9,9,9]));
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,9]));
