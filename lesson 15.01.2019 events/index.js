
var parent = document.getElementById('parent');
var childs = document.getElementsByClassName('child');
var contents = document.querySelectorAll('#content>p');

function handler(){
    event.stopPropagation();
    console.log(event.target.textContent);
}

// parent.addEventListener('click', handler, true);
//
// child.addEventListener('click',handler, true);

//parent.onclick = handler.bind(parent,'test');

//parent.onclick = handler;
//
// [].forEach.call(childs,function (child) {
//     child.onclick = handler;
// });

// parent.addEventListener('click',function () {
//     var chekedElements = event.target;
//     if (!chekedElements.hasAttribute('data-content-id')) return;
//     var contentId = chekedElements.getAttribute('data-content-id');
//     [].forEach.call(contents, function (content) {
//         if(content.id === contentId) {
//             content.hidden = false;
//         } else {
//             content.hidden = true;
//         }
//         //те ж саме, що нижче
//
//         //content.hidden = content.id !== contentId;
//     })
// });

// PART 2


//код нижче - це автоклік по рандомних елементах (діти парента)
// parent.addEventListener('click', function () {
//     // console.log(event.target);
//     // var checkedElements = event.target;
//     // if ( checkedElements.id === 'parent') return;
//     // checkedElements.innerHTML++;
//     var randIndex = Math.floor(Math.random()*3);
//     this.children[randIndex].innerHTML++;
// });
//
//
// var autoClick = new Event('click');
// setInterval(function () {
//     parent.dispatchEvent(autoClick);
// },50);

// parent.dispatchEvent(autoClick);
// parent.dispatchEvent(autoClick);

// [].forEach.call(contents,function (content) {
//     content.dispatchEvent(autoClick);
// });

//Переміщення якогось divа
var child = parent.firstElementChild;

var isMoving = false;

child.onmousedown = function () {
    isMoving = true;
    var initLeft = event.offsetX;
    var initTop = event.offsetY;
    parent.onmousemove = function(){
        if (isMoving) {
            child.style.left = event.clientX - initLeft + 'px';
            child.style.top = event.clientY - initTop + 'px';
            console.log(event.clientX);
        }

    };
};

parent.onmouseup = function () {
    parent.onmousemove = null;
};

