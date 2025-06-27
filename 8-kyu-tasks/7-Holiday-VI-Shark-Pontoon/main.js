<!--снизу моё решение-->
function shark(s1, s2, v1, v2, dolphin) {
    let t1, t2;
    t1 = s1 / v1;
    t2 = s2 / v2;

    if (dolphin) {
        t2 = s2 / (v2 / 2);
    }
    if (t1 > t2) {
        return "Shark Bait!";
    }
    if (t1 < t2) {
        return "Alive!";
    }
}

let result = shark(7, 55, 4, 16, true);
console.log(result);




// снизу лучшие решения codewars
function sharkkk(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    if(dolphin){
        sharkSpeed /= 2;
    }
    return pontoonDistance/youSpeed < sharkDistance/sharkSpeed ? "Alive!" : "Shark Bait!";
}

const sharkkkk = (pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) => {
    let youTime = pontoonDistance / youSpeed
    let sharkTime = sharkDistance / (dolphin ? sharkSpeed / 2 : sharkSpeed)

    return sharkTime < youTime ? 'Shark Bait!' : 'Alive!'
}


// function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
//
//     let humanTime = pontoonDistance / youSpeed;
//     let sharkTime = sharkDistance / sharkSpeed;
//
//     if (sharkDistance === 0) {
//         console.log("dharrk");
//     } else {
//         if (dolphin) {
//             let sharkTimeDolph = sharkTime / 2;
//             if (humanTime < sharkTimeDolph) {
//                 return "Alive!";
//             }
//             else {
//                 return "Shark Bait!";
//             }
//         }
//         if (!dolphin) {
//             if (humanTime < sharkTime) {
//                 return "Alive!";
//             }
//             else {
//                 return "Shark Bait!";
//             }
//         }
//     }
// }

// function shark(s1, s2, v1, v2, dolphin) {
//     let t1, t2;
//     t1 = s1 / v1;
//     t2 = s2 / v2;
//
//     if (dolphin) {
//         t2 = t2 / 2;
//     }
//
//     if (t1 > t2) {
//         console.log("dead");
//     }
//     if (t1 < t2) {
//         console.log("alive");
//     }
//
//     console.log(t1);
//     console.log(t2);
//     return 1;
// }