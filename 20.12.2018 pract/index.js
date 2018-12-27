
function Student(name,surname,grades){
    this.name = name,
        this.surname = surname,
        this.grades = grades,
        Student.group.push(this);
    return this;
};
Student.group = [];

Student.sortedStudents = function(){
    return Student.group
        .sort(function(a,b){
            return b.gradesAverage() - a.gradesAverage();
        })
};


Student.showAllStudents = function(){
    var preparedStudents = Student.sortedStudents()
        .map(function(item){
            return item.fullName() + ' Середній бал - ' + item.gradesAverage();
        });
    return preparedStudents;
};

Student.showBestStudent = function(){
    var bestStudent = Student.sortedStudents()[0];
    return bestStudent.fullName()
        + ' - кращий студент. Середня оцінка'
        + Student.sortedStudents()[0].gradesAverage();
};

Student.prototype.fullName = function (){
    return (this.name + ' ' + this.surname);
};

Student.prototype.gradesAverage = function () {
    var avg = this.grades.reduce(function (sum, cur) {
        return sum + cur;
    });
    return (avg / this.grades.length).toFixed(2);
};

var student1 = new Student('Ko','Ku',[3,4,5]);
var student2 = new Student('Semen', 'Semenov', [3, 5, 5]);
var student3 = new Student('Petr', 'Petrov', [4, 3, 5]);
var student4 = new Student('Kolya', 'Kuzevych', [5, 5, 5]);


console.log(Student.group);
console.log(Student.showAllStudents());
console.log(Student.showBestStudent());
console.log(student1);
console.log(student1.gradesAverage());
console.log(student1.fullName());