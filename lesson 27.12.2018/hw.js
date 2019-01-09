var div = document.querySelector('div');

function hasClass(node,klass){
        if (node.classList.contains(klass)){
            console.log('YES');
            return true;
        } else {
            console.log('NO');
            return false;
        }
}

function addClass(node,klass) {
    node.classList.add(klass);
    console.log(node);
}

function removeClass(node,klass){
    node.classList.toggle(klass);
    console.log(node);
}


hasClass(div,'fisst');
addClass(div,'newClass');
removeClass(div, 'first');


