import React from'react';
import { useState } from 'react';
import Weather from './Weather';

export default function Search(props){
    //cerco la citta che sta cercando

    //variabile per salvare il nome della citta
    let [cityName,setCity]=useState("");

    //variabile per sapere se è stata avviata la ricerca
    let [search,setSearch]=useState(false);

    //salvo ogni lettera della citta 
    function city(event){
        setCity(event.target.value);
        setSearch(false);
    }
    function btnClick(event){
        event.preventDefault();
        setSearch(true);

    }


 if(search===false){
    return(
        <div className="Search">
            <form>
                    <input type="text" onChange={city}/>
                    <input type="button" onClick={btnClick} value="Search"/>
                 
            </form>
        </div>
    );
}else{
    
    return(
        <div className="Search">
            <form>
                    <input type="text" onChange={city}/>
                    <input type="button" onClick={btnClick} value="Search"/>
                    <Weather city={cityName} />
                     
                    
            </form>
        </div>
    );
    
}
}