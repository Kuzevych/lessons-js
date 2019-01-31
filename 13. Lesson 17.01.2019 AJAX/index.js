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
setInterval(
var button = document.getElementById('get');
function start() {
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
    var options = {
        method: 'GET'
    };
    var promise = fetch('https://api.exchangeratesapi.io/latest', options).then(function (response) {
        return response.json();
    });
    var promise2 = fetch('https://api.exchangeratesapi.io/latest?symbols=USD,GBP', options).then(function (response) {
        return response.json();
    });
    var promise3 = fetch('https://api.exchangeratesapi.io/history?start_at=2018-01-01&end_at=2018-09-01', options).then(function (response) {
        return response.json();
    });
    Promise.all([
        promise, promise2, promise3
    ])
        .then(function (response) {
            return response;
        })
        .then(function (data) {
            console.log(data);
        })
}
    // promise
    //     .then(function (response) {
    //         return response.json();
    //     })
    //     .then (function(data){
    //         console.log(data);
    //         if(data.base === 'EUR'){
    //             return promise2;
    //         }
    //     })
    //     .then(function (promise2Response) {
    //     //console.log(data);
    //     return promise2Response.json();
    // })
    //     .then(function (response2) {
    //         console.log(response2);
    //     })
    //     .catch(function(error){
    //     console.log(error);
    // });
