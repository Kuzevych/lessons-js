'use strict';

// var number = 5;
// var string = 'Hello World';
// var obj = {};
// var bool = Boolean;
// var und;
// var nulll = null;
//
// console.log(typeof number);
// console.log(typeof string);
// console.log(typeof obj);
// console.log(typeof bool);
// console.log(typeof und);
// console.log(typeof nulll);

// var string = '123Panda';
// //
// // var newString =  string.slice(3);
// // var newNumber = Number(string.slice(0,3));
// //
// // console.log(newString);
// // console.log(newNumber);
//
// console.log(typeof newNumber);
// console.log(typeof newString);
//
// let numberArray = [];
// let stringArray = [];
//
// var array = string.split('');
// console.log(array);
//
// var i =0;
// while (i<array.length) {
//     if (Number(array[i])) {
//         numberArray.push(array[i]);
//     } else if (String(array[i])) {
//         stringArray.push(array[i]);
//     }
//     i++
// }
// var finalNumber = numberArray.join('');
// Number(finalNumber);
//
// console.log(finalNumber);
//
// var finalString = stringArray.join('');
//
// console.log(finalString);

var number = prompt('Введіть свій вік',18);

if (number>=18 && number<100) {
    alert('Вам можна продати алкоголь');
} else if (number>=100) {
    alert('Може вже не варто?')
} else {
    alert('Підростіть ще трохи');
}
