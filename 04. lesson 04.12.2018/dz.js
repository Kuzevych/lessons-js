
Student.group = [];
Student.showAllStudents = [];

Student.prototype.sortStudents = function(a,b) {
    return b.gradesAverage - a.gradesAverage;
};

Student.prototype.fullName = function () {
    return (this.name + ' ' + this.surname);
};

Student.prototype.gradesAverage = function () {
    var avg = this.grades.reduce(function (sum, cur) {
        return sum + cur;
    });
    return (avg / this.grades.length).toFixed(2);
};

Student.prototype.showAllStudents = function () {
    //   return
};

function Student(name, surname, grades) {
    this.name = name,
    this.surname = surname,
    this.grades = grades,
    Student.group.push({
        name: name,
        surname: surname,
        grades: grades
    })
}

var student1 = new Student('Ivan', 'Ivanov', [4, 5, 5]);
var student2 = new Student('Semen', 'Semenov', [3, 5, 5]);
var student3 = new Student('Petr', 'Petrov', [4, 3, 5]);
var student4 = new Student('Kolya', 'Kuzevych', [4, 5, 3]);

console.log(student1.fullName());
console.log(student1.gradesAverage());

console.log(Student.group);
