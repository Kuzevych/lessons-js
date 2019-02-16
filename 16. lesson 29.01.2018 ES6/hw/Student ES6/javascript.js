class Student {
    constructor(name,surname,grades){
        this.name = name;
        this.surname = surname;
        this.grades = grades;
    }
    fullName(){
        return `${this.name} ${this.surname}`;
    }
    gradesAverage(){
        let avg = this.grades.reduce((sum, cur) => {
            return sum + cur;
        });
        return (avg / this.grades.length).toFixed(2);
    }
    _showName(){
        return `Name is:${this.name}`;
    }
}

const student1 = new Student('Ko','Ku',[5,5,5]);
console.log(student1.fullName());
console.log(student1.gradesAverage());
const student2 = new Student('Semen', 'Semenov', [3, 5, 5]);
const student3 = new Student('Petr', 'Petrov', [4, 3, 5]);

console.log(student1._showName());