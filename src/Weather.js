import axios from 'axios';
import React,{useState} from 'react';
import After from './After';


export default function Weather(props){
    //variabili
    let [temperature, setTemperature]=useState(0);
    let [wind,setWind]=useState(0);
    let [humidity,setHumidity]=useState(0);
    let [day,setDay]=useState("");

    let [desc,setDesc]=useState("");
    let [icon,setIcon]=useState("");
    let[hours,setHours]=useState();
    let [minutes,setMinutes]=useState();   
    let [lat,setLat]=useState();
    let [lon,setLon]=useState();
    let timeNow=new Date();

    //let city="Zurich";
    let apiKey="6f578b96aa9505bcce148ac22cb85794";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(azioneRisposta);
    //setto tutte le informazioni che vengono prese da openweather map 
    function azioneRisposta(response){
        setTemperature(Math.round(response.data.main.temp));
        setDesc(response.data.weather[0].description);
        setHumidity(Math.round(response.data.main.humidity) + "%");
        setWind(Math.round(response.data.wind.speed) + "km/h");
        setIcon(
          "http://openweathermap.org/img/w/" +
            response.data.weather[0].icon +
            ".png"
        ); 
       //giorno e ora attuale
        setDay(timeNow.getDay());
        setHours(timeNow.getHours());
        setMinutes(timeNow.getMinutes());
        //giorni successivi
        setLat(response.data.main.lat);
        setLon(response.data.main.lon);
        forecast();
        



    }
    function forecast(){

        let urli = `api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&&appid=${apiKey}`;
        axios.get(urli).then(forecastDay);
       
    }
    let first={icon:"", tempMax:12,tempMin:0};
    //array che riempe di informazioni per i giorni successivi
    //solo icona e temperatura
    let [second,setSecond]=useState(0);
    function forecastDay(response){
       
        setSecond(Math.round(response.data.daily.temp));

        first.temp=response.data.daily[0].temp;
        first.icon="http://openweathermap.org/img/w/" +
        response.data.weather[0].icon +
        ".png"
    }
 
    let days=["Sunday","Monday","Tuesday","Wednsday","Thursday","Friday","Saturday"];

 
 
    return(
       <div className="Weather">
            <div class="Info">
                <h1>{props.city}</h1>
                <p><span> {days[day]} </span> {hours}:{minutes}, {desc} <br />
                    Humidity: <span>{humidity}</span>, Wind: <span>{wind}km/h</span></p>
            </div>
            <div class="Temp">
                <h1><img src={icon} alt="icon-weather" /> {temperature}°C</h1>
            </div>
         
            <div class="AfterGio" >
          
               
                <After giorno={day+1} city={props.city}/>
                <After giorno={day+2} city={props.city}/>
                <After giorno={day+3} city={props.city}/>
                <After giorno={day+4} city={props.city}/>


            </div>
            
        </div>
    );
 }