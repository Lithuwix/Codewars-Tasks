// You are given two interior angles (in degrees) of a triangle.
// Write a function to return the 3rd.
// Note: only positive integers will be tested.
// https://en.wikipedia.org/wiki/Triangle

const otherAngle = (a: number, b: number): number => {
    return 180 - (a + b);
}

otherAngle(12, 98)

// best solution

// const FULL_TRIANGLE: number = 180;
//
// export const otherAngle = (firstAngle: number, secondAngle: number) => {
//     return FULL_TRIANGLE - firstAngle - secondAngle;
// }