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
        p.textContent = firstNumber + symbolArray[getRandomNumber(3, 0)] + secondNumber + '= ';
        document.body.appendChild(div);
        div.appendChild(p);
        div.appendChild(input);
    }
    let divs = document.querySelectorAll('div');
    console.log(divs);
}


