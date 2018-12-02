

var flattenArr = [];

function flatten(arr) {
    for (var i = 0; i < arr.length; i++) {
        if(!Array.isArray(arr[i])){
            flattenArr.push(arr[i]);
        } else {
            flattenArr.push(flatten(arr[i]));
        }
    }
    return flattenArr;
}

const flatArr = flatten([1, [2, [3, [4]], 5]]);

var finishArr = [];
for (var j=0; j<flatArr.length;j++) {
    if(Number(flatArr[j])){
        finishArr.push(flatArr[j]);
    }
}

console.log(finishArr);