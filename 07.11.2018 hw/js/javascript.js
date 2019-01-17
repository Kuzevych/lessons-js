'use strict';

    let add = (a,b) => Number(a) + Number(b);
    let subtract = (a,b) => Number(a) - Number(b);
    let divide = (a,b) => Number(a) / Number(b);
    let  multiply = (a,b) => Number(a) * Number(b);

function start() {
    let answer = prompt('Select function to: add "+", substract "-", divide "/", multiply "*"','add');
    let a = prompt('Write first number',1);
    let b = prompt('Write second number',2);
    
    switch (answer) {
        case '+':
            document.getElementById('result').createTextNode(add(a,b).toFixed(1));
            break;
        case '-':
            document.getElementById('result').innerHTML = subtract(a,b).toFixed(1);
            break;
        case '/':
            document.getElementById('result').innerHTML = divide(a,b).toFixed(1);
            break;
        case '*':
            document.getElementById('result').innerHTML = multiply(a,b).toFixed(1);
            break;
    }
};


