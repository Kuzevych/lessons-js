//
// var options = {
//   top: 24,
//   right: 50,
//   color: 'red',
//   className: 'notification',
//   html: 'text'
// };
//
// function showNotification(options){
//     var element = document.createElement('div');
//     element.textContent = options.html;
//     element.className = options.className;
//     element.style.marginTop = options.top + 'px';
//     element.style.marginRight = options.right + 'px';
//     element.style.color = options.color;
//      setTimeout(function(){
//          document.body.appendChild(element);
//      },2000)
//
// }
// showNotification(options);


// window.onload = function() {
//     for (var i = 0; i < 10; i++) {
//         var btn = document.createElement("button");
//         var iterator = document.createTextNode(i);
//         btn.appendChild(iterator);
//         document.body.appendChild(btn);
//         btn.addEventListener('click',function(){
//             alert(i);
//         })
//     }
// };

window.onload = function(){
    function showIterator(){
        alert(i);
    }
    for (var i = 0; i < 10; i++) {
        var button = document.createElement('button');
        var text = document.createTextNode(i);
        button.appendChild(text);
        document.body.appendChild(button);
        button.addEventListener('click',showIterator);
    }
};