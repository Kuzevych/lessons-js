
// div.style.color = 'red';
// div.style.width = 30 + 'px';
// div.style.border = '2px solid black';
//
// div.innerHTML += div.tagName.toLowerCase();



function createElementWithText(tag,text){
    var elem = document.createElement(tag);
    elem.textContent = text;
    return elem;
}

// var ul = document.querySelector('ul');
//
// var li =  createElementWithText('li','Point');
//
// ul.appendChild(li);
//
//
// var arr = ['test1','test2','test3','test4'];
//
//
// arr.forEach(function(item){
//     var li =  createElementWithText('li',item);
//     li.onclick = function(){
//         alert(item);
//     };
//     ul.appendChild(li);
// });
//
// var testLi = document.querySelector('#test');
//
// var doneLi = createElementWithText('li','Done');
//
// ul.insertBefore(doneLi,testLi);
var test2 = document.getElementById('test2');
var span = createElementWithText('span','Done');

document.body.insertBefore(span,test2);

function insertAfter(newElem, beforeElem) {
    var parent = beforeElem.parentElement;
    var nextSiblingBeforeElement = beforeElem.nextElementSibling;
    if (nextSiblingBeforeElement){
        parent.insertBefore(newElem, nextSiblingBeforeElement);
    } else {
        parent.appendChild(newElem);
    }
}

insertAfter(span, test2);


