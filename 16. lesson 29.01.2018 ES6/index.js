// for (let i = 0; i < 10; i++) {
//     console.log(`external ${i}`);
//     // console.log(i);
// }


//MAX NUMBER  IN ARRAY!!!!!!!
// let arr = [1,4,7,4,-5];
// console.log(Math.max(...arr));



// const obj = {
//     name: 'Ivan',
//     secondName: 'Ivanov',
//     age: 25
// };
//
// const {name, secondName, age} = obj;
// console.log(name);



//merge OBject
// const obj1 = {
//     name: 'Ivan',
//     secondName: 'Ivanov',
//     age: 25
// };
// const obj2 = {
//     subject: 'JS',
//     group: 'DITS-7'
// };
// const result = {
//     ...obj1,
//     ...obj2,
//     email: 'email@email.com'
// }
// console.log(result);



// function foo(str,...rest) {
//     console.log(str);
//     console.log(rest);
// }
//
// foo('AAAAA', true, 2, {name:'Ivan'});


// const user = {
//     name: 'Ivan',
//     age: 24,
//     // getName(){
//     //     return this.name;
//     // },
//     getName2(){
//         [1,2,3].forEach(item =>{
//             console.log(`${item}: ${this.name}`);
//         })
//     }
// };
//
// user.getName2();

//ITERATORS
// const symbol = Symbol('iter');
// const symbol2 = Symbol.for('iter');
//
// const obj = {
//     name: 'Ivan',
//     age: 24,
//     [symbol]: 'test',
// };
// console.log(obj[symbol]);
// Object.keys(obj).forEach(key => console.log(key));



// const obj = {
//     from: 0,
//     to: 10,
//     [Symbol.iterator]() {
//         let current = this.from;
//         const last = this.to;
//         return {
//             next() {
//                 if (current <= last) {
//                     return {
//                         done: false,
//                         value: current++,
//                     };
//                 } else {
//                     return {
//                         done: true
//                     };
//                 }
//             }
//         };
//     }
// };
//
// for (let count of obj) {
//     console.log(count);
// }


//ITERATOR COUNT
// function* Counter(start, end) {
//     for (let i = start; i < end; i++) {
//         yield i;
//     }
// }
// const counter = Counter(0,10);
// console.log(counter.next());
// console.log(counter.next());
// console.log(counter.next());
// console.log(counter.next());
// console.log(counter.next());
// console.log(counter.next());
// console.log(counter.next());
// console.log(counter.next());
// console.log(counter.next());
// console.log(counter.next());

