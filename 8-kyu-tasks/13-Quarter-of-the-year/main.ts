// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
// For example: month 2 (February), is part of the first quarter; month 6 (June),
// is part of the second quarter; and month 11 (November), is part of the fourth quarter.

// 8 kyu

export function quarterOf(month: number): number {
    if (month <= 3)  return 1;
    if (month <= 6)  return 2;
    if (month <= 9)  return 3;
    return 4;
}

console.log(quarterOf(9))

// best solution

// export const quarterOf = (month: number): number => Math.ceil(month / 3);