function stringCLEAN(str) {
    return str.replace(/\d/g, "");
}

console.log(stringCLEAN("строка21 с3 цифрам443и без цифр"));


//     //ниже показано весьма упоротое решение задачи, но мне хотелось решить задачу с помощью разделения изначальной строки на массив ее символов
//     let STRING = '123z';
//     stringARRAY = STRING.split('');
//
//     for (let i = 0; i < STRING.length; i++) {
//         if (stringARRAY[i] === "1" || stringARRAY[i] === "2" || stringARRAY[i] === "3" || stringARRAY[i] === "4" || stringARRAY[i] === "5" || stringARRAY[i] === "6" ||
//             stringARRAY[i] === "7" || stringARRAY[i] === "8" || stringARRAY[i] === "9" || stringARRAY[i] === "0"
//         ) {
//             console.log('GOTCHA')
//             console.log("HERE " + stringARRAY[i])
//             stringARRAY[i] = '';
//             console.log(stringARRAY[i])
//         } else {
//             console.log("none")
//             console.log('nu ladno...')
//             console.log(stringARRAY)
//         }
//     }
//     STRING = stringARRAY.join('')
//     console.log("this string - " + STRING)
//
//
//     //здесь решение чуть лучше
//     let s = "string";
//
//     function stringClean(s) {
//         let sARRAY = s.split("");
//
//         for (let i = 0; i < s.length; i++) {
//             if (sARRAY[i] === "1" || sARRAY[i] === "2" || sARRAY[i] === "3" || sARRAY[i] === "4" || sARRAY[i] === "5" || sARRAY[i] === "6" ||
//                 sARRAY[i] === "7" || sARRAY[i] === "8" || sARRAY[i] === "9" || sARRAY[i] === "0"
//             ) {
//                 sARRAY[i] = '';
//             } else {
// //             console.log("ok")
//             }
//         }
//         console.log("old string - " + s)
//         s = sARRAY.join('')
//         console.log("this string - " + s)
//         return (s)
//     }
//
//     stringClean("какая-то ст3рока")