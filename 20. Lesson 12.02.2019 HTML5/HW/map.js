

var mymap = L.map('mapid').setView([50.4579, 30.4599], 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibWt1emV2eWNoIiwiYSI6ImNqczNiY3V1MjBlazY0NG9lMHBkbDU5czcifQ.wItESjVyrAu64w95xdCKHA'
}).addTo(mymap);

L.marker([50.4571, 30.4591]).addTo(mymap);
L.marker([50.4368, 30.4686]).addTo(mymap);
L.marker([50.4531, 30.4631]).addTo(mymap);