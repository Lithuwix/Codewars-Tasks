// Given an array of ones and zeroes, convert the equivalent binary value to an integer.
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15

function binaryArrayToNumber( arr: number[] ): number {
    let result = 0
    arr.reverse().forEach((el, index) => {
        if (el === 0) return;
        result = result + Math.pow(2, index);
    })
    return result;
}

binaryArrayToNumber([1, 1, 1, 1])

// best solution

// export function binaryArrayToNumber(arr: number[]): number{
//   return parseInt(arr.join(""), 2)
// };

// export function binaryArrayToNumber(arr: number[]): number{
//   return arr.reduce((a,b)=>a<<1|b,0)
// };