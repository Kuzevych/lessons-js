
const userLocation = navigator.geolocation;

userLocation.getCurrentPosition((position)=>{
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
},()=>{})

// userLocation.watchPosition( (position) => {
//     console.log(position.coords.latitude);
//     console.log(position.coords.longitude);
// });