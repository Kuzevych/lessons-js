const getRandomNumber = (min,max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const symbolArray = ['+','-','*','/'];
const resultEquationArray = [];

const equation = (firstNumber,secondNumber, symbol) => {
    if (symbol === '+'){
        return firstNumber + secondNumber;
    } else if (symbol ==='-'){
        return firstNumber - secondNumber;
    } else if (symbol === '*'){
        return firstNumber * secondNumber;
    } else if (symbol === '/') {
        return firstNumber / secondNumber;
    }
};

const createEquation = () => {
    for (let i = 0; i < 5; i++) {
        const div = document.createElement('div');
        div.className = 'equation';
        const p = document.createElement('p');
        const input = document.createElement('input');
        const resultP = document.createElement('p');
        resultP.className = 'result';
        const firstNumber = getRandomNumber(100, 1);
        const secondNumber = getRandomNumber(20, 1);
        const randSymbol = symbolArray[getRandomNumber(4, 0)];
        resultEquationArray.push(equation(firstNumber,secondNumber,randSymbol).toFixed(0));
        p.textContent = firstNumber + randSymbol + secondNumber;
        document.body.appendChild(div);
        div.appendChild(p);
        div.appendChild(input);
        div.appendChild(resultP);
    }
    return resultEquationArray;
};

const settings = () => {
    const checkboxesBlock = document.querySelector('.settings');
    if (checkboxesBlock.style.display === 'none') {
        checkboxesBlock.style.display = 'show';
    } else {
        checkboxesBlock.style.display = 'none';
    }
};



const check = () => {
    const divs = document.querySelectorAll('.equation');
    for (let i = 0; i < divs.length; i++) {
        if(resultEquationArray[i] === divs[i].children[1].value) {
            divs[i].children[2].textContent = 'true';
        } else {
            divs[i].children[2].textContent = 'false';
        }
    }
};