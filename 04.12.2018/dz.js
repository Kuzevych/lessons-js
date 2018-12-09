

function Student (name, surname, grades) {
    this.name = name,
        this.surname = surname,
        this.grades = grades,
        Student.group.push({
            name: name,
            surname: surname,
            grades: grades
        }),
        this.fullName = function () {
            return(this.name + ' ' + this.surname);
        },
        this.gradesAvarage = function(){
            var avg = this.grades.reduce(function (sum, cur) {
                return sum + cur;
            });
            return ('Середній бал - ' + this.name + ' ' + this.surname + ' '+ (avg / this.grades.length).toFixed(2));
        }
}
Student.group = [];

Student.getBestStudents = function () {
    Student.listStudents.filter(
        function (item) {
            return item.mark > 90;
        }
    ).forEach(function(item) {
        console.log(item.name, item.mark)
    })
};

var student1 = new Student ('Ivan', 'Ivanov', [4,5,5]);
var student2 = new Student ('Semen', 'Semenov', [3,5,5]);
var student3 = new Student ('Petr', 'Petrov', [4,3,5]);


console.log(student1.fullName());
console.log(student1.gradesAvarage());
console.log(student2.fullName());
console.log(student2.gradesAvarage());
console.log(student3.fullName());
console.log(student3.gradesAvarage());

//console.log(Student.group);
