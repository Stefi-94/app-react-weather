import React from "react";
import { useState } from "react";
import axios from 'axios';

export default function After(props){
    //prendo il giorno e aggiungo il piu uno
    let [tempMin, setTempMin]=useState(0);
    let [tempMax, setTempMax]=useState(0);

    let [icon,setIcon]=useState("");
    let [day,setDay]=useState("");
    let apiKey="6f578b96aa9505bcce148ac22cb85794";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(azioneRisposta);

    function azioneRisposta(response){
    
        //setTempMin(Math.round(response.data.main.temp));
        //setTempMax(Math.round(response.data.main.temp));
       setTempMin(11);
       setTempMax(35);
        setIcon(
          "http://openweathermap.org/img/w/" +
            response.data.weather[0].icon +
            ".png"
        ); 
       //giorno e ora attuale
        setDay(props.giorno);
        
        }
    let days=["Sunday","Monday","Tuesday","Wednsday","Thursday","Friday","Saturday"];
   
    return( 
    <span class="GiorniCons">
        {days[day]}<br></br>
        <img src={icon}></img> <br></br>
        {tempMax}  {tempMin}<br></br>
    </span>)
}