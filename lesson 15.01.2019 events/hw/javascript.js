function getRandomNumber(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var symbolArray = ['+','-','*','/'];

function startFunction() {
    for (var i = 0; i < 10; i++) {
        var div = document.createElement('div');
        div.className = 'class'+i;
        var p = document.createElement('p');
        var input = document.createElement('input');
        var firstNumber = getRandomNumber(100, 1);
        var secondNumber = getRandomNumber(20, 1);
        var randSymbol = symbolArray[Math.floor(Math.random() * 3)];
        p.textContent = firstNumber + symbolArray[getRandomNumber(4, 0)] + secondNumber;
        document.body.appendChild(div);
        div.appendChild(p);
        div.appendChild(input);
    }
}


function check(){
    var divs = document.querySelectorAll('div');
    for (var i = 1; i < 11; i++) {
        var p = document.createElement('p');
        var first = divs[i].firstElementChild.textContent;
        var second = Number(divs[i].children[1].value);
        console.log(first);
        //console.log(second);
    }
}