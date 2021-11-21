// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.
// Example 1:
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:
// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]
// Constraints:
// ● 1 <= s.length <= 100
// ● s[i] is a printable ascii character.
// Solve it in 3 different ways -
// - With JS functions only (e.g split, etc.)
// - With loop (for)
// - With recursion

const s = ["h","e","l","l","o"];
const jsOnly = str =>{
    return str.reverse();
}
console.log(jsOnly(s));

s.reverse();

const loop = str =>{
    let res ='';
    for(let i = str.length; i>0; i--){
        res+=(str[i-1]);
    }
    return res.split('');
}
console.log(loop(s));


const rec = str =>{
    if(str =='')
        return '';  
    return rec(str.slice(1)) + str[0];
}
const recursion = str => rec(str).split(''); 

console.log(recursion(s));