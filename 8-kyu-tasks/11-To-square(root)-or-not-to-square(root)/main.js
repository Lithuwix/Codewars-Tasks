let numsArray = [ 100, 101, 5, 5, 1, 1 ];

function squareOrSquareRoot(arr) {
    let newNumsArray = [];
    for (let i = 0; i < arr.length; i++) {
        let sq = Math.sqrt(arr[i]);
        if (Number.isInteger(sq)) {
            newNumsArray.push(sq);
        }
        else {
            newNumsArray.push(arr[i]*arr[i]);
        }
    }
    return newNumsArray;
}

let result = squareOrSquareRoot(numsArray);
console.log('init log');
console.log(result);


// function squareOrSquareRoot(array) {
//     return array.map(x => {
//         const r = Math.sqrt(x);
//         return (r % 1 == 0) ? r : (x*x);
//     });
// }