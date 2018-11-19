function flatten(arr) {
    var newArr = [];
    for (var i=0; i<arr.length; i++) {
        if(!Array.isArray(arr[i])){
            newArr.push(arr[i]);
            console.log(arr[i]);
        } else {
            for (var j=0; j<arr[i].length; j++) {
                if (!Array.isArray(arr[i][j])){
                    newArr.push(arr[i][j]);
                    console.log(arr[i][j]);
                } else {
                    for(var b=0; b<arr[i][j]; b++) {
                        if (!Array.isArray(arr[i][j][b])){
                            newArr.push(arr[i][j][b]);
                            console.log(arr[i][j][b]);
                        } else {
                            for (var n=0; n<arr[i][j][b]; n++) {
                                if(!Array.isArray(arr[i][j][b][n])); {

                                }
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(newArr);
}

flatten([1, [2, [3, [4]], 5]]);

