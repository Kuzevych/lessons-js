// function add (a,b) {
//     return a+b;
// }
//
// function partial (fn, a){
//     return fn.bind(null, a);
// }
//
// var add5 = partial(add,5);
// console.log(add5(1));
//
//
// console.assert(add5(1)===6);
// console.assert(add5(8)===13);



// function testFunc(a,b,c) {
//     return ' a=' + a + ' b=' + b + ' c=' + c;
// }
// function partialDeep (fn) {
//     var boundArgs = [].slice.call(arguments, 1);
//     return function(){
//         var count = 0;
//         var testArgs = arguments;
//         var args = boundArgs.map(function (item) {
//             if (!item) {
//                 return testArgs[count++];
//             }
//             return item;
//         });
//         console.log(count);
//         return fn.apply(null, args);
//     }
// }
// var test1_3 = partialDeep(testFunc, undefined, 2, undefined);
// console.log(test1_3(5,3));

