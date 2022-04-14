
// @param {string} a
// @param {string} b
// @return {string}

// It's OK
const addBinary = (a, b) => {
    const arrayA = a.split('');
    const arrayB = b.split('');
    let acarreo = 0;
    let result;
    let sum = [];
    let num1;
    let num2;

    while(arrayA.length > 0 || arrayB.length > 0){
        if(arrayA.length == 0){
            num1 = '0'
        }else{
            num1 = arrayA.pop();
        }

        if(arrayB.length == 0){
            num2 = '0'
        }else{
            num2 = arrayB.pop();
        }

        [result, acarreo] = sumBinary(num1, num2, acarreo);

        sum.unshift(result);
    }
    if(acarreo == '1') sum.unshift('1');


    console.log(sum.join(''));


};

const sumBinary = (a, b, c) => {
    let result;
    let acarreo;
    if( a == '0' && b == '0' && c == '0'){
        result = '0';
        acarreo = '0';
    }else if(a == '0' && b == '0' && c == '1'){
        result = '1';
        acarreo = '0';
    }else if(a == '0' && b == '1' && c == '0'){
        result = '1';
        acarreo = '0';
    }else if(a == '0' && b == '1' && c == '1'){
        result = '0';
        acarreo = '1';
    }else if(a == '1' && b == '0' && c == '0'){
        result = '1';
        acarreo = '0';
    }else if(a == '1' && b == '0' && c == '1'){
        result = '0';
        acarreo = '1';
    }else if(a == '1' && b == '1' && c == '0'){
        result = '0';
        acarreo = '1';
    }else if(a == '1' && b == '1' && c == '1'){
        result = '1';
        acarreo = '1';
    }

    return [result, acarreo];
}

addBinary('111', '111');