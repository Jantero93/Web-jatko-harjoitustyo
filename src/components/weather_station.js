import React,{useState, useEffect} from "react";
import Navbar from 'react-bootstrap/Navbar';

//var ReactWeather = require('react-open-weather').default;
//Optional include of the default css styles
//require('react-open-weather/lib/css/ReactWeather.css');




//Optional include of the default css styles
//import 'react-open-weather/lib/css/ReactWeather.css';


// 636947 - Tampere
//2172797 - Lontoo
//api.openweathermap.org/data/2.5/weather?q={Karachi}&appid=APP_KEY

function Weather_station() {
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes();
   // const key = '881e2e4957f0b379389af22826a33532';
    const [feels_like,setFeelsLike] = useState('');
    const [mainTemp,setMainTemp] = useState('');
    const [description,setDescription] = useState('');
    const [main,setMain] = useState('');
   
    useEffect(()=> {
          'https://api.openweathermap.org/data/2.5/weather?id=32906&appid=881e2e4957f0b379389af22826a33532&units=metric'
    fetch('https://api.openweathermap.org/data/2.5/weather?id=636947&appid=881e2e4957f0b379389af22826a33532&units=metric')
.then(res=>res.json())
.then(data=>{
  //  console.log(data);
    setFeelsLike(data.main.feels_like);
    setMainTemp(data.main.temp);
    setDescription(data.weather[0].description);
    setMain(data.weather[0].main);

})
},[])
return (
    <>
    <h1>Weather in Tampere: </h1>
    <h1>Time: {time}</h1>
    <h1>Temperature: {Math.round(mainTemp*10)/10} Degrees Celsius</h1>
    <h1>Feels like: {Math.round(feels_like*10)/10} Degrees Celsius</h1>
    <h1>Description: {description}</h1>
    
    </>
)
}

export default Weather_station;


