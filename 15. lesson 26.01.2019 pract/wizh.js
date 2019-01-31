var message = 'ATTACKATDAWN';
var key = 'LEMONLEMONLE';
var result = '';

for (var i = 0; i < message.length ; i++) {
       result += String.fromCharCode(message.charCodeAt(i) + key.charCodeAt(i) % message.length);

}

console.log(result);
