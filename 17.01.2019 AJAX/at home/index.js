var btn = document.getElementById('start');

btn.onclick = function () {
    var option = {
        method:'GET'
    };
    var promise = fetch('https://api.exchangeratesapi.io/history?start_at=2019-01-07&end_at=2019-01-20&symbols=USD,RUB', option).then(function (response) {
        return response.json();
    });
     promise
        .then(function(response){
            return response
        })
        .then(function (data) {
            for (var key in data) {
                 if (typeof data[key] === 'object') {
                     //console.log(data[key]);
                     for (var i in data[key]){
                         console.log(data[key][i]);
                     }
                 }
            }
            //console.log(data);
        });
};






