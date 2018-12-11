// function logArray(params1){
//     console.log(this);
//     console.log(params1);
// }
//
// var arr = [1,2,3];
// logArray.call(arr, 'test');


// var obj = {
//     testKey: 'test'
// };
// function foo() {
//     console.log (this.testKey);
// }
// foo.call(obj);


// var obj = {
//     testKey: 'test',
//     secKey: 'second',
//     thirdKey: 'third'
// };
// function foo(key, key1){
//     console.log(this[key]);
//     console.log(this[key1]);
// }
// foo.call(obj, 'testKey', 'thirdKey');


// function Human(firstName, secondName) {
//     this.firstName = firstName;
//     this.secondName = secondName; }
//
// function Student(group) {
//     Human.apply(this, [].filter.call(arguments, function(arg, i){
//         return (i!==0)? arg : false;
//     }));
//     this.group = group;
// }
// var student1 = new Student('dits7','test1', 'test2');
// console.log(student1.firstName);
// console.log(student1.secondName);
// console.log(student1.group);


// var obj = {
//     phrase: 'This is '
// };
// var arr = ['Ivan', 'Ivanov'];
// function foo(firstName, lastName){
//     console.log(this.phrase +  firstName + ' ' + lastName);
// }
// foo.apply(obj, arr);
// foo.call(obj, 'Ivan2', 'Ivanov2');


// var obj = {
//     name: 'Ko',
//     surname: 'Ku'
// };
// function logArray(param1) {
//     console.log(this);
//     console.log(param1);
// }
// var bindeObj = logArray.bind(obj, 'test');
// var bindeStr = logArray.bind(obj, 'test');
// bindeObj();
// bindeStr();



// var obj = {
//     name: 'Ko',
//     surname: 'Ku'
// };
// function logArray(param1) {
//     console.log(this);
//     console.log(param1);
// }
// var str = 'hello'
// //var bindeObj = logArray.bind(obj, 'test');
// var bindeStr = logArray.bind('str', 'test');
// //bindeObj();
// bindeStr();


//Каррирование
// function mul(a,b){
//     return a * b;
// }
// var double = mul.bind(null, 2);
// double
// console.log(double(3));
// console.log(double(4));
// console.log(double(5));


//try+catch
//JSON.parse + JSON.stringify
// try {
//     let user = {
//         firstName: 'Ko',
//         lastName: 'Ku'
//     };
//     var jsonUser = JSON.stringify(user, function(key,value){
//         if (key==='lastName') {
//             return 'test';
//         } else {
//             return value;
//         }
//     },4);
// //   var errJsonUser = jsonUser + 123;
//     var parsedUser = JSON.parse(jsonUser, function(key,value){
//         if (key==='lastName') return undefined;
//         return value;
//     });
//     console.log(parsedUser);
// } catch (err) {
//     console.log(err);
// } finally {
//     console.log(jsonUser);
// }