// console.log(1);
// setTimeout('console.log(2)',100);
// console.log(3);
// setTimeout('console.log(4)',4);
//


// for (let i = 0; i < 10; i++) {
//     setTimeout('console.log(i)',500);
// }


// var test1 = {a: 1,
//     b: 2,
//     c: 3
// };
// var countTest1 = 0;
// for (var i in test1) {
//     countTest1 ++;
// }
// console.log(countTest1);
//
//
// var test2 = function(){};
// var countTest2 = 0;
// for (var i in test1) {
//     countTest2 ++;
// }
// console.log(test2.length);
//
// var test3 = [1, 2, 3, 4];
// console.log(test3.length);
//
// var test4 = [];
// test4[100] = 1;
// var countTest4 = 0;
// for (var i in test4) {
//     countTest4++;
// }
// console.log(countTest4);
//
//
// var countTest = 0;
// function getCount (test) {
//     if (test !== Array) {
//         for (var i in test) {
//             countTest++;
//         }
//         console.log(countTest);
//     } else {
//         console.log(test.length);
//     }
// }
//
// getCount(test4);


// var test = [
//     {'firstName': 'test1', 'secondName': 'test3'},
//     {'firstName': 'test2', 'secondName': 'test4'},
// ];
// function getField(arr, get){
//     for (var i = 0; i < arr.length; i++) {
//         for (var j in arr[i]) {
//             if (j===get) {
//                 console.log(arr[i][j]);
//             }
//         }
//     }
// }
// getField(test, 'firstName');


// function initCounter() {
//     var count = 1;
//     return function (){
//         return count++;
//     }
// }
//
// var counter = initCounter();
// var counter2 = initCounter();
//
// alert(counter());
// alert(counter());
// alert(counter());
// alert(counter());


// function makeCounter (first, step){
//     var count = first;
//     return function(){
//         return count+=step;
//     }
// }
//
// var counter = makeCounter(0,2);
//
// function pick(myCount, step){
//     var array = [];
//     for (var i = 0; i<step; i++){
//         array.push(counter());
//     }
//     return array;
//     // console.log(array);
// }
//
// console.log(pick(counter,5));


// function square (x) {
//     return x*x;
// }
//
// function map(number,array) {
//     var newArr = [];
//     for (var i = 0; i < array.length ; i++) {
//         newArr.push(square(array[i]));
//     }
//     return newArr;
// }
// console.log(map(square,[4,5,6,7,8,9]));
// console.log(map(square, []));


// var input = [1, 2, 3, 4, 5,]
//
// function isObb(x) {
//     if (x%2===1){
//         return x;
//     }
// }
// function filter(array, func){
//     var newArr =[];
//     for (var i = 0; i < array.length; i++) {
//         if (func(array[i])){
//             newArr.push(array[i]);
//         }
//     }
//     return newArr;
// }
// console.log(filter(input, isObb));

