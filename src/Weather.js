import axios from 'axios';
import React from 'react';
import {Audio} from 'react-loader-spinner';

export default function Weather(props){

    //let city="Zurich";
    let apiKey="6f578b96aa9505bcce148ac22cb85794";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(azioneRisposta);

        function azioneRisposta(response){
                alert(`La meteo a ${props.city}` );
        }

    return <Audio
    height="80"
    width="80"
    radius="9"
    color="blue"
    ariaLabel="loading"
    wrapperStyle
    wrapperClass
  />;
 }