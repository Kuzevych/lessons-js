var table = document.createElement('table');
document.body.appendChild(table);
var tr;
var td;
for (var i = 1; i<= 10; i++) {
    tr = table.appendChild(document.createElement('tr'));
    for (var j = 1; j <= 10; j++){
        td = tr.appendChild(document.createElement('td'));
        td.innerHTML = j;

    }
}

console.log(table);