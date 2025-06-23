// Write a function which calculates the average of the numbers in a given array.
// Note: Empty arrays should return 0.

export function findAverage(array: number[]): number {
    if (array.length === 0) return 0;
    const sum = array.reduce((a, b) => a + b);
    return sum / array.length;
}

console.log(findAverage([1,4,6,7]))

// best solution

// export function findAverage(array: number[]): number {
//     return !array.length ? 0 : array.reduce((a, b) => a + b, 0) / array.length;
// }