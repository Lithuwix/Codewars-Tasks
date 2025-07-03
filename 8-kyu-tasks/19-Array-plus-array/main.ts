// I'm new to coding and now I want to get the sum of two arrays...
// Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

const arrayPlusArray = (arr1 : number[], arr2 : number[]) : number => {
    return arr1.concat(arr2).reduce((a: number, b: number) => a + b)
}

console.log(arrayPlusArray([2,4,1], [90,1,10,0,0,0,2]))