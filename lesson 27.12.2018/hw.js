var div = document.querySelector('div');

function hasClass(node,klass){
        if (node.classList.contains(klass)){
            console.log('node' + ' has class ' + klass);
            return true;
        } else {
            console.log('false');
        }
}
hasClass(div,'third');

function addClass(node,klass) {
    node.classList.add(klass);
    console.log(node);
}
addClass(div,'third');

function removeClass(node,klass){
    if (hasClass(node,klass)){
        node.classList.remove(klass);
    }
    console.log(node);
}

removeClass(div, 'cl');
