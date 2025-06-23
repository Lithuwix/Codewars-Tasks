function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
        return [];

    var positive = 0;
    var negative = 0;

    for (var i=0, l=input.length; i<l; ++i)
    {
        if (input[i] > 0)
            ++ positive;
        else
            negative += input[i];
    }

    return [positive, negative];
}

console.log(countPositivesSumNegatives([32,1,-231,-111,0,0,0,1112,3]));