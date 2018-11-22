

function sort(arr) {
    var i =0;
    while(i<arr.length){
        if (arr[i]>arr[i+1]){
            var swap = arr[i];
            arr[i]=arr[i+1];
            arr[i+1]=swap;
            i=0;
            continue;
        }
        i++;
    }
    console.log(arr);
}

sort([19,8,9,5,45,11])