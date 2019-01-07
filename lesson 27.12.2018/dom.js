

// var second = document.getElementById('second');
// var third = document.getElementById('third');
// second.childNodes = third;
// //childNodes = third;
// console.log(second);

// var head = document.head;
// //console.log(head);
// var ul = document.getElementsByTagName('ul');
// var third = document.getElementById('third');
// console.log(third.previousElementSibling.children[0]);
// //console.log(div.children[0]);

// var p = document.querySelectorAll('* p')
// console.log(p);

// var ps = document.getElementsByTagName('p');
// var children = [];
//
// function deepFloat(context){
//     [].forEach.call(context, function (item){
//         if(item.childNodes.length){
//             deepFloat(item.childNodes);
//         } else {
//             children.push(item);
//         }
//
//     });
// }
// deepFloat(ps);


// [].forEach.call(ps, function(item){
//         [].forEach.call(item.childNodes, function (item){
//             children.push(item);
//         });
// });
//console.log(children);

// [].forEach.call(document.childNodes, function(item){
//         console.log(item);
// //   console.log(item.nodeType);
// });

//var body = document.getElementsByTagName('*');
//console.log(body);



// var comments = [];
// function getComments(context){
//     [].forEach.call(context, function (item){
//         if(item.childNodes.length){
//             getComments(item.childNodes);
//         } else {
//             if(item.nodeType === 8){
//                 comments.push(item.previousElementSibling);
//                 comments.push(item.nextElementSibling);
//             }
//         }
//     });
// }
// getComments(document.childNodes);
// console.log(comments);

// var btn = document.createElement('button');
// var text = document.createTextNode('Click');
// btn.appendChild(text);
// console.log(btn);

// var third = document.querySelector('#third');
// var thirdChild = document.querySelector('#third p');
// console.log(thirdChild.contains(third));

var elements = document.getElementsByClassName('content')[0];
elements.style.background = 'red';

var div = document.createElement('div');
console.log(div);