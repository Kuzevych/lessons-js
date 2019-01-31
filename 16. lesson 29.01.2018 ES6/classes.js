// class Human {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     getName() {
//         return this.name;
//     }
//     getInfo() {
//         return `
//         name: ${this.name},
//         age: ${this.age},
//         `;
//     }
// }
//
// class Student extends Human{
//     constructor(name, age, secondName){
//         super(name, age);
//         this.secondName = secondName;
//     }
//     getFullName(){
//         return `fullName is: ${this.getName()} ${this.secondName}`
//     }
//     getInfo() {
//         return `
//         name: ${this.name},
//         age: ${this.age},
//         secondName: ${this.secondName}
//         `;
//     }
//     showInfo(){
//         return(super.getInfo());
//         //return(this.getInfo());
//     }
//     static sayHello(){
//         return ('Hello, students ');
//     }
//     getName() {
//         return Student.sayHello()+ this.name;
//     }
// }
//
// const student = new Student('Ivan',24, 'Ivanov');
//
// console.log(student);
// console.log(student.getFullName());
// console.log(student.showInfo());
// console.log(student.getName());
