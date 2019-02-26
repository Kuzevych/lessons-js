
fetch('https://api.currentsapi.services/v1/search?type=1&language=en').then(response => response.json())
    .then(data => {
        console.log(data);
    });