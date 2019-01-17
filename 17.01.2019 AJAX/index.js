//first xhttp Request!!!!!

// var button = document.getElementById('get');
//
// function start(){
//    var xhttp = new XMLHttpRequest();
//    xhttp.open('GET', 'https://api.exchangeratesapi.io/history?start_at=2018-12-20&end_at=2019-01-01',true);
//    xhttp.send();
//    xhttp.onreadystatechange = function(){
//      if(xhttp.status === 200 && xhttp.readyState === 4) {
//          console.log(JSON.parse(xhttp.responseText));
//      }
//    };
// }


//Promise request + fetch!!

var button = document.getElementById('get');

function start(){
    // var promise = new Promise(function(resolve,reject){
    //     var xhttp = new XMLHttpRequest();
    //     xhttp.open('GET', 'https://api.exchangeratesapi.io/latest',true);
    //     xhttp.send();
    //     xhttp.onreadystatechange = function(){
    //         if(xhttp.status === 200 && xhttp.readyState === 4) {
    //             resolve(JSON.parse(xhttp.responseText));
    //         } else if(xhttp.readyState === 4){
    //             reject('ERROR');
    //         }
    //     };
    // });

    var promise = fetch('https://api.exchangeratesapi.io/latest',{
        method:'GET'
    });

    promise
        .then(function (response) {
        //console.log(data);
        return response.json();
    })
        .then(function (data) {
            console.log(data);
        })
        .catch(function(error){
        console.log(error);
    });
}