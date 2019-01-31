//geter seter for object

// const user = {
//   name: 'Ivan',
//   surname: 'Ivanov',
//   age: 25,
// };
//
// const proxyUser = new Proxy(user, {
//     // target це - proxyUser
//    get(target, key){
//        return `My ${key} is ${target[key]}`;
//    },
//    set(target, key, value) {
//        if (key === 'surname')return false;
//        target[key]=value;
//    },
//     has(target, key) {
//         return key !== 'age'; // працює як if==='age' return false інакше return true
//     },
//     deleteProperty(target, key) { //Заборона видаляти key
//         if(key==='age') return false;
//         target[key] = 'empty';
//         return true;
//    }
// });
//
// proxyUser.surname = 'Stephan'; //через сетер ми не можемо міняти user.surname
// console.log(proxyUser.name);
// console.log(proxyUser.age);
// console.log(user.name);
// console.log(user.age);
// delete proxyUser.age;
// delete proxyUser.name;
// for(let key in proxyUser){
//     console.log(proxyUser[key]);
// }

