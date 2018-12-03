

let student1 = {
    name: 'Ivan',
    surname: 'Ivanov',
    age: 22,
    grades: [4, 5, 5],
    getAvgGrave: function () {
        let avg = this.grades.reduce(function (sum, cur) {
            return sum + cur;
        })
        return (avg / this.grades.length).toFixed(2);
    }
};
let student2 = {
    name: 'Semen',
    surname: 'Semenov',
    grades: [3,5,5],
    getAvgGrave: function () {
        let avg = this.grades.reduce(function (sum, cur) {
            return sum + cur;
        });
        return (avg / this.grades.length).toFixed(2);
    }
};

let student3 = {
    name: 'Petr',
    surname: 'Petrov',
    grades: [4,3,5],
    getAvgGrave: function () {
        let avg = this.grades.reduce(function (sum, cur) {
            return sum + cur;
        });
        return (avg / this.grades.length).toFixed(2);
    }
};

console.log(student1.getAvgGrave());
console.log(student2.getAvgGrave());
console.log(student3.getAvgGrave());

let arr = [1,2,3,4,5];

console.log(arr.map( i => i+=2));

console.log(arr.filter(i => i>2));


function sumTo(n) {
    if (n>0) {
        var res = n * sumTo(n-1)
        console.log(res);
        return res;
    } else {
        return 1;
    }

}

sumTo(3);




