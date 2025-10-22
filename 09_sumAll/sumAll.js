const sumAll = function(int1, int2) {
    let sum = 0;

    if (int1 < 0 || int2 < 0) {
        return "ERROR";
    }

    if (Number.isInteger(int1) && Number.isInteger(int2)) {
        ;
    } else {
        return "ERROR";
    }

    if (int1 < int2) {
        var first = int1;
        var second = int2;
    } else {
        var first = int2;
        var second = int1;
    }

    for (i = first; i < second+1; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
