// function plural(n) {
//     if (n === 1) {
//         return false;
//     }
//     else {
//         return true;
//     }
// }
// let result = plural(100);
// console.log(result)
// console.log(plural(1))

// ниже лучшие решения из codewars
function pluralTo(n) {
    return n !== 1;
}

function pluralPl(n) {
    return n === 1 ? false : true;
}

console.log(pluralPl(1));
console.log(pluralPl(0));