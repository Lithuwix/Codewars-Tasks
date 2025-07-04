// Complete the function which takes two arguments and returns all numbers which are
// divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

// Example(Input1, Input2 --> Output)
// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

export function divisibleBy( numbers: number[], divisor: number ): number[] {
    return numbers.filter(x => x % divisor === 0)
}

divisibleBy([1, 2, 12, 4, 5, 7], 5)
