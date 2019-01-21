var btn = document.getElementById('start');


btn.onclick = function () {
    var option = {
        method:'GET'
    };

    var promise = fetch('https://api.exchangeratesapi.io/history?start_at=2019-01-07&end_at=2019-01-20&symbols=USD', option).then(function (response) {
        return response.json();
    });

    promise
        .then(function(response){
            return response
        })
        .then(function (data) {
            console.log(data);
        });
};

