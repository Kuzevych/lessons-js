function getRandomNumber(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const symbolArray = ['+','-','*','/'];

function startFunction() {
    for (let i = 0; i < 10; i++) {
        const div = document.createElement('div');
        div.className = 'class'+i;
        const p = document.createElement('p');
        const input = document.createElement('input');
        const firstNumber = getRandomNumber(100, 1);
        const secondNumber = getRandomNumber(20, 1);
        p.textContent = firstNumber + symbolArray[getRandomNumber(4, 0)] + secondNumber;
        document.body.appendChild(div);
        div.appendChild(p);
        div.appendChild(input);
    }
}


function check(){
    const divs = document.querySelectorAll('div');
    for (let i = 1; i < 11; i++) {
        const p = document.createElement('p');
        const first = Number(divs[i].firstElementChild.textContent);
        const second = Number(divs[i].children[1].value);
        p.textContent = first + ''+ '' + second;
        //divs.children[i].appendChild(p);
        console.log(divs.children[i]);
        //console.log(first);
        //console.log(typeof second);
    }
}