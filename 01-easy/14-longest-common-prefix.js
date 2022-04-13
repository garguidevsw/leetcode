// Constraints
// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English letters.


// const strs = ["flowers","flow","flight"];
// const strs = ["a"];
// const strs = ["flower","flower","flower","flower"];


/// Wrong result
const strs = ["ab", "a"];

const longestCommonPrefix = (strs) => {

    let result = "";
    let status = false;

    if(strs.length >= 2){

        const maxLength = strs.reduce( (previus, current ) => {
            if( previus < current.length ){
                return current.length;
            }else{
                return previus;
            }
        }, 0);

        console.log(maxLength);
    
        for(let i=1; i <= maxLength; i++){
            result = strs[0].substring(0, i);
            console.log('resultX: ', result);
            status = strs.every( str => str.substring(0, i) == result );
    
            if(!status){
                break;
            }
            
        }

        // result = result.slice(0, -1);
    }else{
        result = strs[0];
    }
    


    console.log(result);
};

longestCommonPrefix(strs);