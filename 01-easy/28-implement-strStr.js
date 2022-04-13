// 28. Implement strStr()

// @param {string} haystack
// @param {string} needle
// @return {number}

/// Its OK
const strStr = (haystack, needle) => {
    return haystack.indexOf(needle);
};

const resp = strStr('hello', 'll');

console.log(resp);