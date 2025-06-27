function opposite(number) {
    if (number >= 0) {
        return -number
    }
    if (number < 0)
        return number * (-1)
}

function opp(number) {
    return -number
}

console.log(opposite(-1))
console.log(opp(-1))