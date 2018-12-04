
function Student (name, age, group, mark) {
    this.name = name,
    this.age = age,
    this.group = group,
    this.mark = mark,
    Student.listStudents.push({
        name: name,
        age: age,
        group: group,
        mark: mark
    }),
    this.seyMyInfo = function () {
        console.log(this.name, this.age)
    }

}

Student.listStudents = [];
Student.getBestStudents = function () {
    Student.listStudents.filter(
        function (item) {
            return item.mark > 90
        }
    ).forEach(function(item) {
        console.log(item.name, item.mark)
    })
};

var Vasa = new Student('Vasa', 18, '11PI', 70);
var Petya = new Student('Petya', 21, '21PI', 95);


//Student.getBestStudents();

//console.log(Vasa.seyMyInfo());
