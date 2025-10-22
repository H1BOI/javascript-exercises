const removeFromArray = function(arr, ...targets) {
    const newArray = [];
    
    arr.forEach((item) => {
        if (!targets.includes(item)) {
        newArray.push(item);
        }
    });

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
