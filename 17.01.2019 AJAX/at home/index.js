var btn = document.getElementById('start');

btn.onclick = function () {

    var option = {
        method:'GET'
    };
    var promise = fetch('https://api.exchangeratesapi.io/history?start_at=2019-01-06&end_at=2019-01-20&symbols=USD', option).then(function (response) {
        return response.json();
    });
     promise
        .then(function(response){
            return response
        })
        .then(function (data) {
            var dates = [];
            var valuesUsd = [];
            console.log(data);
            for (var date in data.rates){
                dates.push(date)
                valuesUsd.push(data.rates[date].USD);
            }
            console.log(dates);
            console.log(valuesUsd);
            var ctx = document.getElementById('myChart').getContext('2d');
            var chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: dates,
                    datasets: [{
                        label: "EUR to USD per last 14 days",
                        backgroundColor: '#FD0A0A',
                        borderColor: '#000000',
                        data: valuesUsd,
                    }]
                },
                options: {}
            });

        });
};





