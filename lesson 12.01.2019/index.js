
var options = {
  top: 24,
  right: 50,
  color: 'red',
  className: 'notification',
  html: 'text'
};

function showNotification(options){
    var element = document.createElement('div');
    element.textContent = options.html;
    element.className = options.className;
    element.style.marginTop = options.top + 'px';
    element.style.marginRight = options.right + 'px';
    element.style.color = options.color;
     setTimeout(function(){
         document.body.appendChild(element);
     },2000)

}
showNotification(options);