
function Student(){

}


var student1 = {
    name: 'Ivan',
    surname: 'Ivanov',
    age: 22,
    grades: [4, 5, 5],
    getAvgGrave: function () {
        var avg = this.grades.reduce(function (sum, cur) {
            return sum + cur;
        })
        return (avg / this.grades.length).toFixed(2);
    }
}
var student2 = {name: 'Semen',
    surname: 'Semenov',
    grades: [3,5,5]
};
var student3 = {name: 'Petr',
    surname: 'Petrov',
    grades: [4,3,5]
};

console.log(student1.getAvgGrave());

