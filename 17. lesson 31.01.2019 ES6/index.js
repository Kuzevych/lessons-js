
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




// const getFullName = (name, surname) => `${name} ${surname}`;
//
// const proxyFunc = new Proxy(getFullName, {
//     apply(target, thisPointer, args) {
//         return `FullName: ${target.apply(null,args)}`;
//     }
// });
// console.log(getFullName('name','Surname'));
// console.log(proxyFunc('test','test'));


// const obj = {
//     prop1: 'value1',
//     prop2: 'value2',
//     prop3: 'value3',
// };
// const mergeBoth = ({ prop1, prop2}) => `${prop1} ${prop2}`;
// console.log(mergeBoth(obj));



const currencyMap = new Map();
// currencyMap.set('usd',28);
// currencyMap.set('eur',32);
// currencyMap.set('rub',0.4);
// console.log(currencyMap);
// const arr = [];
// currencyMap.forEach((value,key) => {
//    if (value > 25) {
//        arr.push(key);
//    }
// });
// console.log(arr);
//
// const values = currencyMap.values();
// const keys = currencyMap.keys();
// const entries = currencyMap.entries();
// console.log(values);
// console.log(keys);
// console.log(entries);


//Collection SET
// const set = new Set();
//
// set.add(1);
// set.add(2);
// set.add(3);
// set.add(4);
// set.add('hello');
// set.has(2);
//
//
// for (let key of set) {
//     console.log(key);
// }



