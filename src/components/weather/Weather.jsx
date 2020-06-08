import React, { useEffect, useState } from 'react';
import weatherAPI, {baseParams} from '../../apis/weatherAPI';

//Style
import '../Style.css';


//Login JSX
const Weather = props => {
    //Props
    const {
        coords,
    } = props;

    //Hooks for the data
    const [responseData, setResponseData] = useState(null);

    //Component did mount
    useEffect(() => {
        weatherAPI.get('weather', {
            params: {
                lat: coords[1],
                lon: coords[0],
                ...baseParams
            }
        }).then(response => {
            setResponseData(response.data);
        }).catch(() => {
            alert("ERROR - WRONG TOKEN FOR OPENWEATHER");
        });
    }, [coords]);

    //Return
    return (
        responseData ?
            <div className="Weather">
                <p>Weather for {responseData.name}</p>
                <p>Temp: {responseData.main.temp}</p>
                <p>Feels Like: {responseData.main.feels_like}</p>
                <p>Min/Max: {responseData.main.temp_min}-{responseData.main.temp_max}</p>
                <p>Humidity: {responseData.main.humidity}</p>
                <p>Weather: {responseData.weather[0].main} - {responseData.weather[0].description}</p>
                <p>Wind: {responseData.wind.speed}km/h</p>
            </div>
        :
            null
    );
}



export default Weather;