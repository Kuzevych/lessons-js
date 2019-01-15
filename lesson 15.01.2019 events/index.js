
var parent = document.getElementById('parent');
var childs = document.getElementsByClassName('child');

function handler(){
    event.stopPropagation();
    console.log(event.target.textContent);
}

// parent.addEventListener('click', handler, true);
//
// child.addEventListener('click',handler, true);

//parent.onclick = handler.bind(parent,'test');

parent.onclick = handler;

[].forEach.call(childs,function (child) {
    child.onclick = handler;
});