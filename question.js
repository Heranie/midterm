/**
 * reverse a string
 * @param {string} str // the string to be reversed
 * @return {string} //the reversed string
 */
 function reverseString(str) {
    // convert the string to an array, reverse it and join it back to the string
    return str.split('').reverse().join('');
}

console.log(reverseString("hello"));