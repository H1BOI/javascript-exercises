const repeatString = function(string, num) {
    let container = "";
    if (num < 0) {
        return "ERROR";
    }
    for (i = 0; i < num; i++) {
        container += string;
    }

    return container;
};

// Do not edit below this line
module.exports = repeatString;
