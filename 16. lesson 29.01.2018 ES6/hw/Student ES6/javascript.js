class Student {
    constructor(name,surname,grades){
        this.name = name;
        this.surname = surname;
        this.grades = grades;
    }
    fullName(){
        return `${this.name} ${this.surname}`;
    }
}

const student1 = new Student('Ko','Ku',[3,4,5]);
console.log(student1.fullName());
const student2 = new Student('Semen', 'Semenov', [3, 5, 5]);
const student3 = new Student('Petr', 'Petrov', [4, 3, 5]);