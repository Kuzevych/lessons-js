
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

