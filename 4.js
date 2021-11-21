// Write a JavaScript program to compute the exponent of a number.
// Note: The exponent of a number says how many times the base number is used
// as a factor.
// 82 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.

const exponent = (base, appreciate)=>{
    if(appreciate == 0)
        return 1;
    return base*exponent(base,appreciate-1);    
}
console.log(exponent(3,3));