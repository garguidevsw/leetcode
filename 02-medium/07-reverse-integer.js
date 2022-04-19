// -2147483648 to 2147483647
const reverse = (x) => {
    
    const str = x.toString();
    let arr = str.split('');
    let signed = false;
    if(arr[0] == '-'){
        arr.shift();
        signed = true;
    }
    arr.reverse();

    if(signed){
        arr.unshift('-');
    }

    const y = parseInt(arr.join(''), 10)

    if(y <= -2147483648 || y >= 2147483647 ) return 0;
    
    return y;
};

const reverse2 = (x) =>{
    let signed = false;
    if(x < 0) {
        signed = true;
    }

    let str = Math.abs(x).toString();
    let arr = str.split('').reverse();

    let res = parseInt(arr.join(''), 10);

    if(signed) res = res*-1;

    if(res <= -2147483648 || res >= 2147483647 ) return 0;
    
    return res;
}

console.log(reverse(2147483648));
console.log(reverse2(120));