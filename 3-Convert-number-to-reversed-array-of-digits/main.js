function digitize(n) {
    let num = String(n).split('').reverse();

    let newArray = []
    for (let i=0; i < String(n).length; i++) {
        newArray.push(Number(num[i]));
    }
    return newArray;
}
let digitArray = digitize(1277);
console.log(digitArray);

//ниже лучшее решение из codewars
function digitizeCW(str) {
    // внутри записан метод map, он возвращает массив от исходного, используя callback функцию для каждого нового элемента
    return String(str).split('').map(Number).reverse()
}
let anw = digitizeCW(0);
console.log(anw)