'use strict';

    let add = (a,b) => Number(a) + Number(b);
    let subtract = (a,b) => Number(a) - Number(b);
    let divide = (a,b) => Number(a) / Number(b);
    let  multiply = (a,b) => Number(a) * Number(b);

document.getElementById('start').onclick = function() {
    let answer = prompt('Select function: add or +, substract or -, divide or /, multiply or *','add');
    let a = prompt('Write first number',1);
    let b =prompt('Write second number',2);
    if (answer==='add' || answer==='+'){
       document.getElementById('result').innerHTML = add(a,b).toFixed(1);
    } else if (answer==='subtract' || answer==='-') {
        document.getElementById('result').innerHTML = subtract(a,b).toFixed(1);
    } else if (answer==='divide' || answer==='/') {
        document.getElementById('result').innerHTML = divide(a,b).toFixed(1);
    } else if (answer==='multiply' || answer==='*') {
        document.getElementById('result').innerHTML = multiply(a,b).toFixed(1);
    }
};