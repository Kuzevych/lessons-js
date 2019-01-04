
var labels = document.querySelectorAll('table label');

var lab = document.getElementsByTagName('table')[0]
    .getElementsByTagName('label');


var table = document.getElementsByTagName('table')[0];
var firstTd = table.rows[0].cells[0];


var secForm = document.getElementsByTagName('form')[1];


var forms = document.getElementsByTagName('form');
var searchForm = document.getElementsByName('search')[0];

var searchInput = document.querySelector('input[name="search"]');
var inputs = document.getElementsByTagName('input');
var searchInput2 = Array.prototype.find.call(inputs, function (item) {
    return item.getAttribute('name')==='search';
});


console.log(labels);
console.log(lab);
console.log(firstTd);
console.log(secForm);
console.log(searchForm);
console.log(searchInput);
console.log(searchInput2);
//console.log(search);
// var secondForm = document.querySelectorAll('form');
// console.log(secondForm[1]);