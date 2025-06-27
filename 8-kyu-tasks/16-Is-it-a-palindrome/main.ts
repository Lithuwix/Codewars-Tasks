// Write a function that checks if a given string (case-insensitive) is a palindrome.
// A palindrome is a word, number, phrase, or other sequence of symbols that reads the
// same backwards as forwards, such as madam or racecar.

function isPalindrome(x: string): boolean {
    const reversedString: string = x.split("").reverse().join('')
    return x.toLowerCase() === reversedString.toLowerCase()
}

isPalindrome("Madam")


// best solution

// export function isPalindrome(x: string): boolean {
//     return x.toLowerCase().split('').reverse().join('') == x.toLowerCase()
// }