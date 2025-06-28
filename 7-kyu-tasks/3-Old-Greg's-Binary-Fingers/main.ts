// To do this he holds his right hand up, palm facing toward him,
// fist closed and then counts in binary using his fingers.

// First he sticks his thumb out which makes 1, then just his
// index finger which makes 10 (decimal 2), then Index and thumb
// which makes 11 (decimal 3), then just his middle finger which makes
// 100 (decimal 4) and so on up to all five fingers out which makes 11111 (decimal 31).

// Incidentally this is why when Old Greg is annoyed with you he says:
// Just let me count to 4 in binary (a joke only for IT people I think!).

// You need to create a function: binaryFingers into which will be
// passed a string of 1s and 0s, it should return an array showing
// which of Old Greg's digits which are up, left to right, as Old Greg sees them:
// so:
// BinaryFingers.GetFingers("101") should return {"Middle", "Thumb"}
// BinaryFingers.GetFingers("11111") should return {"Pinkie", "Ring", "Middle", "Index", "Thumb"}

// You can be sure that the input parameter string will never contain more than 5 digits
// (although this wouldn't work for Old Greg's friend Lucky Bob who has six fingers and can count to 63).
// An empty string should return an empty array.

// best solution

const FINGERS = ["Pinkie", "Ring", "Middle", "Index", "Thumb"];

export function binaryFingers(binString: string): string[] {
    // @ts-ignore
    const infoStr = binString.padStart(5, "0");
    const resultArr: string[] = [];

    for (let k = 0; k < 5; k++) {
        if (infoStr[k] === "1") {
            resultArr.push(FINGERS[k]);
        }
    }
    return resultArr;
}

// my solution

// function binaryFingers( binString: string ): string [] {
//     if (binString.length === 0) return [];
//     const binArr = binString.split("");
//     if (binArr.length < 5) {
//         for (let i = 0; binArr.length !== 5; i++) {
//             binArr.unshift('0');
//         }
//     }
//     const result: Array<string | undefined> = binArr.map((bin, index) => {
//         if (bin === '1' && index === 0) return 'Pinkie'
//         if (bin === '1' && index === 1) return 'Ring'
//         if (bin === '1' && index === 2) return 'Middle'
//         if (bin === '1' && index === 3) return 'Index'
//         if (bin === '1' && index === 4) return 'Thumb'
//     }).filter(Boolean);
//     return result as Array<string>;
// }

binaryFingers('1000')

// other

// export function binaryFingers(binString: string): string[] {
//
//     const sample = ["Thumb", "Index", "Middle", "Ring", "Pinkie"]
//
//     return binString.trim() === "" ? [] : binString
//         .split("")
//         .reverse()
//         .reduce((acc, curr, i) => {
//             if (curr === "1") {
//                 acc.push(sample[i])
//             }
//             return acc
//         }, [] as string[])
//         .reverse()
// }

// other

// export function binaryFingers(binString: string): string[] {
//     const fingers = ['Pinkie', 'Ring', 'Middle', 'Index', 'Thumb']
//     const usedFingers = []
//
//     binString = binString.padStart(5, '0')
//
//
//     for (const [index, char] of [...binString].entries()) {
//         if (char === '1') usedFingers.push(fingers[index])
//     }
//
//     return usedFingers;
// }