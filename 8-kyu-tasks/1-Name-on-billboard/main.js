// name - имя, содержит определенное кол-во символов
// price - цена за 1 символ, она может меняться если передать другой параметр
function billboardMy(name, price = 30) {
    let sum = 0;
    for (let i = 0; i < name.length; i++) {
        sum = sum + price;
    }
    return sum;
}

let summ = billboardMy("Viktoria Popova");
console.log(summ)


// лучшее решение из codewars
function billboard(name, price = 30) {
    let totalCost = 0;
    for (i = 0; i < name.length; i++) {
        totalCost += price;
    }
    return totalCost;
}

billboard("sdadsadsa", 900)