function flatten(arr) {
    var flattenArr = [];
    for (var i = 0; i < arr.length; i++) {
        if(!Array.isArray(arr[i])){
            flattenArr.push(arr[i]);
        } else {
            for (var j = 0; j < arr[i].length; j++) {
                if(!Array.isArray(arr[i][j])){
                    flattenArr.push(arr[i][j]);
                } else {
                    for (var n = 0; n < arr[i][j].length; n++) {
                        if(!Array.isArray(arr[i][j][n])) {
                            flattenArr.push(arr[i][j][n]);
                        }else {
                            for (var m = 0; m < arr[i][j][n].length; m++) {
                                if(!Array.isArray(arr[i][j][n][m])){
                                    flattenArr.push(arr[i][j][n][m]);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    console.log('Flatten array is: ' + flattenArr);
}

// function flatten(arr) {
//     var newArr = [];
//     for (var i = 0; i < arr.length; i++) {
//         if(!Array.isArray(arr[i])){
//             newArr.push(arr[i]);
//             newArr;
//         } else if (Array.isArray(arr[i])){
//             console.log(arr[i]);
//             flatten(arr[i]);
//         }
//     }
//     console.log(newArr);
// }