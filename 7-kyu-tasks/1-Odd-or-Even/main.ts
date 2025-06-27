// Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"
//
// Input: [0, 1, 4]
// Output: "odd"
//
// Input: [0, -1, -5]
// Output: "even"

function oddOrEven(array: number[]) {
    if (array.length === 0) return 'even';
    const a = array.reduce((a, b) => a + b);
    return a % 2 === 0 ? 'even' : 'odd';
}

oddOrEven([-7, 0, 14])

// best solution

// export function oddOrEven(array: number[]) {
//   return array.reduce((sum, value) => sum += value, 0) % 2 === 0 ? 'even' : 'odd';
// }