
// $().ready(() => {
const first = $('.container');
const elemId = $('#container');
const elemDiv = $('div');
//     console.log(first);
//     console.log(second);
// });

// const button = $('button').toggle(()=>{
//     // if (elemDiv.css('backgroundColor')!=='rgb(255,0,0)'){
//     //     elemDiv.css('background','red');
//          elemDiv.css('background','red');
//     // } else {
//     //     elemDiv.css('background','blue');
//     // }
// }, ()=>{
//     elemDiv.css('background','blue');
// });


const button = $('#button');

// button.click(()=>{
//  $('img').slideDown(3000,()=>{
//      console.log('Done');
//  })
// });
//
// $('#button2').click(()=>{
//     $('img').slideUp(3000,()=>{
//         console.log('Done');
//     })
// });



button.click(()=>{
   elemDiv.animate({
        opacity: 0
   },3000,function(){
       console.log('Done');
   })
});


fetch('api.openweathermap.org/data/2.5/weather?q=Kiev&appid=8ee84ef191c24dd0a40f9dda6261a0cf&units=metric').then(response => response.json())
    .then(data => {
        console.log(data);
    });