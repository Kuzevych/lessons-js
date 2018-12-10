
Student.group = [];
Student.showAllStudents = [];

function Student(name, surname, grades) {
    this.name = name,
        this.surname = surname,
        this.grades = grades,
        Student.group.push({
            name: name,
            surname: surname,
            grades: grades
        }),
        this.fullName = function () {
            return (this.name + ' ' + this.surname);
        },
        this.gradesAverage = function () {
            var avg = this.grades.reduce(function (sum, cur) {
                return sum + cur;
            });
            return (avg / this.grades.length).toFixed(2);
        }
};

var student1 = new Student('Ivan', 'Ivanov', [4, 5, 5]);
var student2 = new Student('Semen', 'Semenov', [3, 5, 5]);
var student3 = new Student('Petr', 'Petrov', [4, 3, 5]);
var student4 = new Student('Kolya', 'Kuzevych', [5, 5, 5]);

console.log(student1.fullName());
console.log(student1.gradesAverage());

console.log(Student.group);
