const input = document.getElementById('input');
const worker = new Worker('./worker.js');

input.onchange = () => {
  const {value} = event.target;


  worker.postMessage(value);
};

worker.onmessage = function(e){
    console.log(e.data);
};
