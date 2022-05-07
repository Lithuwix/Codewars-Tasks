console.log('init log');

let humanYearsCatYearsDogYears = function(humanYears) {
    if (humanYears === 1) {
        return [humanYears, humanYears + 14, humanYears + 14];
    }
    else if (humanYears === 2) {
        return [humanYears, 15 + 9,  15 + 9];
    }
    else {
        return [humanYears, 24 + (humanYears - 2) * 4, 24 + (humanYears - 2) * 5];
    }
}
let results = humanYearsCatYearsDogYears(3);
console.log(results);



